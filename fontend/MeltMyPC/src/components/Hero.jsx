import React from "react"
import { Button } from "./ui/Button"
import { Badge } from "./ui/Badge"
import logoImg from "../assets/logo.png"
import { Zap, SlidersHorizontal, Shield, Cpu, Flame } from "lucide-react"

export function Hero({ onScan, onSelectManual, isScanning }) {
  return (
    <section className="relative overflow-hidden pt-12 pb-20 md:pt-20 md:pb-28 flex flex-col items-center justify-center text-center px-4">
      
      {/* Background ambient flame glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] bg-gradient-to-tr from-orange-600/15 via-amber-500/10 to-red-600/15 blur-[120px] pointer-events-none -z-10 rounded-full" />

      {/* Brand Artwork Centerpiece */}
      <div className="mb-6 relative group">
        <div className="absolute -inset-4 rounded-full bg-gradient-to-t from-red-500/30 to-amber-500/30 blur-xl opacity-70 group-hover:opacity-100 transition-opacity duration-500" />
        <img
          src={logoImg}
          alt="MeltMyPC Flame Logo"
          className="relative w-36 sm:w-44 md:w-52 h-auto mx-auto drop-shadow-[0_10px_20px_rgba(239,68,68,0.35)] transition-transform duration-300 hover:scale-105"
        />
      </div>

      {/* Primary Headline & Sub-copy */}
      <div className="max-w-3xl mx-auto mb-10 space-y-3">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-zinc-100 uppercase">
          Will it run, or will it{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-500 to-red-500">
            melt?
          </span>
        </h1>
        <p className="text-zinc-400 text-base sm:text-lg max-w-xl mx-auto font-normal">
          Find out what your PC can actually play in 1 click. Zero installers, zero software downloads, zero security warnings.
        </p>
      </div>

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
