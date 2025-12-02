import Image from "next/image"

export function About() {
  return (
    <section id="about" className="py-20 md:py-36 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center max-w-6xl mx-auto">
          <div className="space-y-6">
            <div className="mb-8">
              <h1 className="text-4xl md:text-5xl font-serif text-foreground mb-2">Jutta Neßlauer</h1>
              <p className="text-xl md:text-2xl text-accent font-light">Abstrakte Malerei</p>
            </div>

            <h2 className="text-3xl md:text-4xl font-serif text-foreground">Über mich</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Ich bin Jutta Neßlauer, eine in Ehingen an der Donau lebende Künstlerin, die sich der abstrakten Malerei
                verschrieben hat.
              </p>
              <p>
                Meine künstlerische Reise ist geprägt von der intensiven Auseinandersetzung mit Farbe, Textur und dem
                Spiel von Licht und Schatten. In meinem Atelier entstehen Werke, die den Betrachter einladen, eigene
                Interpretationen und Emotionen zu entdecken.
              </p>
              <p>
                Die abstrakte Malerei ermöglicht mir, frei von gegenständlichen Vorgaben zu arbeiten und pure Gefühle
                und Stimmungen auf die Leinwand zu bringen.
              </p>
            </div>
          </div>

          <div className="relative aspect-[3/4] md:aspect-square overflow-hidden rounded-lg">
            <Image src="/Jutta_Profilbild.png" alt="Jutta Neßlauer" fill className="object-cover" />
          </div>
        </div>
      </div>
    </section>
  )
}
