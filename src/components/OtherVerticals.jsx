"use client"

import { useState, useEffect, useRef } from "react"

const OtherVerticals = () => {
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
    <section id="other-verticals" ref={sectionRef} className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center mb-16 transition-all duration-1000 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Other <span className="text-primary">Verticals</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-6"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Jasmine Knitting Industries - Comprehensive textile manufacturing capabilities supporting our vertical
            integration
          </p>
        </div>

        <div
          className={`bg-card rounded-2xl p-8 lg:p-12 shadow-lg mb-16 transition-all duration-1000 delay-200 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-foreground mb-4">Jasmine Knitting Industries</h3>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Founded in 1984, Jasmine Knitting Industries has invested $8 million (excluding land & building) and
              employs 515 people. We are an approved vendor for all MNC brands manufacturing footwear in India.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="text-center p-6 bg-gradient-to-br from-primary/10 to-primary/20 rounded-xl">
              <div className="text-3xl font-bold text-primary mb-2">1984</div>
              <div className="text-sm text-muted-foreground">Founded</div>
            </div>

            <div className="text-center p-6 bg-gradient-to-br from-secondary/10 to-secondary/20 rounded-xl">
              <div className="text-3xl font-bold text-secondary mb-2">$8M</div>
              <div className="text-sm text-muted-foreground">Investment</div>
            </div>

            <div className="text-center p-6 bg-gradient-to-br from-green-500/10 to-green-600/20 rounded-xl">
              <div className="text-3xl font-bold text-green-600 mb-2">515</div>
              <div className="text-sm text-muted-foreground">Employees</div>
            </div>

            <div className="text-center p-6 bg-gradient-to-br from-orange-500/10 to-orange-600/20 rounded-xl">
              <div className="text-3xl font-bold text-orange-600 mb-2">100%</div>
              <div className="text-sm text-muted-foreground">MNC Approved</div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div
            className={`transition-all duration-1000 delay-400 ease-out ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
            }`}
          >
            <div className="card-enhanced">
              <h3 className="text-2xl font-bold text-primary mb-6 flex items-center gap-3">
                <div className="w-3 h-8 bg-gradient-to-b from-primary to-secondary rounded-full"></div>
                Manufacturing Capabilities
              </h3>

              <div className="space-y-6">
                <div className="bg-muted p-6 rounded-xl">
                  <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    Lamination Capacity
                  </h4>
                  <p className="text-muted-foreground text-sm">2.5 Million meters (Adhesive – Film – Flame)</p>
                </div>

                <div className="bg-muted p-6 rounded-xl">
                  <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                    <div className="w-2 h-2 bg-secondary rounded-full"></div>
                    Monthly Knitting Capacity
                  </h4>
                  <p className="text-muted-foreground text-sm">
                    650 tons with 62 warp knitting & 25 circular knitting machines. Also using recycled yarn as per
                    customer requirements.
                  </p>
                </div>

                <div className="bg-muted p-6 rounded-xl">
                  <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    Monthly Dyeing Capacity
                  </h4>
                  <p className="text-muted-foreground text-sm">
                    600 tons with 20 jets. (Using Gurugram city STP water for dyeing)
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div
            className={`transition-all duration-1000 delay-600 ease-out ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            }`}
          >
            <div className="card-enhanced">
              <h3 className="text-2xl font-bold text-primary mb-6 flex items-center gap-3">
                <div className="w-3 h-8 bg-gradient-to-b from-secondary to-primary rounded-full"></div>
                Advanced Technology
              </h3>

              <div className="space-y-6">
                <div className="bg-muted p-6 rounded-xl">
                  <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                    <div className="w-2 h-2 bg-secondary rounded-full"></div>
                    Engineered Mesh Capacity
                  </h4>
                  <p className="text-muted-foreground text-sm">
                    300k Pairs/Month with in-house flat knitting STOLL MACHINES
                  </p>
                </div>

                <div className="bg-muted p-6 rounded-xl">
                  <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    Machine Configuration
                  </h4>
                  <p className="text-muted-foreground text-sm">
                    62 warp knitting machines and 25 circular knitting machines for diverse production needs
                  </p>
                </div>

                <div className="bg-muted p-6 rounded-xl">
                  <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                    <div className="w-2 h-2 bg-secondary rounded-full"></div>
                    Sustainability Focus
                  </h4>
                  <p className="text-muted-foreground text-sm">
                    Using recycled yarn as per customer requirements and STP water for eco-friendly operations
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className={`bg-muted rounded-2xl p-8 lg:p-12 transition-all duration-1000 delay-800 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-foreground mb-4">Production Summary</h3>
            <p className="text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Comprehensive textile manufacturing capabilities supporting the entire footwear supply chain
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-card p-6 rounded-xl text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4"
                  />
                </svg>
              </div>
              <h4 className="font-semibold text-foreground mb-2">2.5M Meters</h4>
              <p className="text-sm text-muted-foreground">Monthly lamination capacity</p>
            </div>

            <div className="bg-card p-6 rounded-xl text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-secondary to-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                  />
                </svg>
              </div>
              <h4 className="font-semibold text-foreground mb-2">650 Tons</h4>
              <p className="text-sm text-muted-foreground">Monthly knitting capacity</p>
            </div>

            <div className="bg-card p-6 rounded-xl text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z"
                  />
                </svg>
              </div>
              <h4 className="font-semibold text-foreground mb-2">600 Tons</h4>
              <p className="text-sm text-muted-foreground">Monthly dyeing capacity</p>
            </div>

            <div className="bg-card p-6 rounded-xl text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                  />
                </svg>
              </div>
              <h4 className="font-semibold text-foreground mb-2">300K Pairs</h4>
              <p className="text-sm text-muted-foreground">Monthly engineered mesh</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default OtherVerticals
