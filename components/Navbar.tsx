
import React, { useState, useEffect } from 'react';
import Logo from './Logo';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled ? 'bg-zinc-950/90 backdrop-blur-2xl py-4 border-b border-zinc-800/80 shadow-2xl' : 'bg-transparent py-10'
    }`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center space-x-5 group cursor-pointer" onClick={() => window.scrollTo(0,0)}>
          <div className="relative">
            <div className="absolute inset-0 bg-cyan-400/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <Logo className="w-14 h-14 relative z-10 transition-transform duration-700 group-hover:scale-110" />
          </div>
          <div className="flex flex-col">
            <span className="text-2xl font-black tracking-[0.1em] uppercase text-white leading-none">Hamro Sansar</span>
            <span className="text-[10px] text-cyan-400 font-black uppercase tracking-[0.5em] mt-1">Our World</span>
          </div>
        </div>
        
        <div className="hidden md:flex items-center space-x-12 text-[10px] font-black uppercase tracking-[0.3em]">
          <a href="#about" className="text-zinc-500 hover:text-cyan-400 transition-colors">Philosophy</a>
          <a href="#stories" className="text-zinc-500 hover:text-cyan-400 transition-colors">Stories</a>
          <a href="#services" className="text-zinc-500 hover:text-cyan-400 transition-colors">Collections</a>
          <a href="#contact" className="text-zinc-500 hover:text-cyan-400 transition-colors">Contact</a>
          <button className="px-10 py-4 bg-cyan-400 text-zinc-950 rounded-2xl hover:bg-white hover:shadow-2xl transition-all font-black transform hover:-translate-y-1">
            Inquire
          </button>
        </div>

        <button className="md:hidden text-cyan-400 p-2 border border-zinc-800 rounded-xl">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
