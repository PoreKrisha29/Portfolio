import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import heroImg from '../assets/hero.png';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.16,
      delayChildren: 0.2,
    },
  },
};

const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 18, filter: 'blur(6px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      duration: 1.1,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export const HeroSection: React.FC = () => {
  const [cursorPos, setCursorPos] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section id="hero" className="relative w-screen h-screen overflow-hidden bg-[#111825] text-[#E8DFD8] font-sans selection:bg-[#cbb59d] selection:text-black cursor-none">
      {/* ================= 1. MINIMAL CUSTOM CURSOR ================= */}
      {cursorPos.x >= 0 && (
        <motion.div
          className="fixed top-0 left-0 pointer-events-none z-50 rounded-full border border-[#D4AF37]/50 flex items-center justify-center backdrop-blur-[1px]"
          animate={{
            x: cursorPos.x - (isHovered ? 24 : 5),
            y: cursorPos.y - (isHovered ? 24 : 5),
            width: isHovered ? 48 : 10,
            height: isHovered ? 48 : 10,
            backgroundColor: isHovered ? 'rgba(212, 175, 55, 0.15)' : 'rgba(235, 215, 195, 0.95)',
          }}
          transition={{ type: 'spring', damping: 30, stiffness: 350, mass: 0.5 }}
        />
      )}

      {/* ================= 2. HERO BACKGROUND LAYER ================= */}
      {/* Background matches video's dark environment — hides the "gap" seamlessly */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none" style={{ background: '#111825' }}>

        {/* Video — object-contain keeps full character visible, right-aligned */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full select-none"
          style={{ objectFit: 'contain', objectPosition: '100% 50%' }}
        >
          <source src="/videos/hero.mp4" type="video/mp4" />
          <img
            src={heroImg}
            alt="Krisha Pore"
            className="absolute inset-0 w-full h-full"
            style={{ objectFit: 'contain', objectPosition: '100% 50%' }}
          />
        </video>

        {/* Ambient Pulsing Aura */}
        <motion.div
          animate={{ scale: [1, 1.25, 1.08, 1.3, 1], opacity: [0.1, 0.25, 0.15, 0.3, 0.1] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute w-[36rem] h-[36rem] right-1/4 top-1/4 bg-gradient-to-tr from-[#D4AF37]/20 via-[#C99E5D]/10 to-transparent rounded-full blur-[150px] pointer-events-none"
        />

        {/* Floating Gold Sparkle Embers */}
        <motion.div
          animate={{ y: [-15, -60, -15], x: [-5, 12, -5], opacity: [0.2, 0.8, 0.2], scale: [0.8, 1.2, 0.8] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-1/4 right-1/4 w-2 h-2 rounded-full bg-[#F3DBB3] blur-[1px] shadow-[0_0_12px_#D4AF37] pointer-events-none z-10"
        />
        <motion.div
          animate={{ y: [10, -45, 10], x: [10, -10, 10], opacity: [0.1, 0.7, 0.1], scale: [1, 1.3, 1] }}
          transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          className="absolute bottom-1/3 right-1/6 w-1.5 h-1.5 rounded-full bg-[#D4AF37] blur-[1px] shadow-[0_0_10px_#D4AF37] pointer-events-none z-10"
        />

        {/* Dynamic Light Sheen */}
        <motion.div
          animate={{ opacity: [0.04, 0.18, 0.04] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute inset-0 bg-gradient-to-tr from-transparent via-[#D4AF37]/8 to-transparent pointer-events-none mix-blend-screen"
        />

        {/* Left fade — text readability */}
        <div className="absolute inset-y-0 left-0 w-[45%] bg-gradient-to-r from-black via-black/80 to-transparent pointer-events-none" />

        {/* Bottom fade */}
        <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-black via-black/70 to-transparent pointer-events-none" />
      </div>

      {/* ================= 4. CONTENT LAYER ================= */}
      <div className="relative z-10 flex flex-col justify-between h-full w-full px-6 sm:px-12 lg:px-16 pt-24 pb-8 pointer-events-none">

        {/* Main Hero Row */}
        <div className="relative flex flex-col lg:flex-row items-center justify-between w-full pt-2 pb-2 my-auto">

          {/* LEFT: Headline & Actions */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-sm sm:max-w-md md:max-w-lg lg:max-w-[36rem] xl:max-w-[40rem] pointer-events-auto z-20"
          >
            {/* Massive Condensed Headline */}
            <motion.div variants={fadeUpVariants} className="relative mb-3.5 select-none">
              <h1
                className="text-6xl sm:text-7xl md:text-8xl lg:text-[7.2rem] xl:text-[7.8rem] tracking-tight uppercase leading-[0.83]"
                style={{ fontFamily: "'Bebas Neue', sans-serif" }}
              >
                {/* Line 1: I BUILD */}
                <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#FFFFFF] via-[#D5CBC0] to-[#605448] drop-shadow-[0_4px_12px_rgba(0,0,0,0.85)]">
                  I BUILD
                </span>

                {/* Line 2: SCALABLE */}
                <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#F7E7C4] via-[#C99E5D] to-[#543B1A] drop-shadow-[0_8px_25px_rgba(201,158,93,0.35)]">
                  SCALABLE
                </span>

                {/* Line 3: PLATFORMS */}
                <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#DFBE8A] via-[#9B7640] to-[#342410] drop-shadow-[0_10px_30px_rgba(155,118,64,0.4)]">
                  PLATFORMS
                </span>
              </h1>
            </motion.div>

            {/* Subtitle Technologies */}
            <motion.div variants={fadeUpVariants} className="mb-4">
              <p
                className="text-[10px] sm:text-[11px] md:text-xs font-normal tracking-[0.28em] uppercase text-[#EAD8C7]"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                FULL STACK DEVELOPER <span className="text-[#D4AF37] mx-1">•</span> AI &amp; MACHINE LEARNING <span className="text-[#D4AF37] mx-1">•</span> PYTHON &amp; REACT
              </p>
            </motion.div>

            {/* 3-Line Description */}
            <motion.div
              variants={fadeUpVariants}
              className="text-xs sm:text-sm md:text-[13.5px] font-light text-[#E8DFD8]/85 leading-[1.8] tracking-wide max-w-lg mb-6 space-y-1"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              <p>
                Computer Science &amp; Technology engineer crafting intelligent digital solutions.
                <br />
                Where high-performance frontend meets resilient backend architectures.
              </p>
            </motion.div>

            {/* CTA Buttons & Inlined Signature */}
            <motion.div
              variants={fadeUpVariants}
              className="flex flex-wrap items-center gap-4 sm:gap-6"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              {/* Explore My Work CTA */}
              <motion.a
                href="#work"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                whileHover={{ scale: 1.02 }}
                className="relative inline-flex items-center space-x-3 px-6 sm:px-7 py-3.5 border border-[#8C6D4F] bg-[#120F0C]/80 hover:border-[#D4AF37] text-[#EAD8C7] hover:text-[#FFF5EB] text-[11px] font-medium tracking-[0.24em] uppercase transition-all duration-300 shadow-[0_0_25px_rgba(212,175,55,0.18)]"
              >
                <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#E8D7C5]/40 to-transparent pointer-events-none" />
                <span>EXPLORE MY WORK</span>
                <span className="transform transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-xs">
                  ↗
                </span>
              </motion.a>

              {/* Download Resume Button */}
              <motion.a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                whileHover={{ scale: 1.02 }}
                className="relative inline-flex items-center space-x-2 px-6 sm:px-7 py-3.5 border border-[#8C6D4F]/40 hover:border-[#8C6D4F] text-[#BFA895] hover:text-[#EAD8C7] text-[11px] font-medium tracking-[0.24em] uppercase transition-all duration-300"
              >
                <span>DOWNLOAD RESUME</span>
                <span className="transform transition-transform duration-300 group-hover:translate-y-0.5 text-xs">
                  ↓
                </span>
              </motion.a>

              {/* Sleek Minimal Quote Badge (non-overlapping) */}
              <div className="hidden sm:flex items-center space-x-3 pl-2 py-1 border-l border-[#8C6D4F]/30 select-none">
                <div className="text-[9px] font-medium tracking-[0.2em] uppercase text-[#C4B29E] leading-tight">
                  <p>CODE IS CRAFT.</p>
                  <p>IMPACT IS GOAL.</p>
                </div>
                <div
                  className="text-2xl text-[#D8AB64] font-normal leading-none"
                  style={{ fontFamily: "'Herr Von Muellerhoff', 'Allura', cursive" }}
                >
                  Krisha
                </div>
              </div>
            </motion.div>
          </motion.div>

        </div>

        {/* Bottom Spacer */}
        <div className="h-2" />
      </div>
    </section>
  );
};

export default HeroSection;