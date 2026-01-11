"use client"

export function HeroSection() {
  const handleScroll = () => {
    const element = document.getElementById("solar-system")
    element?.scrollIntoView({ behavior: "smooth" })
  }

  const styles = `
    .hero-section {
      position: relative;
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      overflow: hidden;
      padding-top: 5rem;
      z-index: 10;
    }

    .hero-gradient {
      position: absolute;
      inset: 0;
      background: linear-gradient(to bottom, rgba(147, 51, 234, 0.2), transparent, rgba(37, 99, 235, 0.2));
      pointer-events: none;
    }

    .hero-orb-1 {
      position: absolute;
      top: 33%;
      right: 25%;
      width: 384px;
      height: 384px;
      background: radial-gradient(circle, rgba(59, 130, 246, 0.1), transparent);
      border-radius: 50%;
      filter: blur(80px);
      animation: pulse-glow 4s ease-in-out infinite;
      z-index: 0;
    }

    .hero-orb-2 {
      position: absolute;
      bottom: 25%;
      left: 33%;
      width: 320px;
      height: 320px;
      background: radial-gradient(circle, rgba(168, 85, 247, 0.1), transparent);
      border-radius: 50%;
      filter: blur(80px);
      animation: pulse-glow 4s ease-in-out infinite;
      animation-delay: 0.5s;
      z-index: 0;
    }

    .hero-content {
      position: relative;
      z-index: 10;
      text-align: center;
      max-width: 56rem;
      padding: 0 1rem;
    }

    .hero-title {
      font-size: 3.5rem;
      font-weight: 700;
      margin-bottom: 1.5rem;
      line-height: 1.2;
      background: linear-gradient(to right, #c084fc, #60a5fa, #06b6d4);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }

    .hero-subtitle {
      font-size: 1.125rem;
      color: #d1d5db;
      margin-bottom: 2rem;
      line-height: 1.6;
    }

    .hero-description {
      font-size: 0.875rem;
      color: #9ca3af;
      margin-bottom: 3rem;
    }

    .scroll-indicator {
      position: absolute;
      bottom: 2rem;
      left: 50%;
      transform: translateX(-50%);
      z-index: 10;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 0.5rem;
    }

    .scroll-indicator-icon {
      width: 24px;
      height: 40px;
      border: 2px solid rgba(6, 182, 212, 0.5);
      border-radius: 12px;
      display: flex;
      align-items: center;
      justify-content: center;
      animation: bounce 1.5s ease-in-out infinite;
    }

    .scroll-indicator-dot {
      width: 4px;
      height: 8px;
      background: #06b6d4;
      border-radius: 2px;
    }

    @media (max-width: 768px) {
      .hero-title {
        font-size: 2.25rem;
      }

      .hero-subtitle {
        font-size: 1rem;
      }
    }
  `

  return (
    <>
      <style>{styles}</style>
      <section className="hero-section">
        <div className="hero-gradient" />
        <div className="hero-orb-1" />
        <div className="hero-orb-2" />

        <div className="hero-content">
          <h1 className="hero-title">Путешествие по Галактике</h1>
          <p className="hero-subtitle">Открой тайны планет, звёзд и бесконечной Вселенной</p>
          <p className="hero-description">Discover the mysteries of planets, stars, and the infinite universe</p>

          <button
            onClick={handleScroll}
            className="button button-primary"
            style={{ fontSize: "1.125rem", padding: "0.75rem 2rem" }}
          >
            Начать путешествие 🚀
          </button>
        </div>

        <div className="scroll-indicator">
          <div className="scroll-indicator-icon">
            <div className="scroll-indicator-dot" />
          </div>
        </div>
      </section>
    </>
  )
}
