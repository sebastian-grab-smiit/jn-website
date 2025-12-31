import { About } from "@/components/about"
import { Technique } from "@/components/technique"
import { Vita } from "@/components/vita"
import { Contact } from "@/components/contact"
import { Navigation } from "@/components/navigation"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <About />
      {/* <Technique /> */}
      <Vita />
      <Contact />
    </main>
  )
}
