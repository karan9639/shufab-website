"use client"

import { useState, useEffect, Suspense, lazy } from "react"
import ErrorBoundary from "./components/ErrorBoundary"
import LoadingSpinner from "./components/LoadingSpinner"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Footer from "./components/Footer"

const About = lazy(() => import("./components/About"))
const GroupCompanies = lazy(() => import("./components/GroupCompanies"))
const ManagementTeam = lazy(() => import("./components/ManagementTeam"))
const Milestones = lazy(() => import("./components/Milestones"))
const OtherVerticals = lazy(() => import("./components/OtherVerticals"))
const Quality = lazy(() => import("./components/Quality"))
const Compliance = lazy(() => import("./components/Compliance"))
const Conclusion = lazy(() => import("./components/Conclusion"))

function App() {
  const [isLoading, setIsLoading] = useState(true)
  const [appError, setAppError] = useState(null)

  useEffect(() => {
    const initializeApp = async () => {
      try {
        // Enable smooth scrolling for anchor links
        document.documentElement.style.scrollBehavior = "smooth"

        // Add scroll padding to account for fixed navbar
        document.documentElement.style.scrollPaddingTop = "80px"

        // Optimize animations for reduced motion preference
        const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)")
        if (prefersReducedMotion.matches) {
          document.documentElement.style.setProperty("--animation-duration", "0.01ms")
        }

        const criticalImages = ["/assets/DSC0594min.jpg", "/assets/DSC0579min.jpg", "/assets/AlpineLogoColour.png"]

        const imagePromises = criticalImages.map((src) => {
          return new Promise((resolve) => {
            const img = new Image()
            img.onload = () => resolve({ src, success: true })
            img.onerror = () => resolve({ src, success: false })
            img.src = src
          })
        })

        const imageResults = await Promise.all(imagePromises)
        const failedImages = imageResults.filter((result) => !result.success)

        if (failedImages.length > 0) {
          console.warn(
            "Some critical images failed to load:",
            failedImages.map((img) => img.src),
          )
        }

        setIsLoading(false)
      } catch (error) {
        console.error("App initialization error:", error)
        setAppError(error)
        setIsLoading(false)
      }
    }

    const timer = setTimeout(initializeApp, 100)

    return () => {
      clearTimeout(timer)
      document.documentElement.style.scrollBehavior = "auto"
    }
  }, [])

  if (appError) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center px-4">
        <div className="text-center max-w-md">
          <h1 className="text-2xl font-bold text-foreground mb-4">Failed to Load Application</h1>
          <p className="text-muted-foreground mb-6">
            There was an error loading the application. Please try refreshing the page.
          </p>
          <button
            onClick={() => window.location.reload()}
            className="btn-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
          >
            Refresh Page
          </button>
        </div>
      </div>
    )
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <LoadingSpinner size="large" text="Loading Shufab..." />
      </div>
    )
  }

  return (
    <ErrorBoundary>
      <div className="App min-h-screen bg-background text-foreground overflow-x-hidden">
        <header>
          <Navbar />
        </header>

        <main id="main-content">
          <Hero />

          <ErrorBoundary>
            <Suspense fallback={<LoadingSpinner text="Loading About section..." />}>
              <About />
            </Suspense>
          </ErrorBoundary>

          <ErrorBoundary>
            <Suspense fallback={<LoadingSpinner text="Loading Group Companies..." />}>
              <GroupCompanies />
            </Suspense>
          </ErrorBoundary>

          <ErrorBoundary>
            <Suspense fallback={<LoadingSpinner text="Loading Management Team..." />}>
              <ManagementTeam />
            </Suspense>
          </ErrorBoundary>

          <ErrorBoundary>
            <Suspense fallback={<LoadingSpinner text="Loading Milestones..." />}>
              <Milestones />
            </Suspense>
          </ErrorBoundary>

          <ErrorBoundary>
            <Suspense fallback={<LoadingSpinner text="Loading Other Verticals..." />}>
              <OtherVerticals />
            </Suspense>
          </ErrorBoundary>

          <ErrorBoundary>
            <Suspense fallback={<LoadingSpinner text="Loading Quality section..." />}>
              <Quality />
            </Suspense>
          </ErrorBoundary>

          <ErrorBoundary>
            <Suspense fallback={<LoadingSpinner text="Loading Compliance..." />}>
              <Compliance />
            </Suspense>
          </ErrorBoundary>

          <ErrorBoundary>
            <Suspense fallback={<LoadingSpinner text="Loading Conclusion..." />}>
              <Conclusion />
            </Suspense>
          </ErrorBoundary>
        </main>

        <Footer />
        <ScrollToTop />
      </div>
    </ErrorBoundary>
  )
}

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    let ticking = false

    const toggleVisibility = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          if (window.pageYOffset > 300) {
            setIsVisible(true)
          } else {
            setIsVisible(false)
          }
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener("scroll", toggleVisibility, { passive: true })
    return () => window.removeEventListener("scroll", toggleVisibility)
  }, [])

  const scrollToTop = () => {
    try {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      })
    } catch (error) {
      // Fallback for older browsers
      window.scrollTo(0, 0)
    }
  }

  return (
    <button
      className={`fixed bottom-8 right-8 z-50 w-12 h-12 bg-primary text-primary-foreground rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 no-print ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
      }`}
      onClick={scrollToTop}
      aria-label="Scroll to top"
    >
      <svg className="w-6 h-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
      </svg>
    </button>
  )
}

export default App
