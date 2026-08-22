// src/components/ContactSection.tsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg('');

    const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

    if (!accessKey || accessKey === 'your_web3forms_access_key_here') {
      setErrorMsg('Web3Forms Access Key not configured. Please add your key to the .env file.');
      setLoading(false);
      return;
    }

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: accessKey,
          name: formData.name,
          email: formData.email,
          message: formData.message,
          from_name: formData.name,
          subject: `Portfolio Contact Dispatch from ${formData.name}`,
        }),
      });

      const data = await response.json();

      if (data.success) {
        setSent(true);
        setFormData({ name: '', email: '', message: '' });
      } else {
        setErrorMsg(data.message || 'Failed to transmit message. Please try again.');
      }
    } catch {
      setErrorMsg('Network error. Unable to transmit dispatch at this moment.');
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setSent(false);
    setErrorMsg('');
  };

  return (
    <footer
      id="contact"
      className="relative w-full bg-black text-[#E8DFD8] font-sans selection:bg-[#cbb59d] selection:text-black pt-16 pb-16 px-6 sm:px-12 lg:px-20 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto w-full relative z-10">
        
        {/* Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
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
                  05 / CONTACT
                </span>
                <div className="w-16 h-[1px] bg-gradient-to-r from-[#D4AF37]/80 via-[#8C6D4F]/40 to-transparent" />
              </motion.div>

              {/* Headline */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="mb-6"
              >
                <h2
                  className="text-5xl sm:text-6xl md:text-7xl tracking-tight uppercase leading-[0.85] select-none"
                  style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                >
                  <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#FFFFFF] via-[#D5CBC0] to-[#605448] drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]">
                    INITIALIZE
                  </span>
                  <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#F7E7C4] via-[#C99E5D] to-[#543B1A] drop-shadow-[0_8px_25px_rgba(201,158,93,0.35)]">
                    TRANSMISSION.
                  </span>
                </h2>
              </motion.div>

              <p
                className="text-xs sm:text-[13px] font-light text-[#D5CBC0] leading-relaxed max-w-md mb-8"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                Have an ambitious system to architect, an engineering opportunity, or a collaborative inquiry? Send a direct dispatch below or connect via direct channels.
              </p>

              {/* Direct Info Channels */}
              <div className="space-y-3 pt-2">
                <a
                  href="mailto:krishapore2006@gmail.com"
                  className="flex items-center space-x-3 text-xs text-[#EAD8C7] hover:text-[#D4AF37] transition-colors group"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  <span className="text-[#D4AF37] text-base font-bold">✉</span>
                  <span className="font-mono tracking-wider font-semibold text-[#F7E7C4] group-hover:text-white transition-colors">
                    krishapore2006@gmail.com
                  </span>
                </a>
                <a
                  href="tel:+919409456769"
                  className="flex items-center space-x-3 text-xs text-[#EAD8C7] hover:text-[#D4AF37] transition-colors group"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  <span className="text-[#D4AF37] text-base font-bold">✆</span>
                  <span className="font-mono tracking-wider font-semibold text-[#F7E7C4] group-hover:text-white transition-colors">
                    +91 9409456769
                  </span>
                </a>
                <div className="flex items-center gap-3 pt-3 flex-wrap">
                  <a
                    href="https://github.com/PoreKrisha29"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2.5 text-[11px] font-mono font-bold tracking-widest uppercase border border-[#8C6D4F]/60 hover:border-[#D4AF37] bg-[#14100D] text-[#FFF5EB] hover:bg-[#201A14] hover:text-white hover:shadow-[0_0_15px_rgba(212,175,55,0.25)] transition-all rounded-sm shadow-md"
                  >
                    GITHUB ↗
                  </a>
                  <a
                    href="https://linkedin.com/in/krishapore"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2.5 text-[11px] font-mono font-bold tracking-widest uppercase border border-[#8C6D4F]/60 hover:border-[#D4AF37] bg-[#14100D] text-[#FFF5EB] hover:bg-[#201A14] hover:text-white hover:shadow-[0_0_15px_rgba(212,175,55,0.25)] transition-all rounded-sm shadow-md"
                  >
                    LINKEDIN ↗
                  </a>
                  <a
                    href="/resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2.5 text-[11px] font-mono font-bold tracking-widest uppercase border border-[#8C6D4F]/60 hover:border-[#D4AF37] bg-[#14100D] text-[#FFF5EB] hover:bg-[#201A14] hover:text-white hover:shadow-[0_0_15px_rgba(212,175,55,0.25)] transition-all rounded-sm shadow-md"
                  >
                    RESUME ↗
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Monolith Terminal Form (7 Cols) */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 relative w-full rounded-sm border border-[#8C6D4F]/40 bg-[#0A0806] p-8 sm:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.9)] overflow-hidden"
          >
            {/* Top Gold Horizon Edge */}
            <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/70 to-transparent" />
            
            {/* Precision Corner Crosshairs */}
            <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-[#D4AF37]/60" />
            <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-[#D4AF37]/60" />
            <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-[#D4AF37]/60" />
            <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-[#D4AF37]/60" />

            {sent ? (
              <div className="py-12 text-center space-y-5">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full border border-[#D4AF37] text-[#D4AF37] text-lg bg-[#D4AF37]/10 shadow-[0_0_20px_rgba(212,175,55,0.3)]">
                  ✓
                </div>
                <div>
                  <h3 className="text-3xl sm:text-4xl text-white font-normal uppercase tracking-wider" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
                    TRANSMISSION REGISTERED
                  </h3>
                  <p className="text-xs text-[#A8988B] font-light mt-2 max-w-sm mx-auto leading-relaxed" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                    Your dispatch was transmitted directly to my inbox. I will review and reply promptly.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={handleReset}
                  className="mt-4 px-6 py-2.5 border border-[#8C6D4F]/50 hover:border-[#D4AF37] bg-[#120F0C] hover:bg-[#1A1510] text-[#E8DFD8] hover:text-white text-[10px] font-mono tracking-widest uppercase transition-all rounded-sm"
                >
                  SEND ANOTHER DISPATCH ↺
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {errorMsg && (
                  <div className="p-3 border border-red-500/40 bg-red-950/20 text-red-300 text-xs font-mono rounded-sm flex items-start space-x-2">
                    <span className="text-red-500">⚠</span>
                    <span>{errorMsg}</span>
                  </div>
                )}
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <span className="block text-[9.5px] font-mono tracking-[0.2em] uppercase text-[#8C6D4F] mb-2">
                      // SENDER
                    </span>
                    <input
                      type="text"
                      required
                      disabled={loading}
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Enter name"
                      className="w-full bg-[#120F0C] border border-[#8C6D4F]/30 focus:border-[#D4AF37] disabled:opacity-50 text-xs text-white placeholder-[#8C6D4F]/50 px-4 py-3 outline-none rounded-sm transition-colors"
                      style={{ fontFamily: "'Montserrat', sans-serif" }}
                    />
                  </div>

                  <div>
                    <span className="block text-[9.5px] font-mono tracking-[0.2em] uppercase text-[#8C6D4F] mb-2">
                      // CHANNEL
                    </span>
                    <input
                      type="email"
                      required
                      disabled={loading}
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="Enter email"
                      className="w-full bg-[#120F0C] border border-[#8C6D4F]/30 focus:border-[#D4AF37] disabled:opacity-50 text-xs text-white placeholder-[#8C6D4F]/50 px-4 py-3 outline-none rounded-sm transition-colors"
                      style={{ fontFamily: "'Montserrat', sans-serif" }}
                    />
                  </div>
                </div>

                <div>
                  <span className="block text-[9.5px] font-mono tracking-[0.2em] uppercase text-[#8C6D4F] mb-2">
                    // PAYLOAD
                  </span>
                  <textarea
                    required
                    rows={4}
                    disabled={loading}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Enter transmission payload..."
                    className="w-full bg-[#120F0C] border border-[#8C6D4F]/30 focus:border-[#D4AF37] disabled:opacity-50 text-xs text-white placeholder-[#8C6D4F]/50 p-4 outline-none rounded-sm transition-colors resize-none"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3.5 border border-[#8C6D4F]/50 bg-[#14100D] hover:border-[#D4AF37] hover:bg-[#1A1510] disabled:opacity-60 disabled:cursor-not-allowed text-[#E8DFD8] hover:text-[#F7E7C4] text-xs font-medium tracking-[0.25em] uppercase transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.3)] flex items-center justify-center space-x-2"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  {loading ? (
                    <>
                      <span className="w-3.5 h-3.5 border-2 border-[#D4AF37] border-t-transparent rounded-full animate-spin" />
                      <span>TRANSMITTING DISPATCH...</span>
                    </>
                  ) : (
                    <span>EXECUTE DISPATCH ↗</span>
                  )}
                </button>

              </form>
            )}
          </motion.div>

        </div>

        {/* System Footer Line */}
        <div className="pt-16 mt-16 border-t border-[#8C6D4F]/15 flex flex-col sm:flex-row items-center justify-between text-center sm:text-left gap-4">
          <span className="text-[10px] font-mono tracking-widest text-[#8C6D4F] uppercase">
            PORTFOLIO // EDITION 2026
          </span>
          <span className="text-[10px] font-mono text-[#8C6D4F]">
            © {new Date().getFullYear()} • ENGINEERED WITH PRECISION
          </span>
        </div>

      </div>
    </footer>
  );
};

export default ContactSection;