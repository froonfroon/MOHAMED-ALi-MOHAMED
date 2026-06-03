import React, { useState } from 'react';
import { FadeIn } from './FadeIn';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

interface FAQSectionProps {
  lang: 'ar' | 'en';
  id?: string;
}

export const FAQSection: React.FC<FAQSectionProps> = ({ lang, id = "faq" }) => {
  const isAr = lang === 'ar';
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqs = [
    {
      q: isAr ? "كم يستغرق بناء تطبيق الهاتف أو لوحة التحكم الإدارية؟" : "How long does it take to build an app or dashboard?",
      a: isAr 
        ? "يستغرق تطوير المواقع البسيطة أو المتاجر التعريفية من ٧ إلى ١٤ يوماً. بينما تتطلب تطبيقات الهواتف الذكية الموحدة وأنظمة الـ ERP الصناعية الكبيرة من ٣ إلى ٦ أسابيع عمل، وذلك حسب حجم المتطلبات البرمجية والتكاملات المطلوبة."
        : "Simple websites or e-commerce landing pages take about 7 to 14 days. Custom mobile apps and complex industrial ERP systems usually take between 3 to 6 weeks, depending on the scope of work and third-party API integrations required."
    },
    {
      q: isAr ? "هل تقدم دعماً فنياً وصيانة بعد تسليم النظام أو التطبيق؟" : "Do you offer post-delivery support and maintenance?",
      a: isAr 
        ? "بكل تأكيد، نوفر فترة دعم فني مجانية تمتد لـ ٣ أشهر (٩٠ يوماً) بعد إطلاق المشروع لحل أي مشكلات وضمان استقرار الكود. كما نوفر عقود صيانة سنوية ميسرة لإضافة أي تحديثات أو ميزات جديدة للأنظمة مستقبلاً."
        : "Absolutely, I provide a free 3-month (90 days) technical support period after project launch to monitor stability and fix bugs. After that, we can establish custom monthly or annual maintenance agreements to roll out future updates."
    },
    {
      q: isAr ? "هل تدعم تطبيقات الهواتف نظامي الأندرويد والآيفون معاً؟" : "Do your mobile apps support both iOS and Android?",
      a: isAr 
        ? "نعم، أعتمد على تقنية Flutter المدعومة من جوجل لتطوير التطبيقات. هذا يسمح ببناء تطبيق موحد يعمل بأداء فائق ومطابق للتطبيقات الأصلية (Native) على نظامي الأندرويد والآيفون معاً، مما يوفر نصف كلفة التطوير ونفس كفاءة العمل."
        : "Yes, I develop apps using Google Flutter framework. This outputs a unified codebase that runs natively on both Android and iOS devices. It yields the exact same fast performance, UI/UX consistency, and saves about 50% of the cost."
    },
    {
      q: isAr ? "كيف يتم البدء في العمل ومتابعة سير المشروع؟" : "What is the process to start working on a project?",
      a: isAr 
        ? "نبدأ بجلسة نقاشية قصيرة عبر واتساب لفهم الفكرة وتحليل المتطلبات، ثم أقدم لك خطة عمل زمنية وعرض سعر دقيق. أثناء التنفيذ، ستحصل على رابط لمتابعة تقدم البناء خطوة بخطوة مع إمكانية تجربة النسخ التجريبية أولاً بأول."
        : "We start with a quick chat on WhatsApp to detail your requirements, followed by a clear timeline breakdown and cost estimate. During development, you will receive testing builds and live links to monitor progress step-by-step."
    }
  ];

  const toggleAccordion = (idx: number) => {
    setActiveIndex(prev => (prev === idx ? null : idx));
  };

  return (
    <section
      id={id}
      className="bg-[#0C0C0C] border-t border-white/5 px-5 sm:px-8 md:px-10 py-20 sm:py-24 relative z-10"
    >
      <div className="max-w-4xl mx-auto w-full">
        {/* Section Heading */}
        <FadeIn delay={0} y={40} className="w-full text-center mb-16">
          <span className="text-[#B600A8] uppercase tracking-widest text-xs sm:text-sm font-semibold mb-2 block">
            {isAr ? "الأسئلة الشائعة" : "Common Questions"}
          </span>
          <h2 className="hero-heading font-black uppercase leading-none text-[clamp(2.5rem,7vw,90px)]">
            {isAr ? "أسئلة شائعة وإجاباتها" : "Frequently Asked Questions"}
          </h2>
        </FadeIn>

        {/* Accordions List */}
        <div className="flex flex-col gap-4 w-full">
          {faqs.map((faq, idx) => {
            const isOpen = activeIndex === idx;
            return (
              <FadeIn
                key={idx}
                delay={idx * 0.08}
                y={20}
                className="w-full"
              >
                <div
                  className={`rounded-2xl border transition-all duration-300 overflow-hidden cursor-pointer ${
                    isOpen 
                      ? 'border-[#B600A8]/40 bg-[#12011F]/30 shadow-lg shadow-[#B600A8]/5' 
                      : 'border-white/5 bg-[#0F0F0F] hover:border-white/15'
                  }`}
                  onClick={() => toggleAccordion(idx)}
                >
                  {/* Header Button */}
                  <div className="flex justify-between items-center p-6 gap-4 text-left rtl:text-right select-none">
                    <h3 className={`font-semibold text-sm sm:text-base md:text-lg transition-colors duration-300 ${
                      isOpen ? 'text-white' : 'text-[#D7E2EA]'
                    }`}>
                      {faq.q}
                    </h3>
                    <div className="shrink-0 w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-[#B600A8]">
                      {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                    </div>
                  </div>

                  {/* Body Content */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: "easeInOut" }}
                      >
                        <div className="px-6 pb-6 text-[#D7E2EA]/60 font-light text-xs sm:text-sm leading-relaxed border-t border-white/5 pt-4 text-left rtl:text-right">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
