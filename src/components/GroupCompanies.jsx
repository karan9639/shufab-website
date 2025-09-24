"use client"

import { useState, useEffect, useRef } from "react"

const GroupCompanies = () => {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="group-companies" ref={sectionRef} className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center mb-16 transition-all duration-1000 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            <span className="text-primary">Jasmine Group</span> Companies
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-6"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            The Jasmine Group ecosystem provides complete vertical integration from raw materials to finished footwear,
            ensuring quality control and supply chain efficiency.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          <div
            className={`card-enhanced group transition-all duration-1000 delay-200 ease-out ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">SHUFAB</h3>
              <p className="text-primary font-semibold mb-3">Footwear Unit</p>
              <p className="text-muted-foreground leading-relaxed">
                Premier footwear manufacturing unit serving global brands like Puma, Skechers, and Bata. Features
                complete Cut-to-Box facility with advanced treatments including 3D printing, TPU welding, and memory
                socks molding.
              </p>
            </div>
          </div>

          <div
            className={`card-enhanced group transition-all duration-1000 delay-400 ease-out ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-secondary to-primary rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Schuhe Kraft</h3>
              <p className="text-primary font-semibold mb-3">Laces & Webbings</p>
              <p className="text-muted-foreground leading-relaxed">
                Specialized production of high-quality laces and webbings, providing essential components that ensure
                consistent quality and supply reliability for footwear manufacturing.
              </p>
            </div>
          </div>

          <div
            className={`card-enhanced group transition-all duration-1000 delay-600 ease-out ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Jasmine Knitting</h3>
              <p className="text-primary font-semibold mb-3">Fabrics</p>
              <p className="text-muted-foreground leading-relaxed">
                Advanced textile manufacturing with 650 tons monthly knitting capacity, 600 tons dyeing capacity, and
                300K pairs/month engineered mesh production using state-of-the-art STOLL machines.
              </p>
            </div>
          </div>
        </div>

        <div
          className={`bg-card rounded-2xl p-8 lg:p-12 shadow-lg transition-all duration-1000 delay-800 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-foreground mb-4">Vertical Integration Advantage</h3>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              SHUFAB is the only group company in India with complete yarn-to-shoe capability, enabling faster
              development, better quality control, and competitive minimum order quantities through reduced Tier-2
              dependency.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-gradient-to-br from-primary/10 to-primary/20 rounded-xl">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h4 className="font-semibold text-foreground mb-2">Faster Development</h4>
              <p className="text-sm text-muted-foreground">Reduced lead times through integrated supply chain</p>
            </div>

            <div className="text-center p-6 bg-gradient-to-br from-secondary/10 to-secondary/20 rounded-xl">
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h4 className="font-semibold text-foreground mb-2">Quality Control</h4>
              <p className="text-sm text-muted-foreground">End-to-end quality assurance across all processes</p>
            </div>

            <div className="text-center p-6 bg-gradient-to-br from-green-500/10 to-green-600/20 rounded-xl">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
                  />
                </svg>
              </div>
              <h4 className="font-semibold text-foreground mb-2">Cost Efficiency</h4>
              <p className="text-sm text-muted-foreground">Optimized costs through vertical integration</p>
            </div>

            <div className="text-center p-6 bg-gradient-to-br from-orange-500/10 to-orange-600/20 rounded-xl">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </div>
              <h4 className="font-semibold text-foreground mb-2">Flexibility</h4>
              <p className="text-sm text-muted-foreground">Easy management of minimum order quantities</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default GroupCompanies
