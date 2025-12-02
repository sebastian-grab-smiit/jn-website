import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
import { Footer } from "@/components/footer"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL("https://www.jutta-nesslauer.de"),
  title: {
    default: "Jutta Neßlauer - Abstrakte Malerei",
    template: "%s | Jutta Neßlauer",
  },
  description:
    "Portfolio der Künstlerin Jutta Neßlauer aus Ehingen. Abstrakte Malerei mit vielschichtigen Strukturen und natürlichen Materialien.",
  keywords: ["Abstrakte Malerei", "Künstlerin", "Ehingen", "Acrylmalerei", "Kunst", "Galerie"],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: "/",
    siteName: "Jutta Neßlauer",
    title: "Jutta Neßlauer - Abstrakte Malerei",
    description:
      "Portfolio der Künstlerin Jutta Neßlauer aus Ehingen. Abstrakte Malerei mit vielschichtigen Strukturen und natürlichen Materialien.",
    images: ["/assets/gallery1/Bild1.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jutta Neßlauer - Abstrakte Malerei",
    description:
      "Portfolio der Künstlerin Jutta Neßlauer aus Ehingen. Abstrakte Malerei mit vielschichtigen Strukturen und natürlichen Materialien.",
    images: ["/assets/gallery1/Bild1.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Jutta Neßlauer",
    url: "https://www.jutta-nesslauer.de/",
    jobTitle: "Künstlerin",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Ehingen (Donau)",
      addressCountry: "DE",
    },
    image: "https://www.jutta-nesslauer.de/assets/gallery1/Bild1.png",
  }

  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Jutta Neßlauer - Abstrakte Malerei",
    url: "https://www.jutta-nesslauer.de/",
    inLanguage: "de-DE",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://www.jutta-nesslauer.de/?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  }

  return (
    <html lang="de" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
      </head>
      <body className={`font-sans antialiased`}>
        {children}
        <Footer />
      </body>
    </html>
  )
}
