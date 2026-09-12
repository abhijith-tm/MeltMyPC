import React from "react"
import { Button } from "./ui/Button"
import { Badge } from "./ui/Badge"
import { Zap, SlidersHorizontal, Shield, Cpu, Flame } from "lucide-react"

export function Hero({ onScan, onSelectManual, isScanning }) {
  return (
    <section className="relative overflow-hidden pt-12 pb-20 md:pt-16 md:pb-24 flex flex-col items-center justify-center text-center px-4">
      
      {/* Background ambient flame glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[400px] bg-gradient-to-tr from-orange-600/20 via-amber-500/15 to-red-600/20 blur-[130px] pointer-events-none -z-10 rounded-full" />

      {/* Top Status Pill */}
      <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-orange-500/30 bg-gradient-to-r from-orange-500/10 via-amber-500/10 to-red-500/10 mb-8 backdrop-blur-md shadow-sm shadow-orange-500/10">
        <Flame className="w-3.5 h-3.5 text-amber-400 fill-amber-400 animate-pulse" />
        <span className="text-[11px] font-mono font-bold tracking-widest text-amber-300 uppercase">
          Zero-Download Game Benchmark
        </span>
      </div>

      {/* Stylized MeltMyPC Heading */}
      <div className="relative mb-6 max-w-4xl mx-auto">
        <div className="absolute -inset-x-10 -inset-y-6 bg-gradient-to-r from-amber-500/20 via-orange-600/25 to-red-600/20 blur-2xl opacity-60 -z-10 rounded-full pointer-events-none" />
        
        <h1 className="text-5xl sm:text-7xl md:text-8xl font-black tracking-tight uppercase select-none leading-none">
          <span className="text-zinc-100 drop-shadow-[0_2px_10px_rgba(255,255,255,0.1)]">
            MELT
          </span>
          <span className="text-zinc-500 font-bold mx-1.5 sm:mx-2">
            MY
          </span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-500 to-red-500 drop-shadow-[0_4px_30px_rgba(249,115,22,0.5)]">
            PC
          </span>
        </h1>

        {/* Dynamic Flame Divider & Tagline */}
        <div className="flex items-center justify-center gap-3 sm:gap-4 mt-4 sm:mt-5">
          <div className="h-[2px] w-10 sm:w-20 bg-gradient-to-r from-transparent to-amber-500" />
          <span className="text-xs sm:text-sm tracking-[0.25em] font-mono uppercase font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-orange-400 to-red-400">
            Will it run, or will it melt?
          </span>
          <div className="h-[2px] w-10 sm:w-20 bg-gradient-to-l from-transparent to-amber-500" />
        </div>
      </div>

      {/* Sub-copy */}
      <p className="text-zinc-400 text-sm sm:text-base md:text-lg max-w-xl mx-auto font-normal leading-relaxed mb-10">
        Find out what your PC can actually play in 1 click. Instant WebGL scan with zero installers, zero downloads, and zero risk.
      </p>

      {/* Wireframe Core Actions: Centered Button Stack */}
      <div className="flex flex-col items-center gap-5 w-full max-w-md">
        
        {/* Wireframe CTA 1: "Scan my pc specs" */}
        <Button
          size="xl"
          variant="cyan"
          onClick={onScan}
          disabled={isScanning}
          className="w-full sm:w-auto min-w-[280px] sm:min-w-[320px] py-4 text-xl tracking-wide shadow-xl flame-glow-blue transition-all duration-300 hover:scale-[1.03] active:scale-[0.98]"
        >
          <Zap className={`w-6 h-6 fill-zinc-950 text-zinc-950 ${isScanning ? "animate-spin" : "animate-bounce"}`} />
          <span>{isScanning ? "Analyzing Hardware..." : "Scan my pc specs"}</span>
        </Button>

        {/* Wireframe CTA 2: "prefer to pick manually [select manually]" */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 text-sm text-zinc-400 font-mono pt-1">
          <span>prefer to pick manually</span>
          <Button
            size="sm"
            variant="emerald"
            onClick={onSelectManual}
            className="px-3.5 py-1 text-xs font-bold tracking-tight rounded-md shadow-sm flame-glow-green hover:scale-105"
          >
            <SlidersHorizontal className="w-3.5 h-3.5" />
            <span>select manually</span>
          </Button>
        </div>

      </div>

      {/* Trust Micro-Badges */}
      <div className="mt-14 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs font-mono text-zinc-500 border-t border-zinc-900/90 pt-8 max-w-xl w-full">
        <div className="flex items-center gap-2 hover:text-zinc-400 transition-colors">
          <Shield className="w-4 h-4 text-amber-500" />
          <span>100% In-Browser</span>
        </div>
        <div className="flex items-center gap-2 hover:text-zinc-400 transition-colors">
          <Zap className="w-4 h-4 text-orange-500" />
          <span>~50ms Instant Scan</span>
        </div>
        <div className="flex items-center gap-2 hover:text-zinc-400 transition-colors">
          <Cpu className="w-4 h-4 text-red-500" />
          <span>No Software Download</span>
        </div>
      </div>

    </section>
  )
}
