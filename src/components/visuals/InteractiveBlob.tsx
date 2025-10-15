'use client'
import { useEffect, useRef, useState } from 'react'

type Props = {
  width?: number
  height?: number
  fill?: string               // blob color
  pointsCount?: number        // control points around the blob
  baseRadius?: number         // nominal radius
  noiseAmplitude?: number     // how far self-morphing pushes
  noiseSpeed?: number         // how fast it morphs
  mouseStrength?: number      // how strong the "liquify pencil" is
  mouseRadius?: number        // area of influence in px
  relax?: number              // how quickly it relaxes (0..1)
  className?: string
  // Gradient and blur settings
  gradientStart?: string      // gradient start color
  gradientEnd?: string        // gradient end color
  gradientDirection?: string   // gradient direction (e.g., "45deg", "to right")
  gradientStartOpacity?: number // gradient start opacity (0-1)
  gradientEndOpacity?: number   // gradient end opacity (0-1)
  blurAmount?: number         // blur amount in px
  // Percentage-based sizing and positioning
  widthPercent?: number        // width as percentage of container (0-100)
  heightPercent?: number       // height as percentage of container (0-100)
  leftPercent?: number         // left position as percentage (0-100)
  topPercent?: number          // top position as percentage (0-100)
  rightPercent?: number        // right position as percentage (0-100)
  bottomPercent?: number        // bottom position as percentage (0-100)
}

