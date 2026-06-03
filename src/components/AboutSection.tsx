import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { FadeIn } from './FadeIn';
import { AnimatedText } from './AnimatedText';
import { ContactButton } from './ContactButton';
import type { Translation } from '../translations';
import mohamedReal from '../assets/mohamed_portrait.png';

interface AboutSectionProps {
  t: Translation;
  lang: 'ar' | 'en';
  id?: string;
}

const TECH_STACK = [
  "React", "PHP", "Flutter", "Dart", "JavaScript",
  "TypeScript", "Python", "C++", "Go", "Swift"
];

// Staggered spring animations for the tech badges
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05
    }
  }
};

const badgeVariants: Variants = {
  hidden: { opacity: 0, scale: 0.8, y: 15 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      type: "spring" as const,
      stiffness: 120,
      damping: 12
    }
  }
};

export const AboutSection: React.FC<AboutSectionProps> = ({ t, lang, id = "about" }) => {
  const [hoveredTech, setHoveredTech] = useState<string | null>(null);

  return (
    <section
      id={id}
      className="relative min-h-screen w-full flex flex-col justify-center items-center px-5 sm:px-8 md:px-10 py-20 bg-transparent overflow-hidden"
    >
      {/* Decorative 3D Images */}
      {/* Top Left: Moon */}
      <FadeIn
        delay={0.1}
        x={-80}
        y={0}
        duration={0.9}
        className="absolute top-[4%] left-[1%] sm:left-[2%] md:left-[4%] z-0 pointer-events-none select-none"
      >
        <img
          src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/moon_icon.11395d36.png"
          alt="Moon 3D Decor"
          className="w-[120px] sm:w-[160px] md:w-[210px] h-auto object-contain select-none"
          draggable="false"
        />
      </FadeIn>

      {/* Bottom Left: 3D Object */}
      <FadeIn
        delay={0.25}
        x={-80}
        y={0}
        duration={0.9}
        className="absolute bottom-[8%] left-[3%] sm:left-[6%] md:left-[10%] z-0 pointer-events-none select-none"
      >
        <img
          src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/p59_1.4659672e.png"
          alt="Abstract 3D Decor"
          className="w-[100px] sm:w-[140px] md:w-[180px] h-auto object-contain select-none"
          draggable="false"
        />
      </FadeIn>

      {/* Top Right: Lego */}
      <FadeIn
        delay={0.15}
        x={80}
        y={0}
        duration={0.9}
        className="absolute top-[4%] right-[1%] sm:right-[2%] md:right-[4%] z-0 pointer-events-none select-none"
      >
        <img
          src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/lego_icon-1.703bb594.png"
          alt="Lego 3D Decor"
          className="w-[120px] sm:w-[160px] md:w-[210px] h-auto object-contain select-none"
          draggable="false"
        />
      </FadeIn>

      {/* Bottom Right: 3D Group */}
      <FadeIn
        delay={0.3}
        x={80}
        y={0}
        duration={0.9}
        className="absolute bottom-[8%] right-[3%] sm:right-[6%] md:right-[10%] z-0 pointer-events-none select-none"
      >
        <img
          src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/Group_134-1.2e04f3ce.png"
          alt="3D Group Decor"
          className="w-[130px] sm:w-[170px] md:w-[220px] h-auto object-contain select-none"
          draggable="false"
        />
      </FadeIn>

      {/* Content Container */}
      <div className="relative z-10 flex flex-col items-center max-w-5xl w-full">
        {/* Title */}
        <FadeIn
          delay={0}
          y={40}
          type="h2"
          className="hero-heading font-black uppercase leading-none tracking-tight text-center w-full text-[clamp(3rem,12vw,160px)] mb-10 sm:mb-14 md:mb-16"
        >
          {t.aboutTitle}
        </FadeIn>

        {/* Two-column layout: portrait + bio */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-10 md:gap-16 w-full">

          {/* Portrait Card */}
          <FadeIn delay={0.1} x={lang === 'ar' ? 60 : -60} y={0} duration={0.9} className="shrink-0 flex flex-col items-center gap-4">
            <div className="relative group">
              {/* Outer glow ring */}
              <div className="absolute -inset-1 rounded-[28px] bg-gradient-to-tr from-[#B600A8] via-[#7621B0] to-[#BE4C00] opacity-60 blur-md group-hover:opacity-90 transition-all duration-500 z-0" />
              {/* Portrait image */}
              <div className="relative z-10 rounded-[24px] overflow-hidden border-2 border-white/10 shadow-2xl w-[220px] sm:w-[260px] md:w-[280px]">
                <img
                  src={mohamedReal}
                  alt="المهندس محمد علي محمد"
                  className="w-full h-[300px] sm:h-[340px] md:h-[370px] object-cover object-top"
                  draggable="false"
                />
              </div>
              {/* Experience badge */}
              <div className="absolute -bottom-4 -right-4 rtl:-left-4 rtl:right-auto z-20 bg-gradient-to-br from-[#18011F] via-[#B600A8] to-[#7621B0] rounded-2xl px-4 py-2 shadow-lg shadow-[#B600A8]/40 border border-white/10">
                <span className="text-white font-black text-lg sm:text-xl leading-none block">+5</span>
                <span className="text-white/80 font-light text-[10px] sm:text-xs uppercase tracking-widest">{lang === 'ar' ? 'سنوات خبرة' : 'Years Exp.'}</span>
              </div>
            </div>

            {/* Name badge below portrait */}
            <div className="text-center mt-6">
              <p className="text-[#D7E2EA] font-semibold text-sm sm:text-base tracking-wide">
                {lang === 'ar' ? 'م. محمد علي محمد' : 'Eng. Mohamed Ali Mohamed'}
              </p>
              <p className="text-[#D7E2EA]/50 font-light text-xs uppercase tracking-widest mt-1">
                {lang === 'ar' ? 'مهندس برمجيات ونظم' : 'Software & Systems Engineer'}
              </p>
            </div>
          </FadeIn>

          {/* Bio text side */}
          <div className="flex flex-col items-center md:items-start text-center md:text-start rtl:md:text-right flex-1 pt-0 md:pt-4">
          {/* Animated Paragraph */}
          <AnimatedText
            key={lang}
            text={t.aboutParagraph}
            className="text-[#D7E2EA] font-medium leading-relaxed max-w-[600px] text-[clamp(1rem,2vw,1.35rem)] text-center md:text-start"
          />

          {/* Tech Stack badging container with spring mechanics */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "50px" }}
            className="flex flex-wrap justify-center md:justify-start gap-2.5 sm:gap-3 max-w-[600px] w-full mt-8 sm:mt-10 md:mt-12"
          >
          {TECH_STACK.map((tech) => (
            <motion.span
              key={tech}
              variants={badgeVariants}
              whileHover={{
                scale: 1.08,
                borderColor: 'rgba(181, 1, 167, 0.65)',
                color: '#ffffff',
                boxShadow: '0 0 20px rgba(181, 1, 167, 0.35)',
                backgroundColor: 'rgba(181, 1, 167, 0.08)'
              }}
              onMouseEnter={() => setHoveredTech(tech)}
              onMouseLeave={() => setHoveredTech(null)}
              className="px-4 py-2 rounded-full border border-lightText/10 bg-lightText/5 backdrop-blur-md text-lightText/85 font-medium uppercase tracking-wider text-xs sm:text-sm select-none cursor-default transition-colors duration-200"
            >
              {tech}
            </motion.span>
          ))}
          </motion.div>

          {/* Floating tech description box */}
          <div className="h-16 mt-6 flex justify-start items-center w-full max-w-[600px] px-0">
          <AnimatePresence mode="wait">
            {hoveredTech ? (
              <motion.div
                key={hoveredTech}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.18 }}
                className="px-6 py-2.5 rounded-2xl border border-[#B600A8]/30 bg-[#0C0C0C]/85 backdrop-blur-md text-[#D7E2EA] font-light text-xs sm:text-sm shadow-lg shadow-[#B600A8]/5 max-w-lg text-center"
              >
                <strong className="text-white font-medium mr-1.5 rtl:ml-1.5 rtl:mr-0">{hoveredTech}:</strong>
                {t.techDescriptions[hoveredTech]}
              </motion.div>
            ) : (
              <motion.p
                key="default-tip"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.35 }}
                exit={{ opacity: 0 }}
                className="text-[10px] sm:text-xs uppercase tracking-widest font-light text-[#D7E2EA]/85"
              >
                {lang === 'ar' ? 'مرر الماوس فوق المهارات لعرض التفاصيل' : 'Hover over skills to reveal details'}
              </motion.p>
            )}
            </AnimatePresence>
          </div>

          {/* Spacing Gap 2 */}
          <div className="h-4 sm:h-6" />

          {/* Contact button */}
          <FadeIn delay={0.1} y={20}>
            <ContactButton label={t.contactMe} lang={lang} />
          </FadeIn>

          </div>
        </div>
      </div>
    </section>
  );
};
export default AboutSection;
