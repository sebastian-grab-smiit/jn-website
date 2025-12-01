import { GalleryGrid } from "./gallery-grid"

// Dynamisches Bildarray für Schwemmholzfiguren
const driftwoodImages = [
  {
    gallery: "Schwemmholz",
    path: "/placeholder.svg?height=900&width=600",
    size: "90 x 35 x 20 cm",
  },
  {
    gallery: "Schwemmholz",
    path: "/placeholder.svg?height=800&width=700",
    size: "80 x 40 x 25 cm",
  },
  {
    gallery: "Schwemmholz",
    path: "/placeholder.svg?height=1000&width=650",
    size: "100 x 30 x 30 cm",
  },
  {
    gallery: "Schwemmholz",
    path: "/placeholder.svg?height=750&width=750",
    size: "75 x 45 x 35 cm",
  },
  {
    gallery: "Schwemmholz",
    path: "/placeholder.svg?height=850&width=600",
    size: "85 x 38 x 22 cm",
  },
  {
    gallery: "Schwemmholz",
    path: "/placeholder.svg?height=950&width=700",
    size: "95 x 42 x 28 cm",
  },
]

export function DriftwoodGallery() {
  return (
    <section id="driftwood" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-6 text-center">Schwemmholzfiguren</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
            Neben der Malerei gestalte ich auch skulpturale Werke aus Schwemmholz. Jedes Stück Holz erzählt seine eigene
            Geschichte und wird von mir zu ausdrucksstarken Figuren geformt.
          </p>

          <GalleryGrid images={driftwoodImages} />
        </div>
      </div>
    </section>
  )
}
