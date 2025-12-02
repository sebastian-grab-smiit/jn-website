import type { MetadataRoute } from "next"
import { galleryCategories } from "@/lib/gallery-data"

export const dynamic = "error"

const siteUrl = "https://www.jutta-nesslauer.de"

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${siteUrl}/`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${siteUrl}/galerie/`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${siteUrl}/zeichnungen/`, lastModified: now, changeFrequency: "yearly", priority: 0.6 },
    { url: `${siteUrl}/schwemmholzfiguren/`, lastModified: now, changeFrequency: "yearly", priority: 0.6 },
    { url: `${siteUrl}/impressum/`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${siteUrl}/datenschutz/`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
  ]

  const galleryRoutes: MetadataRoute.Sitemap = galleryCategories
    .filter((c) => c.id !== "zeichnungen-page")
    .map((c) => ({
      url: `${siteUrl}/galerie/${c.id}/`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    }))

  return [...staticRoutes, ...galleryRoutes]
}