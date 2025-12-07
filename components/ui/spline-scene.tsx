'use client'

import dynamic from 'next/dynamic'
import { Suspense, useState, useEffect } from 'react'

const Spline = dynamic(
  () => import('@splinetool/react-spline').then((mod) => mod.default),
  {
    ssr: false,
    loading: () => (
      <div className="w-full h-full flex items-center justify-center bg-black/50">
        <div className="flex flex-col items-center gap-4">
          <div className="w-12 h-12 border-2 border-amber-400 border-t-transparent rounded-full animate-spin"></div>
          <span className="text-amber-400/60 text-sm tracking-wider">Loading 3D...</span>
        </div>
      </div>
    ),
  }
)

interface SplineSceneProps {
  scene: string
  className?: string
}

export function SplineScene({ scene, className }: SplineSceneProps) {
  const [hasError, setHasError] = useState(false)
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  if (!isClient) {
    return (
      <div className="w-full h-full flex items-center justify-center bg-black/50">
        <div className="flex flex-col items-center gap-4">
          <div className="w-12 h-12 border-2 border-amber-400 border-t-transparent rounded-full animate-spin"></div>
          <span className="text-amber-400/60 text-sm tracking-wider">Loading 3D...</span>
        </div>
      </div>
    )
  }

  if (hasError) {
    return (
      <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-black to-stone-900">
        <div className="text-center">
          <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-br from-amber-500/20 to-amber-600/10 flex items-center justify-center">
            <span className="text-4xl text-amber-400">S</span>
          </div>
          <p className="text-amber-400/60 text-sm tracking-wider">SKH Technology</p>
        </div>
      </div>
    )
  }

  return (
    <Suspense
      fallback={
        <div className="w-full h-full flex items-center justify-center bg-black/50">
          <div className="flex flex-col items-center gap-4">
            <div className="w-12 h-12 border-2 border-amber-400 border-t-transparent rounded-full animate-spin"></div>
            <span className="text-amber-400/60 text-sm tracking-wider">Loading 3D...</span>
          </div>
        </div>
      }
    >
      <ErrorBoundaryWrapper onError={() => setHasError(true)}>
        <Spline
          scene={scene}
          className={className}
          onError={() => setHasError(true)}
        />
      </ErrorBoundaryWrapper>
    </Suspense>
  )
}

// Simple error boundary wrapper
function ErrorBoundaryWrapper({
  children,
  onError
}: {
  children: React.ReactNode
  onError: () => void
}) {
  useEffect(() => {
    const handleError = (event: ErrorEvent) => {
      if (event.message.includes('Spline') || event.message.includes('constructor')) {
        onError()
      }
    }
    window.addEventListener('error', handleError)
    return () => window.removeEventListener('error', handleError)
  }, [onError])

  return <>{children}</>
}
