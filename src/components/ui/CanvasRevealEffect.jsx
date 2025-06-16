// src/components/ui/CanvasRevealEffect.jsx

import React, { useRef, useEffect } from 'react';

const CanvasRevealEffect = ({
  animationSpeed = 4,
  dotSize = 1.5,
  colors = [[255, 255, 255]],
  containerClassName = '',
}) => {
  const canvasRef = useRef(null);
  const parentRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const parent = parentRef.current;

    let width = parent.offsetWidth;
    let height = parent.offsetHeight;
    canvas.width = width;
    canvas.height = height;

    let animationFrameId;
    const dots = Array.from({ length: 200 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      dx: (Math.random() - 0.5) * animationSpeed,
      dy: (Math.random() - 0.5) * animationSpeed,
      color: colors[Math.floor(Math.random() * colors.length)],
    }));

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      dots.forEach(dot => {
        ctx.beginPath();
        ctx.arc(dot.x, dot.y, dotSize, 0, Math.PI * 2);
        ctx.fillStyle = `rgb(${dot.color[0]},${dot.color[1]},${dot.color[2]})`;
        ctx.fill();
        dot.x += dot.dx;
        dot.y += dot.dy;

        if (dot.x < 0 || dot.x > width) dot.dx *= -1;
        if (dot.y < 0 || dot.y > height) dot.dy *= -1;
      });
      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    const resize = () => {
      width = parent.offsetWidth;
      height = parent.offsetHeight;
      canvas.width = width;
      canvas.height = height;
    };
    window.addEventListener('resize', resize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resize);
    };
  }, [animationSpeed, dotSize, colors]);

  return (
    <div ref={parentRef} className={`absolute inset-0 ${containerClassName}`}>
      <canvas ref={canvasRef} className="w-full h-full" />
    </div>
  );
};

export default CanvasRevealEffect;