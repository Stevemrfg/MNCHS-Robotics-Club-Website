/**
 * CircuitDivider — a section break drawn as a PCB trace: a baseline with
 * right-angle jogs and via dots, instead of a plain <hr>. Used between
 * page sections to keep the "schematic sheet" motif consistent.
 */
export default function CircuitDivider() {
  return (
    <svg
      className="circuit-divider"
      viewBox="0 0 1200 56"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <line x1="0" y1="28" x2="1200" y2="28" stroke="var(--paper-line)" strokeWidth="1.5" />
      <path
        d="M120 28 L120 12 L320 12 L320 28"
        fill="none"
        stroke="var(--copper)"
        strokeWidth="1.5"
      />
      <path
        d="M560 28 L560 44 L760 44 L760 28"
        fill="none"
        stroke="var(--copper)"
        strokeWidth="1.5"
      />
      <path
        d="M940 28 L940 16 L1080 16 L1080 28"
        fill="none"
        stroke="var(--copper)"
        strokeWidth="1.5"
      />
      {[120, 320, 560, 760, 940, 1080].map((x) => (
        <circle key={x} cx={x} cy="28" r="3.2" fill="var(--copper)" />
      ))}
      <circle cx="40" cy="28" r="2.4" fill="var(--paper-line)" />
      <circle cx="1160" cy="28" r="2.4" fill="var(--paper-line)" />
    </svg>
  )
}
