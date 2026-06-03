import React from 'react';
import { FadeIn } from './FadeIn';
import type { Translation } from '../translations';
import { Tilt } from './Tilt';

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
        <FadeIn delay={0} y={40} className="w-full text-center mb-16 sm:mb-20">
          <h2 className="font-black uppercase text-[#0C0C0C] leading-none text-[clamp(3rem,12vw,160px)]">
            {t.servicesTitle}
          </h2>
        </FadeIn>

        {/* Services Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 w-full">
          {t.servicesList.map((service, index) => (
            <FadeIn
              key={service.number}
              delay={index * 0.08}
              y={30}
              className="w-full"
            >
              <Tilt
                maxTilt={5}
                className="w-full h-full rounded-[36px] border border-[#0c0c0c]/5 bg-[#F9FBFC] p-8 sm:p-10 flex flex-col justify-between gap-6 shadow-sm hover:shadow-2xl transition-all duration-300 relative group overflow-hidden"
              >
                {/* Background decorative giant number watermark */}
                <span className="absolute -bottom-10 right-0 rtl:left-0 rtl:right-auto font-black text-[#0C0C0C]/[0.03] text-[180px] leading-none select-none pointer-events-none group-hover:scale-105 transition-transform duration-500">
                  {service.number}
                </span>

                <div className="flex flex-col text-left rtl:text-right relative z-10">
                  {/* Small top label */}
                  <span className="text-[#0C0C0C]/40 text-xs sm:text-sm font-semibold tracking-widest uppercase mb-3 block">
                    SERVICE {service.number}
                  </span>
                  
                  {/* Service name */}
                  <h3 className="font-bold uppercase text-[#0C0C0C] text-xl sm:text-2xl mb-4 tracking-wide group-hover:text-[#B600A8] transition-colors duration-300">
                    {service.name}
                  </h3>

                  {/* Service description */}
                  <p className="font-light text-[#0C0C0C]/80 leading-relaxed text-sm sm:text-base">
                    {service.description}
                  </p>
                </div>
              </Tilt>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
