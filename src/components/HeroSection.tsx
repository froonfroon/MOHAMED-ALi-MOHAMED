import React from 'react';
import { FadeIn } from './FadeIn';
import { Magnet } from './Magnet';
import { ContactButton } from './ContactButton';
import type { Translation } from '../translations';
import mohamedPortrait from '../assets/mohamed_portrait.png';

interface HeroSectionProps {
  t: Translation;
  lang: 'ar' | 'en';
  onToggleLang: () => void;
  onContactClick?: () => void;
  onAboutClick?: () => void;
  onProjectsClick?: () => void;
  onPriceClick?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  t,
  lang,
  onToggleLang,
  onContactClick,
  onAboutClick,
  onProjectsClick,
  onPriceClick,
}) => {
  return (
    <section className="relative h-screen w-full flex flex-col justify-between overflow-x-clip bg-darkBg">
      {/* Dynamic Background Pulsing Glow */}
      <div className="absolute top-[25%] left-1/2 -translate-x-1/2 w-[350px] sm:w-[500px] h-[350px] sm:h-[500px] rounded-full bg-gradient-to-r from-[#B600A8]/10 via-[#7621B0]/5 to-[#BE4C00]/10 blur-[120px] pointer-events-none z-0" />

      {/* 1. Navbar */}
      <FadeIn
        delay={0}
        y={-20}
        type="nav"
        className="w-full px-6 md:px-10 pt-6 md:pt-8 flex justify-between items-center z-20 gap-4"
      >
        <div className="flex gap-4 md:gap-8 items-center">
          <a
            href="#about"
            onClick={(e) => {
              e.preventDefault();
              onAboutClick?.();
            }}
            className="text-lightText font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.4rem] hover:opacity-70 transition-opacity duration-200"
          >
            {t.navAbout}
          </a>
          <a
            href="#price"
            onClick={(e) => {
              e.preventDefault();
              onPriceClick?.();
            }}
            className="text-lightText font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.4rem] hover:opacity-70 transition-opacity duration-200"
          >
            {t.navPrice}
          </a>
          <a
            href="#projects"
            onClick={(e) => {
              e.preventDefault();
              onProjectsClick?.();
            }}
            className="text-lightText font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.4rem] hover:opacity-70 transition-opacity duration-200"
          >
            {t.navProjects}
          </a>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              onContactClick?.();
            }}
            className="text-lightText font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.4rem] hover:opacity-70 transition-opacity duration-200"
          >
            {t.navContact}
          </a>
        </div>

        {/* Language Switcher Toggle */}
        <button
          onClick={onToggleLang}
          className="text-lightText font-medium uppercase tracking-wider text-xs md:text-sm lg:text-[1.1rem] px-3.5 py-1.5 sm:px-5 sm:py-2 rounded-full border border-lightText/20 bg-darkBg/30 backdrop-blur-md hover:bg-[#D7E2EA]/10 hover:border-lightText/40 hover:scale-105 active:scale-95 transition-all duration-300 focus:outline-none shadow-md shadow-[#B600A8]/5"
        >
          {lang === 'ar' ? 'English' : 'العربية'}
        </button>
      </FadeIn>

      {/* 2. Hero Heading */}
      <div className="w-full overflow-hidden text-center z-0 my-auto">
        <FadeIn
          delay={0.15}
          y={40}
          type="h1"
          className="hero-heading font-black uppercase tracking-tight leading-none whitespace-nowrap w-full text-[11vw] sm:text-[12vw] md:text-[13vw] lg:text-[14vw] mt-6 sm:mt-4 md:-mt-5 select-none"
        >
          {t.heroHeading}
        </FadeIn>
      </div>

      {/* 3. Hero Portrait (Centered Absolutely) */}
      <FadeIn
        delay={0.6}
        y={30}
        className="absolute left-1/2 -translate-x-1/2 z-10 w-[260px] sm:w-[320px] md:w-[380px] lg:w-[450px] top-1/2 -translate-y-1/2 sm:top-auto sm:translate-y-0 sm:bottom-0 pointer-events-none"
      >
        <Magnet
          padding={150}
          strength={3}
          activeTransition="transform 0.3s ease-out"
          inactiveTransition="transform 0.6s ease-in-out"
          className="pointer-events-auto"
        >
          <div className="relative group p-2">
            {/* Glowing backdrop shadow */}
            <div className="absolute inset-4 rounded-[32px] bg-gradient-to-tr from-[#B600A8]/30 via-[#7621B0]/25 to-[#BE4C00]/30 blur-2xl opacity-75 group-hover:opacity-100 transition-opacity duration-500 z-0 pointer-events-none" />

            {/* Immersive Outer Border Glassmorphism */}
            <img
              src={mohamedPortrait}
              alt="Mohamed Ali Portrait"
              className="relative w-full h-auto object-contain rounded-[32px] border-2 border-[#D7E2EA]/15 shadow-[0_20px_50px_rgba(181,1,167,0.15)] z-10 select-none backdrop-blur-sm"
              draggable="false"
            />
          </div>
        </Magnet>
      </FadeIn>

      {/* 4. Bottom bar */}
      <div className="w-full px-6 md:px-10 pb-7 sm:pb-8 md:pb-10 flex justify-between items-end z-20 gap-4">
        <FadeIn
          delay={0.35}
          y={20}
          className="max-w-[200px] sm:max-w-[280px] md:max-w-[360px] text-left rtl:text-right"
        >
          <p className="text-lightText font-light uppercase tracking-wide leading-snug text-[clamp(0.75rem,1.3vw,1.3rem)]">
            {t.heroBottomText}
          </p>
        </FadeIn>

        <FadeIn delay={0.5} y={20}>
          <ContactButton label={t.contactMe} lang={lang} />
        </FadeIn>
      </div>
    </section>
  );
};
export default HeroSection;
