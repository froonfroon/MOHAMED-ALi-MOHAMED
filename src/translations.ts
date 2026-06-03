import erpDashboard from './assets/erp_dashboard.png';
import mobileBanking from './assets/mobile_banking.png';
import securityGateway from './assets/security_gateway.png';

// Import Plastic Factory ERP screenshots
import plasticERP1 from './assets/2026-04-12__15__43a3d2e6a2002b03.png';
import plasticERP2 from './assets/2026-04-12__13__b9686bb8350c723f.png';
import plasticERP4 from './assets/Screenshot_2026-03-27_023655_658fb26bcfe5d562.png';
import plasticERP5 from './assets/2026-04-12__16__-_Copy_7f86898de88c8290.png';
import plasticERP6 from './assets/2026-04-12__17__13a39acf54d23b0e.png';

// Import Cooperative POS screenshots
import coopPos1 from './assets/Screenshot_2026-03-27_145032_cd22c6ae46a3ee16.png';
import coopPos2 from './assets/Screenshot_2026-03-27_145032_257fcea50efa33dc.png';
import coopPos3 from './assets/Screenshot_2026-03-27_145054_206e4f5db2cbb354.png';

// Import Wafaq Academy LMS screenshots
import wafaqLMS1 from './assets/Screenshot_2026-03-27_145656_de7d58a0e07870c1.png';
import wafaqLMS2 from './assets/Screenshot_2026-03-27_145656_de7d58a0e07870c1 (1).png';

// Import Invoicing screenshot
import salesInv from './assets/Screenshot_2026-03-27_145121_aa7e3349e2998900.png';

// Import Abu Samra Coffee screenshots
import cafe1 from './assets/Screenshot_2026-03-27_145912_3a4c2be44bd7053b.png';
import cafe2 from './assets/Screenshot_2026-03-27_145942_ecaa778d7daa6839.png';

// Import Supermarket App screenshots
import supermarket1 from './assets/Screenshot_2026-04-11_152541_1b8f61ece5a2bf47.png';
import supermarket2 from './assets/Screenshot_2026-04-11_152618_5368d394065a94da.png';
import supermarket3 from './assets/Screenshot_2026-04-11_152645_bd8afe99d514da3e.png';

// Import Maintenance App screenshots
import maintenance1 from './assets/Screenshot_2026-04-11_153945_889af786de19f71f.png';
import maintenance2 from './assets/Screenshot_2026-04-11_153953_5a9912575bb7bb52.png';
import maintenance3 from './assets/Screenshot_2026-04-11_154004_fd5b222322d2198f.png';

// Import Food Delivery App screenshots
import foodDelivery1 from './assets/Screenshot_2026-04-12_032753_574e58ba7565820b.png';
import foodDelivery2 from './assets/Screenshot_2026-04-12_032816_24c283c724d4fd05.png';
import foodDelivery3 from './assets/Screenshot_2026-04-12_032833_28cf22174a54813c.png';
import foodDelivery4 from './assets/Screenshot_2026-04-12_032854_6c13690bebb7c457.png';

// Import Fintech App screenshots
import billing1 from './assets/Screenshot_2026-04-11_154012_c205ce93bb27f1c0.png';
import billing2 from './assets/Screenshot_2026-04-11_154024_b3fe8144aa7879e6.png';

// Import the 3 new website screenshots captured by browser agent
import profsserSite from './assets/profsser_site.png';
import halloreisenSite from './assets/halloreisen_site.png';
import kayholdSite from './assets/kayhold_site.png';

