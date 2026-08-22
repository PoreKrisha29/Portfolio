import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

const navItems = [
  { name: 'ABOUT', href: '#about' },
  { name: 'PROJECTS', href: '#work' },
  { name: 'SKILLS', href: '#skills' },
  { name: 'EXPERIENCE', href: '#experience' },
  { name: 'CONTACT', href: '#contact' },
];

export const Navbar: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Detect active section
      const sections = ['about', 'work', 'skills', 'experience', 'contact'];
      const scrollPosition = window.scrollY + 220;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
      if (window.scrollY < 250) {
        setActiveSection('');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="fixed top-3 sm:top-5 left-0 right-0 z-50 flex justify-center px-4 sm:px-6 pointer-events-none">
      <div
        className={`w-full max-w-5xl rounded-full transition-all duration-500 pointer-events-auto border ${
          isScrolled
            ? 'bg-[#0B0907]/90 backdrop-blur-xl border-[#8C6D4F]/40 shadow-[0_15px_40px_rgba(0,0,0,0.85)] py-2 sm:py-2.5 px-4 sm:px-6'
            : 'bg-[#0B0907]/75 backdrop-blur-lg border-[#8C6D4F]/25 shadow-[0_10px_30px_rgba(0,0,0,0.6)] py-2.5 sm:py-3 px-4 sm:px-7'
        }`}
      >
        <div className="flex items-center justify-between w-full">
          {/* Left: Brand Name Only (Click to scroll to top) */}
          <button
            type="button"
            onClick={scrollToTop}
            className="group flex items-center select-none text-left cursor-pointer focus:outline-none"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
            title="Back to Top"
          >
            <span className="text-xs sm:text-sm font-bold tracking-[0.3em] uppercase text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-[#FFF5EB] to-[#D4AF37] group-hover:to-white transition-all duration-300">
              Krisha
            </span>
          </button>

          {/* Center: Desktop Navigation Capsules */}
          <nav
            className="hidden md:flex items-center space-x-1 sm:space-x-1.5 p-1 rounded-full bg-white/[0.03] border border-[#8C6D4F]/30"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            {navItems.map((item) => {
              const isActive =
                (item.href === '#work' && activeSection === 'work') ||
                item.href.replace('#', '') === activeSection;

              return (
                <a
                  key={item.name}
                  href={item.href}
                  className={`px-3.5 lg:px-4 py-1.5 rounded-full text-[10px] lg:text-[11px] tracking-[0.22em] font-medium uppercase transition-all duration-300 ${
                    isActive
                      ? 'bg-[#9E7422] dark:bg-[#D4AF37]/20 text-white dark:text-[#FFF5EB] border border-[#9E7422] dark:border-[#D4AF37]/60 shadow-[0_0_15px_rgba(212,175,55,0.3)] font-semibold'
                      : 'text-[#4A3B2F] dark:text-[#BFA895] hover:text-[#120E0B] dark:hover:text-[#FFF5EB] hover:bg-black/5 dark:hover:bg-white/[0.06] border border-transparent hover:border-[#8C6D4F]/30'
                  }`}
                >
                  {item.name}
                </a>
              );
            })}
          </nav>

          {/* Right: Dark/Light Mode Toggle + Resume */}
          <div className="flex items-center space-x-2.5 sm:space-x-3">
            {/* Dark / Light Mode Toggle Button */}
            <motion.button
              type="button"
              whileTap={{ scale: 0.9 }}
              whileHover={{ scale: 1.06 }}
              onClick={toggleTheme}
              className="relative w-8 h-8 sm:w-9 sm:h-9 rounded-full border border-[#8C6D4F]/40 hover:border-[#D4AF37] bg-black/5 dark:bg-white/[0.03] flex items-center justify-center text-[#D4AF37] hover:shadow-[0_0_15px_rgba(212,175,55,0.3)] transition-all duration-300 cursor-pointer focus:outline-none"
              title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
              aria-label="Toggle Dark/Light Mode"
            >
              <AnimatePresence mode="wait" initial={false}>
                {theme === 'dark' ? (
                  <motion.div
                    key="sun"
                    initial={{ rotate: -90, opacity: 0, scale: 0.6 }}
                    animate={{ rotate: 0, opacity: 1, scale: 1 }}
                    exit={{ rotate: 90, opacity: 0, scale: 0.6 }}
                    transition={{ duration: 0.25 }}
                    className="flex items-center justify-center text-xs sm:text-sm"
                  >
                    {/* Sun Icon */}
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <circle cx="12" cy="12" r="4" fill="currentColor" fillOpacity={0.2} />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 2v2m0 16v2m10-10h-2M4 12H2m15.364-7.364l-1.414 1.414M6.05 17.95l-1.414 1.414m12.728 0l-1.414-1.414M6.05 6.05L4.636 4.636" />
                    </svg>
                  </motion.div>
                ) : (
                  <motion.div
                    key="moon"
                    initial={{ rotate: 90, opacity: 0, scale: 0.6 }}
                    animate={{ rotate: 0, opacity: 1, scale: 1 }}
                    exit={{ rotate: -90, opacity: 0, scale: 0.6 }}
                    transition={{ duration: 0.25 }}
                    className="flex items-center justify-center text-xs sm:text-sm"
                  >
                    {/* Moon Icon */}
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
                    </svg>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>

            {/* Secondary Pill Button: RESUME */}
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-1.5 rounded-full border border-[#8C6D4F]/40 hover:border-[#D4AF37] bg-black/5 dark:bg-white/[0.02] hover:bg-[#D4AF37]/10 text-[10px] tracking-[0.2em] font-medium uppercase text-[var(--text-secondary)] hover:text-[#D4AF37] transition-all duration-300 shadow-sm"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              <span>RESUME</span>
              <span className="ml-1 text-[9px] opacity-70">↗</span>
            </a>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden w-8 h-8 rounded-full border border-[#8C6D4F]/40 bg-black/5 dark:bg-[#120F0C] flex items-center justify-center text-[var(--text-secondary)] hover:text-[#D4AF37] hover:border-[#D4AF37] transition-colors focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Dropdown */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.98 }}
              transition={{ duration: 0.2 }}
              className="md:hidden mt-3 pt-3 border-t border-[#8C6D4F]/25 flex flex-col space-y-2"
            >
              <nav className="flex flex-col space-y-1.5 text-xs tracking-[0.24em] font-medium uppercase text-[var(--text-muted)]">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="px-4 py-2 rounded-full hover:bg-[#D4AF37]/15 hover:text-[var(--text-primary)] hover:border hover:border-[#D4AF37]/40 transition-all"
                  >
                    {item.name}
                  </a>
                ))}
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-2 rounded-full border border-[#8C6D4F]/40 text-[#D4AF37] hover:bg-[#D4AF37]/15 transition-all"
                >
                  RESUME ↗
                </a>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Navbar;
