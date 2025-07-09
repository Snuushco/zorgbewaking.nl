export default function LogoZorgbewaking({ className = '' }: { className?: string }) {
  return (
    <svg
      width="220"
      height="60"
      viewBox="0 0 240 70"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      preserveAspectRatio="xMinYMin meet"
      overflow="visible"
      style={{ display: 'block' }}
    >
      <rect x="0" y="5" width="60" height="60" rx="16" fill="#2563eb"/>
      <path d="M30 20 L45 30 L30 50 L15 30 Z" fill="#e0f2fe"/>
      <circle cx="30" cy="35" r="7" fill="#2563eb" stroke="#e0f2fe" strokeWidth="3"/>
      <text x="70" y="43" fontFamily="Inter, Arial, sans-serif" fontSize="28" fill="#2563eb" fontWeight="bold">zorg</text>
      <text x="140" y="43" fontFamily="Inter, Arial, sans-serif" fontSize="28" fill="#0ea5e9" fontWeight="bold">bewaking.nl</text>
      <text x="70" y="60" fontFamily="Inter, Arial, sans-serif" fontSize="12" fill="#64748b">onderdeel van Praesidion Security B.V.</text>
    </svg>
  )
} 