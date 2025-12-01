import { Navigation } from "@/components/navigation"
import { galleryCategories, galleryImages } from "@/lib/gallery-data"
import Link from "next/link"
import Image from "next/image"

export default function GalleryOverview() {
  return (
    <main className="min-h-screen">
      <Navigation />

      <section className="pt-24 pb-20 md:pt-32 md:pb-32 bg-background">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-serif text-foreground mb-6 text-center">Galerie</h1>
          <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto leading-relaxed">
            Entdecken Sie meine verschiedenen Werkserien. Jede Galerie zeigt eine einzigartige künstlerische
            Ausdrucksform und Technik.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {galleryCategories
              .filter((category) => category.id !== "zeichnungen-page")
              .map((category) => {
                const previewImages = galleryImages.filter((img) => img.gallery === category.id).slice(0, 3)

                return (
                  <Link
                    key={category.id}
                    href={`/galerie/${category.id}`}
                    className="group block bg-accent/30 rounded-lg overflow-hidden hover:shadow-xl transition-shadow"
                  >
                    <div className="grid grid-cols-3 gap-1 h-64">
                      {previewImages.map((img, idx) => (
                        <div key={idx} className="relative overflow-hidden">
                          <Image
                            src={img.path || "/placeholder.svg"}
                            alt={`${category.title} Vorschau ${idx + 1}`}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                      ))}
                    </div>

                    <div className="p-6">
                      <h2 className="text-2xl font-serif text-foreground mb-2 group-hover:text-accent-foreground transition-colors">
                        {category.title}
                      </h2>
                      <p className="text-muted-foreground leading-relaxed">{category.description}</p>
                      <p className="mt-4 text-sm text-accent-foreground font-medium">Zur Galerie →</p>
                    </div>
                  </Link>
                )
              })}
          </div>
        </div>
      </section>
    </main>
  )
}
