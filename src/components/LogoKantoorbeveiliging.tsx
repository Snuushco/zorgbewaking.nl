import React from 'react'

export default function LogoKantoorbeveiliging({ className = '' }: { className?: string }) {
  return (
    <svg width="260" height="60" viewBox="0 0 260 60" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} style={{ display: 'block' }}>
      {/* Gebouw icoon */}
      <rect x="22" y="22" width="28" height="20" rx="3" fill="#2563eb" stroke="#64748b" strokeWidth="2" />
      <rect x="30" y="32" width="4" height="6" fill="#bae6fd" />
      <rect x="38" y="32" width="4" height="6" fill="#bae6fd" />
      {/* Tekst */}
      <text x="70" y="38" fontFamily="Inter, Arial, sans-serif" fontSize="24" fontWeight="bold">
        <tspan fill="#2563eb">Kantoor</tspan>
        <tspan fill="#facc15">beveiliging</tspan>
      </text>
      <text x="70" y="52" fontFamily="Inter, Arial, sans-serif" fontSize="11" fill="#64748b">onderdeel van Praesidion Security B.V.</text>
    </svg>
  )
} 