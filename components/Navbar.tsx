
import React, { useState, useEffect } from 'react';
import Logo from './Logo';

interface NavbarProps {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ isDarkMode, toggleDarkMode }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const DarkModeToggle = () => (
    <button 
      onClick={toggleDarkMode}
      className="w-12 h-6 rounded-full bg-zinc-200/50 dark:bg-zinc-800/50 backdrop-blur-sm border border-zinc-200/50 dark:border-zinc-700/50 relative transition-colors duration-300 flex items-center px-1 flex-shrink-0"
      aria-label="Toggle Dark Mode"
    >
      <div className={`w-4 h-4 rounded-full shadow-md transform transition-transform duration-300 flex items-center justify-center ${
        isDarkMode ? 'translate-x-6 bg-zinc-950' : 'translate-x-0 bg-white'
      }`}>
        {isDarkMode ? (
          <svg className="w-3 h-3 text-[#00E5D1]" fill="currentColor" viewBox="0 0 20 20"><path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path></svg>
        ) : (
          <svg className="w-3 h-3 text-orange-400" fill="currentColor" viewBox="0 0 20 20"><path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"></path></svg>
        )}
      </div>
    </button>
  );

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
      isScrolled || isMobileMenuOpen 
        ? 'bg-white/60 dark:bg-zinc-950/60 backdrop-blur-2xl py-4 border-b border-white/20 dark:border-white/5 shadow-[0_8px_32px_rgba(0,0,0,0.04)]' 
        : 'bg-transparent py-6 md:py-10'
    }`}>
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <div 
          className="group cursor-pointer transition-transform duration-500 hover:scale-[1.02] flex-shrink-0" 
          onClick={() => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
            setIsMobileMenuOpen(false);
          }}
        >
          <Logo size={isScrolled ? 'sm' : 'md'} isDarkMode={isDarkMode} />
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-8 text-[10px] font-black uppercase tracking-[0.3em]">
          <button onClick={() => scrollToSection('about')} className="text-zinc-600 dark:text-zinc-400 hover:text-[#4B87C1] dark:hover:text-[#67a7e6] transition-all">About Us</button>
          <button onClick={() => scrollToSection('vision')} className="text-zinc-600 dark:text-zinc-400 hover:text-[#4B87C1] dark:hover:text-[#67a7e6] transition-all">Vision</button>
          <button onClick={() => scrollToSection('services')} className="text-zinc-600 dark:text-zinc-400 hover:text-[#4B87C1] dark:hover:text-[#67a7e6] transition-all">Services</button>
          <button onClick={() => scrollToSection('team')} className="text-zinc-600 dark:text-zinc-400 hover:text-[#4B87C1] dark:hover:text-[#67a7e6] transition-all">Our Team</button>
          
          <DarkModeToggle />

          <button 
            onClick={() => scrollToSection('contact')}
            className="px-8 py-3.5 bg-[#00E5D1] text-[#4B5320] rounded-2xl hover:scale-105 transition-all font-black shadow-lg shadow-cyan-500/10 dark:shadow-none"
          >
            Referrals
          </button>
        </div>

        {/* Mobile Header Controls */}
        <div className="flex lg:hidden items-center space-x-4">
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-[#4B87C1] dark:text-[#67a7e6] p-2.5 bg-white/40 dark:bg-zinc-900/40 backdrop-blur-md border border-white/20 dark:border-white/5 rounded-xl shadow-sm"
          >
            {isMobileMenuOpen ? (
               <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out ${isMobileMenuOpen ? 'max-h-screen opacity-100 py-10 px-6 border-t border-white/10 dark:border-white/5 bg-white/60 dark:bg-zinc-950/60 backdrop-blur-2xl' : 'max-h-0 opacity-0'}`}>
        <div className="flex flex-col space-y-8 items-center text-center">
          <button onClick={() => scrollToSection('about')} className="text-sm font-black uppercase tracking-[0.3em] text-zinc-600 dark:text-zinc-400">About Us</button>
          <button onClick={() => scrollToSection('vision')} className="text-sm font-black uppercase tracking-[0.3em] text-zinc-600 dark:text-zinc-400">Vision</button>
          <button onClick={() => scrollToSection('services')} className="text-sm font-black uppercase tracking-[0.3em] text-zinc-600 dark:text-zinc-400">Services</button>
          <button onClick={() => scrollToSection('team')} className="text-sm font-black uppercase tracking-[0.3em] text-zinc-600 dark:text-zinc-400">Our Team</button>
          
          <div className="flex flex-col items-center space-y-2">
            <span className="text-[8px] font-black uppercase tracking-widest text-zinc-400">Theme</span>
            <DarkModeToggle />
          </div>

          <button 
            onClick={() => scrollToSection('contact')}
            className="w-full max-w-xs py-5 bg-[#00E5D1] text-[#4B5320] rounded-2xl transition-all font-black shadow-lg shadow-cyan-500/10 dark:shadow-none uppercase tracking-[0.2em] text-xs"
          >
            Contact
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
