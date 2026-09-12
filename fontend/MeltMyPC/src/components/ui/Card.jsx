import React from "react"
import { cn } from "../../lib/utils"

export function Card({ className, children, ...props }) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-zinc-800/80 bg-zinc-900/60 backdrop-blur-xl shadow-xl shadow-black/40 transition-all",
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}

export function CardHeader({ className, children, ...props }) {
  return (
    <div className={cn("p-6 pb-3 flex flex-col space-y-1.5", className)} {...props}>
      {children}
    </div>
  )
}

export function CardTitle({ className, children, ...props }) {
  return (
    <h3
      className={cn("text-xl font-semibold tracking-tight text-zinc-100", className)}
      {...props}
    >
      {children}
    </h3>
  )
}

export function CardDescription({ className, children, ...props }) {
  return (
    <p className={cn("text-sm text-zinc-400", className)} {...props}>
      {children}
    </p>
  )
}

export function CardContent({ className, children, ...props }) {
  return (
    <div className={cn("p-6 pt-0", className)} {...props}>
      {children}
    </div>
  )
}

export function CardFooter({ className, children, ...props }) {
  return (
    <div className={cn("p-6 pt-0 flex items-center", className)} {...props}>
      {children}
    </div>
  )
}
