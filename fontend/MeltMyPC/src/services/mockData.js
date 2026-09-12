/**
 * Benchmark reference weights and mock games catalog.
 * GPUs are scored on an approximate scale (e.g. GTX 1650 = ~3500, RTX 3060 = ~8800, RTX 4080 = ~18000).
 */
export const GPU_BENCHMARK_SCORES = {
  "nvidia geforce rtx 4090": 24000,
  "nvidia geforce rtx 4080": 18500,
  "nvidia geforce rtx 4070": 14000,
  "nvidia geforce rtx 4060": 10500,
  "nvidia geforce rtx 3080": 15000,
  "nvidia geforce rtx 3070": 12500,
  "nvidia geforce rtx 3060": 8800,
  "nvidia geforce rtx 3050": 6000,
  "nvidia geforce gtx 1660 super": 6100,
  "nvidia geforce gtx 1650": 3600,
  "nvidia geforce gtx 1060": 4200,
  "nvidia geforce gtx 1050 ti": 2400,
  "amd radeon rx 7800 xt": 16000,
  "amd radeon rx 6700 xt": 11000,
  "amd radeon rx 6600": 8100,
  "amd radeon rx 580": 4300,
  "intel arc a770": 9500,
  "intel iris xe graphics": 1800,
  "intel uhd graphics 630": 900,
}

export function estimateGpuScore(gpuName) {
  if (!gpuName) return 5000
  const lower = gpuName.toLowerCase()
  for (const [key, score] of Object.entries(GPU_BENCHMARK_SCORES)) {
    if (lower.includes(key) || key.includes(lower)) {
      return score
    }
  }
  // Generic estimation
  if (lower.includes("rtx 40")) return 12000
  if (lower.includes("rtx 30")) return 9000
  if (lower.includes("rtx 20")) return 7500
  if (lower.includes("gtx 16")) return 4000
  if (lower.includes("gtx 10")) return 3500
  if (lower.includes("radeon rx 6") || lower.includes("radeon rx 7")) return 8500
  if (lower.includes("iris") || lower.includes("radeon graphics")) return 1800
  if (lower.includes("intel") || lower.includes("uhd") || lower.includes("hd graphics")) return 950
  return 5500
}

