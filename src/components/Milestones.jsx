"use client"

import { useState, useEffect, useRef } from "react"

const Milestones = () => {
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

  const milestones = [
    {
      year: "2019",
      events: [
        { month: "Jun", title: "Kick-start of Production", description: "Started with 50K capacity" },
        { month: "Sep", title: "Initial Discussions with Skechers", description: "Partnership discussions began" },
        { month: "Nov", title: "100% Expansion", description: "Production capacity doubled" },
      ],
    },
    {
      year: "2020",
      events: [
        { month: "Jan", title: "Company Formation", description: "Official company establishment" },
        { month: "Apr", title: "Development Starts", description: "R&D and product development initiated" },
        { month: "Apr", title: "Skechers Production", description: "Commencement of Skechers production" },
      ],
    },
    {
      year: "2021",
      events: [
        { month: "Aug", title: "Initial Discussions with Puma", description: "Partnership talks with Puma began" },
        { month: "Dec", title: "IMEVA Sole Facility", description: "Started IMEVA sole manufacturing" },
      ],
    },
    {
      year: "2022",
      events: [{ month: "Jun", title: "Expansion Phase", description: "Continued growth and development" }],
    },
    {
      year: "2023",
      events: [
        { month: "Mar", title: "Puma Production Launch", description: "Commencement of Puma production" },
        { month: "Mar", title: "Puma Development Centre", description: "Inauguration of Puma Development Centre" },
        { month: "Mar", title: "Manesar Unit Operations", description: "Start of operations at Manesar unit" },
        { month: "Mar", title: "Advanced Machinery", description: "Auto-cutting and auto-marking machines introduced" },
      ],
    },
    {
      year: "2024",
      events: [
        { month: "Feb", title: "CMEVA Sole Machine", description: "Started CMEVA sole machine operations" },
        { month: "Apr", title: "Solar Plant Installation", description: "300 kWp solar plant started at SHUFAB" },
        { month: "May", title: "In-house Compounding", description: "Commencement of in-house compounding process" },
        { month: "Jun", title: "Skechers Development Centre", description: "Inauguration at Manesar unit" },
      ],
    },
    {
      year: "2025",
      events: [
        { month: "May", title: "Bahadurgarh Plant", description: "Operations commenced at Bahadurgarh plant" },
        { month: "Aug", title: "Rubber Compounding", description: "Rubber compounding and press started in Unit-3" },
      ],
    },
  ]

  return (
    <section id="milestones" ref={sectionRef} className="py-20 bg-muted" aria-labelledby="milestones-heading">
      <div className="container-responsive">
        <div
          className={`text-center mb-16 transition-all duration-1000 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 id="milestones-heading" className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our <span className="text-primary">Milestones</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-6" role="presentation"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A journey of growth, innovation, and strategic partnerships from 2019 to 2025
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-1/2 w-1 bg-gradient-to-b from-primary to-secondary h-full rounded-full"></div>

          <div className="space-y-12">
            {milestones.map((yearData, yearIndex) => (
              <div
                key={yearData.year}
                className={`transition-all duration-1000 ease-out ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${(yearIndex + 1) * 200}ms` }}
              >
                <div className="flex items-center justify-start md:justify-center mb-8 pl-12 md:pl-0">
                  <div className="bg-primary text-primary-foreground px-6 py-3 md:px-8 md:py-4 rounded-2xl shadow-lg">
                    <h3 className="text-2xl md:text-3xl font-bold">{yearData.year}</h3>
                  </div>
                </div>

                <div className="space-y-6 md:space-y-0 md:grid md:grid-cols-1 lg:grid-cols-2 md:gap-8 lg:gap-16">
                  {yearData.events.map((event, eventIndex) => (
                    <div
                      key={eventIndex}
                      className={`pl-12 md:pl-0 ${
                        eventIndex % 2 === 0 ? "md:text-right md:pr-8" : "md:text-left md:pl-8 lg:col-start-2"
                      }`}
                    >
                      <article className="card-enhanced group hover:shadow-xl transition-all duration-300 relative">
                        <div className="absolute -left-8 top-6 w-4 h-4 bg-secondary rounded-full border-4 border-background md:hidden"></div>

                        <div className="flex items-start gap-4">
                          <div className="flex-shrink-0">
                            <div className="w-12 h-12 bg-gradient-to-br from-secondary to-primary rounded-xl flex items-center justify-center">
                              <span className="text-white font-bold text-sm">{event.month}</span>
                            </div>
                          </div>
                          <div className="flex-1 min-w-0">
                            <h4 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors text-ellipsis-2">
                              {event.title}
                            </h4>
                            <p className="text-muted-foreground text-sm leading-relaxed text-ellipsis-3">
                              {event.description}
                            </p>
                          </div>
                        </div>
                      </article>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div
          className={`mt-20 bg-card rounded-2xl p-6 md:p-8 lg:p-12 shadow-lg transition-all duration-1000 delay-1000 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-foreground mb-4">Growth Journey</h3>
            <p className="text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              From a startup in 2019 to a leading footwear manufacturer with multiple facilities and global partnerships
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            <div className="text-center p-4 md:p-6 bg-gradient-to-br from-primary/10 to-primary/20 rounded-xl">
              <div className="text-2xl md:text-3xl font-bold text-primary mb-2">6+</div>
              <div className="text-xs md:text-sm text-muted-foreground">Years of Growth</div>
            </div>

            <div className="text-center p-4 md:p-6 bg-gradient-to-br from-secondary/10 to-secondary/20 rounded-xl">
              <div className="text-2xl md:text-3xl font-bold text-secondary mb-2">3</div>
              <div className="text-xs md:text-sm text-muted-foreground">Production Units</div>
            </div>

            <div className="text-center p-4 md:p-6 bg-gradient-to-br from-green-500/10 to-green-600/20 rounded-xl">
              <div className="text-2xl md:text-3xl font-bold text-green-600 mb-2">3</div>
              <div className="text-xs md:text-sm text-muted-foreground">Major Brand Partners</div>
            </div>

            <div className="text-center p-4 md:p-6 bg-gradient-to-br from-orange-500/10 to-orange-600/20 rounded-xl">
              <div className="text-2xl md:text-3xl font-bold text-orange-600 mb-2">20+</div>
              <div className="text-xs md:text-sm text-muted-foreground">Key Milestones</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Milestones
