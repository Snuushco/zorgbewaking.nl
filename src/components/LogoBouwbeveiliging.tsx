import React from 'react'

export default function LogoBouwbeveiliging({ className = '' }: { className?: string }) {
  return (
    <svg
      width="300"
      height="60"
      viewBox="0 0 300 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      preserveAspectRatio="xMinYMin meet"
      style={{ display: 'block' }}
    >
      {/* Gele bouwhelm */}
      <ellipse cx="35" cy="32" rx="18" ry="12" fill="#facc15" stroke="#2563eb" strokeWidth="3" />
      <rect x="17" y="32" width="36" height="8" rx="4" fill="#2563eb" />
      <rect x="27" y="24" width="16" height="6" rx="3" fill="#fde68a" />
      {/* Hoofdtekst */}
      <text x="60" y="36" fontFamily="Inter, Arial, sans-serif" fontSize="20" fontWeight="bold">
        <tspan fill="#2563eb">Bouw </tspan>
        <tspan fill="#facc15">Beveiliging </tspan>
        <tspan fill="#2563eb">NL</tspan>
      </text>
      {/* Subtekst */}
      <text x="60" y="50" fontFamily="Inter, Arial, sans-serif" fontSize="10" fill="#64748b">onderdeel van Praesidion Security B.V.</text>
    </svg>
  )
} 