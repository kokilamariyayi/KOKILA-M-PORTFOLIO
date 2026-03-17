import { useEffect, useRef, useState } from 'react';

interface SkillRingCardProps {
  name: string;
  level: number;
  category: string;
  delay?: number;
}

const RADIUS = 35;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

export const SkillRingCard = ({ name, level, category, delay = 0 }: SkillRingCardProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect(); } },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const offset = visible ? CIRCUMFERENCE * (1 - level / 100) : CIRCUMFERENCE;

  return (
    <div
      ref={ref}
      className="flex flex-col items-center justify-center rounded-xl border border-border bg-card/60 backdrop-blur-sm"
      style={{ width: 130, height: 150, margin: '0 auto' }}
    >
      <svg width={80} height={80} viewBox="0 0 80 80">
        <circle
          cx={40} cy={40} r={RADIUS}
          fill="none"
          stroke="hsl(var(--muted))"
          strokeWidth={5}
          opacity={0.3}
        />
        <circle
          cx={40} cy={40} r={RADIUS}
          fill="none"
          stroke="hsl(var(--primary))"
          strokeWidth={5}
          strokeLinecap="round"
          strokeDasharray={CIRCUMFERENCE}
          strokeDashoffset={offset}
          transform="rotate(-90 40 40)"
          style={{
            transition: `stroke-dashoffset 1.2s ease-out ${delay}s`,
          }}
        />
        <text
          x={40} y={40}
          textAnchor="middle"
          dominantBaseline="central"
          fill="hsl(var(--foreground))"
          fontSize={16}
          fontWeight={700}
          fontFamily="'Space Grotesk', sans-serif"
        >
          {visible ? level : 0}%
        </text>
      </svg>
      <span className="text-foreground font-medium mt-1" style={{ fontSize: 13 }}>{name}</span>
      <span className="text-muted-foreground uppercase tracking-wider mt-0.5" style={{ fontSize: 10 }}>{category}</span>
    </div>
  );
};
