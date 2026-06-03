import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { FadeIn } from './FadeIn';
import { LiveProjectButton } from './LiveProjectButton';
import type { Translation, ProjectItem } from '../translations';
import { Tilt } from './Tilt';

interface ProjectCardProps {
  project: ProjectItem;
  index: number;
  totalCards: number;
  t: Translation;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index, totalCards, t }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Track the scroll of each card relative to viewport
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  // Scale down the card as we scroll past it
  const targetScale = 1 - (totalCards - 1 - index) * 0.03;
  const scale = useTransform(scrollYProgress, [0, 1], [1, targetScale]);

  // Responsive sticky top position offset
  const [top, setTop] = useState(96 + index * 28);

  useEffect(() => {
    const updateTop = () => {
      if (window.innerWidth >= 768) {
        setTop(128 + index * 28);
      } else {
        setTop(96 + index * 28);
      }
    };
    updateTop();
    window.addEventListener('resize', updateTop);
    return () => window.removeEventListener('resize', updateTop);
  }, [index]);

  return (
    <div
      ref={containerRef}
      className="relative h-[85vh] w-full flex flex-col justify-start items-center"
    >
      <motion.div
        style={{
          scale,
          top: `${top}px`,
          willChange: 'transform'
        }}
        className="sticky w-full rounded-[40px] sm:rounded-[50px] md:rounded-[60px]"
      >
        <Tilt
          maxTilt={4}
          className="w-full rounded-[40px] sm:rounded-[50px] md:rounded-[60px] border-2 border-[#D7E2EA]/15 bg-[#0C0C0C]/90 p-4 sm:p-6 md:p-8 flex flex-col gap-6 md:gap-8 shadow-2xl backdrop-blur-md"
        >
          {/* Top Row: Info & Button */}
          <div className="flex flex-row justify-between items-center w-full flex-wrap gap-4 border-b border-[#D7E2EA]/15 pb-4 sm:pb-5">
            <div className="flex items-center gap-4 sm:gap-6">
              {/* Custom number style (gradient, same bold scale) */}
              <span className="hero-heading font-black text-[clamp(2.5rem,8vw,100px)] leading-none select-none">
                {project.number}
              </span>
              <div className="flex flex-col text-left rtl:text-right">
                <span className="text-[#D7E2EA]/60 uppercase text-xs sm:text-sm tracking-wider font-light">
                  {project.category}
                </span>
                <h3 className="text-[#D7E2EA] font-semibold text-lg sm:text-2xl md:text-3.5xl uppercase tracking-wide">
                  {project.name}
                </h3>
              </div>
            </div>
            <LiveProjectButton label={t.liveProject} />
          </div>

          {/* Bottom Row: Two-Column Image Grid */}
          <div className="flex flex-row gap-4 sm:gap-6 md:gap-8 w-full items-stretch flex-grow overflow-hidden pb-2">
            {/* Column 1: 40% Width - Stacked Images */}
            <div className="w-[40%] flex flex-col gap-3 sm:gap-4 md:gap-5 justify-between">
              <img
                src={project.col1Image1}
                alt={`${project.name} A`}
                className="w-full object-cover rounded-[40px] sm:rounded-[50px] md:rounded-[60px] object-left-top"
                style={{ height: 'clamp(130px, 16vw, 230px)' }}
                loading="lazy"
              />
              <img
                src={project.col1Image2}
                alt={`${project.name} B`}
                className="w-full object-cover rounded-[40px] sm:rounded-[50px] md:rounded-[60px] object-right-bottom"
                style={{ height: 'clamp(160px, 22vw, 340px)' }}
                loading="lazy"
              />
            </div>

            {/* Column 2: 60% Width - Tall Image */}
            <div className="w-[60%] flex">
              <img
                src={project.col2Image}
                alt={`${project.name} C`}
                className="w-full h-full min-h-[100px] object-cover rounded-[40px] sm:rounded-[50px] md:rounded-[60px] object-center"
                loading="lazy"
              />
            </div>
          </div>
        </Tilt>
      </motion.div>
    </div>
  );
};

interface ProjectsSectionProps {
  t: Translation;
  id?: string;
}

type FilterKey = 'all' | 'erp' | 'apps' | 'security';

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ t, id = "projects" }) => {
  const [activeFilter, setActiveFilter] = useState<FilterKey>('all');

  const filters = [
    { key: 'all' as const, label: t.filterAll },
    { key: 'erp' as const, label: t.filterERP },
    { key: 'apps' as const, label: t.filterApps },
    { key: 'security' as const, label: t.filterSecurity }
  ];

  // Filter projects list dynamically
  const filteredProjects = activeFilter === 'all'
    ? t.projectsList
    : t.projectsList.filter(project => project.categoryKey === activeFilter);

  return (
    <section
      id={id}
      className="bg-darkBg rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 pt-16 sm:pt-20 pb-20 relative z-20"
    >
      <div className="max-w-5xl mx-auto w-full px-5">
        {/* Section Heading */}
        <FadeIn delay={0} y={40} className="w-full text-center mb-10 sm:mb-12">
          <h2 className="hero-heading font-black uppercase leading-none tracking-tight text-[clamp(3rem,12vw,160px)]">
            {t.projectsTitle}
          </h2>
        </FadeIn>

        {/* Filter Tabs Grid */}
        <FadeIn delay={0.1} y={20} className="w-full flex justify-center">
          <div className="flex flex-wrap justify-center gap-2.5 sm:gap-4 mb-12 sm:mb-16 max-w-2xl">
            {filters.map((filter) => {
              const isActive = activeFilter === filter.key;
              return (
                <button
                  key={filter.key}
                  onClick={() => setActiveFilter(filter.key)}
                  className={`px-5 py-2 sm:px-6 sm:py-2.5 rounded-full text-xs sm:text-sm font-medium uppercase tracking-wider transition-all duration-300 focus:outline-none ${
                    isActive
                      ? 'text-white border border-[#B600A8] shadow-lg shadow-[#B600A8]/20 scale-105'
                      : 'text-[#D7E2EA]/70 border border-[#D7E2EA]/10 hover:text-white hover:border-[#D7E2EA]/30'
                  }`}
                  style={
                    isActive
                      ? {
                          background: 'linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)',
                        }
                      : {}
                  }
                >
                  {filter.label}
                </button>
              );
            })}
          </div>
        </FadeIn>

        {/* Sticky Cards Stacking Wrapper */}
        <div className="flex flex-col w-full gap-8 sm:gap-12 md:gap-16 min-h-[50vh]">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.number}
                layout
                initial={{ opacity: 0, scale: 0.9, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: -30 }}
                transition={{ duration: 0.45, ease: [0.25, 0.1, 0.25, 1] }}
                className="w-full"
              >
                <ProjectCard
                  project={project}
                  index={index}
                  totalCards={filteredProjects.length}
                  t={t}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
export default ProjectsSection;
