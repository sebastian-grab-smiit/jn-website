import { Navigation } from "@/components/navigation"
import { GalleryGrid } from "@/components/gallery-grid"
import { driftwoodImages } from "@/lib/gallery-data"
import Link from "next/link"
import { ChevronLeft } from "lucide-react"

export default function DriftwoodPage() {
  return (
    <main className="min-h-screen">
      <Navigation />

      <section className="pt-24 pb-20 md:pt-32 md:pb-32 bg-background">
        <div className="container mx-auto px-4 max-w-6xl">

          <h1 className="text-4xl md:text-5xl font-serif text-foreground mb-6">Schwemmholzfiguren</h1>
          <p className="text-muted-foreground mb-12 leading-relaxed">
            Neben der Malerei gestalte ich auch skulpturale Werke aus Schwemmholz. Jedes Stück Holz erzählt seine eigene
            Geschichte und wird von mir zu ausdrucksstarken Figuren geformt. Die natürlichen Formen und Strukturen des
            vom Wasser geformten Holzes inspirieren mich zu organischen Skulpturen, die die Verbindung zwischen Natur
            und künstlerischer Gestaltung verkörpern.
          </p>

          <GalleryGrid images={driftwoodImages} />
        </div>
      </section>
    </main>
  )
}
