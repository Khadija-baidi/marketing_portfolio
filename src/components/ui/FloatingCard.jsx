import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';

export default function FloatingCard({
  children,
  className = '',
  intensity = 12,
  glow = true,
}) {
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rx = useSpring(useTransform(my, [-0.5, 0.5], [intensity, -intensity]), { stiffness: 200, damping: 20 });
  const ry = useSpring(useTransform(mx, [-0.5, 0.5], [-intensity, intensity]), { stiffness: 200, damping: 20 });

  const handleMove = (e) => {
    const r = e.currentTarget.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width - 0.5);
    my.set((e.clientY - r.top) / r.height - 0.5);
  };
  const handleLeave = () => { mx.set(0); my.set(0); };

  return (
    <motion.div
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{ rotateX: rx, rotateY: ry, transformStyle: 'preserve-3d', transformPerspective: 1000 }}
      className={`relative will-change-transform ${className}`}
    >
      {glow && (
        <span
          aria-hidden
          className="absolute -inset-px rounded-[inherit] opacity-0 hover:opacity-100 transition-opacity duration-700 pointer-events-none"
          style={{
            background:
              'radial-gradient(220px 220px at var(--mx, 50%) var(--my, 50%), rgba(255,101,0,0.25), transparent 60%)',
          }}
        />
      )}
      <div style={{ transform: 'translateZ(40px)' }} className="relative">
        {children}
      </div>
    </motion.div>
  );
}
