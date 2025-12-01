import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-serif text-foreground mb-6">Seite nicht gefunden</h1>
          <p className="text-muted-foreground leading-relaxed mb-8">
            Die von Ihnen aufgerufene Seite existiert nicht oder wurde verschoben. Bitte prüfen Sie die Adresse oder
            kehren Sie zur Startseite zurück.
          </p>
          <Button asChild>
            <Link href="/">Zur Startseite</Link>
          </Button>
        </div>
      </main>
    </>
  )
}