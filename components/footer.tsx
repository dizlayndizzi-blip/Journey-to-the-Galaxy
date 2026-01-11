"use client"
import { Github, Youtube, Send } from "lucide-react"

export function Footer() {
  const styles = `
    .footer {
      position: relative;
      padding: 4rem 1rem;
      border-top: 1px solid rgba(59, 130, 246, 0.2);
      z-index: 10;
    }

    .footer-container {
      max-width: 80rem;
      margin: 0 auto;
    }

    .footer-quote {
      text-align: center;
      margin-bottom: 2rem;
    }

    .footer-quote-text {
      font-size: 1.125rem;
      color: #d1d5db;
      font-style: italic;
      margin-bottom: 0.5rem;
    }

    .footer-quote-author {
      color: #6b7280;
    }

    .footer-links {
      display: flex;
      justify-content: center;
      gap: 2rem;
      margin-bottom: 2rem;
    }

    .footer-link {
      color: #9ca3af;
      text-decoration: none;
      transition: color 0.3s ease;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .footer-link:hover {
      color: #60a5fa;
    }

    .footer-copyright {
      text-align: center;
      color: #6b7280;
      font-size: 0.875rem;
    }
  `

  return (
    <>
      <style>{styles}</style>
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-quote">
            <p className="footer-quote-text">"Мы — способ Вселенной познать саму себя"</p>
            <p className="footer-quote-author">— Карл Саган</p>
          </div>

          <div className="footer-links">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link"
              aria-label="GitHub"
            >
              <Github size={24} />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link"
              aria-label="YouTube"
            >
              <Youtube size={24} />
            </a>
            <a
              href="https://telegram.org"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link"
              aria-label="Telegram"
            >
              <Send size={24} />
            </a>
          </div>

          <div className="footer-copyright">
            <p>© 2026 Путешествие по Галактике. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  )
}
