import React from "react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "./ui/Card"
import { Button } from "./ui/Button"
import { Badge } from "./ui/Badge"
import { Cpu, HardDrive, Monitor, AlertTriangle, CheckCircle2, Edit3, X } from "lucide-react"

export function HardwareModal({
  isOpen,
  onClose,
  rig,
  onConfirm,
  onEditSpecs,
}) {
  if (!isOpen || !rig) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <Card className="relative w-full max-w-lg border-zinc-700/80 bg-zinc-950/95 shadow-2xl flame-glow-amber">
        
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1 rounded-lg text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800/80 transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        <CardHeader>
          <div className="flex items-center gap-2 mb-1">
            <Badge variant="flame">Detected In 42ms</Badge>
          </div>
          <CardTitle className="text-2xl font-bold text-zinc-100 flex items-center gap-2">
            <span>Rig Verification</span>
          </CardTitle>
          <CardDescription className="text-zinc-400">
            Confirm your detected PC hardware before calculating game compatibility.
          </CardDescription>
        </CardHeader>

        <CardContent className="space-y-4">
          
          {/* Dual-GPU Warning Alert if Integrated */}
          {rig.isIntegrated && (
            <div className="p-3.5 rounded-xl border border-amber-500/40 bg-amber-500/10 text-amber-200 flex items-start gap-3 text-xs leading-relaxed">
              <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
              <div>
                <strong className="font-semibold block text-amber-300">Dual-GPU Laptop Detected?</strong>
                We detected your power-saving integrated GPU. If your laptop has a dedicated NVIDIA or AMD card, click <button onClick={onEditSpecs} className="underline text-amber-400 font-semibold cursor-pointer">Change Specs</button> to toggle it.
              </div>
            </div>
          )}

          {/* Hardware Specs Grid */}
          <div className="grid grid-cols-1 gap-3">
            
            {/* GPU Card */}
            <div className="flex items-center gap-3.5 p-3.5 rounded-xl border border-zinc-800 bg-zinc-900/60 hover:border-zinc-700 transition-colors">
              <div className="p-2.5 rounded-lg bg-orange-500/15 border border-orange-500/30 text-orange-400">
                <Monitor className="w-5 h-5" />
              </div>
              <div className="flex-1 min-w-0">
                <span className="text-[11px] uppercase tracking-wider text-zinc-400 font-semibold block">
                  Graphics Card (GPU)
                </span>
                <p className="text-sm sm:text-base font-bold text-zinc-100 truncate">
                  {rig.gpu}
                </p>
              </div>
              {rig.isIntegrated ? (
                <Badge variant="rough_ride" className="text-[10px]">Integrated</Badge>
              ) : (
                <Badge variant="chefs_kiss" className="text-[10px]">Dedicated</Badge>
              )}
            </div>

            {/* CPU Threads Card */}
            <div className="flex items-center gap-3.5 p-3.5 rounded-xl border border-zinc-800 bg-zinc-900/60 hover:border-zinc-700 transition-colors">
              <div className="p-2.5 rounded-lg bg-sky-500/15 border border-sky-500/30 text-sky-400">
                <Cpu className="w-5 h-5" />
              </div>
              <div className="flex-1">
                <span className="text-[11px] uppercase tracking-wider text-zinc-400 font-semibold block">
                  Processor (CPU)
                </span>
                <p className="text-sm sm:text-base font-bold text-zinc-100">
                  {rig.threads} Logical Cores / Threads
                </p>
              </div>
            </div>

            {/* RAM Card */}
            <div className="flex items-center gap-3.5 p-3.5 rounded-xl border border-zinc-800 bg-zinc-900/60 hover:border-zinc-700 transition-colors">
              <div className="p-2.5 rounded-lg bg-emerald-500/15 border border-emerald-500/30 text-emerald-400">
                <HardDrive className="w-5 h-5" />
              </div>
              <div className="flex-1">
                <span className="text-[11px] uppercase tracking-wider text-zinc-400 font-semibold block">
                  System Memory (RAM)
                </span>
                <p className="text-sm sm:text-base font-bold text-zinc-100">
                  ~{rig.ram} GB High-Speed RAM
                </p>
              </div>
            </div>

          </div>

        </CardContent>

        <CardFooter className="flex flex-col sm:flex-row gap-2.5 pt-2">
          <Button
            variant="flame"
            size="lg"
            onClick={onConfirm}
            className="w-full sm:flex-1 py-3 text-base shadow-lg shadow-orange-500/30"
          >
            <CheckCircle2 className="w-5 h-5" />
            <span>Yes, That's My Rig</span>
          </Button>

          <Button
            variant="outline"
            size="lg"
            onClick={onEditSpecs}
            className="w-full sm:w-auto py-3 text-sm border-zinc-700 hover:bg-zinc-800"
          >
            <Edit3 className="w-4 h-4" />
            <span>Edit Specs</span>
          </Button>
        </CardFooter>

      </Card>
    </div>
  )
}