// Import the latest system and E-Commerce screenshots requested by user
import salesSystemDashboard from './assets/sales_system_dashboard.png';
import vegSystemDashboard from './assets/veg_system_dashboard.png';
import vegSystemScale from './assets/veg_system_scale.png';
import plasticProDashboard from './assets/plastic_pro_dashboard.png';
import sharkgroupSite from './assets/sharkgroup_site.png';

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
        name: "نظام ERP متكامل لمصانع البلاستيك (شركة السعادة)",
        category: "نظام ERP صناعي شامل لإدارة الإنتاج والمخزون والورديات والماكينات",
        categoryKey: "erp",
        col1Image1: plasticERP1,
        col1Image2: plasticERP2,
        col2Image: plasticProDashboard
      },
      {
        number: "04",
        name: "نظام الجمعية التعاونية ونقاط البيع POS",
        category: "نظام نقاط البيع وإدارة الفواتير والمخازن المتكامل",
        categoryKey: "erp",
        col1Image1: coopPos1,
        col1Image2: coopPos2,
        col2Image: coopPos3
      },
      {
        number: "05",
        name: "بوابة لوحة تحكم الماكينات والموظفين للمصانع",
        category: "لوحة تحكم لإدارة كفاءة المكائن وحضور مشغلي خطوط الإنتاج",
        categoryKey: "erp",
        col1Image1: plasticERP4,
        col1Image2: plasticERP5,
        col2Image: plasticERP6
      },
      {
        number: "06",
        name: "نظام الصيرفي للمبيعات ونقاط البيع POS",
        category: "لوحة تحكم متطورة للمبيعات والخزينة والمخزن ونقاط البيع",
        categoryKey: "erp",
        col1Image1: salesSystemDashboard,
        col1Image2: salesSystemDashboard,
        col2Image: salesSystemDashboard
      },
      {
        number: "07",
        name: "نظام أهل البيت لإدارة محلات الخضار والفاكهة",
        category: "نظام نقاط البيع للوزن والربط المباشر بميزان الكاشير الذكي",
        categoryKey: "erp",
        col1Image1: vegSystemScale,
        col1Image2: vegSystemDashboard,
        col2Image: vegSystemDashboard
      },
      {
        number: "08",
        name: "متجر شارك جروب الإلكتروني المتكامل",
        category: "متجر تجارة إلكترونية متكامل وذكي للشركات (SharkGroup)",
        categoryKey: "erp",
        col1Image1: sharkgroupSite,
        col1Image2: sharkgroupSite,
        col2Image: sharkgroupSite
      },
      {
        number: "09",
        name: "منصة إدارة التعليم LMS (أكاديمية وفاق)",
        category: "نظام إدارة التعلم وتدريب الطلاب والمعلمين",
        categoryKey: "erp",
        col1Image1: wafaqLMS1,
        col1Image2: wafaqLMS2,
        col2Image: wafaqLMS1
      },
      {
        number: "10",
        name: "نظام إدارة فواتير المبيعات المالي ERP",
        category: "نظام إصدار الفواتير والتحليلات المالية للمبيعات",
        categoryKey: "erp",
        col1Image1: salesInv,
        col1Image2: salesInv,
        col2Image: salesInv
      },
      {
        number: "11",
        name: "موقع قهوة أبو سمراء الفاخرة",
        category: "موقع تعريفي وتجارة إلكترونية لطلب البن والقهوة",
        categoryKey: "erp",
        col1Image1: cafe1,
        col1Image2: cafe2,
        col2Image: cafe1
      },
      {
        number: "12",
        name: "موقع بروفيسور التعليمي المتكامل",
        category: "منصة تعليمية متكاملة للطلاب (Profsser.com)",
        categoryKey: "erp",
        col1Image1: profsserSite,
        col1Image2: profsserSite,
        col2Image: profsserSite
      },
      {
        number: "13",
        name: "موقع هالو رايزن للسياحة والسفر",
        category: "منصة حجز الرحلات السياحية والفنادق (HalloReisen)",
        categoryKey: "erp",
        col1Image1: halloreisenSite,
        col1Image2: halloreisenSite,
        col2Image: halloreisenSite
      },
      {
        number: "14",
        name: "موقع وكالة كيهولد للتسويق الرقمي",
        category: "موقع أعمال ووكالة خدمات تسويقية (Kayhold Marketing)",
        categoryKey: "erp",
        col1Image1: kayholdSite,
        col1Image2: kayholdSite,
        col2Image: kayholdSite
      },
      {
        number: "15",
        name: "تطبيق التسوق والسوبرماركت الذكي",
        category: "تطبيق تجارة إلكترونية وشراء مقاضي الموبايل (Flutter)",
        categoryKey: "apps",
        col1Image1: supermarket1,
        col1Image2: supermarket2,
        col2Image: supermarket3
      },
      {
        number: "16",
        name: "تطبيق خدمات الصيانة المنزلية",
        category: "تطبيق حجز فنيين كهرباء وسباكة وتبريد (Flutter)",
        categoryKey: "apps",
        col1Image1: maintenance1,
        col1Image2: maintenance2,
        col2Image: maintenance3
      },
      {
        number: "17",
        name: "تطبيق توصيل الأطعمة والمقاضي الذكي",
        category: "تطبيق لطلب الوجبات والمواد الغذائية فورياً (Flutter)",
        categoryKey: "apps",
        col1Image1: foodDelivery1,
        col1Image2: foodDelivery2,
        col2Image: foodDelivery3
      },
      {
        number: "18",
        name: "تطبيق الفواتير والدفع الإلكتروني FinTech",
        category: "تطبيق المحفظة الرقمية وتحويل الأموال وسداد الفواتير (Flutter)",
        categoryKey: "apps",
        col1Image1: billing1,
        col1Image2: billing2,
        col2Image: foodDelivery4
      },
      {
        number: "19",
        name: "بوابة تأمين وحماية شبكات الشركات",
        category: "أمن الشبكات والاتصالات",
        categoryKey: "security",
        col1Image1: securityGateway,
        col1Image2: securityGateway,
        col2Image: securityGateway
      }
    ],
    filterAll: "الكل",
    filterERP: "أنظمة إدارية ومواقع",
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
    projectsTitle: "Projects",
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
        name: "Plastic Factory ERP System",
        category: "Industrial ERP for managing production, raw inventory, shifts & machinery",
        categoryKey: "erp",
        col1Image1: plasticERP1,
        col1Image2: plasticERP2,
        col2Image: plasticProDashboard
      },
      {
        number: "04",
        name: "Consumer Cooperative POS System",
        category: "Sales, Point-of-Sale, Invoicing & Inventory system",
        categoryKey: "erp",
        col1Image1: coopPos1,
        col1Image2: coopPos2,
        col2Image: coopPos3
      },
      {
        number: "05",
        name: "Industrial Machine & Staff Gate",
        category: "Control panel for machine efficiency & shifts attendance",
        categoryKey: "erp",
        col1Image1: plasticERP4,
        col1Image2: plasticERP5,
        col2Image: plasticERP6
      },
      {
        number: "06",
        name: "Al-Sairafi Sales & POS System",
        category: "Advanced control dashboard for POS sales, inventory and finance",
        categoryKey: "erp",
        col1Image1: salesSystemDashboard,
        col1Image2: salesSystemDashboard,
        col2Image: salesSystemDashboard
      },
      {
        number: "07",
        name: "Ahl Al-Bayt Vegetables POS System",
        category: "Point of Sale weighing and instant integration with cashier scale",
        categoryKey: "erp",
        col1Image1: vegSystemScale,
        col1Image2: vegSystemDashboard,
        col2Image: vegSystemDashboard
      },
      {
        number: "08",
        name: "Shark Group E-Commerce Store",
        category: "Full scale online commerce and products listing (SharkGroup)",
        categoryKey: "erp",
        col1Image1: sharkgroupSite,
        col1Image2: sharkgroupSite,
        col2Image: sharkgroupSite
      },
      {
        number: "09",
        name: "Wafaq Academy LMS Platform",
        category: "Learning Management System for students & instructors",
        categoryKey: "erp",
        col1Image1: wafaqLMS1,
        col1Image2: wafaqLMS2,
        col2Image: wafaqLMS1
      },
      {
        number: "10",
        name: "ERP Enterprise Sales Invoicing",
        category: "Sales invoicing system & financial reports",
        categoryKey: "erp",
        col1Image1: salesInv,
        col1Image2: salesInv,
        col2Image: salesInv
      },
      {
        number: "11",
        name: "Abu Samra Premium Coffee Web",
        category: "E-Commerce brand landing page for coffee ordering",
        categoryKey: "erp",
        col1Image1: cafe1,
        col1Image2: cafe2,
        col2Image: cafe1
      },
      {
        number: "12",
        name: "Professor Educational Platform",
        category: "Comprehensive students educational portal (Profsser.com)",
        categoryKey: "erp",
        col1Image1: profsserSite,
        col1Image2: profsserSite,
        col2Image: profsserSite
      },
      {
        number: "13",
        name: "Hallo Reisen Travel & Tourism",
        category: "Tourism booking system for flights & hotels (HalloReisen)",
        categoryKey: "erp",
        col1Image1: halloreisenSite,
        col1Image2: halloreisenSite,
        col2Image: halloreisenSite
      },
      {
        number: "14",
        name: "Kayhold Digital Marketing Agency",
        category: "Business portfolio website for services (Kayhold Marketing)",
        categoryKey: "erp",
        col1Image1: kayholdSite,
        col1Image2: kayholdSite,
        col2Image: kayholdSite
      },
      {
        number: "15",
        name: "Supermarket Shopping Mobile App",
        category: "E-Commerce grocery shopping application (Flutter)",
        categoryKey: "apps",
        col1Image1: supermarket1,
        col1Image2: supermarket2,
        col2Image: supermarket3
      },
      {
        number: "16",
        name: "Maintenance & Home Services App",
        category: "On-demand booking for maintenance technicians (Flutter)",
        categoryKey: "apps",
        col1Image1: maintenance1,
        col1Image2: maintenance2,
        col2Image: maintenance3
      },
      {
        number: "17",
        name: "Food & Grocery Delivery App",
        category: "On-demand food ordering & fast delivery app (Flutter)",
        categoryKey: "apps",
        col1Image1: foodDelivery1,
        col1Image2: foodDelivery2,
        col2Image: foodDelivery3
      },
      {
        number: "18",
        name: "FinTech Finance & Billing App",
        category: "Secured billing wallet transfer and payments (Flutter)",
        categoryKey: "apps",
        col1Image1: billing1,
        col1Image2: billing2,
        col2Image: foodDelivery4
      },
      {
        number: "19",
        name: "Enterprise Security Gateway",
        category: "Network Security & Admin Gate",
        categoryKey: "security",
        col1Image1: securityGateway,
        col1Image2: securityGateway,
        col2Image: securityGateway
      }
    ],
    filterAll: "All",
    filterERP: "ERP & Websites",
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
