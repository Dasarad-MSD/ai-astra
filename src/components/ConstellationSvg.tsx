import React from 'react';
import { ConstellationData } from '../types';

interface ConstellationSvgProps {
  data: ConstellationData;
  className?: string;
  glowColor?: string;
  interactive?: boolean;
}

export const ConstellationSvg: React.FC<ConstellationSvgProps> = ({
  data,
  className = 'w-48 h-48',
  glowColor = '#38bdf8',
}) => {
  return (
    <svg
      viewBox="0 0 100 100"
      className={`${className} overflow-visible`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <filter id={`star-glow-${glowColor.replace(/[^a-zA-Z0-9]/g, '')}`} x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="1.5" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>

      {/* Constellation connector lines */}
      {data.lines.map((line, idx) => {
        const p1 = data.stars[line.from];
        const p2 = data.stars[line.to];
        if (!p1 || !p2) return null;
        return (
          <line
            key={`line-${idx}`}
            x1={p1.x}
            y1={p1.y}
            x2={p2.x}
            y2={p2.y}
            stroke={glowColor}
            strokeWidth="0.75"
            strokeOpacity="0.45"
            strokeDasharray="1.5 1"
          />
        );
      })}

      {/* Secondary faint solid line underneath for elegance */}
      {data.lines.map((line, idx) => {
        const p1 = data.stars[line.from];
        const p2 = data.stars[line.to];
        if (!p1 || !p2) return null;
        return (
          <line
            key={`line-solid-${idx}`}
            x1={p1.x}
            y1={p1.y}
            x2={p2.x}
            y2={p2.y}
            stroke="#ffffff"
            strokeWidth="0.3"
            strokeOpacity="0.25"
          />
        );
      })}

      {/* Star Nodes */}
      {data.stars.map((star, idx) => (
        <g key={`star-${idx}`}>
          {/* Outer halo */}
          <circle
            cx={star.x}
            cy={star.y}
            r={star.size * 1.8}
            fill={glowColor}
            fillOpacity="0.2"
          />
          {/* Core star */}
          <circle
            cx={star.x}
            cy={star.y}
            r={star.size}
            fill="#ffffff"
            filter={`url(#star-glow-${glowColor.replace(/[^a-zA-Z0-9]/g, '')})`}
          />
          {/* Subtle star pulse sparkle */}
          <circle
            cx={star.x}
            cy={star.y}
            r={star.size * 0.5}
            fill="#fef08a"
          />
          {star.label && (
            <text
              x={star.x + 3}
              y={star.y - 3}
              fill="#94a3b8"
              fontSize="3"
              fontFamily="var(--font-sans)"
              letterSpacing="0.05em"
              opacity="0.8"
            >
              {star.label}
            </text>
          )}
        </g>
      ))}
    </svg>
  );
};
