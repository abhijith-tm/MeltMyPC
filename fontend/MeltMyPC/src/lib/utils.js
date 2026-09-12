import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"

/**
 * Standard shadcn helper function to merge Tailwind class names cleanly.
 * - clsx: handles conditional class logic (e.g. isActive && 'bg-amber-500')
 * - twMerge: resolves conflicting Tailwind classes (e.g. 'px-2' vs 'px-4')
 */
export function cn(...inputs) {
  return twMerge(clsx(inputs))
}
