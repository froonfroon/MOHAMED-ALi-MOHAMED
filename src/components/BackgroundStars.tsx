import React, { useEffect, useRef } from 'react';

export const BackgroundStars: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    let animationFrameId: number;

    // 3D Globe parameters
    const particleCount = 140;
    const perspective = 500; // 3D camera focal length
    
    // Responsive sphere radius
    let sphereRadius = Math.min(width, height) * 0.28;
    
    // Rotation angles and dynamics
    let rotX = 0.5;
    let rotY = 0.5;
    let targetRotX = 0.5;
    let targetRotY = 0.5;
    
    // Base rotational drift (constant momentum)
    let driftX = 0.0006;
    let driftY = 0.001;
    let velocityX = 0;
    let velocityY = 0;

    // Dragging state
    let isDragging = false;
    let prevMouseX = 0;
    let prevMouseY = 0;

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      sphereRadius = Math.min(width, height) * 0.28;
    };

    const handleMouseDown = (e: MouseEvent) => {
      // Allow drag rotation from anywhere on screen
      isDragging = true;
      prevMouseX = e.clientX;
      prevMouseY = e.clientY;
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (isDragging) {
        const deltaX = e.clientX - prevMouseX;
        const deltaY = e.clientY - prevMouseY;
        
        // Convert screen movement to 3D rotation steps
        targetRotY += deltaX * 0.003;
        targetRotX += deltaY * 0.003;

        prevMouseX = e.clientX;
        prevMouseY = e.clientY;
      }
    };

    const handleMouseUp = () => {
      isDragging = false;
    };

    // Mobile touch controls
    const handleTouchStart = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        isDragging = true;
        prevMouseX = e.touches[0].clientX;
        prevMouseY = e.touches[0].clientY;
      }
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (isDragging && e.touches.length > 0) {
        const deltaX = e.touches[0].clientX - prevMouseX;
        const deltaY = e.touches[0].clientY - prevMouseY;

        targetRotY += deltaX * 0.004;
        targetRotX += deltaY * 0.004;

        prevMouseX = e.touches[0].clientX;
        prevMouseY = e.touches[0].clientY;
      }
    };

    const handleTouchEnd = () => {
      isDragging = false;
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('touchstart', handleTouchStart);
    window.addEventListener('touchmove', handleTouchMove, { passive: true });
    window.addEventListener('touchend', handleTouchEnd);

    // Particle nodes structure
    interface Point3D {
      x: number;
      y: number;
      z: number;
      color: string;
      size: number;
      projX?: number;
      projY?: number;
      projScale?: number;
      depth?: number;
    }

    const points: Point3D[] = [];
    const colorBases = [
      'rgba(181, 1, 167, ',  // Brand Vibrant Pink
      'rgba(118, 33, 176, ',  // Brand Nebula Purple
      'rgba(190, 76, 0, ',    // Brand Sunset Orange
      'rgba(215, 226, 234, ',  // Metallic Soft Blue
    ];

    // Distribute points evenly on a 3D sphere surface using Fibonacci lattice distribution
    for (let i = 0; i < particleCount; i++) {
      const phi = Math.acos(1 - 2 * (i + 0.5) / particleCount);
      const theta = Math.PI * (1 + Math.sqrt(5)) * i;

      const x = Math.sin(phi) * Math.cos(theta);
      const y = Math.sin(phi) * Math.sin(theta);
      const z = Math.cos(phi);

      const colorBase = colorBases[Math.floor(Math.random() * colorBases.length)];
      
      points.push({
        x,
        y,
        z,
        color: colorBase,
        size: Math.random() * 1.8 + 1.2,
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      // Physics momentum logic
      if (!isDragging) {
        // Apply inertia velocity with decay, then return to base drift speed
        targetRotX += velocityX + driftX;
        targetRotY += velocityY + driftY;
        velocityX *= 0.95;
        velocityY *= 0.95;
      } else {
        // Track drag velocity during active click/drag
        velocityX = (targetRotX - rotX) * 0.15;
        velocityY = (targetRotY - rotY) * 0.15;
      }

      rotX += (targetRotX - rotX) * 0.08;
      rotY += (targetRotY - rotY) * 0.08;

      const cosX = Math.cos(rotX);
      const sinX = Math.sin(rotX);
      const cosY = Math.cos(rotY);
      const sinY = Math.sin(rotY);

      const centerX = width / 2;
      const centerY = height / 2;

      // Project particles to 2D
      const projected: Point3D[] = points.map((p) => {
        // Calculate coordinates based on adaptive sphere radius
        const rX = p.x * sphereRadius;
        const rY = p.y * sphereRadius;
        const rZ = p.z * sphereRadius;

        // 3D rotation on Y-axis
        let x1 = rX * cosY - rZ * sinY;
        let z1 = rX * sinY + rZ * cosY;

        // 3D rotation on X-axis
        let y2 = rY * cosX - z1 * sinX;
        let z2 = rY * sinX + z1 * cosX;

        // Focal perspective formula S = perspective / (perspective + Z)
        const scale = perspective / (perspective + z2);
        
        // Center the globe symmetrically to back the entire split content nicely
        const offsetCenterX = centerX;

        return {
          ...p,
          projX: x1 * scale + offsetCenterX,
          projY: y2 * scale + centerY,
          projScale: scale,
          depth: z2,
        };
      });

      // Painter's algorithm: sort by depth so back particles are drawn before front ones
      projected.sort((a, b) => b.depth! - a.depth!);

      // Draw connecting wireframe lines in 3D space
      const maxDistance = sphereRadius * 0.55;
      for (let i = 0; i < projected.length; i++) {
        for (let j = i + 1; j < projected.length; j++) {
          const p1 = projected[i];
          const p2 = projected[j];

          // Compute absolute 3D coordinate distance
          const dx = (p1.x - p2.x) * sphereRadius;
          const dy = (p1.y - p2.y) * sphereRadius;
          const dz = (p1.z - p2.z) * sphereRadius;
          const dist3D = Math.sqrt(dx * dx + dy * dy + dz * dz);

          if (dist3D < maxDistance) {
            const opacityMultiplier = (maxDistance - dist3D) / maxDistance;
            
            // Fade lines in background to increase depth illusion
            const avgScale = (p1.projScale! + p2.projScale!) / 2;
            const lineAlpha = opacityMultiplier * 0.09 * avgScale;

            ctx.beginPath();
            ctx.moveTo(p1.projX!, p1.projY!);
            ctx.lineTo(p2.projX!, p2.projY!);
            ctx.strokeStyle = `rgba(215, 226, 234, ${lineAlpha})`;
            ctx.lineWidth = 0.45 * avgScale;
            ctx.stroke();
          }
        }
      }

      // Draw glowing particle nodes
      projected.forEach((p) => {
        const radius = p.size * p.projScale!;
        // Scale opacity dynamically: closer = solid, further = faded
        const alpha = Math.max(0.08, Math.min(1, p.projScale! * 0.65));

        // Draw particle core
        ctx.beginPath();
        ctx.arc(p.projX!, p.projY!, radius, 0, Math.PI * 2);
        ctx.fillStyle = `${p.color}${alpha})`;
        ctx.fill();

        // Draw fuzzy light halo for foreground nodes
        if (p.projScale! > 1.15) {
          ctx.beginPath();
          ctx.arc(p.projX!, p.projY!, radius * 2.8, 0, Math.PI * 2);
          ctx.fillStyle = `${p.color}${alpha * 0.08})`;
          ctx.fill();
        }
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleTouchEnd);

      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-0 opacity-70"
    />
  );
};

export default BackgroundStars;
