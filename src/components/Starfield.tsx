import { useEffect, useRef } from 'react';

interface Star {
  x: number;
  y: number;
  z: number;
  size: number;
  opacity: number;
}

const Starfield = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const starsRef = useRef<Star[]>([]);
  const animationRef = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const initStars = () => {
      const starCount = Math.floor((canvas.width * canvas.height) / 3000);
      starsRef.current = [];

      for (let i = 0; i < starCount; i++) {
        starsRef.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          z: Math.random() * 1000,
          size: Math.random() * 2 + 0.5,
          opacity: Math.random() * 0.8 + 0.2,
        });
      }
    };

    const drawStar = (star: Star) => {
      const perspective = 1000 / (1000 - star.z * 0.5);
      const x = (star.x - canvas.width / 2) * perspective + canvas.width / 2;
      const y = (star.y - canvas.height / 2) * perspective + canvas.height / 2;
      const size = star.size * perspective;

      // Create gradient for star glow
      const gradient = ctx.createRadialGradient(x, y, 0, x, y, size * 2);
      
      // Cyan and violet stars
      const isCyan = Math.random() > 0.7;
      const baseColor = isCyan ? '185, 100%, 50%' : '260, 60%, 55%';
      
      gradient.addColorStop(0, `hsla(${baseColor}, ${star.opacity})`);
      gradient.addColorStop(0.5, `hsla(${baseColor}, ${star.opacity * 0.3})`);
      gradient.addColorStop(1, 'transparent');

      ctx.beginPath();
      ctx.arc(x, y, size * 2, 0, Math.PI * 2);
      ctx.fillStyle = gradient;
      ctx.fill();

      // Core of the star
      ctx.beginPath();
      ctx.arc(x, y, size * 0.5, 0, Math.PI * 2);
      ctx.fillStyle = `hsla(210, 40%, 96%, ${star.opacity})`;
      ctx.fill();
    };

    const animate = () => {
      ctx.fillStyle = 'hsl(240, 20%, 4%)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw nebula effect
      const nebulaGradient = ctx.createRadialGradient(
        canvas.width * 0.3,
        canvas.height * 0.4,
        0,
        canvas.width * 0.3,
        canvas.height * 0.4,
        canvas.width * 0.5
      );
      nebulaGradient.addColorStop(0, 'hsla(260, 60%, 30%, 0.1)');
      nebulaGradient.addColorStop(0.5, 'hsla(220, 60%, 20%, 0.05)');
      nebulaGradient.addColorStop(1, 'transparent');
      ctx.fillStyle = nebulaGradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Second nebula
      const nebulaGradient2 = ctx.createRadialGradient(
        canvas.width * 0.7,
        canvas.height * 0.6,
        0,
        canvas.width * 0.7,
        canvas.height * 0.6,
        canvas.width * 0.4
      );
      nebulaGradient2.addColorStop(0, 'hsla(185, 100%, 50%, 0.05)');
      nebulaGradient2.addColorStop(0.5, 'hsla(200, 80%, 30%, 0.03)');
      nebulaGradient2.addColorStop(1, 'transparent');
      ctx.fillStyle = nebulaGradient2;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      starsRef.current.forEach((star, index) => {
        // Slow movement towards viewer
        star.z += 0.2;
        
        // Twinkle effect
        star.opacity = 0.3 + Math.sin(Date.now() * 0.001 + index) * 0.3;

        if (star.z > 1000) {
          star.z = 0;
          star.x = Math.random() * canvas.width;
          star.y = Math.random() * canvas.height;
        }

        drawStar(star);
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    resizeCanvas();
    initStars();
    animate();

    window.addEventListener('resize', () => {
      resizeCanvas();
      initStars();
    });

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-10"
      style={{ background: 'hsl(240, 20%, 4%)' }}
    />
  );
};

export default Starfield;
