import React from "react"
import { cn } from "../../lib/utils"

export function Badge({ className, variant = "default", children, ...props }) {
  const variants = {
    default: "bg-zinc-800 text-zinc-200 border-zinc-700/60",
    outline: "border-zinc-700 text-zinc-400 bg-transparent",
    flame: "bg-gradient-to-r from-amber-500/20 to-orange-500/20 text-amber-300 border-amber-500/30",
    cyan: "bg-sky-500/15 text-sky-300 border-sky-500/30",
    emerald: "bg-emerald-500/15 text-emerald-300 border-emerald-500/30",
    // Compatibility tiers:
    chefs_kiss: "bg-emerald-500/20 text-emerald-300 border-emerald-500/40 shadow-sm shadow-emerald-500/20",
    playable: "bg-sky-500/20 text-sky-300 border-sky-500/40 shadow-sm shadow-sky-500/20",
    rough_ride: "bg-amber-500/20 text-amber-300 border-amber-500/40 shadow-sm shadow-amber-500/20",
    potato: "bg-red-500/20 text-red-300 border-red-500/40 shadow-sm shadow-red-500/20",
  }

  return (
    <div
      className={cn(
        "inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium border transition-colors",
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}
