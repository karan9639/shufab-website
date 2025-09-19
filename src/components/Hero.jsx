"use client"

import { useState, useEffect } from "react"

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const images = ["/assets/DSC0594min.jpg", "/assets/DSC0579min.jpg"]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, 4000) // Switch every 4 seconds

    return () => clearInterval(interval)
  }, [images.length])

  return (
    <section id="home" className="hero">
      <div className="hero-background">
        {images.map((image, index) => (
          <div
            key={index}
            className={`hero-bg-image ${index === currentImageIndex ? "active" : ""}`}
            style={{ backgroundImage: `url(${image})` }}
          />
        ))}
      </div>
      <div className="container">
        <div className="hero-content">
          <h1>State-of-the-art Production</h1>
          <p>Commitment to quality</p>
        </div>
      </div>
    </section>
  )
}

export default Hero
