import { useState, useEffect } from 'react';
import HeroSection from './components/HeroSection';
import MarqueeSection from './components/MarqueeSection';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import ProjectsSection from './components/ProjectsSection';
import { ArrowUp } from 'lucide-react';
import { FadeIn } from './components/FadeIn';
import { translations } from './translations';
import BackgroundStars from './components/BackgroundStars';
import PricingSection from './components/PricingSection';
import FAQSection from './components/FAQSection';
import ChatbotWidget from './components/ChatbotWidget';

function App() {
  // Default to Arabic ('ar') as requested by user, or support easy toggling
  const [lang, setLang] = useState<'ar' | 'en'>('ar');

  // Load the current translation dictionary
  const t = translations[lang];

  // Dynamic layout direction updates
  useEffect(() => {
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
  }, [lang]);

  const toggleLanguage = () => {
    setLang((prev) => (prev === 'ar' ? 'en' : 'ar'));
  };

  // Smooth scroll handler to target elements by ID
  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <main className="w-full min-h-screen bg-darkBg text-lightText overflow-x-clip relative">
      {/* Immersive Particle background stars */}
      <BackgroundStars />

      {/* 1. Hero Section */}
      <HeroSection
        t={t}
        lang={lang}
        onToggleLang={toggleLanguage}
        onAboutClick={() => handleScrollTo('about')}
        onPriceClick={() => handleScrollTo('pricing')}
        onProjectsClick={() => handleScrollTo('projects')}
        onContactClick={() => handleScrollTo('contact')}
      />

      {/* 2. Marquee Section */}
      <MarqueeSection />

      {/* 3. About Section */}
      <AboutSection
        t={t}
        lang={lang}
        id="about"
      />

      {/* 4. Services Section */}
      <ServicesSection t={t} id="services" />

      {/* 5. Pricing Section (Price Target) */}
      <PricingSection lang={lang} id="pricing" />

      {/* 6. Projects Section */}
      <ProjectsSection t={t} id="projects" />

      {/* 7. FAQ Section */}
      <FAQSection lang={lang} id="faq" />

      {/* 8. Floating Action Chatbot Widget */}
      <ChatbotWidget lang={lang} />

      {/* 6. Footer (Contact Target) */}
      <footer
        id="contact"
        className="bg-[#0C0C0C] border-t border-[#D7E2EA]/10 px-6 sm:px-10 py-16 sm:py-24 text-center relative z-20"
      >
        <div className="max-w-5xl mx-auto flex flex-col items-center gap-10 sm:gap-14">

          {/* Header */}
          <FadeIn delay={0} y={30} className="text-center">
            <h2 className="hero-heading font-black uppercase text-[clamp(2.5rem,8vw,90px)] leading-none mb-4 select-none">
              {t.footerTitle}
            </h2>
            <p className="text-[#D7E2EA]/60 uppercase tracking-widest text-xs sm:text-sm font-light max-w-md mx-auto">
              {t.footerSub}
            </p>
          </FadeIn>

          {/* WhatsApp Contact Card */}
          <FadeIn delay={0.15} y={30} className="w-full max-w-2xl">
            <div
              className="relative rounded-3xl overflow-hidden border border-white/10 p-8 sm:p-12 flex flex-col items-center gap-6"
              style={{
                background: 'linear-gradient(135deg, rgba(18,1,31,0.95) 0%, rgba(15,15,15,0.98) 60%, rgba(37,211,102,0.08) 100%)',
                boxShadow: '0 0 60px rgba(37,211,102,0.08), inset 0 1px 0 rgba(255,255,255,0.06)'
              }}
            >
              {/* WhatsApp logo top */}
              <div className="flex items-center gap-3 mb-2">
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center" style={{ background: '#25D366' }}>
                  <svg viewBox="0 0 32 32" width="26" height="26" fill="white" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16 2C8.268 2 2 8.268 2 16c0 2.47.664 4.784 1.82 6.773L2 30l7.418-1.79A13.94 13.94 0 0 0 16 30c7.732 0 14-6.268 14-14S23.732 2 16 2Zm0 25.5a11.44 11.44 0 0 1-5.84-1.6l-.42-.25-4.4 1.06 1.1-4.28-.27-.44A11.46 11.46 0 0 1 4.5 16C4.5 9.648 9.648 4.5 16 4.5S27.5 9.648 27.5 16 22.352 27.5 16 27.5Zm6.29-8.56c-.345-.172-2.04-1.005-2.355-1.12-.315-.114-.543-.172-.772.173-.229.344-.887 1.12-1.087 1.35-.2.228-.4.257-.745.085-.344-.172-1.452-.535-2.766-1.707-1.022-.912-1.712-2.04-1.912-2.384-.2-.344-.022-.53.15-.701.155-.155.344-.4.516-.601.172-.2.229-.344.344-.572.115-.229.057-.43-.028-.601-.086-.172-.772-1.862-1.058-2.55-.279-.67-.561-.578-.772-.589l-.657-.012c-.229 0-.601.086-.915.43-.315.344-1.2 1.172-1.2 2.862 0 1.69 1.229 3.323 1.4 3.551.172.229 2.42 3.694 5.864 5.18.82.354 1.46.566 1.958.724.823.262 1.572.225 2.164.136.66-.099 2.04-.834 2.328-1.638.287-.805.287-1.495.2-1.638-.085-.143-.314-.229-.658-.4Z"/>
                  </svg>
                </div>
                <span className="text-white font-bold text-lg tracking-wide">WhatsApp</span>
              </div>

              {/* Availability status */}
              <div className="flex items-center gap-2">
                <span className="inline-block w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
                <span className="text-[#25D366] text-xs sm:text-sm font-medium uppercase tracking-widest">
                  {lang === 'ar' ? 'متاح للرد — السبت إلى الخميس، ٩ص – ١٠م' : 'Available — Sat to Thu, 9AM – 10PM'}
                </span>
              </div>

              {/* Phone number */}
              <a
                href="https://wa.me/201003915120"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white font-black text-[clamp(1.5rem,5vw,3rem)] tracking-tight hover:text-[#25D366] transition-colors duration-300 select-all"
                dir="ltr"
              >
                +20 10 0391 5120
              </a>

              {/* CTA Button */}
              <a
                href="https://wa.me/201003915120"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-flex items-center gap-3 rounded-full px-8 py-4 text-white font-bold text-sm sm:text-base uppercase tracking-wider transition-all duration-300 hover:scale-[1.04] hover:shadow-2xl active:scale-[0.97] focus:outline-none"
                style={{
                  background: 'linear-gradient(135deg, #128C7E 0%, #25D366 100%)',
                  boxShadow: '0 8px 32px rgba(37,211,102,0.30), inset 0 1px 0 rgba(255,255,255,0.2)'
                }}
              >
                <svg viewBox="0 0 32 32" width="20" height="20" fill="white" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16 2C8.268 2 2 8.268 2 16c0 2.47.664 4.784 1.82 6.773L2 30l7.418-1.79A13.94 13.94 0 0 0 16 30c7.732 0 14-6.268 14-14S23.732 2 16 2Zm0 25.5a11.44 11.44 0 0 1-5.84-1.6l-.42-.25-4.4 1.06 1.1-4.28-.27-.44A11.46 11.46 0 0 1 4.5 16C4.5 9.648 9.648 4.5 16 4.5S27.5 9.648 27.5 16 22.352 27.5 16 27.5Zm6.29-8.56c-.345-.172-2.04-1.005-2.355-1.12-.315-.114-.543-.172-.772.173-.229.344-.887 1.12-1.087 1.35-.2.228-.4.257-.745.085-.344-.172-1.452-.535-2.766-1.707-1.022-.912-1.712-2.04-1.912-2.384-.2-.344-.022-.53.15-.701.155-.155.344-.4.516-.601.172-.2.229-.344.344-.572.115-.229.057-.43-.028-.601-.086-.172-.772-1.862-1.058-2.55-.279-.67-.561-.578-.772-.589l-.657-.012c-.229 0-.601.086-.915.43-.315.344-1.2 1.172-1.2 2.862 0 1.69 1.229 3.323 1.4 3.551.172.229 2.42 3.694 5.864 5.18.82.354 1.46.566 1.958.724.823.262 1.572.225 2.164.136.66-.099 2.04-.834 2.328-1.638.287-.805.287-1.495.2-1.638-.085-.143-.314-.229-.658-.4Z"/>
                </svg>
                {lang === 'ar' ? 'ابدأ المحادثة الآن' : 'Start Chat Now'}
              </a>

              {/* Note */}
              <p className="text-[#D7E2EA]/35 text-xs font-light tracking-wide text-center max-w-xs">
                {lang === 'ar'
                  ? '⚡ التواصل حصراً عبر واتساب — لا بريد إلكتروني، لا مكالمات عادية'
                  : '⚡ Contact exclusively via WhatsApp — no email, no regular calls'}
              </p>
            </div>
          </FadeIn>

          {/* Bottom Metadata */}
          <div className="w-full border-t border-[#D7E2EA]/5 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs uppercase tracking-wider text-[#D7E2EA]/40">
            <span>© {new Date().getFullYear()} {t.footerRights}</span>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="flex items-center gap-2 hover:text-[#D7E2EA] transition-colors duration-300 focus:outline-none"
            >
              {t.footerBackToTop} <ArrowUp size={14} />
            </button>
          </div>
        </div>
      </footer>

    </main>
  );
}

export default App;
