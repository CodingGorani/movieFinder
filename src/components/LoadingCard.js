import { useState, useEffect, useRef } from 'react';
import useCanvas from '../hooks/useCanvas';

function resizeCanvasToDisplaySize(canvas) {
  const { width, height } = canvas.getBoundingClientRect();

  if (canvas.width !== width || canvas.height !== height) {
    canvas.width = width;
    canvas.height = height;
    return true;
  }
  return false;
}

function LoadingCard(props) {
  const draw = (ctx, frameCount) => {
    resizeCanvasToDisplaySize(ctx.canvas);

    const startAngle = 0 + ((frameCount * 8) / 180) * Math.PI;
    const { width, height } = ctx.canvas;
    ctx.fillStyle = '#f0f0f5';
    ctx.fillRect(0, 0, width, height);
    ctx.lineWidth = 3;

    ctx.beginPath();
    ctx.arc(
      width / 2,
      height / 2,
      20 * Math.sin(frameCount * 0.05) ** 2,
      startAngle,
      startAngle + (3 / 2) * Math.PI
    );
    ctx.stroke();
  };

  const canvasRef = useCanvas(draw);

  return (
    <canvas
      ref={canvasRef}
      {...props}
      style={{ width: '100%', height: '100%' }}
    ></canvas>
  );
}

export default LoadingCard;
