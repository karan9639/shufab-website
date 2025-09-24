"use client"

import { useState, useEffect, useRef } from "react"

const ManagementTeam = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [loadingError, setLoadingError] = useState(false)
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

  useEffect(() => {
    const handleError = (event) => {
      if (event.target === sectionRef.current) {
        setLoadingError(true)
      }
    }

    if (sectionRef.current) {
      sectionRef.current.addEventListener("error", handleError)
    }

    return () => {
      if (sectionRef.current) {
        sectionRef.current.removeEventListener("error", handleError)
      }
    }
  }, [])

  if (loadingError) {
    return (
      <section className="py-20 bg-muted">
        <div className="container-responsive">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-foreground mb-4">Management Team</h2>
            <p className="text-muted-foreground mb-6">
              We're having trouble loading this section. Please try refreshing the page.
            </p>
            <button
              onClick={() => window.location.reload()}
              className="btn-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            >
              Refresh Page
            </button>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="management-team" ref={sectionRef} className="py-20 bg-muted" aria-labelledby="management-heading">
      <div className="container-responsive">
        <div
          className={`text-center mb-16 transition-all duration-1000 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 id="management-heading" className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our <span className="text-primary">Management Team</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-6" role="presentation"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Experienced leadership with 48+ combined years in footwear manufacturing and textile industry, driving
            innovation and excellence in global brand partnerships.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-12">
          <article
            className={`card-enhanced transition-all duration-1000 delay-200 ease-out ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
            }`}
          >
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex-shrink-0">
                <div className="w-32 h-32 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center">
                  <svg
                    className="w-16 h-16 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                </div>
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-2xl font-bold text-foreground mb-2">Manish Satija</h3>
                <p className="text-primary font-semibold mb-4">Partner</p>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Qualified Footwear Technologist from Footwear Design & Development Institute (FDDI), Noida
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      18+ years operational experience in footwear manufacturing
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Extensive experience managing Multi-National brands including adidas, Reebok, Puma, and Decathlon
                      at Mochiko Shoes
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </article>

          <article
            className={`card-enhanced transition-all duration-1000 delay-400 ease-out ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            }`}
          >
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex-shrink-0">
                <div className="w-32 h-32 bg-gradient-to-br from-secondary to-primary rounded-2xl flex items-center justify-center">
                  <svg
                    className="w-16 h-16 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                </div>
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-2xl font-bold text-foreground mb-2">Sandeep Behl</h3>
                <p className="text-primary font-semibold mb-4">Partner</p>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Industry veteran with 30+ years experience in textile manufacturing
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Serving Multi-National brands including Bata, Skechers, adidas, Reebok, Puma, Decathlon, and Asics
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Leading Tier-2 vendor operations at Jasmine Knitting Industries Pvt. Ltd.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </div>

        <div
          className={`mt-16 bg-card rounded-2xl p-6 md:p-8 lg:p-12 shadow-lg transition-all duration-1000 delay-600 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-foreground mb-4">Leadership Excellence</h3>
            <p className="text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Our management team combines technical expertise with extensive industry experience, ensuring seamless
              operations and strategic partnerships with global footwear brands.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-2xl">48+</span>
              </div>
              <h4 className="font-semibold text-foreground mb-2">Combined Years</h4>
              <p className="text-sm text-muted-foreground">Of specialized industry experience</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-secondary to-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                  />
                </svg>
              </div>
              <h4 className="font-semibold text-foreground mb-2">Global Brands</h4>
              <p className="text-sm text-muted-foreground">Proven track record with MNC partnerships</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-white"
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
              <h4 className="font-semibold text-foreground mb-2">Technical Excellence</h4>
              <p className="text-sm text-muted-foreground">Qualified technologists and industry veterans</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ManagementTeam
