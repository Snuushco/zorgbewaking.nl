import React from 'react'

export default function LogoLogistiek({ className = '' }: { className?: string }) {
  return (
    <svg width="260" height="60" viewBox="0 0 260 60" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} style={{ display: 'block' }}>
      {/* Vrachtwagen icoon */}
      <rect x="20" y="32" width="16" height="10" fill="#2563eb" />
      <rect x="36" y="32" width="16" height="10" fill="#22c55e" />
      <circle cx="28" cy="44" r="3" fill="#22c55e" />
      <circle cx="48" cy="44" r="3" fill="#2563eb" />
      {/* Tekst */}
      <text x="70" y="38" fontFamily="Inter, Arial, sans-serif" fontSize="24" fontWeight="bold">
        <tspan fill="#2563eb">Logistiek</tspan>
      </text>
      <text x="70" y="52" fontFamily="Inter, Arial, sans-serif" fontSize="11" fill="#64748b">onderdeel van Praesidion Security B.V.</text>
    </svg>
  )
} 