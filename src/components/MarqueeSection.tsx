import React, { useRef, useState, useEffect } from 'react';

const IMAGES = [
  "https://motionsites.ai/assets/hero-space-voyage-preview-eECLH3Yc.gif",
  "https://motionsites.ai/assets/hero-codenest-preview-Cgppc2qV.gif",
  "https://motionsites.ai/assets/hero-vex-ventures-preview-BczMFIiw.gif",
  "https://motionsites.ai/assets/hero-stellar-ai-v2-preview-DjvxjG3C.gif",
  "https://motionsites.ai/assets/hero-asme-preview-B_nGDnTP.gif",
  "https://motionsites.ai/assets/hero-transform-data-preview-Cx5OU29N.gif",
  "https://motionsites.ai/assets/hero-vitara-preview-Cjz2QYyU.gif",
  "https://motionsites.ai/assets/hero-terra-preview-BFjrCr7T.gif",
  "https://motionsites.ai/assets/hero-skyelite-preview-DHaZIgUv.gif",
  "https://motionsites.ai/assets/hero-aethera-preview-DknSlcTa.gif",
  "https://motionsites.ai/assets/hero-designpro-preview-D8c5_een.gif",
  "https://motionsites.ai/assets/hero-stellar-ai-preview-D3HL6bw1.gif",
  "https://motionsites.ai/assets/hero-xportfolio-preview-D4A8maiC.gif",
  "https://motionsites.ai/assets/hero-orbit-web3-preview-BXt4OttD.gif",
  "https://motionsites.ai/assets/hero-nexora-preview-cx5HmUgo.gif",
  "https://motionsites.ai/assets/hero-evr-ventures-preview-DZxeVFEX.gif",
  "https://motionsites.ai/assets/hero-planet-orbit-preview-DWAP8Z1P.gif",
  "https://motionsites.ai/assets/hero-new-era-preview-CocuDUm9.gif",
  "https://motionsites.ai/assets/hero-wealth-preview-B70idl_u.gif",
  "https://motionsites.ai/assets/hero-luminex-preview-CxOP7ce6.gif",
  "https://motionsites.ai/assets/hero-celestia-preview-0yO3jXO8.gif"
];

export const MarqueeSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [scrollOffset, setScrollOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const sectionTop = rect.top + window.scrollY;

      // Scroll offset formula: (window.scrollY - sectionTop + window.innerHeight) * 0.3
      const offset = (window.scrollY - sectionTop + window.innerHeight) * 0.3;
      setScrollOffset(offset);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Split images: first 11 for row 1, remaining 10 for row 2
  const row1Raw = IMAGES.slice(0, 11);
  const row2Raw = IMAGES.slice(11);

  // Triple each array for endless scrolling illusion
  const row1Images = [...row1Raw, ...row1Raw, ...row1Raw];
  const row2Images = [...row2Raw, ...row2Raw, ...row2Raw];

  return (
    <div
      ref={sectionRef}
      className="bg-darkBg pt-24 sm:pt-32 md:pt-40 pb-10 overflow-hidden flex flex-col gap-3"
    >
      {/* Row 1: Moves RIGHT on scroll */}
      <div
        className="flex gap-3"
        style={{
          transform: `translate3d(${scrollOffset - 200}px, 0px, 0px)`,
          willChange: 'transform'
        }}
      >
        {row1Images.map((src, idx) => (
          <img
            key={`row1-${idx}`}
            src={src}
            alt={`Loop image A-${idx}`}
            className="w-[420px] h-[270px] min-w-[420px] shrink-0 rounded-2xl object-cover select-none pointer-events-none"
            loading="lazy"
            draggable="false"
          />
        ))}
      </div>

      {/* Row 2: Moves LEFT on scroll */}
      <div
        className="flex gap-3"
        style={{
          transform: `translate3d(${-(scrollOffset - 200)}px, 0px, 0px)`,
          willChange: 'transform'
        }}
      >
        {row2Images.map((src, idx) => (
          <img
            key={`row2-${idx}`}
            src={src}
            alt={`Loop image B-${idx}`}
            className="w-[420px] h-[270px] min-w-[420px] shrink-0 rounded-2xl object-cover select-none pointer-events-none"
            loading="lazy"
            draggable="false"
          />
        ))}
      </div>
    </div>
  );
};
export default MarqueeSection;
