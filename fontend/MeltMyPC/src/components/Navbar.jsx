import React from "react"
import { Badge } from "./ui/Badge"
import { Flame, ShieldCheck, Zap } from "lucide-react"

export function Navbar({ onOpenManual }) {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-zinc-800/80 bg-zinc-950/70 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Left: Brand logo icon emblem & typography */}
        <div className="flex items-center gap-3 group cursor-pointer">
          <div className="relative p-2.5 rounded-xl border border-orange-500/30 bg-gradient-to-br from-orange-500/20 to-red-600/10 shadow-md shadow-orange-500/20 group-hover:border-orange-400/60 transition-all duration-300">
            <Flame className="w-5 h-5 text-orange-400 fill-orange-400 group-hover:scale-110 transition-transform duration-200" />
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-1">
              <span className="font-extrabold text-xl tracking-tight text-zinc-100 uppercase font-mono">
                MeltMy
              </span>
              <span className="font-extrabold text-xl tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-500 to-red-500 uppercase font-mono">
                PC
              </span>
            </div>
            <span className="text-[10px] tracking-widest text-zinc-500 uppercase font-mono font-medium -mt-0.5">
              Will it run, or will it melt?
            </span>
          </div>
        </div>

        {/* Right: Trust badges & Quick actions */}
        <div className="flex items-center gap-2 sm:gap-3">
          <Badge variant="flame" className="hidden sm:inline-flex py-1 px-3">
            <Zap className="w-3 h-3 text-amber-400 fill-amber-400" />
            <span>Instant WebGL Scan</span>
          </Badge>
          <Badge variant="default" className="hidden md:inline-flex py-1 px-3 text-zinc-300">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            <span>Zero Downloads</span>
          </Badge>
          <button
            onClick={onOpenManual}
            className="text-xs text-zinc-400 hover:text-amber-400 transition-colors px-2.5 py-1 rounded-md hover:bg-zinc-800/60 cursor-pointer"
          >
            Manual Rig
          </button>
        </div>

      </div>
    </header>
  )
}
