import React, { useState, useMemo } from "react"
import { Navbar } from "./components/Navbar"
import { Hero } from "./components/Hero"
import { HardwareModal } from "./components/HardwareModal"
import { ManualSelector } from "./components/ManualSelector"
import { TierFilter } from "./components/TierFilter"
import { GameCard } from "./components/GameCard"
import { useHardwareSniffer } from "./hooks/useHardwareSniffer"
import { MOCK_GAMES, calculateTier } from "./services/mockData"
import { Search, Flame, Sparkles, RefreshCw, SlidersHorizontal } from "lucide-react"

export function App() {
  const { isScanning, detectedRig, setDetectedRig, scanRig } = useHardwareSniffer()

  const [activeRig, setActiveRig] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isManualOpen, setIsManualOpen] = useState(false)
  const [activeTier, setActiveTier] = useState("all")
  const [searchQuery, setSearchQuery] = useState("")

  // Trigger scan from hero
  const handleScan = async () => {
    const rig = await scanRig()
    setIsModalOpen(true)
  }

  // Confirm detected rig
  const handleConfirmRig = () => {
    setActiveRig(detectedRig)
    setIsModalOpen(false)
  }

  // Open manual selector from modal or hero
  const handleOpenManual = () => {
    setIsModalOpen(false)
    setIsManualOpen(true)
  }

  // Submit manual selection
  const handleManualSubmit = (rig) => {
    setActiveRig(rig)
    setDetectedRig(rig)
    setIsManualOpen(false)
  }

  // Compute tier categories and counts for all games
  const gamesWithTiers = useMemo(() => {
    // If no rig selected yet, use default reference rig (e.g. GTX 1650, 16GB, 8 threads)
    const effectiveRig = activeRig || {
      gpu: "NVIDIA GeForce GTX 1650",
      threads: 8,
      ram: 16,
    }

    return MOCK_GAMES.map((game) => ({
      ...game,
      tierInfo: calculateTier(game, effectiveRig),
    }))
  }, [activeRig])

  // Count per tier
  const tierCounts = useMemo(() => {
    const counts = { all: gamesWithTiers.length, chefs_kiss: 0, playable: 0, rough_ride: 0, potato: 0 }
    gamesWithTiers.forEach((g) => {
      if (counts[g.tierInfo.tier] !== undefined) {
        counts[g.tierInfo.tier]++
      }
    })
    return counts
  }, [gamesWithTiers])

  // Filtered games based on tier and search
  const filteredGames = useMemo(() => {
    return gamesWithTiers.filter((game) => {
      const matchesTier = activeTier === "all" || game.tierInfo.tier === activeTier
      const matchesSearch =
        game.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        game.genre.toLowerCase().includes(searchQuery.toLowerCase())
      return matchesTier && matchesSearch
    })
  }, [gamesWithTiers, activeTier, searchQuery])

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 flex flex-col selection:bg-amber-500/30 selection:text-amber-200">
      
      {/* Top Navigation */}
      <Navbar onOpenManual={handleOpenManual} />

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Wireframe Hero Section */}
        <Hero
          onScan={handleScan}
          onSelectManual={handleOpenManual}
          isScanning={isScanning}
        />

        {/* Results & Game Catalog Dashboard */}
        <section id="results" className="pt-4 pb-20 scroll-mt-24">
          
          {/* Active Rig Status Bar */}
          <div className="mb-8 p-4 rounded-2xl border border-zinc-800 bg-zinc-900/40 backdrop-blur-md flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-400">
                <Flame className="w-5 h-5 fill-amber-400" />
              </div>
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-zinc-400 font-semibold block">
                  Active Rig Configuration
                </span>
                <p className="text-sm sm:text-base font-bold text-zinc-100">
                  {activeRig ? (
                    <>
                      <span>{activeRig.gpu}</span>
                      <span className="text-zinc-500 font-normal mx-2">•</span>
                      <span>{activeRig.ram} GB RAM</span>
                      <span className="text-zinc-500 font-normal mx-2">•</span>
                      <span>{activeRig.threads} Threads</span>
                    </>
                  ) : (
                    <span className="text-zinc-400 font-normal">
                      Demo Rig (GTX 1650 • 16 GB) — Click <span className="text-amber-400 font-semibold">"Scan my pc specs"</span> above to test your PC!
                    </span>
                  )}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handleOpenManual}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-zinc-700 bg-zinc-800/80 text-xs font-mono text-zinc-200 hover:bg-zinc-700 hover:border-zinc-600 transition-colors cursor-pointer"
              >
                <SlidersHorizontal className="w-3.5 h-3.5" />
                <span>{activeRig ? "Change Rig" : "Configure Rig"}</span>
              </button>
            </div>
          </div>

          {/* Filter Bar & Search */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
            <TierFilter
              activeTier={activeTier}
              onSelectTier={setActiveTier}
              counts={tierCounts}
            />

            {/* Search Input */}
            <div className="relative min-w-[240px]">
              <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search games or genres..."
                className="w-full pl-10 pr-4 py-2 rounded-xl bg-zinc-900/80 border border-zinc-800 text-xs sm:text-sm text-zinc-100 placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500 transition-all font-mono"
              />
            </div>
          </div>

          {/* Game Cards Grid */}
          {filteredGames.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
              {filteredGames.map((game) => (
                <GameCard
                  key={game.id}
                  game={game}
                  userRig={activeRig || { gpu: "NVIDIA GeForce GTX 1650", ram: 16, threads: 8 }}
                  tierInfo={game.tierInfo}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-16 border border-dashed border-zinc-800 rounded-2xl bg-zinc-900/20">
              <p className="text-zinc-400 text-sm">No games found matching your search.</p>
              <button
                onClick={() => {
                  setActiveTier("all")
                  setSearchQuery("")
                }}
                className="mt-3 text-xs text-amber-400 underline cursor-pointer"
              >
                Reset filters
              </button>
            </div>
          )}

        </section>

      </main>

      {/* Hardware Detection Verification Modal */}
      <HardwareModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        rig={detectedRig}
        onConfirm={handleConfirmRig}
        onEditSpecs={handleOpenManual}
      />

      {/* Manual Rig Selector Modal */}
      <ManualSelector
        isOpen={isManualOpen}
        onClose={() => setIsManualOpen(false)}
        initialRig={activeRig || detectedRig}
        onSubmit={handleManualSubmit}
      />

      {/* Footer */}
      <footer className="border-t border-zinc-900 bg-zinc-950 py-8 text-center text-xs font-mono text-zinc-500">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="text-amber-500 font-bold">MeltMyPC</span>
            <span>— "Will it run, or will it melt?"</span>
          </div>
          <div>
            Built with React & shadcn UI • Designed for zero software downloads
          </div>
        </div>
      </footer>

    </div>
  )
}

export default App
