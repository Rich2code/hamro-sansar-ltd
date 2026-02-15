
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import SansarAI from './components/SansarAI';
import Logo from './components/Logo';

const App: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleReferralClick = () => {
    scrollToSection('contact');
    setTimeout(() => {
      const firstInput = document.querySelector('input');
      if (firstInput) firstInput.focus();
    }, 800);
  };

  return (
    <div className="min-h-screen relative flex flex-col bg-[#fafafa] dark:bg-zinc-950 text-zinc-800 dark:text-zinc-200 transition-colors duration-500">
      <Navbar isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-24 md:pt-32 pb-20 overflow-hidden bg-white dark:bg-zinc-950">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?auto=format&fit=crop&q=80&w=2069" 
            alt="Happy Young People" 
            className="w-full h-full object-cover opacity-50 dark:opacity-20 md:opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent dark:from-zinc-950 dark:via-zinc-950/80 dark:to-transparent"></div>
          
          <div className="absolute top-1/4 right-0 w-[60%] h-[60%] bg-[#00E5D1]/20 dark:bg-[#00E5D1]/10 rounded-full blur-[100px] md:blur-[180px] animate-pulse"></div>
          <div className="absolute -bottom-1/4 -left-1/4 w-[60%] h-[60%] bg-[#4B87C1]/20 dark:bg-[#4B87C1]/10 rounded-full blur-[100px] md:blur-[180px]"></div>
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center space-x-3 px-4 md:px-5 py-2 md:py-2.5 rounded-full bg-[#00E5D1]/10 border border-[#00E5D1]/30 dark:border-[#00E5D1]/20 mb-6 md:mb-10 shadow-sm backdrop-blur-sm">
              <span className="w-2 h-2 md:w-2.5 md:h-2.5 bg-[#00E5D1] rounded-full animate-ping"></span>
              <span className="text-[10px] md:text-[12px] font-black text-[#4B5320] dark:text-[#00E5D1] uppercase tracking-[0.2em]">Helping Hands For Better Future...</span>
            </div>
            <h1 className="text-5xl md:text-8xl font-serif font-bold leading-[1.1] mb-6 md:mb-8 tracking-tighter text-[#4B87C1] dark:text-[#67a7e6]">
              Building <br />
              <span className="text-[#00E5D1] italic">Your Own World.</span>
            </h1>
            <p className="text-lg md:text-2xl text-zinc-600 dark:text-zinc-400 mb-8 md:mb-12 max-w-2xl font-light leading-relaxed">
              At <span className="text-[#4B87C1] dark:text-[#67a7e6] font-bold italic underline decoration-[#00E5D1]">Hamro Sansar</span>, we provide more than just a room. We provide the safety, skills, and support to help young people thrive independently.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => scrollToSection('services')}
                className="px-6 md:px-8 py-4 bg-[#00E5D1] text-[#4B5320] font-black rounded-2xl hover:scale-105 hover:shadow-[0_10px_40px_rgba(0,229,209,0.3)] transition-all duration-500 text-[10px] uppercase tracking-[0.2em]"
              >
                Discover Our Homes
              </button>
              <button 
                onClick={handleReferralClick}
                className="px-6 md:px-8 py-4 border-2 border-[#4B87C1] dark:border-[#67a7e6] bg-white dark:bg-transparent text-[#4B87C1] dark:text-[#67a7e6] font-black rounded-2xl hover:bg-[#4B87C1]/5 transition-all text-[10px] uppercase tracking-[0.2em]"
              >
                Make a Referral
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 md:py-32 bg-zinc-50 dark:bg-zinc-900/50 border-y border-zinc-200/50 dark:border-zinc-800/50 transition-colors">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12 md:gap-20 items-center">
            <div className="relative group">
              <img 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=1471" 
                alt="Community and Support" 
                className="relative rounded-[2rem] md:rounded-[3rem] object-cover w-full h-[400px] md:h-[600px] shadow-2xl transition-all duration-700 group-hover:scale-[1.01]"
              />
              <div className="absolute -bottom-6 -right-6 md:-bottom-10 md:-right-10 bg-[#4B87C1] dark:bg-[#67a7e6] p-6 md:p-10 rounded-[2rem] md:rounded-[3rem] shadow-xl text-white hidden sm:block">
                 <p className="text-[10px] md:text-sm font-black uppercase tracking-widest mb-1 md:mb-2 italic opacity-80">Hamro Sansar</p>
                 <h4 className="text-xl md:text-3xl font-serif font-bold leading-none">A Safe World</h4>
              </div>
            </div>
            <div>
              <span className="text-[#00E5D1] font-black uppercase tracking-[0.3em] text-[11px] mb-4 md:mb-6 block">Our Philosophy</span>
              <h2 className="text-4xl md:text-6xl font-bold mb-6 md:mb-8 font-serif leading-tight text-zinc-900 dark:text-white">Empowering <br/><span className="italic text-[#4B87C1] dark:text-[#67a7e6]">Young Ambition.</span></h2>
              <p className="text-zinc-600 dark:text-zinc-400 text-lg md:text-xl mb-8 md:mb-10 leading-relaxed font-light">
                Transitioning to adulthood is a journey. Our semi-independent homes are designed for 16-18 year olds who are ready to take the next step towards freedom while keeping <span className="text-[#00E5D1] font-bold">Helping Hands</span> close by.
              </p>
              <div className="space-y-4 md:space-y-6 mb-10 md:mb-12">
                <CheckItem text="Personalized 1-to-1 key work support" />
                <CheckItem text="Vibrant, domestic home environments" />
                <CheckItem text="Comprehensive life-skills curriculum" />
              </div>
              <button 
                onClick={() => scrollToSection('contact')}
                className="w-full sm:w-auto px-8 py-4 bg-[#4B87C1] dark:bg-[#67a7e6] text-white font-black rounded-2xl hover:scale-105 transition-all text-[10px] uppercase tracking-[0.2em] shadow-lg shadow-blue-200 dark:shadow-none"
              >
                Learn More About Us
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 md:py-32 bg-white dark:bg-zinc-950">
        <div className="container mx-auto px-4 md:px-6 text-center mb-16 md:mb-24">
          <span className="text-[#00E5D1] font-black uppercase tracking-[0.3em] text-[11px] mb-4 md:mb-6 block">What We Offer</span>
          <h2 className="text-4xl md:text-6xl font-serif font-bold text-[#4B87C1] dark:text-[#67a7e6]">Our Pillars of Support</h2>
        </div>
        <div className="container mx-auto px-4 md:px-6 grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          <ServiceCard 
            title="Safe Spaces" 
            description="Warm, beautifully furnished homes in safe UK neighborhoods that foster a sense of belonging."
            image="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=800"
            onAction={() => scrollToSection('contact')}
          />
          <ServiceCard 
            title="Future Skills" 
            description="Hands-on learning from finance and cooking to career coaching and further education prep."
            image="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=800"
            onAction={() => scrollToSection('contact')}
          />
          <ServiceCard 
            title="Mental Wellbeing" 
            description="Nurturing emotional health through dedicated mentorship and therapeutic-informed care."
            image="https://images.unsplash.com/photo-1543269664-56d93c1b41a6?auto=format&fit=crop&q=80&w=800"
            onAction={() => scrollToSection('contact')}
          />
        </div>
      </section>

      {/* Success Stories Section */}
      <section id="stories" className="py-20 md:py-32 bg-[#4B87C1]/5 dark:bg-zinc-900/30 relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-24 gap-8 md:gap-10 text-center md:text-left">
            <div className="max-w-2xl">
              <span className="text-[#00E5D1] font-black uppercase tracking-[0.3em] text-[11px] mb-4 md:mb-6 block">Success Stories</span>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-zinc-900 dark:text-white">Realizing Dreams</h2>
            </div>
            <p className="text-[#4B5320] dark:text-[#00E5D1] max-w-sm text-lg italic font-medium mx-auto md:mx-0">
              "Every young person deserves a world of opportunity."
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 md:gap-12">
            <StoryCard 
              name="Sarah's Journey"
              result="Future Nurse"
              story="Sarah joined us needing stability. With our support, she finished college and is now starting her nursing degree."
              image="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=400"
            />
            <StoryCard 
              name="James' Growth"
              result="Software Apprentice"
              story="James discovered his passion for tech during our life skills workshops. He's now thriving in a top-tier apprenticeship."
              image="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400"
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 md:py-32 bg-white dark:bg-zinc-950">
        <div className="container mx-auto px-4 md:px-6">
          <div className="bg-white dark:bg-zinc-900 rounded-[2.5rem] md:rounded-[4rem] border-2 md:border-4 border-[#00E5D1]/20 shadow-2xl p-8 md:p-24 overflow-hidden relative">
            <div className="absolute top-0 right-0 w-64 md:w-96 h-64 md:h-96 bg-[#4B87C1]/10 rounded-full blur-[60px] md:blur-[100px] -mr-32 md:-mr-48 -mt-32 md:-mt-48"></div>
            <div className="grid lg:grid-cols-2 gap-16 md:gap-24 relative z-10">
              <div>
                <h2 className="text-4xl md:text-6xl font-serif font-bold mb-8 md:mb-10 text-[#4B87C1] dark:text-[#67a7e6] leading-tight text-center md:text-left">Let's Talk.</h2>
                <p className="text-zinc-500 dark:text-zinc-400 mb-10 md:mb-16 text-lg md:text-xl font-light text-center md:text-left">
                  We are here to answer questions from local authorities, social workers, and families.
                </p>
                <div className="space-y-8 md:space-y-12">
                  <div className="cursor-pointer group" onClick={() => window.open('https://maps.google.com/?q=123+Heritage+Lane+London+SW1A+1AA', '_blank')}>
                    <ContactItem icon="🏠" label="Location" value="123 Heritage Lane, SW1A 1AA" color="#4B87C1" />
                  </div>
                  <div className="cursor-pointer group" onClick={() => window.location.href = 'mailto:hello@hamrosansar.co.uk'}>
                    <ContactItem icon="✉️" label="Email Us" value="hello@hamrosansar.co.uk" color="#00E5D1" />
                  </div>
                </div>
              </div>
              <div className="bg-zinc-50 dark:bg-zinc-950/50 p-6 md:p-14 rounded-[2rem] md:rounded-[3rem] border border-[#00E5D1]/20">
                <form className="space-y-6 md:space-y-8" onSubmit={e => {
                  e.preventDefault();
                  alert('Thank you for reaching out! We will be in touch shortly.');
                  (e.target as HTMLFormElement).reset();
                }}>
                  <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
                    <input required type="text" placeholder="Name" className="w-full bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl md:rounded-2xl px-5 md:px-6 py-3.5 md:py-4 focus:ring-2 ring-[#00E5D1] outline-none text-zinc-800 dark:text-zinc-100 placeholder:text-zinc-400" />
                    <input required type="email" placeholder="Email" className="w-full bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl md:rounded-2xl px-5 md:px-6 py-3.5 md:py-4 focus:ring-2 ring-[#00E5D1] outline-none text-zinc-800 dark:text-zinc-100 placeholder:text-zinc-400" />
                  </div>
                  <textarea required rows={4} placeholder="How can we help?" className="w-full bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl md:rounded-2xl px-5 md:px-6 py-3.5 md:py-4 focus:ring-2 ring-[#00E5D1] outline-none resize-none text-zinc-800 dark:text-zinc-100 placeholder:text-zinc-400"></textarea>
                  <button type="submit" className="w-full py-4 md:py-5 bg-[#4B87C1] dark:bg-[#67a7e6] text-white font-black rounded-xl md:rounded-2xl hover:bg-[#00E5D1] hover:text-[#4B5320] transition-all uppercase tracking-[0.2em] text-[10px] md:text-xs shadow-xl shadow-blue-100 dark:shadow-none">
                    Connect With Us
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 md:py-24 bg-zinc-50 dark:bg-zinc-900 border-t border-zinc-100 dark:border-zinc-800">
        <div className="container mx-auto px-4 md:px-6 flex flex-col items-center">
           <div className="mb-10 md:mb-12">
              <Logo size="lg" isDarkMode={isDarkMode} />
           </div>
           <div className="flex flex-wrap justify-center gap-6 md:gap-12 mb-12 md:mb-16 text-[8px] md:text-[10px] font-black text-zinc-400 uppercase tracking-[0.3em]">
              <button onClick={() => scrollToSection('about')} className="hover:text-[#4B87C1] dark:hover:text-[#67a7e6] transition-colors uppercase">Our Goal</button>
              <button onClick={() => scrollToSection('services')} className="hover:text-[#4B87C1] dark:hover:text-[#67a7e6] transition-colors uppercase">Support</button>
              <button onClick={() => scrollToSection('stories')} className="hover:text-[#4B87C1] dark:hover:text-[#67a7e6] transition-colors uppercase">Testimonials</button>
              <button onClick={() => scrollToSection('contact')} className="hover:text-[#4B87C1] dark:hover:text-[#67a7e6] transition-colors uppercase">Inquiry</button>
           </div>
           <div className="text-zinc-400 text-[8px] md:text-[10px] uppercase tracking-[0.3em] md:tracking-[0.5em] font-medium text-center max-w-xs md:max-w-none">
             &copy; {new Date().getFullYear()} Hamro Sansar Ltd. Registered Supported Accommodation Provider.
           </div>
        </div>
      </footer>

      <SansarAI isDarkMode={isDarkMode} />
    </div>
  );
};

