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
}

function makeStars(count: number, seed: number): Star[] {
  let s = seed;
  const rand = () => {
    s = (s * 9301 + 49297) % 233280;
    return s / 233280;
  };
  return Array.from({ length: count }, () => ({
    top: rand() * 100,
    left: rand() * 100,
    size: rand() < 0.85 ? 1 : rand() < 0.96 ? 2 : 3,
    duration: 2 + rand() * 3.5,
    delay: rand() * 4,
    minOpacity: 0.1 + rand() * 0.15,
    maxOpacity: 0.55 + rand() * 0.45,
    depth: 0.15 + rand() * 0.6,
  }));
}

export default function StarField({ scrollY }: { scrollY: number }) {
  const stars = useMemo(() => makeStars(160, 42), []);

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
