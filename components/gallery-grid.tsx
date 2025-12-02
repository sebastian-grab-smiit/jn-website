"use client"

import Image from "next/image"
import { useState, useEffect, useCallback } from "react"
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog"
import { X, ChevronLeft, ChevronRight } from "lucide-react"

interface GalleryImage {
  gallery: string
  path: string
  size?: string
}

interface GalleryGridProps {
  images: GalleryImage[]
}

export function GalleryGrid({ images }: GalleryGridProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)
  const currentImage = selectedIndex !== null ? images[selectedIndex] : null

  const showPrev = useCallback(() => {
    if (!images.length) return
    setSelectedIndex((prev) => {
      if (prev === null) return 0
      return (prev - 1 + images.length) % images.length
    })
  }, [images.length])

  const showNext = useCallback(() => {
    if (!images.length) return
    setSelectedIndex((prev) => {
      if (prev === null) return 0
      return (prev + 1) % images.length
    })
  }, [images.length])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (selectedIndex === null) return
      if (e.key === "ArrowLeft") {
        e.preventDefault()
        showPrev()
      } else if (e.key === "ArrowRight") {
        e.preventDefault()
        showNext()
      } else if (e.key === "Escape") {
        setSelectedIndex(null)
      }
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [selectedIndex, showPrev, showNext])

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {images.map((image, index) => (
          <div key={index} className="group cursor-pointer" onClick={() => setSelectedIndex(index)}>
            <div className="relative aspect-[3/4] overflow-hidden rounded-lg bg-muted">
              <Image
                src={image.path || "/placeholder.svg"}
                alt={`${image.gallery} - ${image.size}`}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
            </div>
            <p className="mt-3 text-sm text-muted-foreground text-center">{image.size}</p>
          </div>
        ))}
      </div>

      {/* Lightbox Dialog */}
      <Dialog open={selectedIndex !== null} onOpenChange={() => setSelectedIndex(null)}>
        <DialogContent className="max-w-4xl p-0 bg-black/95 border-none">
          <DialogTitle className="sr-only">
            {currentImage?.size ? `Bild ${currentImage.size}` : "Bildansicht"}
          </DialogTitle>
          <button
            onClick={() => setSelectedIndex(null)}
            className="absolute right-4 top-4 z-50 rounded-full bg-black/50 p-2 text-white hover:bg-black/70 transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
          {currentImage && (
            <div className="relative w-full h-[80vh]">
              <Image
                src={currentImage.path || "/placeholder.svg"}
                alt={`${currentImage.gallery} - ${currentImage.size}`}
                fill
                className="object-contain"
              />

              {/* Prev/Next Controls */}
              <button
                aria-label="Vorheriges Bild"
                onClick={showPrev}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-50 rounded-full bg-black/50 p-2 text-white hover:bg-black/70 transition-colors"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              <button
                aria-label="Nächstes Bild"
                onClick={showNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-50 rounded-full bg-black/50 p-2 text-white hover:bg-black/70 transition-colors"
              >
                <ChevronRight className="h-6 w-6" />
              </button>

              {currentImage.size && (
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                  <p className="text-white text-center text-lg">{currentImage.size}</p>
                </div>
              )}
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  )
}
