import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { naam, organisatie, email, telefoon, bericht } = body;

    if (!naam || !email || !bericht) {
      return NextResponse.json({ error: "Vul alle verplichte velden in." }, { status: 400 });
    }

    const RESEND_API_KEY = process.env.RESEND_API_KEY;
    if (!RESEND_API_KEY) {
      console.error("RESEND_API_KEY not configured");
      return NextResponse.json({ error: "Server configuratiefout" }, { status: 500 });
    }

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "Zorgbewaking.nl <noreply@snelrie.nl>",
        to: "zorg@praesidion.nl",
        reply_to: email,
        subject: `Nieuw contactverzoek van ${naam} — Zorgbewaking.nl`,
        html: `
          <h2>Nieuw contactverzoek via zorgbewaking.nl</h2>
          <table style="border-collapse: collapse; width: 100%; max-width: 600px;">
            <tr><td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #eee;">Naam</td><td style="padding: 8px; border-bottom: 1px solid #eee;">${naam}</td></tr>
            <tr><td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #eee;">Organisatie</td><td style="padding: 8px; border-bottom: 1px solid #eee;">${organisatie || "—"}</td></tr>
            <tr><td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #eee;">Email</td><td style="padding: 8px; border-bottom: 1px solid #eee;"><a href="mailto:${email}">${email}</a></td></tr>
            <tr><td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #eee;">Telefoon</td><td style="padding: 8px; border-bottom: 1px solid #eee;">${telefoon || "—"}</td></tr>
            <tr><td style="padding: 8px; font-weight: bold; vertical-align: top;">Bericht</td><td style="padding: 8px;">${bericht.replace(/\n/g, "<br>")}</td></tr>
          </table>
          <p style="color: #999; font-size: 12px; margin-top: 20px;">Dit bericht is verstuurd via het contactformulier op zorgbewaking.nl</p>
        `,
      }),
    });

    if (!res.ok) {
      const errorData = await res.text();
      console.error("Resend error:", errorData);
      return NextResponse.json({ error: "Email verzenden mislukt" }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contact form error:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
