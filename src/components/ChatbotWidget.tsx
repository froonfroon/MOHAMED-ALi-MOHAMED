import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Bot } from 'lucide-react';

interface Message {
  id: string;
  sender: 'ai' | 'user';
  text: string;
  isCTA?: boolean;
  ctaLink?: string;
  ctaText?: string;
}

interface ChatbotWidgetProps {
  lang: 'ar' | 'en';
}

export const ChatbotWidget: React.FC<ChatbotWidgetProps> = ({ lang }) => {
  const isAr = lang === 'ar';
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const [showBadge, setShowBadge] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Initialize chat with welcome message
  useEffect(() => {
    setMessages([
      {
        id: 'welcome',
        sender: 'ai',
        text: isAr 
          ? "مرحباً بك! أنا المساعد الذكي للمهندس محمد علي. كيف يمكنني مساعدتك اليوم في أتمتة وتأمين أعمالك برمجياً؟" 
          : "Welcome! I am Eng. Mohamed's AI Assistant. How can I help you automate and secure your business operations today?"
      }
    ]);
  }, [lang]);

  // Scroll to bottom when messages list updates
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  const options = [
    {
      id: 'web',
      label: isAr ? "💻 طلب موقع أو متجر إلكتروني" : "💻 Request Web/E-Commerce",
      userMsg: isAr ? "أرغب في تطوير موقع إلكتروني أو متجر" : "I want to build a website or e-commerce store",
      aiReply: isAr 
        ? "رائع جداً! المهندس محمد متخصص في بناء المواقع والمتاجر السريعة والمتجاوبة باستخدام React و PHP، مع لوحة تحكم إدارية كاملة وسهلة، وتجهيز كامل للـ SEO. هل تود مناقشة تفاصيل المتجر والأسعار مباشرة؟"
        : "Excellent choice! Eng. Mohamed specializes in crafting fast, responsive web systems and stores using React & PHP, complete with easy admin dashboards and full SEO setup. Would you like to finalize details and pricing directly?",
      ctaText: isAr ? "تأكيد طلب الموقع عبر واتساب" : "Confirm Web Order on WhatsApp",
      ctaLink: "https://wa.me/201003915120?text=" + encodeURIComponent(isAr ? "مرحباً م. محمد، أرغب في مناقشة تفاصيل تطوير موقع أو متجر إلكتروني." : "Hello Eng. Mohamed, I would like to discuss a web/e-commerce development project.")
    },
    {
      id: 'app',
      label: isAr ? "📱 طلب تطبيق جوال (أندرويد/آيفون)" : "📱 Request Mobile App",
      userMsg: isAr ? "أرغب في تطوير تطبيق هواتف ذكية" : "I want to develop a mobile application",
      aiReply: isAr 
        ? "اختيار ذكي! نقوم بتطوير تطبيقات الهواتف بنظام الكود الموحد (Flutter) لتعمل بأداء فائق وسرعة مذهلة على Android و iOS معاً، مما يوفر عليك الوقت ونصف التكلفة مقارنة بالتطوير المنفصل. ما هي فكرة تطبيقك؟"
        : "Smart choice! We build mobile apps using Flutter to deliver high-performance native-feel apps for both Android & iOS from a single codebase, saving you 50% of the cost. What is your app idea?",
      ctaText: isAr ? "مناقشة فكرة التطبيق عبر واتساب" : "Discuss App Idea on WhatsApp",
      ctaLink: "https://wa.me/201003915120?text=" + encodeURIComponent(isAr ? "مرحباً م. محمد، أرغب في مناقشة فكرة تطبيق موبايل جديدة." : "Hello Eng. Mohamed, I would like to discuss a new mobile app development project.")
    },
    {
      id: 'erp',
      label: isAr ? "⚙️ طلب نظام ERP أو لوحة تحكم مصنع" : "⚙️ Request ERP / Factory System",
      userMsg: isAr ? "أريد نظام إداري ERP مخصص لأعمالي" : "I need a custom ERP / Administrative system",
      aiReply: isAr 
        ? "أهلاً بك! نحن خبراء في تطوير أنظمة الـ ERP المتكاملة للمصانع والشركات (مثل نظام بلاستيك برو ومحلات الخضار). تشمل الأنظمة إدارة الإنتاج والمخازن، الحسابات، المبيعات، والربط بالموازين الإلكترونية. فلنتواصل فوراً لتصميم دورتك المستندية الخاصة."
        : "Welcome! We are experts in custom ERP systems for factories and warehouses (such as Plastic Pro and retail POS). Systems cover production, inventories, invoicing, and scales integration. Let's connect to design your workflow.",
      ctaText: isAr ? "طلب استشارة ونظام ERP مخصص" : "Request Custom ERP Consult",
      ctaLink: "https://wa.me/201003915120?text=" + encodeURIComponent(isAr ? "مرحباً م. محمد، أرغب في استشارة حول بناء نظام إداري ERP مخصص لأعمالي." : "Hello Eng. Mohamed, I would like a consultation for building a custom ERP/administrative system.")
    },
    {
      id: 'security',
      label: isAr ? "🛡️ تأمين شبكة أو استشارة فنية" : "🛡️ Network Security / Consult",
      userMsg: isAr ? "أحتاج لتأمين شبكة الشركة أو استشارة" : "I need network security or tech consulting",
      aiReply: isAr 
        ? "حماية بياناتك هي أولويتنا! يقدم المهندس محمد خدمات تأمين البنية التحتية للشبكات، جدران الحماية، فحص الثغرات الأمنية، والتكامل البرمجي الآمن. تواصل معي فوراً للحصول على فحص وتشخيص أمني لشبكة شركتك."
        : "Data protection is our priority! Eng. Mohamed provides robust network infrastructure configurations, firewalls, vulnerability scanning, and secure API integrations. Get in touch now for a security audit.",
      ctaText: isAr ? "احصل على استشارة أمنية مجاناً" : "Get Free Security Consultation",
      ctaLink: "https://wa.me/201003915120?text=" + encodeURIComponent(isAr ? "مرحباً م. محمد، أرغب في الحصول على استشارة فنية بخصوص حماية شبكات الشركة." : "Hello Eng. Mohamed, I want a technical consultation regarding network security.")
    }
  ];

  const handleOptionClick = (optionId: string) => {
    const selected = options.find(opt => opt.id === optionId);
    if (!selected) return;

    // 1. Add user message
    const userMsgId = 'user_' + Date.now();
    setMessages(prev => [...prev, { id: userMsgId, sender: 'user', text: selected.userMsg }]);

    // 2. Trigger simulated typing
    setIsTyping(true);

    setTimeout(() => {
      setIsTyping(false);
      
      // 3. Add AI reply
      const aiReplyId = 'ai_' + Date.now();
      const aiCtaId = 'ai_cta_' + Date.now();
      
      setMessages(prev => [
        ...prev, 
        { id: aiReplyId, sender: 'ai', text: selected.aiReply },
        { 
          id: aiCtaId, 
          sender: 'ai', 
          text: isAr ? "اضغط على الزر أدناه للتحدث مباشرة مع المهندس محمد وإتمام طلبك:" : "Click the button below to chat directly with Eng. Mohamed and complete your order:",
          isCTA: true,
          ctaLink: selected.ctaLink,
          ctaText: selected.ctaText
        }
      ]);
    }, 1000);
  };

  const openChat = () => {
    setIsOpen(true);
    setShowBadge(false);
  };

  return (
    <div className="fixed bottom-6 left-6 rtl:right-6 rtl:left-auto z-50 flex flex-col items-end rtl:items-start select-none pointer-events-auto">
      
      {/* 1. Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 30 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="w-[320px] sm:w-[380px] h-[480px] sm:h-[550px] rounded-[30px] border border-white/10 bg-[#0C0C0C]/90 backdrop-blur-xl shadow-2xl flex flex-col overflow-hidden mb-4 relative"
            style={{
              boxShadow: '0 20px 50px rgba(181, 1, 167, 0.15), inset 0 1px 0 rgba(255,255,255,0.06)'
            }}
          >
            {/* Ambient inner glow */}
            <div className="absolute top-0 left-0 w-full h-[150px] bg-gradient-to-b from-[#B600A8]/10 to-transparent pointer-events-none z-0" />

            {/* Chat Header */}
            <div className="px-6 py-5 border-b border-white/5 flex items-center justify-between relative z-10 bg-white/[0.02]">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-[#B600A8] to-[#7621B0] flex items-center justify-center text-white shadow-lg shadow-[#B600A8]/20">
                  <Bot size={22} className="animate-bounce" />
                </div>
                <div className="flex flex-col text-left rtl:text-right">
                  <span className="text-white font-bold text-sm sm:text-base">
                    {isAr ? "مساعد م. محمد الذكي" : "Eng. Mohamed AI"}
                  </span>
                  <div className="flex items-center gap-1.5 mt-0.5">
                    <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
                    <span className="text-[#25D366] text-[10px] font-medium uppercase tracking-wider">
                      {isAr ? "متاح للرد فوراً" : "Online & Active"}
                    </span>
                  </div>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center text-[#D7E2EA]/60 hover:text-white transition-colors duration-200"
              >
                <X size={16} />
              </button>
            </div>

            {/* Messages Display Area */}
            <div className="flex-1 overflow-y-auto p-5 flex flex-col gap-4 no-scrollbar relative z-10">
              {messages.map((msg) => (
                <div 
                  key={msg.id}
                  className={`flex w-full ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className="flex flex-col gap-1 max-w-[85%]">
                    <div 
                      className={`px-4 py-3 rounded-2xl text-xs sm:text-sm leading-relaxed text-left rtl:text-right ${
                        msg.sender === 'user'
                          ? 'bg-[#B600A8] text-white rounded-br-none'
                          : 'bg-white/5 border border-white/5 text-[#D7E2EA] rounded-bl-none rtl:rounded-bl-2xl rtl:rounded-br-none'
                      }`}
                    >
                      {msg.text}
                    </div>

                    {/* Render CTA button if message has link */}
                    {msg.isCTA && msg.ctaLink && (
                      <a
                        href={msg.ctaLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-2 w-full text-center py-3 bg-[#25D366] hover:bg-[#1ebd53] text-white font-bold text-xs sm:text-sm rounded-xl uppercase tracking-wider block transition-all duration-300 hover:scale-[1.02] shadow-lg shadow-[#25D366]/20"
                      >
                        {msg.ctaText}
                      </a>
                    )}
                  </div>
                </div>
              ))}

              {/* Typing Indicator */}
              {isTyping && (
                <div className="flex justify-start w-full">
                  <div className="bg-white/5 border border-white/5 px-4 py-3 rounded-2xl rounded-bl-none rtl:rounded-bl-2xl rtl:rounded-br-none flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#B600A8] animate-bounce" style={{ animationDelay: '0ms' }} />
                    <span className="w-1.5 h-1.5 rounded-full bg-[#B600A8] animate-bounce" style={{ animationDelay: '150ms' }} />
                    <span className="w-1.5 h-1.5 rounded-full bg-[#B600A8] animate-bounce" style={{ animationDelay: '300ms' }} />
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Quick Replies Options */}
            <div className="p-4 border-t border-white/5 bg-white/[0.01] flex flex-col gap-2 relative z-10">
              <span className="text-[#D7E2EA]/30 text-[10px] uppercase tracking-wider block text-left rtl:text-right mb-1">
                {isAr ? "اختر أحد الخيارات لبدء المحادثة:" : "Select an option to start chat:"}
              </span>
              <div className="flex flex-col gap-1.5 max-h-[140px] overflow-y-auto no-scrollbar">
                {options.map((opt) => (
                  <button
                    key={opt.id}
                    disabled={isTyping}
                    onClick={() => handleOptionClick(opt.id)}
                    className="w-full text-left rtl:text-right px-4 py-2.5 rounded-xl border border-white/5 bg-white/5 hover:bg-[#B600A8]/10 hover:border-[#B600A8]/30 text-white text-xs font-medium transition-all duration-200 hover:scale-[1.01] active:scale-[0.99] disabled:opacity-50"
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>

          </motion.div>
        )}
      </AnimatePresence>

      {/* 2. Floating Action Bubble */}
      <motion.button
        onClick={isOpen ? () => setIsOpen(false) : openChat}
        className="w-16 h-16 rounded-full flex items-center justify-center relative shadow-2xl hover:scale-108 active:scale-95 transition-transform duration-300 focus:outline-none z-50 border border-white/10"
        style={{
          background: 'linear-gradient(135deg, #18011F 0%, #B600A8 100%)',
          boxShadow: '0 8px 30px rgba(181, 1, 167, 0.40)'
        }}
        whileHover={{ rotate: isOpen ? -90 : 15 }}
      >
        {/* Pulsing outer ring */}
        {!isOpen && (
          <span className="absolute -inset-1.5 rounded-full border border-[#B600A8] animate-ping opacity-35 pointer-events-none" />
        )}

        {/* Dynamic icon depending on open status */}
        {isOpen ? (
          <X size={26} className="text-white" />
        ) : (
          <div className="relative">
            <MessageSquare size={26} className="text-white" />
            {showBadge && (
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-[#25D366] rounded-full border-2 border-[#18011F] animate-pulse" />
            )}
          </div>
        )}
      </motion.button>

      {/* Greeting Bubble on initial load */}
      {showBadge && !isOpen && (
        <div 
          onClick={openChat}
          className="absolute bottom-20 left-0 rtl:right-0 rtl:left-auto bg-[#0C0C0C]/90 border border-white/10 backdrop-blur-md rounded-2xl px-4 py-3 shadow-2xl max-w-[200px] cursor-pointer hover:scale-103 transition-transform duration-300 transform -translate-y-1"
          style={{ boxShadow: '0 10px 30px rgba(181,1,167,0.15)' }}
        >
          <div className="flex items-center gap-1.5 mb-0.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#25D366] animate-pulse" />
            <span className="text-[#25D366] text-[8px] font-bold uppercase tracking-wider">{isAr ? "متصل الآن" : "Online"}</span>
          </div>
          <p className="text-white font-bold text-[11px] leading-tight">
            {isAr ? "استشر مساعدي الذكي!" : "Consult my AI assistant!"}
          </p>
        </div>
      )}

    </div>
  );
};

export default ChatbotWidget;
