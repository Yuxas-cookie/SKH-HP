'use client'

import { useState, useEffect } from 'react'

interface SplineSceneProps {
  scene: string
  className?: string
}

export function SplineScene({ scene, className }: SplineSceneProps) {
  const [isLoading, setIsLoading] = useState(true)
  const [hasError, setHasError] = useState(false)

  useEffect(() => {
    // Timeout for loading
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  if (hasError) {
    return (
      <div className={`${className} flex items-center justify-center bg-gradient-to-br from-black to-stone-900`}>
        <div className="text-center">
          <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-amber-500/20 to-amber-600/10 flex items-center justify-center border border-amber-500/20">
            <span className="text-5xl font-extralight text-amber-400">S</span>
          </div>
          <p className="text-amber-400/60 text-sm tracking-[0.3em] uppercase">SKH Technology</p>
        </div>
      </div>
    )
  }

  return (
    <div className={`${className} relative`}>
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/80 z-10">
          <div className="flex flex-col items-center gap-4">
            <div className="w-12 h-12 border-2 border-amber-400 border-t-transparent rounded-full animate-spin"></div>
            <span className="text-amber-400/60 text-sm tracking-wider">Loading 3D...</span>
          </div>
        </div>
      )}
      <iframe
        src={`https://my.spline.design/${scene.split('/').pop()?.replace('scene.splinecode', '')}`}
        frameBorder="0"
        width="100%"
        height="100%"
        className="absolute inset-0"
        onLoad={() => setIsLoading(false)}
        onError={() => setHasError(true)}
        allow="autoplay"
      />
    </div>
  )
}
