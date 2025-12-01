import { Navigation } from "@/components/navigation"
import Link from "next/link"
import { ChevronLeft } from "lucide-react"

export const metadata = {
  title: "Impressum | Jutta Neßlauer",
  description: "Impressum und Kontaktinformationen",
}

export default function ImpressumPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ChevronLeft className="h-4 w-4" />
            Zurück zur Startseite
          </Link>

          <h1 className="text-4xl md:text-5xl font-serif text-foreground mb-12">Impressum</h1>

          <div className="prose prose-neutral max-w-none space-y-8">
            <div>
              <h2 className="text-2xl font-serif text-foreground mb-4">Angaben gemäß § 5 TMG</h2>
              <p className="text-muted-foreground leading-relaxed">
                Jutta Neßlauer
                <br />
                Reiherweg 96
                <br />
                89584 Ehingen (Donau)
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-serif text-foreground mb-4">Kontakt</h2>
              <p className="text-muted-foreground leading-relaxed">
                Mobil: 0176 21850258
                <br />
                E-Mail:{" "}
                <a
                  href="mailto:j.nesslauer@hotmail.de"
                  className="text-muted-foreground hover:text-primary hover:underline"
                >
                  j.nesslauer@hotmail.de
                </a>
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-serif text-foreground mb-4">Haftung für Inhalte</h2>
              <p className="text-muted-foreground leading-relaxed">
                Die Inhalte dieser Webseite wurden mit größter Sorgfalt erstellt. Als Diensteanbieter bin ich gemäß § 7
                Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-serif text-foreground mb-4">Haftung für Links</h2>
              <p className="text-muted-foreground leading-relaxed">
                Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben.
                Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der
                verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-serif text-foreground mb-4">Urheberrecht</h2>
              <p className="text-muted-foreground leading-relaxed">
                Die durch die Seitenbetreiberin erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen
                Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der
                Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung der jeweiligen Urheberin. Downloads und
                Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
