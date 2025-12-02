import { Navigation } from "@/components/navigation"
import { GalleryGrid } from "@/components/gallery-grid"
import { drawingImages } from "@/lib/gallery-data"
import Link from "next/link"
import { ChevronLeft } from "lucide-react"

export default function DrawingsPage() {
  return (
    <main className="min-h-screen">
      <Navigation />

      <section className="pt-24 pb-20 md:pt-32 md:pb-32 bg-background">
        <div className="container mx-auto px-4 max-w-6xl">

          <h1 className="text-4xl md:text-5xl font-serif text-foreground mb-6">Zeichnungen</h1>
          <p className="text-muted-foreground mb-12 leading-relaxed">
            Im Folgenden finden Sie eine Sammlung von Zeichnungen meiner Tochter Muriel Neßlauer. Von detaillierten
            Bleistiftzeichnungen bis hin zu expressiven Kohlezeichnungen zeigen diese Werke die Auseinandersetzung
            meiner Tochter mit Form, Linie und Schattierung.
          </p>

          <GalleryGrid images={drawingImages} />
        </div>
      </section>
    </main>
  )
}
