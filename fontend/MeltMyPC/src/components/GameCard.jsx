import React, { useState } from "react"
import { Card } from "./ui/Card"
import { Badge } from "./ui/Badge"
import { Button } from "./ui/Button"
import { ChevronDown, ChevronUp, Sparkles, Cpu, HardDrive, Monitor, CheckCircle, AlertCircle } from "lucide-react"

export function GameCard({ game, userRig, tierInfo }) {
  const [isExpanded, setIsExpanded] = useState(false)
  const [showAiTip, setShowAiTip] = useState(false)

  const isRoughRide = tierInfo.tier === "rough_ride"

  // Border glow per tier
  const tierBorderStyles = {
    chefs_kiss: "hover:border-emerald-500/50 hover:shadow-emerald-500/10",
    playable: "hover:border-sky-500/50 hover:shadow-sky-500/10",
    rough_ride: "hover:border-amber-500/50 hover:shadow-amber-500/10",
    potato: "hover:border-red-500/50 hover:shadow-red-500/10",
  }

  return (
    <Card className={`overflow-hidden border-zinc-800 bg-zinc-900/50 transition-all duration-300 hover:scale-[1.01] flex flex-col ${tierBorderStyles[tierInfo.tier] || ""}`}>
      
      {/* Cover Art Banner */}
      <div className="relative h-44 w-full overflow-hidden bg-zinc-950">
        <img
          src={game.coverUrl}
          alt={game.title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent" />
        
        {/* Tier badge at top right */}
        <div className="absolute top-3 right-3">
          <Badge variant={tierInfo.tier} className="text-xs px-3 py-1 font-bold backdrop-blur-md">
            <span>{tierInfo.badgeIcon}</span>
            <span>{tierInfo.label}</span>
          </Badge>
        </div>

        {/* FPS estimate pill at bottom left */}
        <div className="absolute bottom-3 left-3">
          <span className="px-2.5 py-1 rounded-md bg-zinc-950/80 border border-zinc-800 text-[11px] font-mono text-zinc-300 backdrop-blur-sm">
            ⚡ {tierInfo.fpsEstimate}
          </span>
        </div>
      </div>

      {/* Card Body */}
      <div className="p-4 flex-1 flex flex-col justify-between">
        <div>
          <div className="flex items-center justify-between gap-2">
            <span className="text-[11px] font-mono uppercase tracking-wider text-amber-500 font-semibold">
              {game.genre}
            </span>
            <span className="text-[11px] font-mono text-zinc-500">
              {game.releaseYear}
            </span>
          </div>

          <h4 className="text-lg font-bold text-zinc-100 mt-1 line-clamp-1">
            {game.title}
          </h4>
        </div>

        {/* Action Toggles */}
        <div className="mt-4 pt-3 border-t border-zinc-800/80 flex items-center justify-between gap-2">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="flex items-center gap-1.5 text-xs text-zinc-400 hover:text-zinc-200 transition-colors font-mono cursor-pointer"
          >
            <span>Hardware Delta</span>
            {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
          </button>

          {isRoughRide && (
            <Button
              size="sm"
              variant="outline"
              onClick={() => setShowAiTip(!showAiTip)}
              className="text-xs py-1 px-2.5 border-amber-500/40 bg-amber-500/10 text-amber-300 hover:bg-amber-500/20"
            >
              <Sparkles className="w-3 h-3 text-amber-400" />
              <span>AI Tuning Tips</span>
            </Button>
          )}
        </div>

        {/* Expandable Hardware Delta Drawer */}
        {isExpanded && (
          <div className="mt-3 pt-3 border-t border-zinc-800/60 space-y-2 text-xs font-mono animate-in slide-in-from-top-2 duration-200">
            <div className="flex justify-between items-center text-zinc-400">
              <span className="flex items-center gap-1.5">
                <Monitor className="w-3.5 h-3.5 text-orange-400" />
                <span>GPU Score:</span>
              </span>
              <span className="text-zinc-200 font-bold">
                {tierInfo.userGpuScore} <span className="text-zinc-500 font-normal">/ Rec {game.recGpuScore}</span>
              </span>
            </div>

            <div className="flex justify-between items-center text-zinc-400">
              <span className="flex items-center gap-1.5">
                <HardDrive className="w-3.5 h-3.5 text-emerald-400" />
                <span>RAM Needed:</span>
              </span>
              <span className="text-zinc-200 font-bold">
                {userRig.ram}GB <span className="text-zinc-500 font-normal">/ Min {game.minRam}GB</span>
              </span>
            </div>

            <div className="flex justify-between items-center text-zinc-400">
              <span className="flex items-center gap-1.5">
                <Cpu className="w-3.5 h-3.5 text-sky-400" />
                <span>CPU Threads:</span>
              </span>
              <span className="text-zinc-200 font-bold">
                {userRig.threads} <span className="text-zinc-500 font-normal">/ Min {game.minThreads}</span>
              </span>
            </div>
          </div>
        )}

        {/* AI Graphic Tuning Tip Card for Rough Ride */}
        {showAiTip && game.aiOptimizationTip && (
          <div className="mt-3 p-3 rounded-xl border border-amber-500/30 bg-amber-500/10 text-xs text-amber-200 leading-relaxed animate-in fade-in duration-200">
            <div className="flex items-center gap-1.5 font-bold text-amber-300 mb-1">
              <Sparkles className="w-3.5 h-3.5" />
              <span>AI Recommended Settings</span>
            </div>
            <p className="text-zinc-300 font-sans text-xs">
              {game.aiOptimizationTip}
            </p>
          </div>
        )}

      </div>

    </Card>
  )
}
