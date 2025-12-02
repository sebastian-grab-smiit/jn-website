import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <>
      <Navigation />
      <main className="min-h-[calc(100vh-4rem)] flex items-center">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <h1 className="text-4xl md:text-5xl font-serif text-foreground mb-6">Seite nicht gefunden</h1>
          <p className="text-muted-foreground leading-relaxed mb-8">
            Die von Ihnen aufgerufene Seite existiert nicht oder wurde verschoben. Bitte prüfen Sie die Adresse oder
            kehren Sie zur Startseite zurück.
          </p>
          <Button asChild className="bg-[#cd725c] hover:bg-[#cd725c]/90 text-white">
            <Link href="/">Zur Startseite</Link>
          </Button>
        </div>
      </main>
    </>
  )
}