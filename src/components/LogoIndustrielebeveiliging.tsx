import React from 'react'

export default function LogoIndustrielebeveiliging({ className = '' }: { className?: string }) {
  return (
    <svg width="260" height="60" viewBox="0 0 260 60" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} style={{ display: 'block' }}>
      {/* Fabriek icoon */}
      <rect x="20" y="32" width="32" height="10" fill="#64748b" />
      <polygon points="20,32 28,24 36,32" fill="#2563eb" />
      <rect x="40" y="26" width="8" height="6" fill="#facc15" />
      {/* Tekst */}
      <text x="70" y="38" fontFamily="Inter, Arial, sans-serif" fontSize="22" fontWeight="bold">
        <tspan fill="#2563eb">Industriële </tspan>
        <tspan fill="#facc15">beveiliging</tspan>
      </text>
      <text x="70" y="52" fontFamily="Inter, Arial, sans-serif" fontSize="11" fill="#64748b">onderdeel van Praesidion Security B.V.</text>
    </svg>
  )
} 