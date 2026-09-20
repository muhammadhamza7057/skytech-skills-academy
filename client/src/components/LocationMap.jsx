import { useEffect, useState } from 'react'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import L from 'leaflet'
import { academyInfo } from '../data/content'
import { cn } from '../utils/cn'

const markerIcon = L.divIcon({
  className: '',
  html: `<div style="width:28px;height:28px;border-radius:9999px;background:#0B1F3A;border:3px solid #FFFFFF;box-shadow:0 2px 8px rgba(11,31,58,0.35);"></div>`,
  iconSize: [28, 28],
  iconAnchor: [14, 14],
  popupAnchor: [0, -16],
})

export default function LocationMap({
  className,
  heightClass = 'h-[320px] sm:h-[380px] lg:h-[420px]',
}) {
  const [ready, setReady] = useState(false)
  const { lat, lng, zoom, label } = academyInfo.location
  const directionsUrl = `https://www.openstreetmap.org/directions?to=${lat}%2C${lng}`

  useEffect(() => {
    setReady(true)
  }, [])

  return (
    <div
      className={cn(
        'overflow-hidden rounded-lg border border-border bg-white',
        heightClass,
        className
      )}
    >
      {ready ? (
        <MapContainer
          center={[lat, lng]}
          zoom={zoom}
          scrollWheelZoom={false}
          className="h-full w-full"
          aria-label={`Map showing ${label}`}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[lat, lng]} icon={markerIcon}>
            <Popup>
              <div className="space-y-1 text-sm">
                <p className="font-semibold text-navy">{label}</p>
                <p className="text-muted">{academyInfo.address}</p>
                <a
                  href={directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block font-semibold text-blue hover:underline"
                >
                  Get Directions
                </a>
              </div>
            </Popup>
          </Marker>
        </MapContainer>
      ) : (
        <div className="flex h-full items-center justify-center bg-surface text-sm text-muted">
          Loading map…
        </div>
      )}
    </div>
  )
}