const ServiceCard: React.FC<{ title: string; description: string; image: string; onAction?: () => void }> = ({ title, description, image, onAction }) => (
  <div className="group bg-white dark:bg-zinc-900 rounded-[2rem] md:rounded-[3rem] border border-zinc-100 dark:border-zinc-800 p-5 md:p-6 hover:shadow-2xl transition-all duration-700">
    <div className="h-48 md:h-64 overflow-hidden rounded-[1.5rem] md:rounded-[2.5rem] mb-6 md:mb-10">
      <img src={image} alt={title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
    </div>
    <h3 className="text-2xl md:text-3xl font-serif font-bold text-[#4B87C1] dark:text-[#67a7e6] mb-4 md:mb-6">{title}</h3>
    <p className="text-zinc-500 dark:text-zinc-400 text-sm md:text-base leading-relaxed mb-6 md:mb-8">{description}</p>
    <button 
      onClick={onAction}
      className="text-[#00E5D1] font-black uppercase tracking-widest text-[9px] md:text-[10px] group-hover:translate-x-2 transition-transform flex items-center"
    >
      Details <span className="ml-2">&rarr;</span>
    </button>
  </div>
);

const StoryCard: React.FC<{ name: string; result: string; story: string; image: string }> = ({ name, result, story, image }) => (
  <div className="bg-white dark:bg-zinc-900 rounded-[2.5rem] md:rounded-[3.5rem] p-6 md:p-10 border border-zinc-100 dark:border-zinc-800 flex flex-col sm:flex-row gap-6 md:gap-10 items-center shadow-sm hover:shadow-md transition-shadow">
    <img src={image} alt={name} className="w-24 h-24 md:w-32 md:h-32 rounded-full object-cover shadow-lg border-4 border-[#00E5D1]/20 dark:border-[#00E5D1]/10" />
    <div className="text-center sm:text-left">
      <span className="text-[#00E5D1] text-[9px] md:text-[10px] font-black uppercase tracking-widest mb-2 block">{result}</span>
      <h3 className="text-2xl md:text-3xl font-serif font-bold text-[#4B87C1] dark:text-[#67a7e6] mb-3 md:mb-4">{name}</h3>
      <p className="text-zinc-500 dark:text-zinc-400 font-light text-sm md:text-base leading-relaxed">{story}</p>
    </div>
  </div>
);

const CheckItem: React.FC<{ text: string }> = ({ text }) => (
  <div className="flex items-center space-x-3 md:space-x-4">
    <div className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-[#00E5D1]/10 flex-shrink-0 flex items-center justify-center border border-[#00E5D1]/30 dark:border-[#00E5D1]/20">
      <span className="text-[#00E5D1] text-[8px] md:text-[10px]">✔</span>
    </div>
    <span className="text-zinc-600 dark:text-zinc-400 text-sm md:text-base font-medium">{text}</span>
  </div>
);

const ContactItem: React.FC<{ icon: string; label: string; value: string; color: string }> = ({ icon, label, value, color }) => (
  <div className="flex items-center space-x-4 md:space-x-6">
    <div className="text-3xl md:text-4xl filter grayscale group-hover:grayscale-0 transition-all">{icon}</div>
    <div>
      <p className="text-[8px] md:text-[10px] font-black text-zinc-400 uppercase tracking-widest mb-0.5 md:mb-1">{label}</p>
      <p className={`text-zinc-800 dark:text-zinc-200 text-base md:text-xl font-medium group-hover:underline decoration-2 underline-offset-4 transition-colors break-all md:break-normal`} style={{ color: color }}>{value}</p>
    </div>
  </div>
);

export default App;
