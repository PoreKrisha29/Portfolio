import { ThemeProvider } from './context/ThemeContext';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { ProjectsSection } from './components/ProjectsSection';
import { SkillsSection } from './components/SkillsSection';
import { ExperienceSection } from './components/ExperienceSection';
import { ContactSection } from './components/ContactSection';

function App() {
  return (
    <ThemeProvider>
      <div className="w-full min-h-screen bg-[var(--bg-primary)] text-[var(--text-secondary)] selection:bg-[#cbb59d] selection:text-black transition-colors duration-500">
        <Navbar />
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <SkillsSection />
        <ExperienceSection />
        <ContactSection />
      </div>
    </ThemeProvider>
  );
}

export default App;