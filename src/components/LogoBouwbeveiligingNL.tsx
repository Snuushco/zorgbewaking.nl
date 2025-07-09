import React from 'react'

export default function LogoBouwbeveiligingNL({ className = '' }: { className?: string }) {
  return (
    <svg
      width="420"
      height="70"
      viewBox="0 0 420 70"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{ display: 'block' }}
    >
      {/* Geel zeshoekig schild */}
      <polygon points="35,15 55,25 55,45 35,55 15,45 15,25" fill="#facc15" />
      {/* SVG icoontje */}
      <image href="/favicon_png.svg" x="25" y="25" width="20" height="20" />
      {/* Hoofdtekst */}
      <text x="80" y="45" fontFamily="Inter, Arial, sans-serif" fontSize="26" fontWeight="bold" fill="#222">Bouwbeveiliging Nederland</text>
      {/* Subtekst */}
      <text x="80" y="63" fontFamily="Inter, Arial, sans-serif" fontSize="14" fill="#9ca3af">Onderdeel van Praesidion Security B.V.</text>
    </svg>
  )
} 