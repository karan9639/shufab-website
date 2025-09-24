"use client"

import { useState, useEffect, useRef } from "react"

const Quality = () => {
  const [isVisible, setIsVisible] = useState(false)
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

  return (
    <section id="quality" ref={sectionRef} className="py-20 bg-background" aria-labelledby="quality-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center mb-16 transition-all duration-1000 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 id="quality-heading" className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our <span className="text-primary">Quality Policy</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-6" role="presentation"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Unwavering commitment to excellence in every aspect of our manufacturing process
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div
            className={`transition-all duration-1000 delay-200 ease-out ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
            }`}
          >
            <div className="space-y-8">
              <article className="card-enhanced">
                <div className="flex items-start gap-4">
                  <div
                    className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center flex-shrink-0"
                    role="img"
                    aria-label="Customer satisfaction icon"
                  >
                    <svg
                      className="w-6 h-6 text-white"
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
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-3">Customer Satisfaction</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      The management of Shufab Shoes is unflinchingly committed to the satisfaction of its customers.
                      Quality products delivered at the right time and at the right price are our paramount focus.
                    </p>
                  </div>
                </div>
              </article>

              <article className="card-enhanced">
                <div className="flex items-start gap-4">
                  <div
                    className="w-12 h-12 bg-gradient-to-br from-secondary to-primary rounded-xl flex items-center justify-center flex-shrink-0"
                    role="img"
                    aria-label="Employee-centric approach icon"
                  >
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-3">Employee-Centric Approach</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Our philosophy is simple: we don't just employ people to build a business, we use the business to
                      build people. This commitment reflects in our healthy, safe, and clean work environment.
                    </p>
                  </div>
                </div>
              </article>
            </div>
          </div>

          <div
            className={`transition-all duration-1000 delay-400 ease-out ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            }`}
          >
            <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-foreground mb-8 text-center">Quality Standards</h3>

              <div className="grid grid-cols-2 gap-6 mb-8" role="list" aria-label="Quality standards">
                <div className="text-center" role="listitem">
                  <div
                    className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-3"
                    role="img"
                    aria-label="ISO certification"
                  >
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
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                      />
                    </svg>
                  </div>
                  <h4 className="font-semibold text-foreground">ISO Certified</h4>
                  <p className="text-sm text-muted-foreground">International Standards</p>
                </div>

                <div className="text-center" role="listitem">
                  <div
                    className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-3"
                    role="img"
                    aria-label="Fast delivery"
                  >
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
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  </div>
                  <h4 className="font-semibold text-foreground">Fast Delivery</h4>
                  <p className="text-sm text-muted-foreground">On-Time Guarantee</p>
                </div>

                <div className="text-center" role="listitem">
                  <div
                    className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-3"
                    role="img"
                    aria-label="Competitive pricing"
                  >
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
                        d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
                      />
                    </svg>
                  </div>
                  <h4 className="font-semibold text-foreground">Competitive Pricing</h4>
                  <p className="text-sm text-muted-foreground">Best Value</p>
                </div>

                <div className="text-center" role="listitem">
                  <div
                    className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-3"
                    role="img"
                    aria-label="Safety first"
                  >
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
                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                      />
                    </svg>
                  </div>
                  <h4 className="font-semibold text-foreground">Safety First</h4>
                  <p className="text-sm text-muted-foreground">Employee Welfare</p>
                </div>
              </div>

              <div className="text-center">
                <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full">
                  <div className="w-2 h-2 bg-primary rounded-full animate-pulse" role="presentation"></div>
                  <span className="text-sm font-medium text-primary">Adhering to National Safety Regulations</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Quality
