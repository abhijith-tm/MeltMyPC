import React from "react"
import logoImg from "../assets/logo.png"
import { Badge } from "./ui/Badge"
import { Flame, ShieldCheck, Zap } from "lucide-react"

export function Navbar({ onOpenManual }) {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-zinc-800/80 bg-zinc-950/70 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Left: Logo brand from user wireframe */}
        <div className="flex items-center gap-3.5 group cursor-pointer">
          <div className="relative">
            <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-orange-500 to-red-600 opacity-40 blur group-hover:opacity-75 transition duration-300" />
            <img
              src={logoImg}
              alt="MeltMyPC Flame Logo"
              className="relative h-12 w-auto object-contain rounded-lg transition-transform group-hover:scale-105 duration-200"
            />
          </div>
          <div className="flex flex-col">
            <span className="font-extrabold text-xl tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-500 to-red-500 uppercase drop-shadow-sm font-mono">
              MeltMyPC
            </span>
            <span className="text-[10px] tracking-widest text-zinc-400 uppercase font-semibold -mt-0.5">
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
