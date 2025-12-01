"use client"

import { useState } from "react"
import { Menu, X, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { usePathname } from "next/navigation"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isGalleryOpen, setIsGalleryOpen] = useState(false)
  const pathname = usePathname()

  const scrollToSection = (id: string) => {
    if (pathname !== "/") {
      window.location.href = `/#${id}`
    } else {
      const element = document.getElementById(id)
      if (element) {
        element.scrollIntoView({ behavior: "smooth" })
      }
    }
    setIsOpen(false)
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-end h-16">
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("about")}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Über mich
            </button>

            <div
              className="relative"
              onMouseEnter={() => setIsGalleryOpen(true)}
              onMouseLeave={() => setIsGalleryOpen(false)}
            >
              <Link
                href="/galerie"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1"
              >
                Galerie
                <ChevronDown className="h-4 w-4" />
              </Link>

              {isGalleryOpen && (
                <div className="absolute top-full left-0 pt-2">
                  <div className="w-64 bg-background border border-border rounded-md shadow-lg py-2">
                    <Link
                      href="/galerie/abstrakt-auf-leinwand"
                      className="block px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-accent/50 transition-colors"
                    >
                      Kosmos der Farben
                    </Link>
                    <Link
                      href="/galerie/abstrakt-auf-papier"
                      className="block px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-accent/50 transition-colors"
                    >
                      Rhythmus der Flächen
                    </Link>
                    <Link
                      href="/galerie/gegenstande"
                      className="block px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-accent/50 transition-colors"
                    >
                      Balance der Ruhe
                    </Link>
                    <Link
                      href="/galerie/zeichnungen"
                      className="block px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-accent/50 transition-colors"
                    >
                      Metallische Eleganz
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link
              href="/schwemmholzfiguren"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Schwemmholzfiguren
            </Link>

            <Link href="/zeichnungen" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Zeichnungen
            </Link>

            <button
              onClick={() => scrollToSection("contact")}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Kontakt
            </button>
          </div>

          {/* Mobile Menu Button */}
          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-2">
            <button
              onClick={() => scrollToSection("about")}
              className="block w-full text-left px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-accent/50 rounded transition-colors"
            >
              Über mich
            </button>

            <div>
              <button
                onClick={() => setIsGalleryOpen(!isGalleryOpen)}
                className="flex items-center justify-between w-full text-left px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-accent/50 rounded transition-colors"
              >
                Galerie
                <ChevronDown className={`h-4 w-4 transition-transform ${isGalleryOpen ? "rotate-180" : ""}`} />
              </button>
              {isGalleryOpen && (
                <div className="pl-4 space-y-1 mt-1">
                  <Link
                    href="/galerie"
                    onClick={() => setIsOpen(false)}
                    className="block px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-accent/50 rounded transition-colors"
                  >
                    Übersicht
                  </Link>
                  <Link
                    href="/galerie/abstrakt-auf-leinwand"
                    onClick={() => setIsOpen(false)}
                    className="block px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-accent/50 rounded transition-colors"
                  >
                    Kosmos der Farben
                  </Link>
                  <Link
                    href="/galerie/abstrakt-auf-papier"
                    onClick={() => setIsOpen(false)}
                    className="block px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-accent/50 rounded transition-colors"
                  >
                    Rhythmus der Flächen
                  </Link>
                  <Link
                    href="/galerie/gegenstande"
                    onClick={() => setIsOpen(false)}
                    className="block px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-accent/50 rounded transition-colors"
                  >
                    Balance der Ruhe
                  </Link>
                  <Link
                    href="/galerie/zeichnungen"
                    onClick={() => setIsOpen(false)}
                    className="block px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-accent/50 rounded transition-colors"
                  >
                    Metallische Eleganz
                  </Link>
                </div>
              )}
            </div>

            <Link
              href="/schwemmholzfiguren"
              onClick={() => setIsOpen(false)}
              className="block w-full text-left px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-accent/50 rounded transition-colors"
            >
              Schwemmholzfiguren
            </Link>

            <Link
              href="/zeichnungen"
              onClick={() => setIsOpen(false)}
              className="block w-full text-left px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-accent/50 rounded transition-colors"
            >
              Zeichnungen
            </Link>

            <button
              onClick={() => scrollToSection("contact")}
              className="block w-full text-left px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-accent/50 rounded transition-colors"
            >
              Kontakt
            </button>
          </div>
        )}
      </div>
    </nav>
  )
}
