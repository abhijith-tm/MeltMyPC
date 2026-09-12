import React from "react"
import { Flame } from "lucide-react"

export function TierFilter({
  activeTier,
  onSelectTier,
  counts,
}) {
  const tabs = [
    { id: "all", label: "All Games", icon: "🔥", count: counts.all },
    { id: "chefs_kiss", label: "Chef's Kiss", icon: "🤌", count: counts.chefs_kiss, color: "hover:border-emerald-500/50" },
    { id: "playable", label: "Playable", icon: "🕹️", count: counts.playable, color: "hover:border-sky-500/50" },
    { id: "rough_ride", label: "Rough Ride", icon: "🪑", count: counts.rough_ride, color: "hover:border-amber-500/50" },
    { id: "potato", label: "Potato Tier", icon: "🥔", count: counts.potato, color: "hover:border-red-500/50" },
  ]

  return (
    <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none max-w-full">
      {tabs.map((tab) => {
        const isActive = activeTier === tab.id
        return (
          <button
            key={tab.id}
            onClick={() => onSelectTier(tab.id)}
            className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all duration-200 border cursor-pointer ${
              isActive
                ? "bg-zinc-800 text-zinc-100 border-amber-500/80 shadow-md shadow-orange-500/10 font-bold"
                : "bg-zinc-900/50 text-zinc-400 border-zinc-800/80 hover:bg-zinc-800/40 hover:text-zinc-200"
            }`}
          >
            <span>{tab.icon}</span>
            <span>{tab.label}</span>
            <span
              className={`ml-1 px-1.5 py-0.5 rounded-md text-[10px] font-mono ${
                isActive ? "bg-amber-500/20 text-amber-300" : "bg-zinc-800 text-zinc-500"
              }`}
            >
              {tab.count || 0}
            </span>
          </button>
        )
      })}
    </div>
  )
}
