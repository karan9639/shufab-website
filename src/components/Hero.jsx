"use client"

import { useState, useEffect, useCallback } from "react"

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isLoaded, setIsLoaded] = useState(false)
  const [imagesLoaded, setImagesLoaded] = useState(false)

  const images = ["/assets/DSC0594min.jpg", "/assets/DSC0579min.jpg"]

  useEffect(() => {
    const preloadImages = async () => {
      try {
        const imagePromises = images.map((src) => {
          return new Promise((resolve, reject) => {
            const img = new Image()
            img.onload = () => resolve(img)
            img.onerror = reject
            img.src = src
          })
        })

        await Promise.all(imagePromises)
        setImagesLoaded(true)
      } catch (error) {
        console.warn("Some hero images failed to load:", error)
        setImagesLoaded(true) // Continue anyway
      }
    }

    preloadImages()
  }, [])

  const scrollToSection = useCallback((sectionId) => {
    try {
      const element = document.getElementById(sectionId)
      if (element) {
        element.scrollIntoView({ behavior: "smooth" })
      }
    } catch (error) {
      console.error("Scroll error:", error)
    }
  }, [])

  useEffect(() => {
    if (!imagesLoaded) return

    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, 4000)

    const timer = setTimeout(() => setIsLoaded(true), 100)

    return () => {
      clearInterval(interval)
      clearTimeout(timer)
    }
  }, [images.length, imagesLoaded])

  if (!imagesLoaded) {
    return (
      <section className="relative min-h-screen flex items-center justify-center bg-slate-900">
        <div className="text-center text-white">
          <div className="w-12 h-12 border-4 border-emerald-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-lg">Loading...</p>
        </div>
      </section>
    )
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1500 ease-in-out ${
              index === currentImageIndex ? "opacity-100" : "opacity-0"
            }`}
            style={{ backgroundImage: `url(${image})` }}
            role="img"
            aria-label={`Hero background image ${index + 1}`}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent z-10" />
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center lg:text-left">
        <div className="max-w-4xl">
          <div
            className={`transition-all duration-1000 ease-out ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              <span className="block">Crafting Excellence in</span>
              <span className="block text-transparent bg-gradient-to-r from-emerald-400 to-emerald-600 bg-clip-text">
                Footwear Manufacturing
              </span>
            </h1>

            <div
              className={`transition-all duration-1000 delay-300 ease-out ${
                isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-2xl leading-relaxed">
                Where precision meets innovation. Shufab delivers world-class footwear manufacturing with uncompromising
                quality and cutting-edge technology.
              </p>
            </div>

            <div
              className={`flex flex-col sm:flex-row gap-4 justify-center lg:justify-start transition-all duration-1000 delay-500 ease-out ${
                isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <button
                onClick={() => scrollToSection("about")}
                className="btn-primary text-lg px-8 py-4 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg font-semibold transition-all duration-300 hover:shadow-xl hover:scale-105 transform focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
                aria-label="Explore our capabilities"
              >
                Explore Our Capabilities
              </button>
              <button
                onClick={() => scrollToSection("quality")}
                className="btn-secondary text-lg px-8 py-4 bg-transparent border-2 border-white text-white hover:bg-white hover:text-emerald-600 rounded-lg font-semibold transition-all duration-300 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2"
                aria-label="View our manufacturing process"
              >
                View Our Process
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div
          className={`transition-all duration-1000 delay-700 ease-out ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <div className="flex flex-col items-center text-white">
            <span className="text-sm mb-2 font-medium">Scroll to explore</span>
            <div
              className="w-6 h-10 border-2 border-white rounded-full flex justify-center"
              role="img"
              aria-label="Scroll indicator"
            >
              <div className="w-1 h-3 bg-white rounded-full mt-2 animate-bounce"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 right-8 z-20">
        <div className="flex space-x-2" role="tablist" aria-label="Hero image navigation">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 ${
                index === currentImageIndex ? "bg-emerald-500 scale-125" : "bg-white/50 hover:bg-white/75"
              }`}
              aria-label={`View image ${index + 1}`}
              role="tab"
              aria-selected={index === currentImageIndex}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Hero
