import React, { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "./ui/Card"
import { Button } from "./ui/Button"
import { Badge } from "./ui/Badge"
import { Monitor, Cpu, HardDrive, Flame, X, Check } from "lucide-react"

const POPULAR_GPUS = [
  "NVIDIA GeForce RTX 4060",
  "NVIDIA GeForce RTX 3060",
  "NVIDIA GeForce GTX 1650",
  "AMD Radeon RX 6600",
  "Intel Iris Xe Graphics",
  "NVIDIA GeForce RTX 3050",
]

const POPULAR_CPUS = [
  { name: "Intel Core i5-12400F", threads: 12 },
  { name: "AMD Ryzen 5 5600X", threads: 12 },
  { name: "AMD Ryzen 5 3600", threads: 12 },
  { name: "Intel Core i7-13700K", threads: 24 },
  { name: "Intel Core i3-12100", threads: 8 },
]

const RAM_OPTIONS = [8, 16, 32, 64]

export function ManualSelector({
  isOpen,
  onClose,
  initialRig,
  onSubmit,
}) {
  const [gpu, setGpu] = useState(initialRig?.gpu || "NVIDIA GeForce RTX 3060")
  const [cpu, setCpu] = useState("AMD Ryzen 5 5600X")
  const [threads, setThreads] = useState(initialRig?.threads || 12)
  const [ram, setRam] = useState(initialRig?.ram || 16)

  if (!isOpen) return null

  const handleSelectGpu = (selected) => {
    setGpu(selected)
  }

  const handleSelectCpu = (selectedCpu) => {
    setCpu(selectedCpu.name)
    setThreads(selectedCpu.threads)
  }

  const handleSubmit = (e) => {
    e?.preventDefault()
    onSubmit({
      gpu,
      cpu,
      threads,
      ram,
      isIntegrated: gpu.toLowerCase().includes("intel") || gpu.toLowerCase().includes("iris"),
    })
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <Card className="relative w-full max-w-xl border-zinc-700/80 bg-zinc-950/95 shadow-2xl flame-glow-amber max-h-[90vh] overflow-y-auto">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1 rounded-lg text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800/80 transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        <CardHeader>
          <div className="flex items-center gap-2 mb-1">
            <Badge variant="emerald">Manual Rig Configuration</Badge>
          </div>
          <CardTitle className="text-2xl font-bold text-zinc-100 flex items-center gap-2">
            Configure Your Hardware
          </CardTitle>
          <CardDescription className="text-zinc-400">
            Pick your specific graphics card, processor, and memory to check gameplay.
          </CardDescription>
        </CardHeader>

        <CardContent className="space-y-6">
          
          {/* Section 1: GPU */}
          <div className="space-y-2.5">
            <label className="text-xs uppercase tracking-wider font-semibold text-zinc-300 flex items-center gap-2">
              <Monitor className="w-4 h-4 text-orange-400" />
              <span>Graphics Card (GPU)</span>
            </label>
            <input
              type="text"
              value={gpu}
              onChange={(e) => setGpu(e.target.value)}
              placeholder="e.g. NVIDIA RTX 3060, GTX 1650, RX 6600..."
              className="w-full px-4 py-2.5 rounded-xl bg-zinc-900/90 border border-zinc-700 text-zinc-100 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500 transition-all font-mono"
            />
            {/* Quick-pick chips */}
            <div className="flex flex-wrap gap-1.5 pt-1">
              {POPULAR_GPUS.map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => handleSelectGpu(item)}
                  className={`text-xs px-2.5 py-1 rounded-lg border transition-all cursor-pointer ${
                    gpu === item
                      ? "bg-amber-500/20 border-amber-500 text-amber-300 font-semibold"
                      : "bg-zinc-900 border-zinc-800 text-zinc-400 hover:text-zinc-200 hover:border-zinc-700"
                  }`}
                >
                  {item.replace("NVIDIA GeForce ", "").replace("AMD Radeon ", "")}
                </button>
              ))}
            </div>
          </div>

          {/* Section 2: CPU */}
          <div className="space-y-2.5">
            <label className="text-xs uppercase tracking-wider font-semibold text-zinc-300 flex items-center gap-2">
              <Cpu className="w-4 h-4 text-sky-400" />
              <span>Processor (CPU)</span>
            </label>
            <input
              type="text"
              value={cpu}
              onChange={(e) => setCpu(e.target.value)}
              placeholder="e.g. Ryzen 5 5600X, Intel i5-12400F..."
              className="w-full px-4 py-2.5 rounded-xl bg-zinc-900/90 border border-zinc-700 text-zinc-100 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500/50 focus:border-sky-500 transition-all font-mono"
            />
            {/* CPU Quick Chips */}
            <div className="flex flex-wrap gap-1.5 pt-1">
              {POPULAR_CPUS.map((item) => (
                <button
                  key={item.name}
                  type="button"
                  onClick={() => handleSelectCpu(item)}
                  className={`text-xs px-2.5 py-1 rounded-lg border transition-all cursor-pointer ${
                    cpu === item.name
                      ? "bg-sky-500/20 border-sky-500 text-sky-300 font-semibold"
                      : "bg-zinc-900 border-zinc-800 text-zinc-400 hover:text-zinc-200 hover:border-zinc-700"
                  }`}
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>

          {/* Section 3: RAM Pills */}
          <div className="space-y-2.5">
            <label className="text-xs uppercase tracking-wider font-semibold text-zinc-300 flex items-center gap-2">
              <HardDrive className="w-4 h-4 text-emerald-400" />
              <span>System RAM</span>
            </label>
            <div className="grid grid-cols-4 gap-2">
              {RAM_OPTIONS.map((size) => (
                <button
                  key={size}
                  type="button"
                  onClick={() => setRam(size)}
                  className={`py-2.5 px-3 rounded-xl border text-center font-mono text-sm transition-all cursor-pointer ${
                    ram === size
                      ? "bg-emerald-500/20 border-emerald-500 text-emerald-300 font-bold shadow-md shadow-emerald-500/10"
                      : "bg-zinc-900/60 border-zinc-800 text-zinc-400 hover:text-zinc-200 hover:border-zinc-700"
                  }`}
                >
                  {size} GB
                </button>
              ))}
            </div>
          </div>

        </CardContent>

        <CardFooter className="pt-2">
          <Button
            variant="flame"
            size="xl"
            onClick={handleSubmit}
            className="w-full py-4 text-lg font-bold shadow-xl shadow-orange-600/30 tracking-wide"
          >
            <Flame className="w-5 h-5 text-amber-300 fill-amber-300" />
            <span>Reveal My Playable Library</span>
          </Button>
        </CardFooter>

      </Card>
    </div>
  )
}
