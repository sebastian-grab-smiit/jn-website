export function Vita() {
  const timeline = [
    {
      year: "Mitte der 80er Jahre",
      title: "Beginn der Aquarellmalerei und der Malerei auf Seide",
      description: "Erste künstlerische Schritte mit Aquarell- und Seidenmalerei",
    },
    {
      year: "Mitte der 90er Jahre",
      title: "Autodidaktische, abstrakte Ölmalerei auf Leinwand",
      description: "Beginn der abstrakten Ölmalerei und Entwicklung eines eigenen künstlerischen Stils",
    },
    {
      year: "Seit 2000",
      title: "Abstrakte Acrylmalerei auf Leinwand",
      description: "Intensive künstlerische Arbeit mit Fokus auf abstrakte Acrylmalerei",
    },
    {
      year: "Laufend",
      title: "Kunstakademie-Workshops",
      description: "Teilnahme an verschiedenen Workshops an Kunstakademien mit namhaften Künstlern",
    },
  ]

  const permanentExhibitions = [
    "Schelztorklinik Esslingen",
    "Urologisches Zentrum Ehingen-Blaubeuren",
    "Salon D, Warthausen",
  ]

  const communityExhibitions = [
    { year: "2025", title: "Mensch" },
    { year: "2024", title: "Zeit" },
    { year: "2023", title: "Elemente" },
    { year: "2022", title: "Glitzer Glimmer Gloria" },
    { year: "2021", title: "Bewegt" },
    { year: "2019", title: "Rot" },
    { year: "2018", title: "Buchobjekte" },
    { year: "2013", title: "Frühlingserwachen" },
  ]

  return (
    <section id="vita" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-12">Vita</h2>

          <div className="space-y-12 mb-16">
            {timeline.map((item, index) => (
              <div key={index} className="relative pl-8 border-l-2 border-accent">
                <div className="absolute left-0 top-0 w-4 h-4 -ml-[9px] rounded-full bg-accent border-4 border-background" />
                <div className="space-y-2">
                  <p className="text-sm text-accent font-semibold">{item.year}</p>
                  <h3 className="text-xl font-serif text-foreground">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 pt-12 border-t border-border">
            <h3 className="text-2xl font-serif text-foreground mb-8">Ausstellungen</h3>

            <div className="space-y-8">
              <div>
                <h4 className="text-lg font-semibold text-foreground mb-4">Dauerausstellungen</h4>
                <ul className="space-y-3">
                  {permanentExhibitions.map((exhibition, index) => (
                    <li
                      key={index}
                      className="text-muted-foreground leading-relaxed pl-4 relative before:content-['–'] before:absolute before:left-0"
                    >
                      {exhibition}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-foreground mb-4">Gemeinschaftsausstellungen</h4>
                <ul className="space-y-3">
                  {communityExhibitions.map((exhibition, index) => (
                    <li
                      key={index}
                      className="text-muted-foreground leading-relaxed pl-4 relative before:content-['–'] before:absolute before:left-0"
                    >
                      {exhibition.year}: Teilnahme an der Ausstellung "{exhibition.title}" in der Städtischen Galerie
                      Ehingen
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
