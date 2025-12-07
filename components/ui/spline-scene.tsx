'use client'

import { Suspense, lazy } from 'react'
const Spline = lazy(() => import('@splinetool/react-spline'))

interface SplineSceneProps {
  scene: string
  className?: string
}

export function SplineScene({ scene, className }: SplineSceneProps) {
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
      <Spline
        scene={scene}
        className={className}
      />
    </Suspense>
  )
}
