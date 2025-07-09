import React from 'react'

export default function LogoEvenementenbeveiliging({ className = '' }: { className?: string }) {
  return (
    <svg width="260" height="60" viewBox="0 0 260 60" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} style={{ display: 'block' }}>
      {/* Ticket icoon */}
      <rect x="20" y="20" width="32" height="18" rx="4" fill="#2563eb" stroke="#facc15" strokeWidth="2" />
      {/* Confetti */}
      <circle cx="28" cy="25" r="2" fill="#facc15" />
      <circle cx="44" cy="25" r="2" fill="#fb923c" />
      <circle cx="36" cy="29" r="2" fill="#ef4444" />
      {/* Tekst */}
      <text x="70" y="38" fontFamily="Inter, Arial, sans-serif" fontSize="24" fontWeight="bold">
        <tspan fill="#2563eb">Evenementen</tspan>
        <tspan fill="#facc15">beveiliging</tspan>
      </text>
      <text x="70" y="52" fontFamily="Inter, Arial, sans-serif" fontSize="11" fill="#64748b">onderdeel van Praesidion Security B.V.</text>
    </svg>
  )
} 