export default function InteractiveBlob({
  width = 520,
  height = 360,
  fill = '#ffffff',
  pointsCount = 32,
  baseRadius = 140,
  noiseAmplitude = 18,
  noiseSpeed = 0.35,
  mouseStrength = 30,
  mouseRadius = 140,
  relax = 0.12,
  className = '',
  // Gradient and blur defaults
  gradientStart = '#D1EE9E',
  gradientEnd = '#A8D8EA',
  gradientDirection = '45deg',
  gradientStartOpacity = 0.2,
  gradientEndOpacity = 0.2,
  blurAmount = 200,
  // Percentage defaults
  widthPercent,
  heightPercent,
  leftPercent,
  topPercent,
  rightPercent,
  bottomPercent,
}: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const rafRef = useRef<number>()
  const pointer = useRef<{x:number,y:number,down:boolean}|null>(null)
  const [isHovered, setIsHovered] = useState(false)
  
  // Keep canvas size constant to avoid jumping
  const canvasWidth = width
  const canvasHeight = height

  // ------- tiny 2D simplex noise (public domain-ish) -------
  const noise = useRef(
    (() => {
      // Simplex-ish noise adapted for small blobs (fast, good enough)
      const grad3: [number, number][] = [
        [1,1],[-1,1],[1,-1],[-1,-1],[1,0],[-1,0],[0,1],[0,-1]
      ]
      const p = new Uint8Array(256)
      for (let i=0;i<256;i++) p[i]=i
      for (let i=255;i>0;i--) { const j=Math.floor(Math.random()*(i+1)); [p[i],p[j]]=[p[j],p[i]] }
      const perm = new Uint8Array(512); for (let i=0;i<512;i++) perm[i]=p[i&255]
      function dot(g:[number,number], x:number,y:number){ return g[0]*x+g[1]*y }
      function snoise(x:number,y:number){
        const F=0.366025403, G=0.211324865
        const s=(x+y)*F
        let i=Math.floor(x+s), j=Math.floor(y+s)
        const t=(i+j)*G
        const X0=i-t, Y0=j-t
        const x0=x-X0, y0=y-Y0
        const i1 = x0>y0?1:0, j1 = x0>y0?0:1
        const x1=x0-i1+G, y1=y0-j1+G
        const x2=x0-1+2*G, y2=y0-1+2*G
        const ii=i&255, jj=j&255
        let n0=0,n1=0,n2=0
        let t0=0.5 - x0*x0 - y0*y0; if (t0>0){ t0*=t0; n0 = t0*t0*dot(grad3[perm[ii+perm[jj]]%8], x0,y0) }
        let t1=0.5 - x1*x1 - y1*y1; if (t1>0){ t1*=t1; n1 = t1*t1*dot(grad3[perm[ii+i1+perm[jj+j1]]%8], x1,y1) }
        let t2=0.5 - x2*x2 - y2*y2; if (t2>0){ t2*=t2; n2 = t2*t2*dot(grad3[perm[ii+1+perm[jj+1]]%8], x2,y2) }
        return 70*(n0+n1+n2)
      }
      return (x:number,y:number)=>snoise(x,y)
    })()
  )

  useEffect(() => {
    const c = canvasRef.current
    if (!c) return
    const ctx = c.getContext('2d')!
    let t = 0

    const cx = width/2, cy = height/2

    // Helper function to convert hex to rgba with custom opacity
    const hexToRgba = (hex: string, opacity: number): string => {
      // Remove # if present
      hex = hex.replace('#', '')
      
      // Parse hex values
      const r = parseInt(hex.substring(0, 2), 16)
      const g = parseInt(hex.substring(2, 4), 16)
      const b = parseInt(hex.substring(4, 6), 16)
      
      return `rgba(${r}, ${g}, ${b}, ${opacity})`
    }

    // Control points around a circle
    const pts = Array.from({length: pointsCount}, (_,i) => {
      const a = (i/pointsCount) * Math.PI*2
      return { a, r: baseRadius, dr: 0, v: 0 } // dr=offset, v=velocity (for springy motion)
    })

    // Track pointer
    const onMove = (e: PointerEvent) => {
      const r = c.getBoundingClientRect()
      const x = e.clientX - r.left
      const y = e.clientY - r.top
      pointer.current = { x, y, down: e.pressure>0 || e.buttons>0 }
    }
    const onLeave = () => { pointer.current = null }
    c.addEventListener('pointermove', onMove)
    c.addEventListener('pointerdown', onMove)
    c.addEventListener('pointerup', onMove)
    c.addEventListener('pointerleave', onLeave)

    // Respect reduced motion
    const prefersReduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const speed = prefersReduce ? 0 : noiseSpeed

    function step() {
      t += 0.016 * speed

      // Hover effect disabled for now
      const hoverMultiplier = 1
      const enhancedNoiseAmplitude = noiseAmplitude * hoverMultiplier
      const enhancedMouseRadius = mouseRadius * hoverMultiplier
      
      // self-morphing via noise + relax back to base
      for (const p of pts) {
        const n = noise.current(Math.cos(p.a)*0.6 + t, Math.sin(p.a)*0.6 - t)
        const target = baseRadius + n * enhancedNoiseAmplitude
        // spring toward target + toward zero on the mouse-induced displacement
        const desired = target + p.dr
        p.v += (desired - p.r) * 0.08
        p.v *= 0.86
        p.r += p.v

        // decay the mouse deformation gradually
        p.dr *= (1 - relax*0.5)
      }

      // Mouse "liquify pencil" — push/pull nearest control points with gaussian falloff
      if (pointer.current) {
        const { x:mx, y:my, down } = pointer.current
        for (const p of pts) {
          const px = cx + Math.cos(p.a)*p.r
          const py = cy + Math.sin(p.a)*p.r
          const dx = px - mx
          const dy = py - my
          const d2 = dx*dx + dy*dy
          const r2 = enhancedMouseRadius*enhancedMouseRadius
          if (d2 < r2) {
            const s = Math.exp(-d2/(r2*0.6)) // smooth bell
            // If mouse is down, push stronger; otherwise gentle warp
            const dir = down ? 1 : 0.5
            p.dr += dir * mouseStrength * s
          }
        }
      }

      // render
      ctx.clearRect(0,0,canvasWidth,canvasHeight)
      ctx.save()
      ctx.translate(cx, cy)
      
      // Create gradient with separate opacity control
      const gradient = ctx.createLinearGradient(
        -baseRadius, -baseRadius, 
        baseRadius, baseRadius
      )
      
      // Convert hex colors to rgba with custom opacity
      const startColor = hexToRgba(gradientStart, gradientStartOpacity)
      const endColor = hexToRgba(gradientEnd, gradientEndOpacity)
      
      gradient.addColorStop(0, startColor)
      gradient.addColorStop(1, endColor)
      ctx.fillStyle = gradient

      // Build a smooth path using quadratic Beziers between midpoints
      ctx.beginPath()
      const getPt = (i:number) => {
        const p = pts[(i+pointsCount)%pointsCount]
        return [ Math.cos(p.a)*p.r, Math.sin(p.a)*p.r ] as const
      }
      const start = getPt(0)
      ctx.moveTo(start[0], start[1])
      for (let i=0; i<pointsCount; i++){
        const p1 = getPt(i)
        const p2 = getPt(i+1)
        const mx = (p1[0]+p2[0])/2
        const my = (p1[1]+p2[1])/2
        ctx.quadraticCurveTo(p1[0], p1[1], mx, my)
      }
      ctx.closePath()
      ctx.fill()

      ctx.restore()
      rafRef.current = requestAnimationFrame(step)
    }
    rafRef.current = requestAnimationFrame(step)

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
      c.removeEventListener('pointermove', onMove)
      c.removeEventListener('pointerdown', onMove)
      c.removeEventListener('pointerup', onMove)
      c.removeEventListener('pointerleave', onLeave)
    }
  }, [canvasWidth, canvasHeight, pointsCount, baseRadius, noiseAmplitude, noiseSpeed, mouseStrength, mouseRadius, relax, fill, gradientStart, gradientEnd, gradientStartOpacity, gradientEndOpacity])

  // Calculate percentage-based styles
  const percentageStyles: React.CSSProperties = {}
  
  if (widthPercent !== undefined) {
    percentageStyles.width = `${widthPercent}%`
  }
  if (heightPercent !== undefined) {
    percentageStyles.height = `${heightPercent}%`
  }
  if (leftPercent !== undefined) {
    percentageStyles.left = `${leftPercent}%`
  }
  if (topPercent !== undefined) {
    percentageStyles.top = `${topPercent}%`
  }
  if (rightPercent !== undefined) {
    percentageStyles.right = `${rightPercent}%`
  }
  if (bottomPercent !== undefined) {
    percentageStyles.bottom = `${bottomPercent}%`
  }

  return (
    <canvas
      ref={canvasRef}
      className={className}
      width={canvasWidth}
      height={canvasHeight}
      style={{ 
        display:'block',
        filter: `blur(${blurAmount}px)`,
        ...percentageStyles
      }}
      aria-hidden="true"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    />
  )
}
