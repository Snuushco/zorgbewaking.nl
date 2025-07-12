import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "zorgbewaking.nl | Zorgbeveiliging Limburg",
  description: "zorgbewaking.nl: Professionele beveiliging voor zorginstellingen in Limburg. Praesidion Security levert vaste, representatieve beveiligers met zorginzicht.",
  metadataBase: new URL('https://zorgbewaking.nl'),
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl">
      <head>
        <title>zorgbewaking.nl | Zorgbeveiliging Limburg</title>
        <meta name="description" content="zorgbewaking.nl: Professionele beveiliging voor zorginstellingen in Limburg. Praesidion Security levert vaste, representatieve beveiligers met zorginzicht." />
        <meta property="og:title" content="zorgbewaking.nl | Zorgbeveiliging Limburg" />
        <meta property="og:description" content="zorgbewaking.nl: Professionele beveiliging voor zorginstellingen in Limburg. Praesidion Security levert vaste, representatieve beveiligers met zorginzicht." />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="nl_NL" />
        <meta name="robots" content="index, follow" />
        {/* Google Analytics 4 */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
        <script dangerouslySetInnerHTML={{
          __html: `window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XXXXXXXXXX');`
        }} />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
