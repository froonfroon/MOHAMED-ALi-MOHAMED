import React from 'react';
import { FadeIn } from './FadeIn';
import { Tilt } from './Tilt';
import { Check } from 'lucide-react';

interface PricingSectionProps {
  lang: 'ar' | 'en';
  id?: string;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ lang, id = "pricing" }) => {
  const isAr = lang === 'ar';

  const packages = [
    {
      title: isAr ? "الموقع التعريفي والمتجر الإلكتروني" : "Web & E-Commerce Systems",
      price: isAr ? "٣٠٠$" : "300$",
      period: isAr ? "تبدأ من" : "starts at",
      desc: isAr ? "مثالي للشركات الناشئة، المتاجر الإلكترونية، الكافيهات، والصفحات التعريفية للخدمات." : "Perfect for landing pages, corporate sites, retail e-commerce shops, and services portfolios.",
      features: isAr ? [
        "تصميم متجاوب ومتناسق مع الهواتف",
        "لوحة تحكم كاملة لإدارة المحتوى",
        "تهيأة الموقع لمحركات البحث SEO",
        "ربط بوابات الدفع الإلكتروني والـ WhatsApp",
        "دعم فني مجاني لمدة ٣٠ يوماً"
      ] : [
        "Fully responsive mobile-friendly design",
        "Admin control panel for content management",
        "SEO optimization & analytics integration",
        "WhatsApp & Payment gateways integration",
        "30 days free post-launch support"
      ],
      popular: false,
      cta: isAr ? "طلب الخدمة الآن" : "Order Package Now"
    },
    {
      title: isAr ? "تصميم وتطوير تطبيقات الهواتف" : "Mobile Applications Development",
      price: isAr ? "٦٠٠$" : "600$",
      period: isAr ? "تبدأ من" : "starts at",
      desc: isAr ? "تطبيقات الهواتف الذكية الموحدة (أندرويد وآيفون) بتجربة مستخدم مذهلة وسرعة فائقة." : "Native-performance Android and iOS apps using Flutter with fluid animations and responsive UI.",
      features: isAr ? [
        "تطبيق موحد للأندرويد والـ iOS (Flutter)",
        "واجهة مستخدم عصرية ومخصصة تماماً",
        "ربط النظام بقاعدة البيانات والـ APIs",
        "ميزة الإشعارات التلقائية (Push Notifications)",
        "رفع التطبيقات على Google Play & App Store"
      ] : [
        "Unified code for Android & iOS (Flutter)",
        "Modern customized UI/UX design theme",
        "Secure database & backend API connectivity",
        "Push notifications & live user alerts",
        "App Store & Google Play publishing support"
      ],
      popular: true,
      cta: isAr ? "ابدأ تطبيقك القادم" : "Start Your App Now"
    },
    {
      title: isAr ? "أنظمة ERP ولوحات التحكم الخاصة" : "Custom ERP & Control Panels",
      price: isAr ? "سعر مخصص" : "Custom Quote",
      period: isAr ? "حسب المتطلبات" : "based on scope",
      desc: isAr ? "لإدارة الشركات الكبيرة، المصانع (مثل بلاستيك برو)، المخازن، والأنظمة المالية المعقدة." : "Tailored systems for managing factory operations, inventories, invoicing, and complex sales portals.",
      features: isAr ? [
        "تصميم نظام مخصص بنسبة ١٠٠٪ لسير العمل",
        "لوحات تحكم متعددة الصلاحيات (أدوار المستخدمين)",
        "تقارير مالية ورسوم بيانية متقدمة وفورية",
        "ربط مباشر بالموازين، الطابعات، أو الـ POS",
        "حماية مشددة للبيانات ونسخ احتياطي تلقائي"
      ] : [
        "100% custom-tailored database system",
        "Role-based multi-user permissions control",
        "Real-time analytical graphs & invoicing",
        "Direct POS hardware & weighing scale links",
        "Advanced security firewalls & auto backups"
      ],
      popular: false,
      cta: isAr ? "طلب استشارة مجانية" : "Get Free Consultation"
    }
  ];

  return (
    <section
      id={id}
      className="bg-[#0C0C0C] border-t border-white/5 px-5 sm:px-8 md:px-10 py-20 sm:py-24 relative z-10"
    >
      <div className="max-w-5xl mx-auto w-full">
        {/* Section Heading */}
        <FadeIn delay={0} y={40} className="w-full text-center mb-16">
          <span className="text-[#B600A8] uppercase tracking-widest text-xs sm:text-sm font-semibold mb-2 block">
            {isAr ? "الأسعار والباقات" : "Pricing & Packages"}
          </span>
          <h2 className="hero-heading font-black uppercase leading-none text-[clamp(2.5rem,7vw,90px)]">
            {isAr ? "الخدمات والأسعار" : "Services & Pricing"}
          </h2>
          <p className="text-[#D7E2EA]/50 text-xs sm:text-sm max-w-md mx-auto mt-4 font-light leading-relaxed">
            {isAr 
              ? "اختر الباقة المناسبة لمشروعك القادم أو تواصل معي للحصول على عرض سعر مخصص مجاناً."
              : "Choose the package that fits your business or contact me directly for a custom quote."}
          </p>
        </FadeIn>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 w-full items-stretch">
          {packages.map((pkg, idx) => (
            <FadeIn
              key={idx}
              delay={idx * 0.1}
              y={30}
              className="flex"
            >
              <Tilt
                maxTilt={4}
                className={`w-full rounded-[40px] p-8 flex flex-col justify-between relative overflow-hidden transition-all duration-300 ${
                  pkg.popular
                    ? 'border-2 border-[#B600A8] bg-[#12011F]/90 shadow-2xl shadow-[#B600A8]/10'
                    : 'border border-white/10 bg-[#0F0F0F]/90'
                }`}
              >
                {/* Popular Ribbon */}
                {pkg.popular && (
                  <span className="absolute top-4 right-4 rtl:left-4 rtl:right-auto bg-[#B600A8] text-white font-bold text-[10px] uppercase tracking-wider py-1 px-3.5 rounded-full">
                    {isAr ? "الأكثر طلباً" : "Popular"}
                  </span>
                )}

                <div className="flex flex-col text-left rtl:text-right">
                  {/* Package title */}
                  <h3 className="text-white font-bold text-lg sm:text-xl mb-4">
                    {pkg.title}
                  </h3>

                  {/* Price */}
                  <div className="flex items-baseline gap-2 mb-6">
                    <span className="text-[#D7E2EA]/40 text-xs sm:text-sm font-light">
                      {pkg.period}
                    </span>
                    <span className="text-white font-black text-4xl sm:text-5xl tracking-tight">
                      {pkg.price}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-[#D7E2EA]/50 font-light text-xs sm:text-sm leading-relaxed mb-6 border-b border-white/5 pb-6">
                    {pkg.desc}
                  </p>

                  {/* Features List */}
                  <ul className="flex flex-col gap-3.5">
                    {pkg.features.map((feat, fidx) => (
                      <li key={fidx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#D7E2EA]/80 font-light">
                        <Check size={16} className="text-[#B600A8] shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* WhatsApp Link CTA */}
                <a
                  href={`https://wa.me/201003915120?text=${encodeURIComponent(
                    isAr 
                      ? `مرحباً المهندس محمد، أود الاستفسار عن باقة: ${pkg.title}`
                      : `Hello Eng. Mohamed, I would like to inquire about package: ${pkg.title}`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full text-center py-4 rounded-2xl font-bold text-xs sm:text-sm uppercase tracking-wider mt-8 block transition-all duration-300 ${
                    pkg.popular
                      ? 'bg-[#B600A8] hover:bg-[#86007b] text-white hover:scale-[1.03] shadow-lg shadow-[#B600A8]/20'
                      : 'border border-white/10 hover:border-white/30 text-white hover:bg-white/5'
                  }`}
                >
                  {pkg.cta}
                </a>
              </Tilt>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
