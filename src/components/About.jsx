"use client"

import { useState, useEffect, useRef } from "react"

const About = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [imageErrors, setImageErrors] = useState({})
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1, rootMargin: "50px" }, // Added rootMargin for earlier loading
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const handleImageError = (imageName) => {
    setImageErrors((prev) => ({ ...prev, [imageName]: true }))
  }

  return (
    <section id="about" ref={sectionRef} className="py-20 bg-gradient-to-b from-background to-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center mb-16 transition-all duration-1000 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            About <span className="text-primary">Shufab</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-6"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Established in 2019, Shufab is a prominent footwear manufacturer serving renowned brands like Puma,
            Skechers, and Bata. We are the only group company in India with complete vertical integration from yarn
            procurement to finished shoes.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          <div
            className={`card-enhanced group transition-all duration-1000 delay-200 ease-out ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
            }`}
          >
            <div className="relative overflow-hidden rounded-xl mb-6">
              {!imageErrors.about1 ? (
                <img
                  src="/assets/DSC6580about.jpg"
                  alt="Premium footwear manufacturing facility"
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                  onError={() => handleImageError("about1")}
                />
              ) : (
                <div className="w-full h-64 bg-muted flex items-center justify-center">
                  <p className="text-muted-foreground">Image unavailable</p>
                </div>
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-primary flex items-center gap-3">
                <div className="w-2 h-8 bg-gradient-to-b from-primary to-secondary rounded-full"></div>
                Vertical Integration Excellence
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                With in-house production of mesh fabric, soles, laces, and webbings, we ensure efficient processes and
                maintain complete quality control. Our Cut-to-Box facility under one roof supports both regular
                production and Semi-Knock Down/Complete Knock Down projects.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We perform advanced treatments including 3D printing, no-sew film fusing, TPU welding & embossing, and
                memory socks molding. Our SLCP-approved facility ensures health & safety standards with no contract
                labor and transparent open-costing model.
              </p>
            </div>
          </div>

          <div
            className={`card-enhanced group transition-all duration-1000 delay-400 ease-out ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            }`}
          >
            <div className="relative overflow-hidden rounded-xl mb-6">
              {!imageErrors.about2 ? (
                <img
                  src="/assets/DSC0587minabout.jpg"
                  alt="Advanced manufacturing capabilities and technology"
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                  onError={() => handleImageError("about2")}
                />
              ) : (
                <div className="w-full h-64 bg-muted flex items-center justify-center">
                  <p className="text-muted-foreground">Image unavailable</p>
                </div>
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-primary flex items-center gap-3">
                <div className="w-2 h-8 bg-gradient-to-b from-primary to-secondary rounded-full"></div>
                Advanced Manufacturing Capabilities
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Our experienced Operations & Quality teams have worked with Multi-National brands, enabling rapid
                onboarding of new partnerships. Major raw materials sourced from group companies result in minimal
                Tier-2 dependency and easier minimum order quantity management.
              </p>
            </div>
          </div>
        </div>

        <div
          className={`bg-card rounded-2xl p-8 lg:p-12 shadow-lg transition-all duration-1000 delay-600 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-1">
              <h3 className="text-2xl font-bold text-primary mb-6">Our Journey</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-4 h-4 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-foreground">2019</h4>
                    <p className="text-sm text-muted-foreground">Company formation & production kick-start</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-4 h-4 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-foreground">2020</h4>
                    <p className="text-sm text-muted-foreground">Skechers production commencement</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-4 h-4 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-foreground">2023</h4>
                    <p className="text-sm text-muted-foreground">Puma production & Manesar unit operations</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-4 h-4 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-foreground">2025</h4>
                    <p className="text-sm text-muted-foreground">Bahadurgarh plant operations commenced</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-2 space-y-6">
              <div className="prose prose-lg max-w-none">
                <p className="text-muted-foreground leading-relaxed">
                  Established in 2019, Shufab is a prominent footwear manufacturer serving renowned brands like Puma,
                  Skechers, and Bata. We are the only group company in India with complete vertical integration from
                  yarn procurement to finished shoes.
                </p>

                <p className="text-muted-foreground leading-relaxed">
                  Our experienced Operations & Quality teams have worked with Multi-National brands, enabling rapid
                  onboarding of new partnerships. Major raw materials sourced from group companies result in minimal
                  Tier-2 dependency and easier minimum order quantity management.
                </p>

                <p className="text-muted-foreground leading-relaxed">
                  With production facilities in Gurugram, Manesar, and Bahadurgarh (21km from Delhi International
                  Airport), we leverage group company synergies for faster development cycles and competitive minimum
                  order quantities.
                </p>

                <p className="text-muted-foreground leading-relaxed">
                  Our SLCP-approved facilities maintain international health & safety standards with no contract labor.
                  We operate on an open-costing model for complete transparency, supported by teams experienced with
                  top-brand manufacturing processes.
                </p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-border">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">300K+</div>
                  <div className="text-sm text-muted-foreground">Engineered Mesh Pairs/Month</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">6+</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">3</div>
                  <div className="text-sm text-muted-foreground">Production Units</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">100%</div>
                  <div className="text-sm text-muted-foreground">Quality Assured</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
