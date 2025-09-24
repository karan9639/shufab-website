"use client"

const LoadingSpinner = ({ size = "default", text = "Loading..." }) => {
  const sizeClasses = {
    small: "w-4 h-4",
    default: "w-8 h-8",
    large: "w-12 h-12",
  }

  return (
    <div className="flex flex-col items-center justify-center py-8" role="status" aria-live="polite">
      <div
        className={`${sizeClasses[size]} border-4 border-primary border-t-transparent rounded-full animate-spin mb-4`}
        aria-hidden="true"
      ></div>
      <p className="text-muted-foreground text-sm">{text}</p>
      <span className="sr-only">Loading content, please wait...</span>
    </div>
  )
}

export default LoadingSpinner
