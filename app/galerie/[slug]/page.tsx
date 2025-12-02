import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { GalleryGrid } from "@/components/gallery-grid"
import { galleryCategories, galleryImages } from "@/lib/gallery-data"
import { notFound } from "next/navigation"
import Link from "next/link"
import { ChevronLeft } from "lucide-react"

const SITE_URL = "https://www.jutta-nesslauer.de"
export const dynamicParams = false

export function generateStaticParams() {
  return ["1", "2", "3", "4"].map((slug) => ({ slug }))
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string }
}): Promise<Metadata> {
  const category = galleryCategories.find((cat) => cat.id === params.slug)
  if (!category) return {}

  const firstImage = galleryImages.find((img) => img.gallery === params.slug)
  const ogImage = firstImage?.path || "/assets/gallery1/Bild1.png"

  return {
    title: category.title,
    description: category.description,
    alternates: {
      canonical: `/galerie/${params.slug}/`,
    },
    openGraph: {
      type: "website",
      locale: "de_DE",
      url: `/galerie/${params.slug}/`,
      siteName: "Jutta Neßlauer",
      title: category.title,
      description: category.description,
      images: [ogImage],
    },
    twitter: {
      card: "summary_large_image",
      title: category.title,
      description: category.description,
      images: [ogImage],
    },
  }
}

export default function Page({ params }: { params: { slug: string } }) {
  const category = galleryCategories.find((cat) => cat.id === params.slug)

  if (!category) {
    notFound()
  }

  const images = galleryImages.filter((img) => img.gallery === params.slug)

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Startseite",
        item: `${SITE_URL}/`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Galerie",
        item: `${SITE_URL}/galerie/`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: category?.title ?? "Galerie",
        item: `${SITE_URL}/galerie/${params.slug}/`,
      },
    ],
  }

  return (
    <main className="min-h-screen">
      <Navigation />

      <section className="pt-24 pb-20 md:pt-32 md:pb-32 bg-background">
        <div className="container mx-auto px-4">
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
          />
          <Link
            href="/galerie"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ChevronLeft className="h-4 w-4" />
            Zurück zur Übersicht
          </Link>

          <h1 className="text-4xl md:text-5xl font-serif text-foreground mb-6">{category?.title}</h1>
          <p className="text-muted-foreground mb-12 max-w-2xl leading-relaxed">{category?.description}</p>

          <GalleryGrid images={images} />
        </div>
      </section>
    </main>
  )
}