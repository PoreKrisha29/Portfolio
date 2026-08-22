import React from 'react';
import { motion } from 'framer-motion';
import ScrollStack, { ScrollStackItem } from './ScrollStack';

interface Project {
  number: string;
  title: string;
  category: string;
  description: string;
  githubUrl: string;
  liveUrl: string;
  tech: string[];
  metrics: { label: string; value: string }[];
}

const projects: Project[] = [
  {
    number: '01',
    title: 'Nexora – AI-Powered Developer Career Platform',
    category: 'AI / FULL-STACK PLATFORM',
    description:
      'Engineered an AI Code Review Engine using Groq LLaMA 3 and Python ThreadPoolExecutor (10 workers) to concurrently scan 18+ languages across 25 files in < 3.5s. Built a thread-safe GitHub Token Pool with round-robin rotation, constructed 20+ optimized REST endpoints (<80ms response), and built high-performance dashboards with React 19 & Vite (95+ Lighthouse score).',
    githubUrl: 'https://github.com/PoreKrisha29/Nexora',
    liveUrl: 'https://nexora-final-6x57.onrender.com/',
    tech: [
      'Python',
      'Django',
      'PostgreSQL',
      'React 19',
      'Tailwind CSS',
      'Groq LLaMA 3',
      'Gemini AI',
      'Vite',
      'REST APIs',
      'jsPDF',
      'Framer Motion',
    ],
    metrics: [
      { label: 'AI ENGINE', value: 'Groq LLaMA 3 + Gemini' },
      { label: 'CONCURRENCY', value: '< 3.5s (18+ Languages)' },
      { label: 'RELIABILITY', value: '99.9% Token Pool' },
    ],
  },
  {
    number: '02',
    title: 'StudyVerse – AI Student Productivity Platform',
    category: 'AI / REAL-TIME COLLABORATION',
    description:
      'Full-stack collaborative productivity hub featuring REST APIs built with Python Flask 3.0, Google OAuth 2.0, and 15+ PostgreSQL/Neon tables. Implemented document processing pipelines using PyPDF2 & Google Generative AI for multimodal analysis, and real-time live study rooms using WebSockets & Socket.IO with <100ms latency.',
    githubUrl: 'https://github.com/PoreKrisha29/Study-Verse',
    liveUrl: 'https://studyverse-final.onrender.com/',
    tech: [
      'Python',
      'Flask 3.0',
      'PostgreSQL',
      'WebSockets',
      'Socket.IO',
      'Google Generative AI',
      'PyPDF2',
      'OAuth 2.0',
      'JavaScript',
      'HTML5/CSS3',
    ],
    metrics: [
      { label: 'MULTIMODAL AI', value: 'Gemini SDK + PyPDF2' },
      { label: 'REAL-TIME', value: 'WebSockets (<100ms)' },
      { label: 'DATABASE', value: '15+ Relational Tables' },
    ],
  },
  {
    number: '03',
    title: 'SkillBridge – Freelance Collaboration Platform',
    category: 'MARKETPLACE / DISTRIBUTED WORKFLOW',
    description:
      'Full-stack freelancing marketplace developed with Python and Flask enabling clients to post projects and freelancers to discover opportunities and submit proposals through a role-based workflow. Designed and integrated structured RESTful APIs with relational database schemas and real-time messaging.',
    githubUrl: 'https://github.com/PoreKrisha29/Skill-Bridge-v3.0',
    liveUrl: '',
    tech: [
      'Python 3',
      'Flask',
      'WebSockets',
      'Flask-SQLAlchemy',
      'Google OAuth 2.0',
      'JavaScript',
      'Bootstrap 5',
      'Jinja2',
    ],
    metrics: [
      { label: 'WORKFLOW', value: 'Role-Based Proposals' },
      { label: 'COMMUNICATION', value: 'Live WebSocket Sync' },
      { label: 'DATABASE', value: 'Flask-SQLAlchemy Models' },
    ],
  },
  {
    number: '04',
    title: 'FairLens – AI-Powered Bias & Compliance Auditor',
    category: 'AI AUDITING / RESPONSIBLE ML',
    description:
      'Architected an AI-powered bias auditing platform that calculates statistical fairness metrics (Demographic Parity, Equal Opportunity, Disparate Impact) across CSV datasets and ML models. Integrated Google Gemini AI for automated root-cause explanations and legal compliance checks with downloadable audit reports.',
    githubUrl: 'https://github.com/PoreKrisha29/Fair-Lens',
    liveUrl: 'https://fairlens-unbiasedai.onrender.com/',
    tech: [
      'Next.js 16',
      'TypeScript',
      'FastAPI',
      'Python',
      'Neon PostgreSQL',
      'Tailwind CSS',
      'Google Gemini AI',
      'Framer Motion',
      'SQLite',
    ],
    metrics: [
      { label: 'FAIRNESS METRICS', value: 'Demographic Parity & EOD' },
      { label: 'AI REASONING', value: 'Gemini Compliance Check' },
      { label: 'AUDIT COMPLIANCE', value: 'Automated PDF Export' },
    ],
  },
  {
    number: '05',
    title: 'Content Repurposing Engine – Multi-Platform AI Pipeline',
    category: 'GENERATIVE AI / CONTENT AUTOMATION',
    description:
      'Built an automated content repurposing engine powered by FastAPI and Google Gemini AI that transforms long-form text, blogs, and transcripts into multi-platform social assets for LinkedIn, X (Twitter), and Newsletters. Features virality scoring, monetization insights, and automated scheduling.',
    githubUrl: 'https://github.com/PoreKrisha29/Content-Repurposing-Engine',
    liveUrl: '',
    tech: [
      'FastAPI',
      'Python',
      'React',
      'Google Gemini AI',
      'SQLAlchemy',
      'SQLite',
      'Tailwind CSS',
      'REST APIs',
    ],
    metrics: [
      { label: 'PIPELINE', value: 'Long-Form to Multi-Platform' },
      { label: 'AI ENGINE', value: 'Google Gemini 1.5' },
      { label: 'INTELLIGENCE', value: 'Virality Scoring & Analytics' },
    ],
  },
];

