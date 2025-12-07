"use client"

import { useMotionValue, motion, useMotionTemplate } from "framer-motion"
import React, { useState, useEffect, useRef } from "react"

export const EvervaultCard = ({
  children,
  className = "",
}: {
  children?: React.ReactNode
  className?: string
}) => {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const [randomString, setRandomString] = useState("")
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const str = generateRandomString(20000)
    setRandomString(str)
  }, [])

  function onMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect()
    mouseX.set(clientX - left)
    mouseY.set(clientY - top)

    const str = generateRandomString(20000)
    setRandomString(str)
  }

  return (
    <div
      ref={containerRef}
      className={`absolute inset-0 flex items-center justify-center ${className}`}
    >
      <div
        onMouseMove={onMouseMove}
        className="absolute inset-0 overflow-hidden bg-transparent flex items-center justify-center"
      >
        <CardPattern
          mouseX={mouseX}
          mouseY={mouseY}
          randomString={randomString}
        />
      </div>
      {children && (
        <div className="relative z-10 flex items-center justify-center">
          {children}
        </div>
      )}
    </div>
  )
}

function CardPattern({ mouseX, mouseY, randomString }: { mouseX: any; mouseY: any; randomString: string }) {
  const maskImage = useMotionTemplate`radial-gradient(250px at ${mouseX}px ${mouseY}px, white, transparent)`
  const style = { maskImage, WebkitMaskImage: maskImage }

  return (
    <div className="pointer-events-none absolute inset-0">
      {/* Background random strings - always visible but dim */}
      <div className="absolute inset-0">
        <p className="absolute inset-0 text-xs break-words whitespace-pre-wrap text-white/[0.03] font-mono leading-5 select-none">
          {randomString}
        </p>
      </div>

      {/* Highlighted random strings following cursor */}
      <motion.div
        className="absolute inset-0"
        style={style}
      >
        <p className="absolute inset-0 text-xs break-words whitespace-pre-wrap text-amber-400 font-mono font-bold leading-5 select-none">
          {randomString}
        </p>
      </motion.div>
    </div>
  )
}

const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"

export const generateRandomString = (length: number) => {
  let result = ""
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length))
  }
  return result
}

// Icon component for the effect
export function Icon({ className, ...rest }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  )
}
