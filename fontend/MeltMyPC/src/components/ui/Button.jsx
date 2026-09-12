import React from "react"
import { cn } from "../../lib/utils"

/**
 * shadcn-style Button component with gaming/flame variants.
 * 
 * Variants:
 * - flame: Molten fire gradient with amber/orange glow
 * - cyan: High-visibility bright sky blue (matches the wireframe "Scan my pc specs")
 * - emerald: Soft neon green (matches the wireframe "select manually")
 * - outline: Dark glass border
 * - ghost: Subtle hover
 */
export function Button({
  className,
  variant = "flame",
  size = "md",
  children,
  ...props
}) {
  const baseStyles = "inline-flex items-center justify-center font-medium transition-all duration-200 cursor-pointer disabled:opacity-50 disabled:pointer-events-none rounded-xl select-none"

  const variants = {
    flame: "bg-gradient-to-r from-amber-500 via-orange-500 to-red-600 text-white font-semibold shadow-lg shadow-orange-600/30 hover:shadow-orange-500/50 hover:brightness-110 active:scale-[0.98] border border-amber-400/30",
    cyan: "bg-sky-400 text-zinc-950 font-bold hover:bg-sky-300 shadow-lg shadow-sky-500/25 active:scale-[0.98] border-2 border-sky-300/40",
    emerald: "bg-emerald-400 text-zinc-950 font-semibold hover:bg-emerald-300 shadow-md shadow-emerald-500/25 active:scale-[0.98] border border-emerald-300/30",
    outline: "border border-zinc-800 bg-zinc-900/60 text-zinc-200 hover:bg-zinc-800/80 hover:border-zinc-700 active:scale-[0.98]",
    ghost: "text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800/50",
    secondary: "bg-zinc-800 text-zinc-100 hover:bg-zinc-700 active:scale-[0.98] border border-zinc-700/50",
  }

  const sizes = {
    sm: "px-3 py-1.5 text-xs rounded-lg gap-1.5",
    md: "px-4 py-2 text-sm rounded-lg gap-2",
    lg: "px-6 py-3 text-base rounded-xl gap-2.5",
    xl: "px-8 py-4 text-lg font-bold rounded-2xl gap-3 tracking-wide",
  }

  return (
    <button
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </button>
  )
}
