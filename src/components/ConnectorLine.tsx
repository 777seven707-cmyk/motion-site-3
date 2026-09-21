interface ConnectorLineProps {
  x1: string;
  y1: string;
  x2: string;
  y2: string;
  delay: number;
}

export default function ConnectorLine({ x1, y1, x2, y2, delay }: ConnectorLineProps) {
  return (
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none anim-fade-in"
      style={{ animationDelay: `${delay}ms` }}
    >
      <line
        x1={x1}
        y1={y1}
        x2={x2}
        y2={y2}
        stroke="rgba(255,255,255,0.35)"
        strokeWidth="1"
        vectorEffect="non-scaling-stroke"
        className="anim-line-flow"
        style={{ animationDelay: `${delay}ms` }}
      />
    </svg>
  );
}
