'use client'
import { useEffect, useRef, useState } from 'react'

type MorphBlobProps = {
  width?: number
  height?: number
  className?: string
  // colors for the gradient
  colorA?: string
  colorB?: string
  // motion intensity
  wobble?: number   // 0..1
  distort?: number  // px displacement scale
}

export default function MorphBlob({
  width = 520,
  height = 360,
  className = '',
  colorA = '#D1EE9E',
  colorB = '#ffffff',
  wobble = 0.6,
  distort = 18
}: MorphBlobProps) {
  const ref = useRef<SVGSVGElement>(null)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = useState(false)
  const animationRef = useRef<number>()

  // Generate ultra-smooth, rounded blob path with curves
  const generateSmoothBlobPath = (centerX: number, centerY: number, radiusX: number, radiusY: number, points: number = 24) => {
    const pathPoints = []
    
    // Generate base points with very smooth variations
    for (let i = 0; i < points; i++) {
      const angle = (i / points) * Math.PI * 2
      const randomRadiusX = radiusX * (0.8 + Math.random() * 0.4) // Tighter variation for rounder shapes
      const randomRadiusY = radiusY * (0.8 + Math.random() * 0.4)
      const x = centerX + Math.cos(angle) * randomRadiusX
      const y = centerY + Math.sin(angle) * randomRadiusY
      pathPoints.push({ x, y })
    }
    
    // Create ultra-smooth curves using cubic bezier with better control points
    let path = `M ${pathPoints[0].x},${pathPoints[0].y}`
    
    for (let i = 0; i < pathPoints.length; i++) {
      const current = pathPoints[i]
      const next = pathPoints[(i + 1) % pathPoints.length]
      const afterNext = pathPoints[(i + 2) % pathPoints.length]
      
      // Calculate control points for ultra-smooth curves
      const cp1x = current.x + (next.x - current.x) * 0.5 // Increased for smoother curves
      const cp1y = current.y + (next.y - current.y) * 0.5
      const cp2x = next.x - (afterNext.x - next.x) * 0.5
      const cp2y = next.y - (afterNext.y - next.y) * 0.5
      
      path += ` C ${cp1x},${cp1y} ${cp2x},${cp2y} ${next.x},${next.y}`
    }
    
    return path + ' Z'
  }

  // Random morphing animation
  useEffect(() => {
    const el = ref.current
    if (!el) return

    const animate = () => {
      if (!isHovered) {
        // Smooth random morphing when not hovered
        const randomFreq = 0.002 + Math.random() * 0.006
        const randomSeed = Math.floor(Math.random() * 8)
        const randomDisp = distort * (0.3 + Math.random() * 0.8)
        
        el.style.setProperty('--bf', randomFreq.toFixed(4))
        el.style.setProperty('--seed', randomSeed.toString())
        el.style.setProperty('--disp', randomDisp.toFixed(1))
      }
      
      animationRef.current = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [distort, isHovered])

  // Mouse interaction
  useEffect(() => {
    const el = ref.current
    if (!el) return

    const onMove = (e: PointerEvent) => {
      const rect = el.getBoundingClientRect()
      const x = (e.clientX - rect.left) / rect.width
      const y = (e.clientY - rect.top) / rect.height
      const nx = (x - 0.5) * 2 // -1..1
      const ny = (y - 0.5) * 2 // -1..1
      
      setMousePos({ x: nx, y: ny })
      
      // Enhanced mouse-reactive morphing
      const mouseInfluence = Math.sqrt(nx * nx + ny * ny)
      const enhancedFreq = 0.005 + mouseInfluence * 0.015
      const enhancedDisp = distort * (1 + mouseInfluence * 2)
      const seed = Math.floor(Math.random() * 20) + 1
      
      el.style.setProperty('--mx', nx.toFixed(3))
      el.style.setProperty('--my', ny.toFixed(3))
      el.style.setProperty('--bf', enhancedFreq.toFixed(4))
      el.style.setProperty('--disp', enhancedDisp.toFixed(1))
      el.style.setProperty('--seed', seed.toString())
      
      // Shift the gradient center more dramatically
      const gx = 50 + nx * 25
      const gy = 50 + ny * 25
      el.style.setProperty('--gx', `${gx}%`)
      el.style.setProperty('--gy', `${gy}%`)
    }

    const onEnter = () => {
      setIsHovered(true)
    }

    const onLeave = () => {
      setIsHovered(false)
      setMousePos({ x: 0, y: 0 })
      el.style.setProperty('--mx', '0')
      el.style.setProperty('--my', '0')
      el.style.setProperty('--gx', '50%')
      el.style.setProperty('--gy', '50%')
    }

    el.addEventListener('pointermove', onMove)
    el.addEventListener('pointerenter', onEnter)
    el.addEventListener('pointerleave', onLeave)
    
    return () => {
      el.removeEventListener('pointermove', onMove)
      el.removeEventListener('pointerenter', onEnter)
      el.removeEventListener('pointerleave', onLeave)
    }
  }, [distort])

  // Generate unique ultra-smooth blob paths
  const smoothPath1 = generateSmoothBlobPath(260, 180, 200, 120, 28)
  const smoothPath2 = generateSmoothBlobPath(260, 180, 150, 90, 24)

  return (
    <svg
      ref={ref}
      className={className}
      width={width}
      height={height}
      viewBox="0 0 520 360"
      role="img"
      aria-hidden="true"
      style={{
        '--wobble': wobble,
        '--mx': mousePos.x,
        '--my': mousePos.y
      } as React.CSSProperties}
    >
      <defs>
        {/* Enhanced gradient that follows mouse */}
        <radialGradient id="g1" cx="var(--gx,50%)" cy="var(--gy,50%)" r="85%">
          <stop offset="0%" stopColor={colorA} stopOpacity="0.25" />
          <stop offset="40%" stopColor={colorA} stopOpacity="0.12" />
          <stop offset="70%" stopColor={colorA} stopOpacity="0.06" />
          <stop offset="100%" stopColor={colorB} stopOpacity="0.00" />
        </radialGradient>

        {/* Enhanced displacement filter for smooth morphing */}
        <filter id="morph" x="-30%" y="-40%" width="160%" height="180%">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="var(--bf,0.004)"
            numOctaves="2"
            seed="var(--seed,2)"
            result="noise"
          />
          <feDisplacementMap
            in="SourceGraphic"
            in2="noise"
            scale="var(--disp,12)"
            xChannelSelector="R"
            yChannelSelector="G"
          />
        </filter>

        {/* Smooth organic filter */}
        <filter id="organic" x="-20%" y="-20%" width="140%" height="140%">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.015"
            numOctaves="1"
            result="turbulence"
          />
          <feDisplacementMap
            in="SourceGraphic"
            in2="turbulence"
            scale="4"
            xChannelSelector="R"
            yChannelSelector="G"
          />
        </filter>
      </defs>

      {/* Main smooth blob shape */}
      <path
        d={smoothPath1}
        fill="url(#g1)"
        filter="url(#morph)"
        style={{
          transform: `translate(${mousePos.x * 5}px, ${mousePos.y * 5}px)`,
          transition: isHovered ? 'none' : 'transform 0.3s ease-out'
        }}
      />

      {/* Secondary smooth shape for depth */}
      <path
        d={smoothPath2}
        fill={colorA}
        opacity="0.08"
        filter="url(#organic)"
        style={{
          transform: `translate(${mousePos.x * -3}px, ${mousePos.y * -3}px)`,
          transition: isHovered ? 'none' : 'transform 0.4s ease-out'
        }}
      />

      {/* Animated turbulence for continuous morphing */}
      <animateTransform
        attributeName="transform"
        type="translate"
        values="0,0; 2,1; -1,2; 1,-1; 0,0"
        dur="8s"
        repeatCount="indefinite"
      />
    </svg>
  )
}
