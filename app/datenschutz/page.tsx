import { Navigation } from "@/components/navigation"
import Link from "next/link"
import { ChevronLeft } from "lucide-react"

export const metadata = {
  title: "Datenschutzerklärung | Jutta Neßlauer",
  description: "Informationen zum Datenschutz auf dieser Website",
}

export default function DatenschutzPage() {
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

          <h1 className="text-4xl md:text-5xl font-serif text-foreground mb-12">Datenschutzerklärung</h1>

          <div className="prose prose-neutral max-w-none space-y-8">
            <div>
              <h2 className="text-2xl font-serif text-foreground mb-4">1. Datenschutz auf einen Blick</h2>
              <h3 className="text-xl font-serif text-foreground mb-3">Allgemeine Hinweise</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten
                passiert, wenn Sie diese Website besuchen. Diese Website wird von einer Privatperson betrieben und auf
                GitHub Pages gehostet.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-serif text-foreground mb-4">2. Verantwortliche Stelle</h2>
              <p className="text-muted-foreground leading-relaxed">
                Verantwortlich für die Datenverarbeitung auf dieser Website ist:
                <br />
                <br />
                Jutta Neßlauer
                <br />
                Reiherweg 96
                <br />
                89584 Ehingen (Donau)
                <br />
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
              <h2 className="text-2xl font-serif text-foreground mb-4">3. Hosting</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Diese Website wird auf GitHub Pages gehostet. Der Hosting-Anbieter erhebt in sogenannten
                Server-Log-Dateien automatisch Informationen, die Ihr Browser übermittelt. Dies sind:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground leading-relaxed space-y-1">
                <li>Browsertyp und Browserversion</li>
                <li>Verwendetes Betriebssystem</li>
                <li>Referrer URL</li>
                <li>Hostname des zugreifenden Rechners</li>
                <li>Uhrzeit der Serveranfrage</li>
                <li>IP-Adresse</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Diese Daten werden nicht mit anderen Datenquellen zusammengeführt. Die Datenverarbeitung erfolgt auf
                Grundlage von Art. 6 Abs. 1 lit. f DSGVO.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-serif text-foreground mb-4">4. Datenerfassung auf dieser Website</h2>
              <h3 className="text-xl font-serif text-foreground mb-3">Keine Cookies oder Tracking</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Diese Website verwendet keine Cookies, kein Google Analytics oder andere Tracking-Tools. Es werden keine
                personenbezogenen Daten durch Drittanbieter gesammelt oder gespeichert.
              </p>

              <h3 className="text-xl font-serif text-foreground mb-3">Kontaktformular</h3>
              <p className="text-muted-foreground leading-relaxed">
                Wenn Sie mir über das Kontaktformular eine Nachricht senden, werden Ihre Angaben aus dem Formular
                inklusive der von Ihnen angegebenen Kontaktdaten per E-Mail an mich übermittelt. Diese Daten werden
                ausschließlich zum Zweck der Bearbeitung Ihrer Anfrage gespeichert.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Die Datenverarbeitung zum Zwecke der Kontaktaufnahme mit mir erfolgt nach Art. 6 Abs. 1 lit. a DSGVO auf
                Grundlage Ihrer freiwillig erteilten Einwilligung. Die für die Benutzung des Kontaktformulars von mir
                erhobenen personenbezogenen Daten werden nach Erledigung Ihrer Anfrage automatisch gelöscht.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-serif text-foreground mb-4">5. Ihre Rechte</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Sie haben jederzeit das Recht auf unentgeltliche Auskunft über Ihre gespeicherten personenbezogenen
                Daten, deren Herkunft und Empfänger und den Zweck der Datenverarbeitung sowie ein Recht auf Berichtigung
                oder Löschung dieser Daten. Hierzu sowie zu weiteren Fragen zum Thema personenbezogene Daten können Sie
                sich jederzeit an mich wenden.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Des Weiteren steht Ihnen ein Beschwerderecht bei der zuständigen Aufsichtsbehörde zu.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-serif text-foreground mb-4">6. Widerspruch gegen Werbe-Mails</h2>
              <p className="text-muted-foreground leading-relaxed">
                Der Nutzung von im Rahmen der Impressumspflicht veröffentlichten Kontaktdaten zur Übersendung von nicht
                ausdrücklich angeforderter Werbung und Informationsmaterialien wird hiermit widersprochen. Die
                Betreiberin der Seiten behält sich ausdrücklich rechtliche Schritte im Falle der unverlangten Zusendung
                von Werbeinformationen, etwa durch Spam-E-Mails, vor.
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
