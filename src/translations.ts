import erpDashboard from './assets/erp_dashboard.png';
import mobileBanking from './assets/mobile_banking.png';
import securityGateway from './assets/security_gateway.png';

export interface ServiceItem {
  number: string;
  name: string;
  description: string;
}

export interface ProjectItem {
  number: string;
  name: string;
  category: string;
  categoryKey: 'erp' | 'apps' | 'security';
  col1Image1: string;
  col1Image2: string;
  col2Image: string;
}

export interface TechDescription {
  name: string;
  desc: string;
}

export interface Translation {
  navAbout: string;
  navPrice: string;
  navProjects: string;
  navContact: string;
  heroHeading: string;
  heroBottomText: string;
  aboutTitle: string;
  aboutParagraph: string;
  techDescriptions: Record<string, string>;
  servicesTitle: string;
  servicesList: ServiceItem[];
  projectsTitle: string;
  projectsList: ProjectItem[];
  filterAll: string;
  filterERP: string;
  filterApps: string;
  filterSecurity: string;
  footerTitle: string;
  footerSub: string;
  footerRights: string;
  footerBackToTop: string;
  liveProject: string;
  contactMe: string;
}

export const translations: Record<'ar' | 'en', Translation> = {
  ar: {
    navAbout: "من أنا",
    navPrice: "الخدمات والأسعار",
    navProjects: "المشاريع",
    navContact: "اتصل بنا",
    heroHeading: "أنا المهندس محمد",
    heroBottomText: "مهندس برمجيات ونظم، متخصص في الأنظمة الإدارية وتطبيقات الموبايل وتأمين الشبكات.",
    aboutTitle: "من أنا",
    aboutParagraph: "بصفتي مهندس برمجيات ونظم، أتخصص في تطوير لوحات التحكم الإدارية وأنظمة الـ ERP المتكاملة، وتأمين وإعداد البنية التحتية لشبكات الشركات. أصمم تطبيقات الأندرويد والآيفون عالية الكفاءة متمكناً من أكثر من 10 لغات برمجية وتقنيات مثل React وPHP وFlutter وDart، لمساعدة الشركات على النمو بأمان والتميز بمظهرها الرقمي.",
    techDescriptions: {
      "React": "بناء واجهات برمجية تفاعلية ولوحات تحكم إدارية سريعة وسلسة وعالمية الأداء.",
      "PHP": "تطوير الواجهات الخلفية الآمنة للأنظمة وقواعد بيانات الـ ERP والـ APIs والربط بالخوادم.",
      "Flutter": "تطوير تطبيقات الهواتف الذكية الموحدة (أندرويد وآيفون) بتجربة مستخدم ممتازة ورائعة.",
      "Dart": "كتابة أكواد برمجية محسنة تدعم تطبيقات Flutter وتضمن سرعة الأداء غير المتزامن.",
      "JavaScript": "تطوير التأثيرات التفاعلية، وبرمجة منطق التطبيقات في المتصفحات بكفاءة عالية.",
      "TypeScript": "تأمين بيئة العمل البرمجية بالأنواع الصارمة لمنع الأخطاء وضمان أمان الكود في الأنظمة الكبرى.",
      "Python": "برمجة سكربتات الأتمتة، وأدوات فحص أمن الشبكات والاتصالات، وتحليل البيانات.",
      "C++": "تطوير التطبيقات عالية الأداء والقريبة من المعالج، ومكاملة البروتوكولات للشبكات السريعة.",
      "Go": "بناء خدمات شبكية سريعة متوازية المعالجة، والمايكروسيرفسز المتكاملة والآمنة.",
      "Swift": "تصميم وتطوير تطبيقات الآيفون والآيباد الأصلية بأداء فائق وتوافق تام مع نظام iOS."
    },
    servicesTitle: "خدماتنا",
    servicesList: [
      {
        number: "01",
        name: "تطوير المواقع والأنظمة الإدارية",
        description: "بناء لوحات تحكم متقدمة، وأنظمة ERP مخصصة لإدارة الشركات وتسهيل العمليات، والمساعدة على أتمتة المهام اليومية بكفاءة وسرعة فائقة."
      },
      {
        number: "02",
        name: "تصميم وتطوير تطبيقات الهواتف",
        description: "تصميم وتطوير تطبيقات الهواتف الذكية لمختلف المنصات (أندرويد وآيفون) باستخدام Flutter و Dart مع التركيز على تجربة مستخدم سلسة وأداء فائق وسرعة مذهلة."
      },
      {
        number: "03",
        name: "حماية الشبكات والأنظمة",
        description: "تأمين الشبكات الداخلية للشركات، وإعداد البنية التحتية وجدران الحماية، مع فحص الثغرات الأمنية لضمان سلامة البيانات من الاختراقات الأمنية."
      },
      {
        number: "04",
        name: "ربط وتكامل الأنظمة والـ APIs",
        description: "ربط وتكامل مختلف البرمجيات وبوابات الدفع وقواعد البيانات وتطوير الواجهات البرمجية (APIs) لضمان تدفق البيانات بأمان تام ومرونة."
      },
      {
        number: "05",
        name: "إدارة الخوادم وحلول DevOps",
        description: "تهيئة بيئات العمل وإعداد الخوادم السحابية وضبط قواعد البيانات مع تفعيل عمليات الرفع التلقائي لضمان سرعة واستقرار الخدمات البرمجية."
      }
    ],
    projectsTitle: "المشاريع",
    projectsList: [
      {
        number: "01",
        name: "نظام ERP متكامل لإدارة الشركات",
        category: "نظام إداري ولوحة تحكم",
        categoryKey: "erp",
        col1Image1: erpDashboard,
        col1Image2: erpDashboard,
        col2Image: erpDashboard
      },
      {
        number: "02",
        name: "تطبيق مصرفي آمن للهواتف الذكية",
        category: "تطبيقات هواتف (أندرويد وآيفون)",
        categoryKey: "apps",
        col1Image1: mobileBanking,
        col1Image2: mobileBanking,
        col2Image: mobileBanking
      },
      {
        number: "03",
        name: "بوابة تأمين وحماية شبكات الشركات",
        category: "أمن الشبكات والاتصالات",
        categoryKey: "security",
        col1Image1: securityGateway,
        col1Image2: securityGateway,
        col2Image: securityGateway
      }
    ],
    filterAll: "الكل",
    filterERP: "أنظمة إدارية",
    filterApps: "تطبيقات الموبايل",
    filterSecurity: "حماية وشبكات",
    footerTitle: "فلنبدأ بالعمل معاً",
    footerSub: "تواصل معي اليوم لبناء لوحات التحكم الإدارية الآمنة، شبكتك الخاصة، أو تطبيق الهاتف القادم.",
    footerRights: "جميع الحقوق محفوظة المهندس محمد علي محمد.",
    footerBackToTop: "الرجوع للأعلى",
    liveProject: "معاينة المشروع",
    contactMe: "تواصل معي"
  },
  en: {
    navAbout: "About",
    navPrice: "Services & Price",
    navProjects: "Projects",
    navContact: "Contact",
    heroHeading: "Eng. Mohamed Ali",
    heroBottomText: "Software & Systems Engineer driven by crafting secure administrative platforms, mobile apps, and networks.",
    aboutTitle: "About me",
    aboutParagraph: "As a Software & Systems Engineer, I specialize in building custom administrative dashboards, ERP systems, and secure network infrastructures. I design high-performance Android & iOS applications, leveraging over 10 programming languages including React, PHP, Flutter, and Dart to help businesses scale securely and stand out.",
    techDescriptions: {
      "React": "Building highly responsive component-driven web interfaces and administrative dashboards.",
      "PHP": "Developing secure backends, ERP core features, robust databases, and API integrations.",
      "Flutter": "Designing and compiling native applications for Android and iOS with fluid animations.",
      "Dart": "Writing fast, optimized, static compiled code to back Flutter systems and async processes.",
      "JavaScript": "Creating dynamic web actions, script automation, and browser application logic.",
      "TypeScript": "Securing codebase with strict typing to prevent compile bugs in large enterprise projects.",
      "Python": "Scripting server automations, network security scanning tools, and AI backend processors.",
      "C++": "Writing high-speed system configurations, network protocol integrations, and low-level code.",
      "Go": "Building concurrent network channels, secure microservices, and fast responding APIs.",
      "Swift": "Creating native high-performance apps for iPhone and iPad on Apple ecosystem."
    },
    servicesTitle: "Services",
    servicesList: [
      {
        number: "01",
        name: "Web & Administrative Systems",
        description: "Building detailed dashboards, custom ERP platforms, and control systems designed to streamline management, automate processes, and scale operations."
      },
      {
        number: "02",
        name: "Mobile App Development",
        description: "Designing and developing responsive, native-like mobile apps for iOS and Android using Flutter and Dart, focused on sleek UI/UX and solid code."
      },
      {
        number: "03",
        name: "Security & Networks",
        description: "Securing corporate networks, configuring firewalls, setting up enterprise network infrastructure, and identifying vulnerabilities to prevent cyber threats."
      },
      {
        number: "04",
        name: "API & System Integration",
        description: "Connecting third-party services, APIs, and microservices securely to establish seamless flow of data across multiple applications."
      },
      {
        number: "05",
        name: "DevOps & Cloud Deployment",
        description: "Configuring production environments, server setup, database optimization, and implementing CI/CD pipelines for secure and fast code deployment."
      }
    ],
    projectsTitle: "Project",
    projectsList: [
      {
        number: "01",
        name: "Enterprise ERP Dashboard",
        category: "Administrative Dashboard & ERP",
        categoryKey: "erp",
        col1Image1: erpDashboard,
        col1Image2: erpDashboard,
        col2Image: erpDashboard
      },
      {
        number: "02",
        name: "Secured Banking Mobile App",
        category: "Mobile Application (Android/iOS)",
        categoryKey: "apps",
        col1Image1: mobileBanking,
        col1Image2: mobileBanking,
        col2Image: mobileBanking
      },
      {
        number: "03",
        name: "Enterprise Security Gateway",
        category: "Network Security & Admin Gate",
        categoryKey: "security",
        col1Image1: securityGateway,
        col1Image2: securityGateway,
        col2Image: securityGateway
      }
    ],
    filterAll: "All",
    filterERP: "ERP Systems",
    filterApps: "Mobile Apps",
    filterSecurity: "Security & Networks",
    footerTitle: "Let's Create",
    footerSub: "Get in touch to build secure admin systems, websites, networks, or mobile apps.",
    footerRights: "All rights reserved. Eng. Mohamed Ali Mohamed.",
    footerBackToTop: "Back to Top",
    liveProject: "Live Project",
    contactMe: "Contact Me"
  }
};
