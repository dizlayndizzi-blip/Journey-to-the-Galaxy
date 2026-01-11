"use client"

interface Fact {
  emoji: string
  title: string
  description: string
}

const facts: Fact[] = [
  {
    emoji: "🕳",
    title: "Чёрные дыры",
    description:
      "Чёрные дыры — это области космоса с гравитацией настолько сильной, что даже свет не может из них выбраться.",
  },
  {
    emoji: "⭐",
    title: "Нейтронные звёзды",
    description:
      "Нейтронная звезда размером с город может весить столько же, сколько Солнце. Чайная ложка её вещества весит миллиарды тонн.",
  },
  {
    emoji: "🌌",
    title: "Размер Вселенной",
    description: "Вселенная расширяется со скоростью света. То, что мы видим как звёзды, часто уже не существует.",
  },
  {
    emoji: "🚀",
    title: "Скорость света",
    description: "Свет движется со скоростью 299,792 км/сек. Это самая быстрая скорость во Вселенной.",
  },
  {
    emoji: "🪐",
    title: "Сатурн",
    description: "Сатурн настолько лёгкий, что может плавать в воде. Его плотность меньше, чем у воды.",
  },
  {
    emoji: "✨",
    title: "Звёздная пыль",
    description: "Каждый атом в вашем теле был создан в звезде. Мы все сделаны из звёздного материала.",
  },
]

export function FactsSection() {
  const styles = `
    .facts-section {
      position: relative;
      padding: 5rem 1rem;
      z-index: 10;
    }

    .facts-container {
      max-width: 80rem;
      margin: 0 auto;
    }

    .facts-title {
      font-size: 2.25rem;
      font-weight: 700;
      text-align: center;
      color: white;
      margin-bottom: 1rem;
    }

    .facts-subtitle {
      text-align: center;
      color: #9ca3af;
      margin-bottom: 4rem;
    }

    .facts-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 1.5rem;
    }

    .fact-card {
      background: linear-gradient(135deg, rgba(88, 28, 135, 0.4), rgba(37, 99, 235, 0.4));
      border: 1px solid rgba(168, 85, 247, 0.3);
      border-radius: 10px;
      padding: 1.5rem;
      backdrop-filter: blur(10px);
      cursor: pointer;
      transition: all 0.3s ease;
    }

    .fact-card:hover {
      border-color: rgba(168, 85, 247, 0.6);
      box-shadow: 0 0 20px rgba(168, 85, 247, 0.2);
      transform: translateY(-5px);
    }

    .fact-emoji {
      font-size: 2.25rem;
      margin-bottom: 1rem;
      display: inline-block;
      transition: transform 0.3s ease;
    }

    .fact-card:hover .fact-emoji {
      transform: scale(1.2);
    }

    .fact-title {
      font-size: 1.25rem;
      font-weight: 700;
      color: white;
      margin-bottom: 0.75rem;
    }

    .fact-description {
      color: #d1d5db;
      line-height: 1.6;
    }
  `

  return (
    <>
      <style>{styles}</style>
      <section className="facts-section">
        <div className="facts-container">
          <h2 className="facts-title">Интересные факты о космосе</h2>
          <p className="facts-subtitle">Узнай удивительные факты о Вселенной</p>

          <div className="facts-grid">
            {facts.map((fact, idx) => (
              <div key={idx} className="fact-card">
                <div className="fact-emoji">{fact.emoji}</div>
                <h3 className="fact-title">{fact.title}</h3>
                <p className="fact-description">{fact.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
