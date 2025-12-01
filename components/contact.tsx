import { Mail, MapPin } from "lucide-react"
import Link from "next/link"

export function Contact() {
  return (
    <section id="contact" className="py-20 md:py-32 bg-accent/30">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-8">Kontakt</h2>
          <p className="text-muted-foreground mb-12 leading-relaxed">
            Interessieren Sie sich für meine Arbeiten oder möchten Sie mehr erfahren? Ich freue mich über Ihre
            Nachricht.
          </p>

          <div className="space-y-6">
            <div className="flex items-center justify-center gap-3 text-muted-foreground">
              <MapPin className="h-5 w-5 text-accent-foreground" />
              <span>Ehingen (Donau), Deutschland</span>
            </div>
            <div className="flex items-center justify-center gap-3">
              <Mail className="h-5 w-5 text-accent-foreground" />
              <a
                href="mailto:j.nesslauer@hotmail.de"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                j.nesslauer@hotmail.de
              </a>
            </div>
          </div>

          <div className="mt-16 pt-8 border-t border-border space-y-4">
            <div className="flex items-center justify-center gap-6 text-sm">
              <Link
                href="/impressum"
                className="text-muted-foreground hover:text-foreground transition-colors underline-offset-4 hover:underline"
              >
                Impressum
              </Link>
              <Link
                href="/datenschutz"
                className="text-muted-foreground hover:text-foreground transition-colors underline-offset-4 hover:underline"
              >
                Datenschutzerklärung
              </Link>
            </div>
            <p className="text-sm text-muted-foreground">© 2026 Jutta Neßlauer. Alle Rechte vorbehalten.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
