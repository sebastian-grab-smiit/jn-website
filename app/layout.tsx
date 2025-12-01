import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Jutta Neßlauer - Abstrakte Malerei",
  description:
    "Portfolio der Künstlerin Jutta Neßlauer aus Ehingen. Abstrakte Malerei mit vielschichtigen Strukturen und natürlichen Materialien.",
  keywords: ["Abstrakte Malerei", "Künstlerin", "Ehingen", "Acrylmalerei", "Kunst", "Galerie"],
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="de" className="scroll-smooth">
      <body className={`font-sans antialiased`}>
        {children}
      </body>
    </html>
  )
}
