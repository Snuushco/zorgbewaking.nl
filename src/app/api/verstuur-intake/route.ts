import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: NextRequest) {
  try {
    const data = await request.json()

    // Validate required fields
    const requiredFields = ['bedrijfsnaam', 'contactpersoon', 'telefoonnummer', 'email', 'aantalLocaties']
    for (const field of requiredFields) {
      if (!data[field]) {
        return NextResponse.json(
          { error: `Veld '${field}' is verplicht` },
          { status: 400 }
        )
      }
    }

    // Create transporter (configure with actual SMTP settings)
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.transip.email',
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: false,
      auth: {
        user: process.env.SMTP_USER || 'aanvraag@praesidion.nl',
        pass: process.env.SMTP_PASS || ''
      }
    })

    // Email content
    const htmlContent = `
      <h3>Nieuwe zorgbeveiligingsaanvraag via website</h3>
      <table style="border-collapse: collapse; width: 100%; margin-top: 20px;">
        <tr style="background-color: #f8f9fa;">
          <td style="padding: 10px; border: 1px solid #dee2e6; font-weight: bold;">Bedrijf:</td>
          <td style="padding: 10px; border: 1px solid #dee2e6;">${data.bedrijfsnaam}</td>
        </tr>
        <tr>
          <td style="padding: 10px; border: 1px solid #dee2e6; font-weight: bold;">Contactpersoon:</td>
          <td style="padding: 10px; border: 1px solid #dee2e6;">${data.contactpersoon}</td>
        </tr>
        <tr style="background-color: #f8f9fa;">
          <td style="padding: 10px; border: 1px solid #dee2e6; font-weight: bold;">Telefoon:</td>
          <td style="padding: 10px; border: 1px solid #dee2e6;">${data.telefoonnummer}</td>
        </tr>
        <tr>
          <td style="padding: 10px; border: 1px solid #dee2e6; font-weight: bold;">Email:</td>
          <td style="padding: 10px; border: 1px solid #dee2e6;">${data.email}</td>
        </tr>
        <tr style="background-color: #f8f9fa;">
          <td style="padding: 10px; border: 1px solid #dee2e6; font-weight: bold;">Type zorginstelling:</td>
          <td style="padding: 10px; border: 1px solid #dee2e6;">${data.typeZorginstelling || 'Niet opgegeven'}</td>
        </tr>
        <tr>
          <td style="padding: 10px; border: 1px solid #dee2e6; font-weight: bold;">Aantal locaties:</td>
          <td style="padding: 10px; border: 1px solid #dee2e6;">${data.aantalLocaties}</td>
        </tr>
        <tr style="background-color: #f8f9fa;">
          <td style="padding: 10px; border: 1px solid #dee2e6; font-weight: bold;">Aantal beveiligers per dienst:</td>
          <td style="padding: 10px; border: 1px solid #dee2e6;">${data.aantalBeveiligers || 'Niet opgegeven'}</td>
        </tr>
        <tr>
          <td style="padding: 10px; border: 1px solid #dee2e6; font-weight: bold;">Gewenste inzet:</td>
          <td style="padding: 10px; border: 1px solid #dee2e6;">${Array.isArray(data.gewensteInzet) && data.gewensteInzet.length > 0 ? data.gewensteInzet.join(', ') : 'Niet opgegeven'}</td>
        </tr>
        <tr style="background-color: #f8f9fa;">
          <td style="padding: 10px; border: 1px solid #dee2e6; font-weight: bold;">Voorkeursmoment:</td>
          <td style="padding: 10px; border: 1px solid #dee2e6;">${data.voorkeursmoment || 'Niet opgegeven'}</td>
        </tr>
      </table>
      <p style="margin-top: 20px; color: #6c757d; font-size: 14px;">
        Deze aanvraag is automatisch gegenereerd via de website van Praesidion Security BV.
      </p>
    `

    // Send email
    await transporter.sendMail({
      from: '"Praesidion Intake" <aanvraag@praesidion.nl>',
      to: 'aanvraag@praesidion.nl',
      subject: 'Nieuwe zorgbeveiligingsaanvraag via website',
      html: htmlContent,
    })

    return NextResponse.json({ success: true })

  } catch (error) {
    console.error('Error sending email:', error)
    return NextResponse.json(
      { error: 'Er is een fout opgetreden bij het versturen van de email' },
      { status: 500 }
    )
  }
} 