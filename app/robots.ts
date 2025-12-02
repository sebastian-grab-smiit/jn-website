import type { MetadataRoute } from "next"

export const dynamic = "error"

const siteUrl = "https://www.jutta-nesslauer.de"

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: `${siteUrl}/sitemap.xml`,
    host: siteUrl,
  }
}