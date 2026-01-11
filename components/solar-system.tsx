"use client"

import { useState } from "react"

interface Planet {
  name: string
  distance: number
  temperature: string
  fact: string
  color: string
  size: number
}

const planets: Planet[] = [
  {
    name: "Меркурий",
    distance: "57.9 млн км",
    temperature: "-173 до 427°C",
    fact: "Самая быстрая планета в Солнечной системе",
    color: "bg-gradient-yellow-orange",
    size: 30,
  },
  {
    name: "Венера",
    distance: "108.2 млн км",
    temperature: "462°C",
    fact: "Венера горячее Меркурия, несмотря на большее расстояние",
    color: "bg-gradient-yellow-orange",
    size: 48,
  },
  {
    name: "Земля",
    distance: "149.6 млн км",
    temperature: "-88 до 58°C",
    fact: "Единственная известная планета с жизнью",
    color: "bg-gradient-blue-green",
    size: 50,
  },
  {
    name: "Марс",
    distance: "227.9 млн км",
    temperature: "-125 до 20°C",
    fact: "Красная планета имеет самый высокий вулкан в солнечной системе",
    color: "bg-gradient-red-orange",
    size: 35,
  },
  {
    name: "Юпитер",
    distance: "778.5 млн км",
    temperature: "-108°C",
    fact: "Юпитер имеет шторм больше Земли, который длится сотни лет",
    color: "bg-gradient-orange",
    size: 100,
  },
  {
    name: "Сатурн",
    distance: "1.43 млрд км",
    temperature: "-140°C",
    fact: "Сатурн может плавать в воде благодаря низкой плотности",
    color: "bg-gradient-yellow",
    size: 85,
  },
]

export function SolarSystem() {
  const [selectedPlanet, setSelectedPlanet] = useState<Planet | null>(null)

  const styles = `
    .solar-system-section {
      position: relative;
      min-height: 100vh;
      padding: 5rem 1rem;
      z-index: 10;
    }

    .solar-system-container {
      max-width: 80rem;
      margin: 0 auto;
    }

    .solar-system-title {
      font-size: 2.25rem;
      font-weight: 700;
      text-align: center;
      margin-bottom: 1rem;
      color: white;
    }

    .solar-system-subtitle {
      text-align: center;
      color: #9ca3af;
      margin-bottom: 4rem;
    }

    .solar-system-viz {
      display: flex;
      justify-content: center;
      margin-bottom: 4rem;
      perspective: 1000px;
    }

    .solar-system-canvas {
      position: relative;
      width: 100%;
      height: 384px;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .sun {
      position: absolute;
      width: 64px;
      height: 64px;
      background: linear-gradient(135deg, #fcd34d, #fb923c);
      border-radius: 50%;
      box-shadow: 0 0 30px rgba(251, 146, 60, 0.6);
      animation: glow 2s ease-in-out infinite;
      z-index: 5;
    }

    .orbit {
      position: absolute;
      border: 1px solid rgba(59, 130, 246, 0.2);
      border-radius: 50%;
    }

    .planet-button {
      position: absolute;
      cursor: pointer;
      transition: all 0.3s ease;
      border: none;
      background: none;
      padding: 0;
    }

    .planet-button:hover {
      transform: scale(1.3);
    }

    .planet-button:active {
      transform: scale(1.1);
    }

    .planet {
      border-radius: 50%;
      box-shadow: 0 0 15px rgba(0, 0, 0, 0.3);
      transition: box-shadow 0.3s ease;
    }

    .planet-button:hover .planet {
      box-shadow: 0 0 25px rgba(0, 0, 0, 0.6);
    }

    .planet-info {
      max-width: 32rem;
      margin: 0 auto;
    }

    .planet-card {
      background: rgba(30, 58, 138, 0.3);
      border: 1px solid rgba(59, 130, 246, 0.3);
      border-radius: 10px;
      padding: 2rem;
      backdrop-filter: blur(10px);
      animation: fadeIn 0.3s ease;
    }

    .planet-card-header {
      display: flex;
      align-items: center;
      gap: 1rem;
      margin-bottom: 1.5rem;
    }

    .planet-color-dot {
      width: 60px;
      height: 60px;
      border-radius: 50%;
      flex-shrink: 0;
    }

    .planet-name {
      font-size: 1.5rem;
      font-weight: 700;
      color: white;
    }

    .planet-details {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 1rem;
      margin-bottom: 1.5rem;
      color: #d1d5db;
    }

    .planet-detail-label {
      font-size: 0.875rem;
      color: #9ca3af;
    }

    .planet-fact {
      font-size: 1.125rem;
      color: #f3f4f6;
      line-height: 1.6;
    }

    .planet-fact-label {
      font-size: 0.875rem;
      color: #9ca3af;
      margin-bottom: 0.5rem;
    }

    @keyframes fadeIn {
      from {
        opacity: 0;
        transform: translateY(10px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    @media (max-width: 768px) {
      .planet-details {
        grid-template-columns: 1fr;
      }
    }
  `

  return (
    <>
      <style>{styles}</style>
      <section id="solar-system" className="solar-system-section">
        <div className="solar-system-container">
          <h2 className="solar-system-title">Интерактивная Солнечная Система</h2>
          <p className="solar-system-subtitle">Нажмите на планету, чтобы узнать интересные факты</p>

          <div className="solar-system-viz">
            <div className="solar-system-canvas">
              <div className="sun" />

              {planets.map((_, idx) => (
                <div
                  key={`orbit-${idx}`}
                  className="orbit"
                  style={{
                    width: `${150 + idx * 60}px`,
                    height: `${150 + idx * 60}px`,
                  }}
                />
              ))}

              {planets.map((planet, idx) => {
                const angle = idx * 60 * (Math.PI / 180)
                const distance = 75 + idx * 30
                const x = Math.cos(angle) * distance
                const y = Math.sin(angle) * distance

                return (
                  <button
                    key={planet.name}
                    onClick={() => setSelectedPlanet(planet)}
                    className="planet-button"
                    style={{
                      left: `calc(50% + ${x}px)`,
                      top: `calc(50% + ${y}px)`,
                      transform: "translate(-50%, -50%)",
                    }}
                  >
                    <div
                      className={`planet ${planet.color}`}
                      style={{
                        width: `${planet.size}px`,
                        height: `${planet.size}px`,
                      }}
                    />
                  </button>
                )
              })}
            </div>
          </div>

          {selectedPlanet && (
            <div className="planet-info">
              <div className="planet-card">
                <div className="planet-card-header">
                  <div className={`planet-color-dot ${selectedPlanet.color}`} />
                  <h3 className="planet-name">{selectedPlanet.name}</h3>
                </div>
                <div className="planet-details">
                  <div>
                    <p className="planet-detail-label">Расстояние от Солнца</p>
                    <p style={{ fontWeight: 600 }}>{selectedPlanet.distance}</p>
                  </div>
                  <div>
                    <p className="planet-detail-label">Температура</p>
                    <p style={{ fontWeight: 600 }}>{selectedPlanet.temperature}</p>
                  </div>
                </div>
                <div>
                  <p className="planet-fact-label">Интересный факт</p>
                  <p className="planet-fact">{selectedPlanet.fact}</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  )
}
