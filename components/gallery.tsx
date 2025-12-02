"use client"

import { useMemo, useState } from "react"
import { GalleryGrid } from "./gallery-grid"
import { Button } from "./ui/button"
import { galleryCategories, galleryImages } from "@/lib/gallery-data"

export function Gallery() {
  // Kategorien aus zentralen Daten ableiten (ohne Sonderseite "zeichnungen-page")
  const categories = useMemo(
    () => galleryCategories.filter((c) => c.id !== "zeichnungen-page"),
    [],
  )

  // Fallback, falls keine Kategorien vorhanden sind
  const initialId = categories.length > 0 ? categories[0].id : ""
  const [activeCategoryId, setActiveCategoryId] = useState(initialId)

  const currentCategory = categories.find((c) => c.id === activeCategoryId)
  const currentImages = useMemo(
    () => galleryImages.filter((img) => img.gallery === activeCategoryId),
    [activeCategoryId],
  )

  if (categories.length === 0) {
    return null
  }

  return (
    <section id="gallery" className="py-20 md:py-32 bg-accent/30">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-8 text-center">Galerie</h2>

        {/* Tabs aus zentralen Kategorien */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {categories.map((cat) => (
            <Button
              key={cat.id}
              variant={activeCategoryId === cat.id ? "default" : "outline"}
              onClick={() => setActiveCategoryId(cat.id)}
              className="min-w-[160px]"
              aria-pressed={activeCategoryId === cat.id}
            >
              {cat.title}
            </Button>
          ))}
        </div>

        {/* Optional Beschreibung der aktiven Kategorie */}
        {currentCategory?.description ? (
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
            {currentCategory.description}
          </p>
        ) : null}

        <GalleryGrid images={currentImages} />
      </div>
    </section>
  )
}
