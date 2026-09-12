import { useState, useCallback } from "react"

/**
 * Custom React hook for silent in-browser hardware sniffing using WebGL & WebGPU APIs.
 */
export function useHardwareSniffer() {
  const [isScanning, setIsScanning] = useState(false)
  const [detectedRig, setDetectedRig] = useState(null)

  const scanRig = useCallback(async () => {
    setIsScanning(true)

    // Small delay to give a satisfying scanning feel in UI
    await new Promise((resolve) => setTimeout(resolve, 400))

    let gpu = "Generic Dedicated GPU"
    let vendor = "Unknown"
    let isIntegrated = false

    try {
      const canvas = document.createElement("canvas")
      const gl =
        canvas.getContext("webgl", { powerPreference: "high-performance" }) ||
        canvas.getContext("experimental-webgl", { powerPreference: "high-performance" })

      if (gl) {
        const debugInfo = gl.getExtension("WEBGL_debug_renderer_info")
        if (debugInfo) {
          const rawRenderer = gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL) || ""
          const rawVendor = gl.getParameter(debugInfo.UNMASKED_VENDOR_WEBGL) || ""
          vendor = rawVendor

          // Clean up ANGLE wrapper string
          // e.g.: "ANGLE (NVIDIA, NVIDIA GeForce RTX 3060 Direct3D11 vs_5_0 ps_5_0)" -> "NVIDIA GeForce RTX 3060"
          const match = rawRenderer.match(/\(([^,]+),\s*([^)]+)\)/)
          if (match && match[2]) {
            gpu = match[2].replace(/Direct3D.*/i, "").replace(/OpenGL.*/i, "").trim()
          } else {
            gpu = rawRenderer.replace(/Direct3D.*/i, "").trim() || "Dedicated GPU"
          }

          // Integrated GPU check
          const lowerGpu = gpu.toLowerCase()
          if (
            lowerGpu.includes("intel") ||
            lowerGpu.includes("iris") ||
            lowerGpu.includes("uhd") ||
            lowerGpu.includes("basic render") ||
            (lowerGpu.includes("amd") && lowerGpu.includes("radeon(tm) graphics"))
          ) {
            isIntegrated = true
          }
        }
      }
    } catch (err) {
      console.warn("WebGL hardware scan fallback:", err)
      gpu = "NVIDIA GeForce GTX 1650"
    }

    // Logical CPU threads
    const threads = navigator.hardwareConcurrency || 8

    // Device RAM in GB (Chromium supports navigator.deviceMemory)
    const ram = navigator.deviceMemory ? Math.round(navigator.deviceMemory) : 16

    const rig = {
      gpu: gpu || "NVIDIA GeForce RTX 3060",
      vendor,
      threads,
      ram: Math.max(ram, 8),
      isIntegrated,
      scannedAt: new Date().toISOString(),
    }

    setDetectedRig(rig)
    setIsScanning(false)
    return rig
  }, [])

  return {
    isScanning,
    detectedRig,
    setDetectedRig,
    scanRig,
  }
}