export const MOCK_GAMES = [
  {
    id: "cyberpunk-2077",
    title: "Cyberpunk 2077",
    genre: "Open World RPG",
    releaseYear: 2020,
    coverUrl: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=600&auto=format&fit=crop&q=80",
    minGpuScore: 4000, // GTX 1060 / GTX 1650 Super
    recGpuScore: 9000, // RTX 2060 / RTX 3060
    minRam: 12,
    recRam: 16,
    minThreads: 6,
    recThreads: 8,
    aiOptimizationTip: "Turn 'Crowd Density' to Medium and enable AMD FSR 2.1 (Quality mode) to gain +18 FPS with almost zero visual loss.",
  },
  {
    id: "black-myth-wukong",
    title: "Black Myth: Wukong",
    genre: "Action RPG",
    releaseYear: 2024,
    coverUrl: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=600&auto=format&fit=crop&q=80",
    minGpuScore: 4200,
    recGpuScore: 10000,
    minRam: 16,
    recRam: 16,
    minThreads: 6,
    recThreads: 12,
    aiOptimizationTip: "Disable Full Ray Tracing and set Global Illumination to Low for a massive 40% framerate boost.",
  },
  {
    id: "elden-ring",
    title: "Elden Ring",
    genre: "Souls-like RPG",
    releaseYear: 2022,
    coverUrl: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=600&auto=format&fit=crop&q=80",
    minGpuScore: 4100,
    recGpuScore: 8000,
    minRam: 12,
    recRam: 16,
    minThreads: 6,
    recThreads: 8,
    aiOptimizationTip: "Turn Volumetric Effects to Medium and set Grass Quality to Medium to eliminate open-world stutters.",
  },
  {
    id: "gta-v",
    title: "Grand Theft Auto V",
    genre: "Action Adventure",
    releaseYear: 2015,
    coverUrl: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=600&auto=format&fit=crop&q=80",
    minGpuScore: 1500,
    recGpuScore: 3500,
    minRam: 8,
    recRam: 16,
    minThreads: 4,
    recThreads: 6,
    aiOptimizationTip: "Disable MSAA and use FXAA instead; keep Grass Quality at High rather than Ultra.",
  },
  {
    id: "valorant",
    title: "Valorant",
    genre: "Tactical Shooter",
    releaseYear: 2020,
    coverUrl: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=600&auto=format&fit=crop&q=80",
    minGpuScore: 900,
    recGpuScore: 2500,
    minRam: 4,
    recRam: 8,
    minThreads: 2,
    recThreads: 4,
    aiOptimizationTip: "Designed for competitive high FPS. Any dedicated GPU easily hits 144+ FPS on High settings.",
  },
  {
    id: "baldurs-gate-3",
    title: "Baldur's Gate 3",
    genre: "Tactical RPG",
    releaseYear: 2023,
    coverUrl: "https://images.unsplash.com/photo-1579373903781-fd5c0c30c4cd?w=600&auto=format&fit=crop&q=80",
    minGpuScore: 3800,
    recGpuScore: 8500,
    minRam: 8,
    recRam: 16,
    minThreads: 6,
    recThreads: 8,
    aiOptimizationTip: "Cap framerate to 60 in Act 3 city zones to prevent CPU bottleneck stuttering.",
  },
  {
    id: "red-dead-redemption-2",
    title: "Red Dead Redemption 2",
    genre: "Open World",
    releaseYear: 2019,
    coverUrl: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=600&auto=format&fit=crop&q=80",
    minGpuScore: 3600,
    recGpuScore: 8200,
    minRam: 12,
    recRam: 16,
    minThreads: 4,
    recThreads: 8,
    aiOptimizationTip: "Set Volumetric Rays to Medium and Water Physics to 50% for +15 FPS with identical visuals.",
  },
  {
    id: "minecraft-shaders",
    title: "Minecraft (with BSL Shaders)",
    genre: "Sandbox",
    releaseYear: 2024,
    coverUrl: "https://images.unsplash.com/photo-1627856013091-fed6e4e30025?w=600&auto=format&fit=crop&q=80",
    minGpuScore: 2200,
    recGpuScore: 6000,
    minRam: 8,
    recRam: 16,
    minThreads: 4,
    recThreads: 8,
    aiOptimizationTip: "Allocate 6GB of RAM in JVM arguments and set Shadow Distance in Iris/OptiFine to 8 chunks.",
  },
]

/**
 * Categorize a game into one of the 4 playability tiers based on user specs.
 */
export function calculateTier(game, userRig) {
  const userGpuScore = estimateGpuScore(userRig.gpu)
  const userRam = userRig.ram || 16
  const userThreads = userRig.threads || 8

  // Chef's Kiss: Meets or exceeds recommended specs
  if (userGpuScore >= game.recGpuScore && userRam >= game.recRam && userThreads >= game.minThreads + 2) {
    return {
      tier: "chefs_kiss",
      label: "Chef's Kiss",
      badgeIcon: "🤌",
      fpsEstimate: "60+ FPS (Ultra)",
      color: "emerald",
      userGpuScore,
    }
  }

  // Playable: Good experience, meets min and close to rec
  if (userGpuScore >= game.minGpuScore * 1.1 && userRam >= game.minRam) {
    return {
      tier: "playable",
      label: "Playable",
      badgeIcon: "🕹️",
      fpsEstimate: "45–60 FPS (Medium)",
      color: "sky",
      userGpuScore,
    }
  }

  // Rough Ride: Sits around minimum specs
  if (userGpuScore >= game.minGpuScore * 0.75) {
    return {
      tier: "rough_ride",
      label: "Rough Ride",
      badgeIcon: "🪑",
      fpsEstimate: "~30 FPS (Low)",
      color: "amber",
      userGpuScore,
    }
  }

  // Potato Tier
  return {
    tier: "potato",
    label: "Potato Tier",
    badgeIcon: "🥔",
    fpsEstimate: "<15 FPS (Slide Show)",
    color: "red",
    userGpuScore,
  }
}
