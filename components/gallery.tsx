"use client"

import { useState } from "react"
import { GalleryGrid } from "./gallery-grid"
import { Button } from "./ui/button"

// Dynamisches Bildarray für alle Galerien
export const galleryImages = [
  // Galerie 1
  {
    gallery: "Galerie 1",
    path: "/abstract-red-orange.png",
    size: "80 x 60 cm",
  },
  {
    gallery: "Galerie 1",
    path: "/abstract-art-with-earthy-textures-and-layers.jpg",
    size: "100 x 80 cm",
  },
  {
    gallery: "Galerie 1",
    path: "/square-abstract-painting-with-stone-powder-texture.jpg",
    size: "60 x 60 cm",
  },
  {
    gallery: "Galerie 1",
    path: "/large-abstract-artwork-with-multiple-layers.jpg",
    size: "120 x 90 cm",
  },
  {
    gallery: "Galerie 1",
    path: "/vertical-abstract-painting-with-warm-colors.jpg",
    size: "70 x 50 cm",
  },
  {
    gallery: "Galerie 1",
    path: "/horizontal-abstract-landscape-format-painting.jpg",
    size: "80 x 100 cm",
  },

  // Galerie 2
  {
    gallery: "Galerie 2",
    path: "/abstract-art-with-blue-and-grey-tones.jpg",
    size: "90 x 70 cm",
  },
  {
    gallery: "Galerie 2",
    path: "/abstract-painting-with-structural-elements.jpg",
    size: "60 x 80 cm",
  },
  {
    gallery: "Galerie 2",
    path: "/large-square-abstract-artwork.jpg",
    size: "100 x 100 cm",
  },
  {
    gallery: "Galerie 2",
    path: "/abstract-painting-with-mixed-media.jpg",
    size: "75 x 60 cm",
  },
  {
    gallery: "Galerie 2",
    path: "/abstract-art-with-layered-acrylic-technique.jpg",
    size: "80 x 60 cm",
  },
  {
    gallery: "Galerie 2",
    path: "/contemporary-abstract-painting.jpg",
    size: "110 x 85 cm",
  },

  // Galerie 3
  {
    gallery: "Galerie 3",
    path: "/abstract-painting-with-green-and-brown-earth-tones.jpg",
    size: "85 x 65 cm",
  },
  {
    gallery: "Galerie 3",
    path: "/square-format-abstract-with-natural-pigments.jpg",
    size: "70 x 70 cm",
  },
  {
    gallery: "Galerie 3",
    path: "/abstract-expressionist-painting.png",
    size: "95 x 75 cm",
  },
  {
    gallery: "Galerie 3",
    path: "/wide-format-abstract-landscape.jpg",
    size: "60 x 90 cm",
  },
  {
    gallery: "Galerie 3",
    path: "/tall-vertical-abstract-painting.jpg",
    size: "100 x 70 cm",
  },
  {
    gallery: "Galerie 3",
    path: "/placeholder.svg?height=800&width=800",
    size: "80 x 80 cm",
  },

  // Galerie 4
  {
    gallery: "Galerie 4",
    path: "/placeholder.svg?height=900&width=600",
    size: "90 x 60 cm",
  },
  {
    gallery: "Galerie 4",
    path: "/placeholder.svg?height=750&width=950",
    size: "75 x 95 cm",
  },
  {
    gallery: "Galerie 4",
    path: "/placeholder.svg?height=650&width=650",
    size: "65 x 65 cm",
  },
  {
    gallery: "Galerie 4",
    path: "/placeholder.svg?height=1100&width=800",
    size: "110 x 80 cm",
  },
  {
    gallery: "Galerie 4",
    path: "/placeholder.svg?height=700&width=550",
    size: "70 x 55 cm",
  },
  {
    gallery: "Galerie 4",
    path: "/placeholder.svg?height=850&width=1100",
    size: "85 x 110 cm",
  },
]

const galleries = ["Galerie 1", "Galerie 2", "Galerie 3", "Galerie 4"]

export function Gallery() {
  const [activeGallery, setActiveGallery] = useState("Galerie 1")

  const currentImages = galleryImages.filter((img) => img.gallery === activeGallery)

  return (
    <section id="gallery" className="py-20 md:py-32 bg-accent/30">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-8 text-center">Galerie</h2>

        {/* Gallery Selector */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {galleries.map((gallery) => (
            <Button
              key={gallery}
              variant={activeGallery === gallery ? "default" : "outline"}
              onClick={() => setActiveGallery(gallery)}
              className="min-w-[120px]"
            >
              {gallery}
            </Button>
          ))}
        </div>

        <GalleryGrid images={currentImages} />
      </div>
    </section>
  )
}
