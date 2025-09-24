"use client"

import { useState, useEffect, useRef } from "react"

const Compliance = () => {
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
      { threshold: 0.1, rootMargin: "50px" },
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
    <section id="compliance" ref={sectionRef} className="py-20 bg-background" aria-labelledby="compliance-heading">
      <div className="container-responsive">
        <div
          className={`text-center mb-16 transition-all duration-1000 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 id="compliance-heading" className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            <span className="text-primary">Compliances</span> & Certifications
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-6" role="presentation"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Comprehensive certifications ensuring international quality standards, social compliance, and environmental
            responsibility across all operations.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 mb-16">
          <div
            className={`transition-all duration-1000 delay-200 ease-out ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
            }`}
          >
            <article className="bg-card rounded-2xl p-6 md:p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-foreground mb-6 text-center">International Standards</h3>
              <div className="aspect-video mb-6 overflow-hidden rounded-xl">
                {!imageErrors.compliance1 ? (
                  <img
                    src="/assets/compliances-certifications.png"
                    alt="SLCP Approved and ISO Certifications including ISO 9001, 14001, and 45001"
                    className="w-full h-full object-contain bg-muted"
                    loading="lazy"
                    onError={() => handleImageError("compliance1")}
                  />
                ) : (
                  <div className="w-full h-full bg-muted flex items-center justify-center">
                    <p className="text-muted-foreground">Certification image unavailable</p>
                  </div>
                )}
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-primary rounded-full flex-shrink-0"></div>
                  <span className="font-semibold text-foreground">SLCP APPROVED</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-secondary rounded-full flex-shrink-0"></div>
                  <span className="font-semibold text-foreground">ISO: 9001, 14001, 45001</span>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed mt-4">
                  SLCP-approved facility ensuring social & labor compliance, with ISO certifications for quality
                  management (9001), environmental management (14001), and occupational health & safety (45001).
                </p>
              </div>
            </article>
          </div>

          <div
            className={`transition-all duration-1000 delay-400 ease-out ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            }`}
          >
            <article className="bg-card rounded-2xl p-6 md:p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-foreground mb-6 text-center">BIS Certified</h3>
              <div className="aspect-video mb-6 overflow-hidden rounded-xl">
                {!imageErrors.bis1 ? (
                  <img
                    src="/assets/bis-certifications.png"
                    alt="BIS Certifications for Sports Shoes and Slippers including IS 15844:2023 and IS 6721:2023"
                    className="w-full h-full object-contain bg-muted"
                    loading="lazy"
                    onError={() => handleImageError("bis1")}
                  />
                ) : (
                  <div className="w-full h-full bg-muted flex items-center justify-center">
                    <p className="text-muted-foreground">BIS certification image unavailable</p>
                  </div>
                )}
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-3 h-3 bg-primary rounded-full mt-1 flex-shrink-0"></div>
                  <div className="min-w-0">
                    <span className="font-semibold text-foreground block">IS 15844:2023 (Part 1)</span>
                    <span className="text-sm text-muted-foreground">General Purpose sports shoe</span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-3 h-3 bg-secondary rounded-full mt-1 flex-shrink-0"></div>
                  <div className="min-w-0">
                    <span className="font-semibold text-foreground block">IS 6721:2023</span>
                    <span className="text-sm text-muted-foreground">Slippers & Sandals</span>
                  </div>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed mt-4">
                  All 3 production units are BIS compliant, meeting Indian national standards for footwear quality,
                  safety, and performance specifications.
                </p>
              </div>
            </article>
          </div>
        </div>

        <div
          className={`bg-muted rounded-2xl p-6 md:p-8 lg:p-12 mb-16 transition-all duration-1000 delay-600 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">In-House BIS Approved Testing Lab</h3>
            <p className="text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Comprehensive testing facility with advanced equipment ensuring rigorous quality control and compliance
              verification for all products.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            <article className="bg-card p-4 md:p-6 rounded-xl">
              <h4 className="font-semibold text-foreground mb-3">Physical Testing</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Universal Testing Machine</li>
                <li>• Full Shoe Flexing Machine</li>
                <li>• Compression Set Testing</li>
                <li>• Resilience Test</li>
              </ul>
            </article>

            <article className="bg-card p-4 md:p-6 rounded-xl">
              <h4 className="font-semibold text-foreground mb-3">Durability Testing</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Martindale Abrasion Machine</li>
                <li>• DIN Abrasion Testing Machine</li>
                <li>• Ross Flex Tester</li>
                <li>• Lace Abrasion Tester</li>
              </ul>
            </article>

            <article className="bg-card p-4 md:p-6 rounded-xl">
              <h4 className="font-semibold text-foreground mb-3">Quality Control</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Color Matching Box</li>
                <li>• Hardness Tester: Asker 'C' & Shore 'A'</li>
                <li>• Water Vapour Permeability Tester</li>
                <li>• Thermo Hygrometer</li>
              </ul>
            </article>

            <article className="bg-card p-4 md:p-6 rounded-xl">
              <h4 className="font-semibold text-foreground mb-3">Environmental Testing</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Hot Air Oven for Hydrolysis & Ageing</li>
                <li>• Dry-Wet Rub Fastness</li>
                <li>• Lastometer</li>
              </ul>
            </article>

            <article className="bg-card p-4 md:p-6 rounded-xl md:col-span-2 lg:col-span-2">
              <h4 className="font-semibold text-foreground mb-3">Testing Capabilities</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Our BIS-approved testing laboratory ensures comprehensive quality verification from raw materials to
                finished products, maintaining international standards and enabling rapid quality assurance for all
                manufacturing processes.
              </p>
            </article>
          </div>
        </div>

        <div
          className={`transition-all duration-1000 delay-800 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="bg-card rounded-2xl p-6 md:p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-center text-foreground mb-8">Commitment to Excellence</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              <div className="text-center p-4 md:p-6 bg-gradient-to-br from-primary/10 to-primary/20 rounded-xl">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-sm md:text-lg">SLCP</span>
                </div>
                <h4 className="font-semibold text-foreground mb-2 text-sm md:text-base">SLCP Approved</h4>
                <p className="text-xs md:text-sm text-muted-foreground">Social & Labor Convergence Program</p>
              </div>

              <div className="text-center p-4 md:p-6 bg-gradient-to-br from-secondary/10 to-secondary/20 rounded-xl">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-sm md:text-lg">ISO</span>
                </div>
                <h4 className="font-semibold text-foreground mb-2 text-sm md:text-base">ISO Certified</h4>
                <p className="text-xs md:text-sm text-muted-foreground">9001, 14001, 45001 Standards</p>
              </div>

              <div className="text-center p-4 md:p-6 bg-gradient-to-br from-green-500/10 to-green-600/20 rounded-xl">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-sm md:text-lg">BIS</span>
                </div>
                <h4 className="font-semibold text-foreground mb-2 text-sm md:text-base">BIS Certified</h4>
                <p className="text-xs md:text-sm text-muted-foreground">All 3 units compliant</p>
              </div>

              <div className="text-center p-4 md:p-6 bg-gradient-to-br from-orange-500/10 to-orange-600/20 rounded-xl">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-6 h-6 md:w-8 md:h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h4 className="font-semibold text-foreground mb-2 text-sm md:text-base">Testing Lab</h4>
                <p className="text-xs md:text-sm text-muted-foreground">In-house BIS approved facility</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Compliance
