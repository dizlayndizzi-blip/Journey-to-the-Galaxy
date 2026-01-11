"use client"

import { useEffect, useRef } from "react"

export function GalaxyScene() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return

    const container = containerRef.current
    const canvas = document.createElement("canvas")
    const ctx = canvas.getContext("2d")

    if (!ctx) return

    canvas.width = container.clientWidth
    canvas.height = container.clientHeight

    interface Particle {
      x: number
      y: number
      z: number
      vx: number
      vy: number
      vz: number
      radius: number
      brightness: number
    }

    const particles: Particle[] = []
    const particleCount = 2000

    for (let i = 0; i < particleCount; i++) {
      const angle = Math.random() * Math.PI * 2
      const distance = Math.random() * 150
      const height = (Math.random() - 0.5) * 80

      const armAngle = angle + (distance / 150) * Math.PI * 4

      particles.push({
        x: Math.cos(armAngle) * distance,
        y: height,
        z: Math.sin(armAngle) * distance,
        vx: (Math.random() - 0.5) * 0.1,
        vy: (Math.random() - 0.5) * 0.05,
        vz: (Math.random() - 0.5) * 0.1,
        radius: Math.random() * 0.5 + 0.2,
        brightness: Math.random() * 0.6 + 0.4,
      })
    }

    let rotation = 0
    let mouseX = canvas.width / 2
    let mouseY = canvas.height / 2

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX - container.getBoundingClientRect().left
      mouseY = e.clientY - container.getBoundingClientRect().top
    }

    container.addEventListener("mousemove", handleMouseMove)

    let animationFrameId: number

    const animate = () => {
      ctx.fillStyle = "rgba(8, 20, 40, 0.15)"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      rotation += 0.0005

      const centerX = canvas.width / 2
      const centerY = canvas.height / 2

      const projectedParticles = particles.map((p) => {
        const cosR = Math.cos(rotation)
        const sinR = Math.sin(rotation)

        const x = p.x * cosR - p.z * sinR
        const z = p.x * sinR + p.z * cosR
        const y = p.y

        const scale = 200 / (z + 250)
        const projX = x * scale
        const projY = y * scale
        const depth = (z + 250) / 500

        return {
          x: centerX + projX,
          y: centerY + projY,
          radius: p.radius * scale,
          brightness: p.brightness * depth,
          depth,
        }
      })

      projectedParticles.forEach((particle) => {
        if (particle.x > 0 && particle.x < canvas.width && particle.y > 0 && particle.y < canvas.height) {
          const hue = 200 + Math.sin(rotation * 0.5) * 20
          ctx.fillStyle = `hsla(${hue}, 100%, ${60 * particle.brightness}%, ${particle.brightness * 0.8})`
          ctx.beginPath()
          ctx.arc(particle.x, particle.y, Math.max(particle.radius, 0.5), 0, Math.PI * 2)
          ctx.fill()
        }
      })

      const glowSize = 30
      ctx.fillStyle = "rgba(102, 153, 255, 0.05)"
      ctx.beginPath()
      ctx.arc(mouseX, mouseY, glowSize, 0, Math.PI * 2)
      ctx.fill()

      animationFrameId = requestAnimationFrame(animate)
    }

    canvas.style.display = "block"
    container.appendChild(canvas)
    animate()

    const handleResize = () => {
      canvas.width = container.clientWidth
      canvas.height = container.clientHeight
    }

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
      container.removeEventListener("mousemove", handleMouseMove)
      if (container.contains(canvas)) {
        container.removeChild(canvas)
      }
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  const styles = `
    .galaxy-scene {
      position: relative;
      width: 100%;
      height: 96vh;
      background: linear-gradient(180deg, rgba(37, 99, 235, 0.2), rgba(88, 28, 135, 0.2));
      border-radius: 10px;
      overflow: hidden;
      cursor: crosshair;
      z-index: 10;
    }

    .galaxy-content {
      position: absolute;
      inset: 0;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      text-align: center;
      z-index: 20;
      pointer-events: none;
    }

    .galaxy-title {
      font-size: 1.875rem;
      font-weight: 700;
      color: white;
      margin-bottom: 0.75rem;
    }

    .galaxy-subtitle {
      color: #d1d5db;
    }

    @media (max-width: 768px) {
      .galaxy-scene {
        height: 24rem;
      }

      .galaxy-title {
        font-size: 1.5rem;
      }
    }
  `

  return (
    <>
      <style>{styles}</style>
      <div ref={containerRef} className="galaxy-scene">
        <div className="galaxy-content">
          <h3 className="galaxy-title">Интерактивная галактика</h3>
          <p className="galaxy-subtitle">Перемещайте мышь для взаимодействия с галактикой</p>
        </div>
      </div>
    </>
  )
}
