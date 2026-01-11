import { Starfield } from "@/components/starfield"
import { HeroSection } from "@/components/hero-section"
import { SolarSystem } from "@/components/solar-system"
import { FactsSection } from "@/components/facts-section"
import { GalaxyScene } from "@/components/galaxy-scene"
import { QuizSection } from "@/components/quiz-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main style={{ position: "relative", overflow: "hidden" }}>
      <Starfield />

      <div style={{ position: "relative", zIndex: 10}}>
        <HeroSection />
        <SolarSystem />
        <FactsSection />
        <GalaxyScene />
        <QuizSection />
        <Footer />
      </div>
    </main>
  )
}
