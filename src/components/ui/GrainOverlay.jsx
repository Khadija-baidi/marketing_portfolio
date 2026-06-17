export default function GrainOverlay({ opacity = 0.18, className = '' }) {
  return (
    <div
      aria-hidden
      className={`pointer-events-none fixed inset-0 z-[60] noise mix-blend-soft-light ${className}`}
      style={{ opacity }}
    />
  );
}
