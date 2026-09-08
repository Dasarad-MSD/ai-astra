import React, { useEffect, useRef } from 'react';

interface CosmicCanvasProps {
  glowColor?: string;
  density?: number;
}

export const CosmicCanvas: React.FC<CosmicCanvasProps> = ({
  glowColor = 'rgba(168, 85, 247, 0.15)',
  density = 120,
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    // Create stars
    const stars: {
      x: number;
      y: number;
      radius: number;
      alpha: number;
      speed: number;
      twinkleSpeed: number;
      phase: number;
      color: string;
    }[] = [];

    const starColors = [
      '#ffffff',
      '#fef08a', // pale yellow
      '#bae6fd', // soft celestial blue
      '#fbcfe8', // soft pink
      '#fed7aa', // amber white
    ];

    for (let i = 0; i < density; i++) {
      stars.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 1.5 + 0.4,
        alpha: Math.random() * 0.7 + 0.2,
        speed: (Math.random() * 0.08 + 0.02) * (Math.random() > 0.5 ? 1 : -1),
        twinkleSpeed: Math.random() * 0.02 + 0.005,
        phase: Math.random() * Math.PI * 2,
        color: starColors[Math.floor(Math.random() * starColors.length)],
      });
    }

    let time = 0;

    const render = () => {
      time += 0.01;
      ctx.clearRect(0, 0, width, height);

      // Draw subtle nebula clouds
      const grad1 = ctx.createRadialGradient(
        width * 0.25 + Math.sin(time * 0.2) * 50,
        height * 0.35 + Math.cos(time * 0.2) * 40,
        10,
        width * 0.25,
        height * 0.35,
        Math.max(width, height) * 0.5
      );
      grad1.addColorStop(0, glowColor);
      grad1.addColorStop(1, 'rgba(5, 6, 13, 0)');
      ctx.fillStyle = grad1;
      ctx.fillRect(0, 0, width, height);

      // Draw second subtle counter-glow
      const grad2 = ctx.createRadialGradient(
        width * 0.8 - Math.sin(time * 0.15) * 60,
        height * 0.7 + Math.cos(time * 0.15) * 50,
        20,
        width * 0.8,
        height * 0.7,
        Math.max(width, height) * 0.45
      );
      grad2.addColorStop(0, 'rgba(30, 58, 138, 0.14)'); // deep oceanic blue
      grad2.addColorStop(1, 'rgba(5, 6, 13, 0)');
      ctx.fillStyle = grad2;
      ctx.fillRect(0, 0, width, height);

      // Draw stars
      for (const s of stars) {
        s.phase += s.twinkleSpeed;
        const currentAlpha = Math.max(0.15, Math.min(1, s.alpha + Math.sin(s.phase) * 0.35));

        ctx.beginPath();
        ctx.arc(s.x, s.y, s.radius, 0, Math.PI * 2);
        ctx.fillStyle = s.color;
        ctx.globalAlpha = currentAlpha;
        ctx.shadowBlur = s.radius > 1.2 ? 6 : 0;
        ctx.shadowColor = s.color;
        ctx.fill();
        ctx.shadowBlur = 0;

        // Slow movement
        s.y -= s.speed * 0.4;
        if (s.y < 0) s.y = height;
        if (s.y > height) s.y = 0;
      }
      ctx.globalAlpha = 1;

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [glowColor, density]);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-0 h-full w-full"
      style={{ opacity: 0.9 }}
    />
  );
};
