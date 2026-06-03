import React, { useState, useRef, type MouseEvent } from 'react';

interface TiltProps {
  children: React.ReactNode;
  maxTilt?: number; // maximum tilt in degrees
  perspective?: number; // 3D perspective depth in pixels
  className?: string;
}

export const Tilt: React.FC<TiltProps> = ({
  children,
  maxTilt = 8,
  perspective = 1000,
  className = '',
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [coords, setCoords] = useState({ rotateX: 0, rotateY: 0, x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    // Mouse coordinates relative to card element
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    // Normalized coordinates (-0.5 to 0.5) relative to card center
    const normalizedX = (mouseX / width) - 0.5;
    const normalizedY = (mouseY / height) - 0.5;

    // Calculate rotation angles based on limits
    const rotateX = -normalizedY * maxTilt;
    const rotateY = normalizedX * maxTilt;

    setCoords({
      rotateX,
      rotateY,
      x: mouseX,
      y: mouseY,
    });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setCoords({ rotateX: 0, rotateY: 0, x: 0, y: 0 });
  };

  const transformStyle = isHovered
    ? `perspective(${perspective}px) rotateX(${coords.rotateX}deg) rotateY(${coords.rotateY}deg) scale3d(1.02, 1.02, 1.02)`
    : `perspective(${perspective}px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`relative transition-all duration-300 ease-out will-change-transform ${className}`}
      style={{
        transform: transformStyle,
        transformStyle: 'preserve-3d',
      }}
    >
      {/* Glow Highlight overlay */}
      <div
        className="pointer-events-none absolute inset-0 rounded-[inherit] z-30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          opacity: isHovered ? 1 : 0,
          background: `radial-gradient(circle 350px at ${coords.x}px ${coords.y}px, rgba(181, 1, 167, 0.12), rgba(255, 255, 255, 0.05) 50%, transparent 100%)`,
        }}
      />
      {children}
    </div>
  );
};

export default Tilt;
