import Link from "next/link"

export function Footer() {
  return (
    <footer className="mt-0">
      {/* Vollbreite Trennlinie */}
      <div className="w-screen border-t border-border relative left-1/2 -translate-x-1/2" />
      {/* Footer-Inhalt */}
      <div className="pt-8 pb-12 space-y-4 text-center">
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
        <p className="text-sm text-muted-foreground">
          © 2026 Jutta Neßlauer. Alle Rechte vorbehalten.
        </p>
      </div>
    </footer>
  )
}