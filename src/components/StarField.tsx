import { useMemo } from 'react';

interface Star {
  top: number;
  left: number;
  size: number;
  duration: number;
  delay: number;
  minOpacity: number;
  maxOpacity: number;
  depth: number;
  glow: boolean;
}

function makeStars(count: number, seed: number): Star[] {
  let s = seed;
  const rand = () => {
    s = (s * 9301 + 49297) % 233280;
    return s / 233280;
  };
  return Array.from({ length: count }, () => {
    const r = rand();
    const size = r < 0.62 ? 1.5 : r < 0.88 ? 2.5 : r < 0.97 ? 3.5 : 5;
    return {
      top: rand() * 100,
      left: rand() * 100,
      size,
      duration: 1.8 + rand() * 3,
      delay: rand() * 4,
      minOpacity: 0.25 + rand() * 0.2,
      maxOpacity: 0.85 + rand() * 0.15,
      depth: 0.15 + rand() * 0.65,
      glow: size >= 3.5,
    };
  });
}

export default function StarField({ scrollY }: { scrollY: number }) {
  const stars = useMemo(() => makeStars(220, 42), []);

  return (
    <div className="fixed inset-0 pointer-events-none bg-black" style={{ zIndex: 0 }}>
      {stars.map((star, i) => (
        <span
          key={i}
          className="star absolute rounded-full bg-white"
          style={
            {
              top: `${star.top}%`,
              left: `${star.left}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
              boxShadow: star.glow ? `0 0 ${star.size * 3}px ${star.size * 0.9}px rgba(255,255,255,0.55)` : undefined,
              transform: `translateY(${-scrollY * star.depth}px)`,
              '--star-dur': `${star.duration}s`,
              '--star-delay': `${star.delay}s`,
              '--star-min': star.minOpacity,
              '--star-max': star.maxOpacity,
            } as React.CSSProperties
          }
        />
      ))}
    </div>
  );
}
