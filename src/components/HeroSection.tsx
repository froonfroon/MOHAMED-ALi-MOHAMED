import React from 'react';
import { FadeIn } from './FadeIn';
import { ContactButton } from './ContactButton';
import type { Translation } from '../translations';
import mohamedPortrait from '../assets/mohamed_portrait.png';
import { Tilt } from './Tilt';
import { ArrowDown } from 'lucide-react';

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
    <section className="relative min-h-screen w-full flex flex-col justify-between overflow-x-clip bg-transparent">
      {/* Ambient background glowing blobs */}
      <div className="absolute top-[20%] left-[10%] w-[250px] sm:w-[400px] h-[250px] sm:h-[400px] rounded-full bg-[#B600A8]/5 blur-[100px] pointer-events-none z-0" />
      <div className="absolute bottom-[20%] right-[10%] w-[250px] sm:w-[400px] h-[250px] sm:h-[400px] rounded-full bg-[#BE4C00]/5 blur-[100px] pointer-events-none z-0" />

      {/* 1. Navbar */}
      <FadeIn
        delay={0}
        y={-20}
        type="nav"
        className="w-full px-6 md:px-12 pt-6 md:pt-8 flex justify-between items-center z-30 gap-4"
      >
        <div className="flex gap-4 md:gap-8 items-center">
          <a
            href="#about"
            onClick={(e) => {
              e.preventDefault();
              onAboutClick?.();
            }}
            className="text-lightText font-semibold uppercase tracking-wider text-sm md:text-base lg:text-[1.2rem] hover:text-[#B600A8] transition-colors duration-200"
          >
            {t.navAbout}
          </a>
          <a
            href="#price"
            onClick={(e) => {
              e.preventDefault();
              onPriceClick?.();
            }}
            className="text-lightText font-semibold uppercase tracking-wider text-sm md:text-base lg:text-[1.2rem] hover:text-[#B600A8] transition-colors duration-200"
          >
            {t.navPrice}
          </a>
          <a
            href="#projects"
            onClick={(e) => {
              e.preventDefault();
              onProjectsClick?.();
            }}
            className="text-lightText font-semibold uppercase tracking-wider text-sm md:text-base lg:text-[1.2rem] hover:text-[#B600A8] transition-colors duration-200"
          >
            {t.navProjects}
          </a>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              onContactClick?.();
            }}
            className="text-lightText font-semibold uppercase tracking-wider text-sm md:text-base lg:text-[1.2rem] hover:text-[#B600A8] transition-colors duration-200"
          >
            {t.navContact}
          </a>
        </div>

        {/* Language Switcher Toggle */}
        <button
          onClick={onToggleLang}
          className="text-lightText font-medium uppercase tracking-wider text-xs md:text-sm px-4 py-2 rounded-full border border-lightText/20 bg-[#0C0C0C]/30 backdrop-blur-md hover:bg-[#D7E2EA]/10 hover:border-lightText/40 hover:scale-105 active:scale-95 transition-all duration-300 focus:outline-none shadow-md shadow-[#B600A8]/5"
        >
          {lang === 'ar' ? 'English' : 'العربية'}
        </button>
      </FadeIn>

      {/* 2. Main Split Content Layout */}
      <div className="max-w-6xl mx-auto w-full px-6 md:px-12 flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-14 flex-grow py-8 md:py-16 relative z-10">
        
        {/* Left/Right Text Column */}
        <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left rtl:lg:text-right w-full z-10">
          <FadeIn delay={0.15} y={30} className="w-full">
            {/* Professional Welcome Badge */}
            <span className="inline-block px-4 py-1.5 rounded-full border border-[#B600A8]/30 bg-[#B600A8]/10 text-white font-medium text-xs sm:text-sm uppercase tracking-widest mb-6">
              {lang === 'ar' ? 'مرحباً بك في معرض أعمالي' : 'Welcome to my portfolio'}
            </span>

            {/* Giant Metallic Heading Name */}
            <h1 className="hero-heading font-black uppercase tracking-tight leading-none text-[2.8rem] sm:text-[4rem] md:text-[5rem] lg:text-[5.5rem] mb-6 select-all">
              {t.heroHeading}
            </h1>

            {/* Title Label */}
            <h2 className="text-[#D7E2EA]/85 font-bold text-lg sm:text-2xl tracking-wide mb-6 uppercase">
              {lang === 'ar' ? 'مهندس برمجيات ونظم خبير' : 'Expert Software & Systems Engineer'}
            </h2>

            {/* Description Subtext */}
            <p className="text-[#D7E2EA]/60 font-light text-base sm:text-lg max-w-xl leading-relaxed mb-8">
              {t.heroBottomText}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 sm:gap-6">
              <ContactButton label={t.contactMe} lang={lang} />
              
              <button
                onClick={onProjectsClick}
                className="px-8 py-4 rounded-full border border-[#D7E2EA]/20 bg-transparent text-[#D7E2EA] font-semibold text-sm sm:text-base uppercase tracking-wider hover:bg-[#D7E2EA]/10 hover:border-[#D7E2EA]/40 transition-all duration-300 focus:outline-none flex items-center gap-2 group active:scale-95"
              >
                {lang === 'ar' ? 'عرض أعمالي' : 'View My Work'}
                <ArrowDown size={16} className="group-hover:translate-y-1 transition-transform duration-300" />
              </button>
            </div>
          </FadeIn>
        </div>

        {/* Right/Left Portrait Column */}
        <div className="flex-1 flex justify-center items-center w-full max-w-[280px] sm:max-w-[360px] lg:max-w-[420px] z-10">
          <FadeIn delay={0.35} y={40} className="w-full">
            <Tilt maxTilt={6} className="w-full rounded-[40px]">
              <div className="relative group p-2 w-full">
                {/* Immersive gradient glow backdrop */}
                <div className="absolute -inset-1 rounded-[36px] bg-gradient-to-tr from-[#B600A8] via-[#7621B0] to-[#BE4C00] opacity-40 blur-xl group-hover:opacity-75 transition-opacity duration-500 z-0" />

                {/* Glassmorphic Frame Wrapper */}
                <div className="relative z-10 rounded-[32px] overflow-hidden border border-white/10 shadow-[0_30px_60px_rgba(0,0,0,0.85)] bg-[#0C0C0C]/40 backdrop-blur-md p-1.5 sm:p-2 w-full">
                  <img
                    src={mohamedPortrait}
                    alt="Mohamed Ali Portrait"
                    className="relative w-full h-auto object-contain rounded-[26px] border border-white/5 select-none"
                    draggable="false"
                  />
                  
                  {/* Floating stats badge inside the frame */}
                  <div className="absolute bottom-6 right-6 rtl:left-6 rtl:right-auto z-20 bg-[#0C0C0C]/85 backdrop-blur-md rounded-2xl px-5 py-3 shadow-2xl border border-white/10">
                    <span className="text-white font-black text-xl sm:text-2xl leading-none block">+5</span>
                    <span className="text-white/60 font-light text-[10px] sm:text-xs uppercase tracking-widest">
                      {lang === 'ar' ? 'سنوات خبرة' : 'Years Experience'}
                    </span>
                  </div>
                </div>
              </div>
            </Tilt>
          </FadeIn>
        </div>

      </div>

      {/* 3. Bottom Scrolling Metadata Bar */}
      <div className="w-full px-6 md:px-12 pb-6 flex justify-between items-center z-20 text-[10px] sm:text-xs uppercase tracking-widest text-[#D7E2EA]/30">
        <span>{lang === 'ar' ? 'حلول برمجية ذكية • أنظمة آمنة • تصميم متقن' : 'Smart Solutions • Secure Systems • Crafted Design'}</span>
        <button
          onClick={onAboutClick}
          className="hover:text-white transition-colors duration-300 focus:outline-none flex items-center gap-1"
        >
          {lang === 'ar' ? 'اسحب للأسفل' : 'Scroll Down'} ↓
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
