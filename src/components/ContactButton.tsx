import React from 'react';

interface ContactButtonProps {
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
  className?: string;
  label?: string;
  lang?: 'ar' | 'en';
}

const WHATSAPP_NUMBER = '201003915120';

export const ContactButton: React.FC<ContactButtonProps> = ({
  className = "",
  label = "Contact Me",
  lang = "ar",
  onClick
}) => {
  const text = lang === 'ar'
    ? 'مرحباً مهندس محمد، أود الاستفسار عن خدماتك البرمجية.'
    : 'Hello Eng. Mohamed, I would like to inquire about your software services.';

  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;

  return (
    <a
      href={whatsappUrl}
      onClick={onClick}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-2 rounded-full text-white font-medium uppercase tracking-widest transition-all duration-300 hover:scale-[1.03] active:scale-[0.97] hover:shadow-lg focus:outline-none px-8 py-3 sm:px-10 sm:py-3.5 md:px-12 md:py-4 text-xs sm:text-sm md:text-base ${className}`}
      style={{
        background: 'linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)',
        boxShadow: '0px 4px 4px rgba(181, 1, 167, 0.25), inset 4px 4px 12px #7721B1',
        outline: '2px solid white',
        outlineOffset: '-3px'
      }}
    >
      {/* WhatsApp mini icon */}
      <svg viewBox="0 0 32 32" width="16" height="16" fill="white" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: 0 }}>
        <path d="M16 2C8.268 2 2 8.268 2 16c0 2.47.664 4.784 1.82 6.773L2 30l7.418-1.79A13.94 13.94 0 0 0 16 30c7.732 0 14-6.268 14-14S23.732 2 16 2Zm0 25.5a11.44 11.44 0 0 1-5.84-1.6l-.42-.25-4.4 1.06 1.1-4.28-.27-.44A11.46 11.46 0 0 1 4.5 16C4.5 9.648 9.648 4.5 16 4.5S27.5 9.648 27.5 16 22.352 27.5 16 27.5Zm6.29-8.56c-.345-.172-2.04-1.005-2.355-1.12-.315-.114-.543-.172-.772.173-.229.344-.887 1.12-1.087 1.35-.2.228-.4.257-.745.085-.344-.172-1.452-.535-2.766-1.707-1.022-.912-1.712-2.04-1.912-2.384-.2-.344-.022-.53.15-.701.155-.155.344-.4.516-.601.172-.2.229-.344.344-.572.115-.229.057-.43-.028-.601-.086-.172-.772-1.862-1.058-2.55-.279-.67-.561-.578-.772-.589l-.657-.012c-.229 0-.601.086-.915.43-.315.344-1.2 1.172-1.2 2.862 0 1.69 1.229 3.323 1.4 3.551.172.229 2.42 3.694 5.864 5.18.82.354 1.46.566 1.958.724.823.262 1.572.225 2.164.136.66-.099 2.04-.834 2.328-1.638.287-.805.287-1.495.2-1.638-.085-.143-.314-.229-.658-.4Z"/>
      </svg>
      {label}
    </a>
  );
};
