import React, { useState } from 'react';

interface FloatingWhatsAppProps {
  lang: 'ar' | 'en';
}

export const FloatingWhatsApp: React.FC<FloatingWhatsAppProps> = ({ lang }) => {
  const isAr = lang === 'ar';
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div
      className="fixed bottom-6 left-6 rtl:right-6 rtl:left-auto z-50 flex items-center gap-3 select-none pointer-events-auto"
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      {/* Expanding Tooltip Box */}
      <div
        className={`bg-[#0C0C0C]/90 backdrop-blur-md border border-white/10 rounded-2xl p-3 sm:p-4 shadow-2xl transition-all duration-300 transform origin-bottom-left rtl:origin-bottom-right max-w-xs ${
          showTooltip 
            ? 'opacity-100 scale-100 translate-y-0' 
            : 'opacity-0 scale-90 translate-y-2 pointer-events-none'
        }`}
        style={{
          boxShadow: '0 10px 30px rgba(37,211,102,0.15)'
        }}
      >
        <div className="flex items-center gap-2 mb-1">
          <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
          <span className="text-[#25D366] text-[10px] font-bold uppercase tracking-wider">
            {isAr ? "متصل الآن" : "Online Now"}
          </span>
        </div>
        <p className="text-white font-semibold text-xs sm:text-sm">
          {isAr ? "المهندس محمد علي" : "Eng. Mohamed Ali"}
        </p>
        <p className="text-[#D7E2EA]/50 text-[10px] sm:text-xs font-light mt-0.5">
          {isAr ? "تواصل معي مباشرة لمناقشة مشروعك!" : "Chat with me directly to discuss your project!"}
        </p>
      </div>

      {/* Floating Pulsing Button */}
      <a
        href="https://wa.me/201003915120"
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 rounded-full flex items-center justify-center relative shadow-2xl cursor-pointer hover:scale-108 active:scale-95 transition-transform duration-300 focus:outline-none"
        style={{
          background: 'linear-gradient(135deg, #128C7E 0%, #25D366 100%)',
          boxShadow: '0 8px 30px rgba(37,211,102,0.40)'
        }}
      >
        {/* Pulsing glow ring around the button */}
        <span className="absolute -inset-1 rounded-full border-2 border-[#25D366] animate-ping opacity-45 pointer-events-none" />

        {/* WhatsApp Logo */}
        <svg viewBox="0 0 32 32" width="28" height="28" fill="white" xmlns="http://www.w3.org/2000/svg">
          <path d="M16 2C8.268 2 2 8.268 2 16c0 2.47.664 4.784 1.82 6.773L2 30l7.418-1.79A13.94 13.94 0 0 0 16 30c7.732 0 14-6.268 14-14S23.732 2 16 2Zm0 25.5a11.44 11.44 0 0 1-5.84-1.6l-.42-.25-4.4 1.06 1.1-4.28-.27-.44A11.46 11.46 0 0 1 4.5 16C4.5 9.648 9.648 4.5 16 4.5S27.5 9.648 27.5 16 22.352 27.5 16 27.5Zm6.29-8.56c-.345-.172-2.04-1.005-2.355-1.12-.315-.114-.543-.172-.772.173-.229.344-.887 1.12-1.087 1.35-.2.228-.4.257-.745.085-.344-.172-1.452-.535-2.766-1.707-1.022-.912-1.712-2.04-1.912-2.384-.2-.344-.022-.53.15-.701.155-.155.344-.4.516-.601.172-.2.229-.344.344-.572.115-.229.057-.43-.028-.601-.086-.172-.772-1.862-1.058-2.55-.279-.67-.561-.578-.772-.589l-.657-.012c-.229 0-.601.086-.915.43-.315.344-1.2 1.172-1.2 2.862 0 1.69 1.229 3.323 1.4 3.551.172.229 2.42 3.694 5.864 5.18.82.354 1.46.566 1.958.724.823.262 1.572.225 2.164.136.66-.099 2.04-.834 2.328-1.638.287-.805.287-1.495.2-1.638-.085-.143-.314-.229-.658-.4Z"/>
        </svg>
      </a>
    </div>
  );
};

export default FloatingWhatsApp;