export const ProjectsSection: React.FC = () => {
  return (
    <section
      id="work"
      className="relative w-full bg-black text-[#E8DFD8] font-sans selection:bg-[#cbb59d] selection:text-black pt-20 pb-32 px-6 sm:px-12 lg:px-20"
    >
      {/* Studio Ambient Glows */}
      <div className="absolute top-1/4 left-1/3 w-[36rem] h-[36rem] bg-[#D4AF37]/5 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[30rem] h-[30rem] bg-[#8C6D4F]/5 rounded-full blur-[170px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        
        {/* Eyebrow Header */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex items-center space-x-4 mb-5"
        >
          <span
            className="text-[11px] font-medium tracking-[0.35em] uppercase text-[#D4AF37]"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            02 / FEATURED WORK
          </span>
          <div className="w-20 h-[1px] bg-gradient-to-r from-[#D4AF37]/80 via-[#8C6D4F]/40 to-transparent" />
        </motion.div>

        {/* Section Headline */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-16"
        >
          <h2
            className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] tracking-tight uppercase leading-[0.85] select-none"
            style={{ fontFamily: "'Bebas Neue', sans-serif" }}
          >
            <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#FFFFFF] via-[#D5CBC0] to-[#605448] drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]">
              SELECTED WORKS.
            </span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#F7E7C4] via-[#C99E5D] to-[#543B1A] drop-shadow-[0_8px_25px_rgba(201,158,93,0.35)]">
              ENGINEERED VALUE.
            </span>
          </h2>

          <p
            className="text-xs sm:text-sm font-light text-[#A8988B] max-w-sm mt-4 md:mt-0 leading-relaxed"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            Scroll down to unfold the system architecture cards. Each platform was built to solve complex operational challenges.
          </p>
        </motion.div>

        {/* React Bits Stacking Deck */}
        <ScrollStack
          itemDistance={60}
          itemScale={0.035}
          itemStackDistance={24}
          stackPosition="12%"
          scaleEndPosition="4%"
          baseScale={0.92}
          useWindowScroll={true}
        >
          {projects.map((project) => (
            <ScrollStackItem key={project.title}>
              <div className="relative w-full rounded-2xl border border-[#8C6D4F]/50 bg-[#0E0C0A] p-8 sm:p-12 shadow-[0_25px_70px_rgba(0,0,0,0.98)] group overflow-hidden transition-colors duration-500 hover:border-[#D4AF37]">
                
                {/* Top Gold Border Light Flare */}
                <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/80 to-transparent" />

                {/* Corner Minimal L-Brackets */}
                <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-[#D4AF37]/60 group-hover:border-[#D4AF37] transition-colors" />
                <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-[#D4AF37]/60 group-hover:border-[#D4AF37] transition-colors" />
                <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-[#D4AF37]/60 group-hover:border-[#D4AF37] transition-colors" />
                <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-[#D4AF37]/60 group-hover:border-[#D4AF37] transition-colors" />

                {/* Big Background Watermark Number */}
                <span
                  className="absolute -bottom-6 -right-3 text-8xl sm:text-9xl font-bold text-[#EAD8C7]/5 select-none pointer-events-none leading-none"
                  style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                >
                  {project.number}
                </span>

                {/* Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative z-10">
                  
                  {/* Left Column (7 Cols) */}
                  <div className="lg:col-span-7 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center space-x-3 mb-4">
                        <span className="text-xs font-mono font-bold text-[#D4AF37]">
                          {project.number} //
                        </span>
                        <span className="text-[10.5px] font-mono tracking-[0.25em] uppercase text-[#A8988B]">
                          {project.category}
                        </span>
                      </div>

                      <h3
                        className="text-4xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-white mb-4 group-hover:text-[#F7E7C4] transition-colors uppercase leading-[0.9]"
                        style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                      >
                        {project.title}
                      </h3>

                      <p
                        className="text-xs sm:text-sm md:text-[14px] font-light text-[#BDB0A4] leading-[1.85] tracking-wide mb-8 max-w-2xl"
                        style={{ fontFamily: "'Montserrat', sans-serif" }}
                      >
                        {project.description}
                      </p>
                    </div>

                    {/* Tech Stack Pills */}
                    <div className="flex flex-wrap gap-2 pt-6 border-t border-[#8C6D4F]/25">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="px-3 py-1 text-[10px] font-medium tracking-[0.16em] uppercase rounded-sm border border-[#8C6D4F]/40 bg-[#16120E] text-[#E8D7C5] group-hover:border-[#D4AF37]/50 transition-all duration-300"
                          style={{ fontFamily: "'Montserrat', sans-serif" }}
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Right Column (5 Cols) */}
                  <div className="lg:col-span-5 flex flex-col justify-between h-full space-y-6 lg:pl-6 lg:border-l lg:border-[#8C6D4F]/25">
                    <div className="space-y-3">
                      <span className="text-[9.5px] font-mono tracking-[0.25em] uppercase text-[#8C6D4F] block mb-2">
                        // ARCHITECTURE METRICS
                      </span>
                      {project.metrics.map((m) => (
                        <div
                          key={m.label}
                          className="p-3.5 rounded-sm border border-[#8C6D4F]/25 bg-[#050403] flex items-center justify-between"
                        >
                          <span className="text-[10px] font-mono text-[#A8988B]">
                            {m.label}
                          </span>
                          <span className="text-[11px] font-mono font-medium text-[#F7E7C4]">
                            {m.value}
                          </span>
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3 pt-2">
                      {project.liveUrl ? (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 inline-flex items-center justify-center space-x-2 px-5 py-3.5 border border-[#D4AF37] bg-[#D4AF37] hover:bg-[#E8DFD8] text-black text-[11px] font-semibold tracking-[0.24em] uppercase transition-all duration-300 shadow-[0_0_25px_rgba(212,175,55,0.25)]"
                          style={{ fontFamily: "'Montserrat', sans-serif" }}
                        >
                          <span>LIVE DEMO</span>
                          <span className="text-xs">↗</span>
                        </a>
                      ) : null}
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`${project.liveUrl ? 'flex-1' : 'w-full'} inline-flex items-center justify-center space-x-2 px-5 py-3.5 border border-[#8C6D4F] bg-[#16120E] hover:border-[#D4AF37] text-[#EAD8C7] hover:text-white text-[11px] font-medium tracking-[0.24em] uppercase transition-all duration-300`}
                        style={{ fontFamily: "'Montserrat', sans-serif" }}
                      >
                        <span>VIEW REPO</span>
                        <span className="text-xs">↗</span>
                      </a>
                    </div>
                  </div>

                </div>
              </div>
            </ScrollStackItem>
          ))}
        </ScrollStack>

      </div>
    </section>
  );
};

export default ProjectsSection;