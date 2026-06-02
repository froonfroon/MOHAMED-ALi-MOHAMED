import React from 'react';
import { motion } from 'framer-motion';

// Cache for dynamic components to avoid creating them during render
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const componentCache: { [key: string]: React.ComponentType<any> } = {};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const getMotionComponent = (type: string): React.ComponentType<any> => {
  if (!componentCache[type]) {
    if (type in motion) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      componentCache[type] = (motion as any)[type];
    } else {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      componentCache[type] = (motion as any).create(type);
    }
  }
  return componentCache[type];
};

interface FadeInProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  x?: number | string;
  y?: number | string;
  type?: string;
  className?: string;
}

export const FadeIn: React.FC<FadeInProps> = ({
  children,
  delay = 0,
  duration = 0.7,
  x = 0,
  y = 30,
  type = 'div',
  className = '',
}) => {
  return React.createElement(
    getMotionComponent(type),
    {
      className,
      initial: { opacity: 0, x, y },
      whileInView: { opacity: 1, x: 0, y: 0 },
      viewport: { once: true, margin: "50px", amount: 0 },
      transition: {
        delay,
        duration,
        ease: [0.25, 0.1, 0.25, 1]
      }
    },
    children
  );
};


