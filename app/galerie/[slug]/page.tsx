import { Navigation } from "@/components/navigation"
import { GalleryGrid } from "@/components/gallery-grid"
import { galleryCategories, galleryImages } from "@/lib/gallery-data"
import { notFound } from "next/navigation"
import Link from "next/link"
import { ChevronLeft } from "lucide-react"

export function generateStaticParams() {
  return galleryCategories.map((category) => ({
    slug: category.id,
  }))
}

export default function GalleryPage({ params }: { params: { slug: string } }) {
  const category = galleryCategories.find((cat) => cat.id === params.slug)

  if (!category) {
    notFound()
  }

  const images = galleryImages.filter((img) => img.gallery === params.slug)

  return (
    <main className="min-h-screen">
      <Navigation />

      <section className="pt-24 pb-20 md:pt-32 md:pb-32 bg-background">
        <div className="container mx-auto px-4">
          <Link
            href="/galerie"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ChevronLeft className="h-4 w-4" />
            Zurück zur Übersicht
          </Link>

          <h1 className="text-4xl md:text-5xl font-serif text-foreground mb-6">{category.title}</h1>
          <p className="text-muted-foreground mb-12 max-w-2xl leading-relaxed">{category.description}</p>

          <GalleryGrid images={images} />
        </div>
      </section>
    </main>
  )
}
