import React, { useRef } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';

interface AnimatedTextProps {
  text: string;
  className?: string;
}

interface WordProps {
  word: string;
  progress: MotionValue<number>;
  range: [number, number];
}

const Word: React.FC<WordProps> = ({ word, progress, range }) => {
  const opacity = useTransform(progress, range, [0.2, 1]);

  return (
    <motion.span
      style={{ opacity }}
      className="inline-block mx-[0.18em] select-none"
    >
      {word}
    </motion.span>
  );
};

export const AnimatedText: React.FC<AnimatedTextProps> = ({ text, className = "" }) => {
  const ref = useRef<HTMLParagraphElement>(null);

  // Set up scroll listener targeting the paragraph element
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.8', 'end 0.2']
  });

  const words = text.split(' ');
  const totalWords = words.length;
  const progressWidth = 0.2; // Width of the scroll window for each word's fade-in

  return (
    <p
      ref={ref}
      className={`flex flex-wrap justify-center leading-relaxed text-center ${className}`}
    >
      {words.map((word, wordIdx) => {
        const start = (wordIdx / totalWords) * (1 - progressWidth);
        const end = start + progressWidth;

        return (
          <Word
            key={wordIdx}
            word={word}
            progress={scrollYProgress}
            range={[start, end]}
          />
        );
      })}
    </p>
  );
};
export default AnimatedText;
