
import React, { useState, useEffect } from 'react';
import Logo from './Logo';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
      isScrolled ? 'bg-white/95 backdrop-blur-xl py-4 border-b border-zinc-100 shadow-sm' : 'bg-transparent py-10'
    }`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div 
          className="group cursor-pointer transition-transform duration-500 hover:scale-[1.02]" 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <Logo size={isScrolled ? 'sm' : 'md'} />
        </div>
        
        <div className="hidden lg:flex items-center space-x-12 text-[10px] font-black uppercase tracking-[0.3em]">
          <a href="#about" className="text-zinc-500 hover:text-[#4B87C1] transition-all">Supported Living</a>
          <a href="#services" className="text-zinc-500 hover:text-[#4B87C1] transition-all">Support</a>
          <a href="#stories" className="text-zinc-500 hover:text-[#4B87C1] transition-all">Success</a>
          <a href="#contact" className="text-zinc-500 hover:text-[#4B87C1] transition-all">Contact</a>
          <button className="px-8 py-3.5 bg-[#4B87C1] text-white rounded-2xl hover:bg-cyan-500 transition-all font-black transform hover:-translate-y-1 shadow-md shadow-blue-100">
            Referrals
          </button>
        </div>

        <button className="lg:hidden text-[#4B87C1] p-3 bg-zinc-50 border border-zinc-100 rounded-2xl">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
