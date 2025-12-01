export function Hero() {
  return (
    <section id="hero" className="relative h-[70vh] md:h-[80vh] flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(/placeholder.svg?height=1080&width=1920&query=abstract painting with earthy tones and textures)`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />
      </div>

      <div className="relative z-10 text-center px-4">
        <h1 className="text-5xl md:text-7xl font-serif text-white mb-4 text-balance">Jutta Neßlauer</h1>
        <p className="text-xl md:text-2xl text-white/90 font-light">Abstrakte Malerei</p>
      </div>
    </section>
  )
}
