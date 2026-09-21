import { useState, useEffect, useRef, useCallback } from 'react'
import {
  X,
  ChevronLeft,
  ChevronRight,
  ZoomIn,
  ZoomOut,
  RotateCcw,
  Maximize2,
  Minimize2,
  Layers,
  FileText,
} from 'lucide-react'

export default function CustomProjectViewer({
  sheets = [],
  initialIndex = 0,
  isOpen = false,
  onClose,
}) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex)
  const [zoomLevel, setZoomLevel] = useState(1)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [isDragging, setIsDragging] = useState(false)
  const [panPosition, setPanPosition] = useState({ x: 0, y: 0 })
  const dragStartRef = useRef({ x: 0, y: 0, panX: 0, panY: 0 })
  const containerRef = useRef(null)

  const [prevProps, setPrevProps] = useState({ initialIndex, isOpen })
  if (prevProps.initialIndex !== initialIndex || prevProps.isOpen !== isOpen) {
    setPrevProps({ initialIndex, isOpen })
    if (isOpen) {
      setCurrentIndex(initialIndex)
      setZoomLevel(1)
      setPanPosition({ x: 0, y: 0 })
    }
  }

  // Reset zoom on sheet change
  const handleSheetChange = useCallback(
    (newIndex) => {
      if (newIndex >= 0 && newIndex < sheets.length) {
        setCurrentIndex(newIndex)
        setZoomLevel(1)
        setPanPosition({ x: 0, y: 0 })
      }
    },
    [sheets.length]
  )

  const currentSheet = sheets[currentIndex] || sheets[0]

  // Zoom controls
  const handleZoomIn = () => setZoomLevel((z) => Math.min(z + 0.35, 3.5))
  const handleZoomOut = () =>
    setZoomLevel((z) => {
      const nextZ = Math.max(z - 0.35, 0.75)
      if (nextZ <= 1) setPanPosition({ x: 0, y: 0 })
      return nextZ
    })
  const handleResetZoom = () => {
    setZoomLevel(1)
    setPanPosition({ x: 0, y: 0 })
  }

  // Fullscreen toggle
  const toggleFullscreen = () => {
    if (!containerRef.current) return
    if (!document.fullscreenElement) {
      containerRef.current.requestFullscreen?.().catch(() => {})
      setIsFullscreen(true)
    } else {
      document.exitFullscreen?.().catch(() => {})
      setIsFullscreen(false)
    }
  }

  useEffect(() => {
    const handleFsChange = () => {
      setIsFullscreen(!!document.fullscreenElement)
    }
    document.addEventListener('fullscreenchange', handleFsChange)
    return () => document.removeEventListener('fullscreenchange', handleFsChange)
  }, [])

  // Keyboard navigation
  useEffect(() => {
    if (!isOpen) return

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        if (document.fullscreenElement) {
          document.exitFullscreen?.().catch(() => {})
        } else {
          onClose?.()
        }
      } else if (e.key === 'ArrowRight' || e.key === 'PageDown') {
        handleSheetChange(currentIndex + 1)
      } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
        handleSheetChange(currentIndex - 1)
      } else if (e.key === '+' || e.key === '=') {
        handleZoomIn()
      } else if (e.key === '-') {
        handleZoomOut()
      } else if (e.key === '0') {
        handleResetZoom()
      }
    }

    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = prevOverflow
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen, currentIndex, handleSheetChange, onClose])

  // Mouse pan handlers when zoomed in
  const handleMouseDown = (e) => {
    if (zoomLevel <= 1) return
    setIsDragging(true)
    dragStartRef.current = {
      x: e.clientX,
      y: e.clientY,
      panX: panPosition.x,
      panY: panPosition.y,
    }
  }

  const handleMouseMove = (e) => {
    if (!isDragging || zoomLevel <= 1) return
    const dx = e.clientX - dragStartRef.current.x
    const dy = e.clientY - dragStartRef.current.y
    setPanPosition({
      x: dragStartRef.current.panX + dx,
      y: dragStartRef.current.panY + dy,
    })
  }

  const handleMouseUp = () => {
    setIsDragging(false)
  }

  if (!isOpen || !currentSheet) return null

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-50 flex flex-col bg-slate-950/95 backdrop-blur-md text-white select-none overflow-hidden"
      role="dialog"
      aria-modal="true"
      aria-label="Architectural Sheet Drawing Viewer"
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
    >
      {/* Top Header Bar */}
      <header className="flex items-center justify-between px-4 sm:px-6 py-3 border-b border-white/10 bg-slate-900/90 z-20">
        <div className="flex items-center gap-3 min-w-0">
          <div className="p-2 rounded-lg bg-blue-500/20 text-blue-400 border border-blue-500/30 shrink-0">
            <FileText className="w-5 h-5" />
          </div>
          <div className="min-w-0">
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono font-bold text-blue-400 uppercase tracking-wider bg-blue-950/80 px-2 py-0.5 rounded border border-blue-800/40">
                Sheet {currentSheet.sheetNo || currentIndex + 1}
              </span>
              <span className="hidden sm:inline-block text-xs text-slate-400">
                • {currentSheet.discipline}
              </span>
            </div>
            <h2 className="text-sm sm:text-base font-semibold text-white truncate max-w-xs sm:max-w-md md:max-w-xl">
              {currentSheet.title}
            </h2>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-2 shrink-0">
          <div className="hidden sm:flex items-center gap-1 bg-white/5 p-1 rounded-lg border border-white/10">
            <button
              onClick={handleZoomOut}
              title="Zoom Out (-)"
              className="p-1.5 rounded hover:bg-white/10 text-slate-300 hover:text-white transition-colors"
            >
              <ZoomOut className="w-4 h-4" />
            </button>
            <span className="text-xs font-mono px-1.5 text-slate-300 min-w-[48px] text-center">
              {Math.round(zoomLevel * 100)}%
            </span>
            <button
              onClick={handleZoomIn}
              title="Zoom In (+)"
              className="p-1.5 rounded hover:bg-white/10 text-slate-300 hover:text-white transition-colors"
            >
              <ZoomIn className="w-4 h-4" />
            </button>
            <button
              onClick={handleResetZoom}
              title="Reset Zoom (0)"
              className="p-1.5 rounded hover:bg-white/10 text-slate-300 hover:text-white transition-colors"
            >
              <RotateCcw className="w-3.5 h-3.5" />
            </button>
          </div>

          <button
            onClick={toggleFullscreen}
            title={isFullscreen ? 'Exit Fullscreen' : 'Fullscreen'}
            className="hidden md:flex p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/10 transition-colors"
          >
            {isFullscreen ? (
              <Minimize2 className="w-4 h-4" />
            ) : (
              <Maximize2 className="w-4 h-4" />
            )}
          </button>

          <button
            onClick={onClose}
            title="Close Viewer (Esc)"
            className="p-2 rounded-lg bg-white/10 hover:bg-red-500/80 text-white transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </header>

      {/* Main Canvas Area */}
      <div
        className={`relative flex-1 flex items-center justify-center p-2 sm:p-4 overflow-hidden ${
          zoomLevel > 1 ? (isDragging ? 'cursor-grabbing' : 'cursor-grab') : 'cursor-default'
        }`}
        onMouseDown={handleMouseDown}
      >
        {/* Previous Navigation Button */}
        <button
          onClick={() => handleSheetChange(currentIndex - 1)}
          disabled={currentIndex === 0}
          title="Previous Sheet (Left Arrow)"
          className={`absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-black/60 hover:bg-blue-600/80 text-white backdrop-blur-sm border border-white/20 transition-all ${
            currentIndex === 0 ? 'opacity-30 cursor-not-allowed' : 'opacity-85 hover:opacity-100 hover:scale-105'
          }`}
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        {/* Rendered Architectural Drawing Image */}
        <div
          className="relative max-w-full max-h-full transition-transform duration-100 ease-out select-none flex items-center justify-center"
          style={{
            transform: `translate(${panPosition.x}px, ${panPosition.y}px) scale(${zoomLevel})`,
          }}
        >
          <img
            src={currentSheet.image}
            alt={currentSheet.title}
            draggable={false}
            className="max-h-[75vh] sm:max-h-[80vh] w-auto max-w-full object-contain rounded-lg shadow-2xl bg-white select-none border border-slate-700"
          />

          {/* Subtle Watermark Stamp */}
          <div className="absolute bottom-3 right-4 pointer-events-none opacity-40 bg-navy/90 text-white text-[10px] font-mono px-2 py-0.5 rounded border border-white/20">
            Skytech Skills Academy • Architectural Portfolio
          </div>
        </div>

        {/* Next Navigation Button */}
        <button
          onClick={() => handleSheetChange(currentIndex + 1)}
          disabled={currentIndex === sheets.length - 1}
          title="Next Sheet (Right Arrow)"
          className={`absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-black/60 hover:bg-blue-600/80 text-white backdrop-blur-sm border border-white/20 transition-all ${
            currentIndex === sheets.length - 1
              ? 'opacity-30 cursor-not-allowed'
              : 'opacity-85 hover:opacity-100 hover:scale-105'
          }`}
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* Bottom Sheet Carousel & Navigation Footer */}
      <footer className="border-t border-white/10 bg-slate-900/95 px-4 py-2.5 z-20 flex flex-col gap-2">
        <div className="flex items-center justify-between text-xs text-slate-400">
          <div className="flex items-center gap-2">
            <Layers className="w-3.5 h-3.5 text-blue-400" />
            <span className="font-semibold text-slate-200">
              Sheet {currentIndex + 1} of {sheets.length}
            </span>
            <span className="hidden sm:inline-block text-slate-500">•</span>
            <span className="hidden sm:inline-block truncate max-w-xs text-slate-300">
              {currentSheet.description}
            </span>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-[11px] text-slate-400 hidden md:inline-block">
              Use <kbd className="px-1.5 py-0.5 bg-white/10 rounded font-mono text-[10px]">←</kbd> <kbd className="px-1.5 py-0.5 bg-white/10 rounded font-mono text-[10px]">→</kbd> arrows to navigate • <kbd className="px-1.5 py-0.5 bg-white/10 rounded font-mono text-[10px]">Esc</kbd> to close
            </span>
            <div className="sm:hidden flex items-center gap-1">
              <button
                onClick={handleZoomOut}
                className="p-1 bg-white/10 rounded text-slate-300"
              >
                <ZoomOut className="w-3.5 h-3.5" />
              </button>
              <span className="text-[11px] font-mono">{Math.round(zoomLevel * 100)}%</span>
              <button
                onClick={handleZoomIn}
                className="p-1 bg-white/10 rounded text-slate-300"
              >
                <ZoomIn className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* Thumbnail Reel */}
        <div className="flex items-center gap-2 overflow-x-auto py-1 scrollbar-thin scrollbar-thumb-white/20 scrollbar-track-transparent">
          {sheets.map((s, idx) => {
            const isSelected = idx === currentIndex
            return (
              <button
                key={s.id}
                onClick={() => handleSheetChange(idx)}
                className={`relative shrink-0 w-16 sm:w-20 aspect-[4/3] rounded-md overflow-hidden border transition-all duration-200 ${
                  isSelected
                    ? 'border-blue-400 ring-2 ring-blue-500/50 scale-105'
                    : 'border-white/15 opacity-60 hover:opacity-100 hover:border-white/40'
                }`}
                title={`${s.title} (${s.sheetNo || idx + 1})`}
              >
                <img
                  src={s.image}
                  alt={s.title}
                  loading="lazy"
                  className="w-full h-full object-cover bg-white"
                />
                <span className="absolute bottom-0 inset-x-0 bg-black/75 text-[9px] font-mono text-center text-white truncate px-0.5">
                  {s.sheetNo || idx + 1}
                </span>
              </button>
            )
          })}
        </div>
      </footer>
    </div>
  )
}
