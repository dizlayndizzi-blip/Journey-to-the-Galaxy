"use client"

import { useState } from "react"

interface QuizQuestion {
  question: string
  options: string[]
  correct: number
  explanation: string
}

const quizzes: QuizQuestion[] = [
  {
    question: "Какая планета самая большая в Солнечной системе?",
    options: ["Сатурн", "Юпитер", "Уран", "Нептун"],
    correct: 1,
    explanation: "Юпитер — самая большая планета в нашей Солнечной системе. Его диаметр в 11 раз больше земного.",
  },
  {
    question: "На какой планете самый длинный день?",
    options: ["Венера", "Меркурий", "Марс", "Юпитер"],
    correct: 0,
    explanation: "На Венере один день длится 243 земных дня, что дольше её года (225 дней).",
  },
  {
    question: "Какая планета имеет больше всего спутников?",
    options: ["Сатурн", "Юпитер", "Уран", "Нептун"],
    correct: 1,
    explanation: "У Юпитера есть 95 известных спутников, включая четыре больших галилеевых луны.",
  },
]

export function QuizSection() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [score, setScore] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [showExplanation, setShowExplanation] = useState(false)

  const quiz = quizzes[currentQuestion]

  const handleAnswer = (index: number) => {
    setSelectedAnswer(index)
    if (index === quiz.correct) {
      setScore(score + 1)
    }
    setShowExplanation(true)
  }

  const handleNext = () => {
    if (currentQuestion < quizzes.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
      setSelectedAnswer(null)
      setShowExplanation(false)
    } else {
      setCurrentQuestion(0)
      setScore(0)
      setSelectedAnswer(null)
      setShowExplanation(false)
    }
  }

  const styles = `
    .quiz-section {
      position: relative;
      padding: 5rem 1rem;
      z-index: 10;
    }

    .quiz-container {
      max-width: 32rem;
      margin: 0 auto;
    }

    .quiz-title {
      font-size: 2.25rem;
      font-weight: 700;
      text-align: center;
      color: white;
      margin-bottom: 1rem;
    }

    .quiz-subtitle {
      text-align: center;
      color: #9ca3af;
      margin-bottom: 3rem;
    }

    .quiz-card {
      background: linear-gradient(135deg, rgba(37, 99, 235, 0.4), rgba(88, 28, 135, 0.4));
      border: 1px solid rgba(59, 130, 246, 0.3);
      border-radius: 10px;
      padding: 2rem;
      backdrop-filter: blur(10px);
    }

    .quiz-progress {
      margin-bottom: 1.5rem;
    }

    .quiz-progress-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 1rem;
    }

    .quiz-progress-text {
      color: #9ca3af;
    }

    .quiz-score {
      color: #60a5fa;
      font-weight: 600;
    }

    .quiz-progress-bar {
      width: 100%;
      height: 8px;
      background: #374151;
      border-radius: 4px;
      overflow: hidden;
    }

    .quiz-progress-fill {
      height: 100%;
      background: linear-gradient(90deg, #3b82f6, #a855f7);
      transition: width 0.3s ease;
    }

    .quiz-question {
      font-size: 1.25rem;
      font-weight: 700;
      color: white;
      margin-bottom: 2rem;
    }

    .quiz-options {
      display: flex;
      flex-direction: column;
      gap: 0.75rem;
      margin-bottom: 2rem;
    }

    .quiz-option {
      padding: 1.5rem;
      text-align: left;
      font-weight: 600;
      cursor: pointer;
      border: 2px solid #3b82f6;
      border-radius: 8px;
      background: rgba(59, 130, 246, 0.3);
      color: #f3f4f6;
      transition: all 0.3s ease;
      disabled: none;
    }

    .quiz-option:hover:not(:disabled) {
      background: rgba(59, 130, 246, 0.5);
    }

    .quiz-option:disabled {
      cursor: not-allowed;
    }

    .quiz-option.correct {
      background: rgba(34, 197, 94, 0.5);
      border-color: #22c55e;
    }

    .quiz-option.incorrect {
      background: rgba(239, 68, 68, 0.5);
      border-color: #ef4444;
    }

    .quiz-explanation {
      background: rgba(37, 99, 235, 0.3);
      border: 1px solid rgba(59, 130, 246, 0.3);
      border-radius: 8px;
      padding: 1rem;
      margin-bottom: 1.5rem;
      color: #d1d5db;
      animation: fadeIn 0.3s ease;
    }

    @keyframes fadeIn {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }
  `

  return (
    <>
      <style>{styles}</style>
      <section className="quiz-section">
        <div className="quiz-container">
          <h2 className="quiz-title">Мини-квиз</h2>
          <p className="quiz-subtitle">Проверь свои знания о космосе</p>

          <div className="quiz-card">
            <div className="quiz-progress">
              <div className="quiz-progress-header">
                <span className="quiz-progress-text">
                  Вопрос {currentQuestion + 1} из {quizzes.length}
                </span>
                <span className="quiz-score">Баллы: {score}</span>
              </div>
              <div className="quiz-progress-bar">
                <div
                  className="quiz-progress-fill"
                  style={{ width: `${((currentQuestion + 1) / quizzes.length) * 100}%` }}
                />
              </div>
            </div>

            <h3 className="quiz-question">{quiz.question}</h3>

            <div className="quiz-options">
              {quiz.options.map((option, idx) => (
                <button
                  key={idx}
                  onClick={() => !showExplanation && handleAnswer(idx)}
                  disabled={showExplanation}
                  className={`quiz-option ${
                    selectedAnswer === idx
                      ? idx === quiz.correct
                        ? "correct"
                        : "incorrect"
                      : idx === quiz.correct && showExplanation
                        ? "correct"
                        : ""
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>

            {showExplanation && <div className="quiz-explanation">{quiz.explanation}</div>}

            {showExplanation && (
              <button
                onClick={handleNext}
                className="button button-primary"
                style={{ width: "100%", padding: "1.5rem" }}
              >
                {currentQuestion === quizzes.length - 1 ? "Начать заново" : "Далее"}
              </button>
            )}
          </div>
        </div>
      </section>
    </>
  )
}
