import React from 'react';
import { FadeIn } from './FadeIn';
import type { Translation } from '../translations';

interface ServicesSectionProps {
  t: Translation;
  id?: string;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ t, id = "price" }) => {
  return (
    <section
      id={id}
      className="bg-[#FFFFFF] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 text-[#0C0C0C] relative z-10"
    >
      <div className="max-w-5xl mx-auto w-full">
        {/* Section Heading */}
        <FadeIn delay={0} y={40} className="w-full text-center mb-16 sm:mb-20 md:mb-28">
          <h2 className="font-black uppercase text-[#0C0C0C] leading-none text-[clamp(3rem,12vw,160px)]">
            {t.servicesTitle}
          </h2>
        </FadeIn>

        {/* Services List */}
        <div className="flex flex-col w-full">
          {t.servicesList.map((service, index) => (
            <FadeIn
              key={service.number}
              delay={index * 0.1}
              y={30}
              className="flex items-center gap-6 sm:gap-10 py-8 sm:py-10 md:py-12 border-t border-[rgba(12,12,12,0.15)] last:border-b"
            >
              {/* Number on the left (RTL: right) */}
              <span className="font-black text-[#0C0C0C] text-[clamp(3rem,10vw,140px)] leading-none shrink-0 min-w-[70px] sm:min-w-[120px] md:min-w-[160px] select-none text-left rtl:text-right">
                {service.number}
              </span>

              {/* Name & Description on the right (RTL: left) */}
              <div className="flex flex-col text-left rtl:text-right">
                <h3 className="font-medium uppercase text-[#0C0C0C] text-[clamp(1.1rem,2.2vw,2.1rem)] mb-2 tracking-wide">
                  {service.name}
                </h3>
                <p className="font-light text-[#0C0C0C] opacity-75 leading-relaxed max-w-2xl text-[clamp(0.85rem,1.6vw,1.25rem)]">
                  {service.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};
export default ServicesSection;
