
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

  return (
    <div className="min-h-screen relative flex flex-col bg-[#fafafa] dark:bg-zinc-950 text-zinc-800 dark:text-zinc-200 transition-colors duration-500">
      <Navbar isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-24 md:pt-32 pb-20 overflow-hidden bg-white dark:bg-zinc-950">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?auto=format&fit=crop&q=80&w=2069" 
            alt="Happy Inclusive Community" 
            className="w-full h-full object-cover opacity-40 dark:opacity-20 md:opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent dark:from-zinc-950 dark:via-zinc-950/80 dark:to-transparent"></div>
          
          <div className="absolute top-1/4 right-0 w-[60%] h-[60%] bg-[#00E5D1]/20 dark:bg-[#00E5D1]/10 rounded-full blur-[100px] md:blur-[180px] animate-pulse"></div>
          <div className="absolute -bottom-1/4 -left-1/4 w-[60%] h-[60%] bg-[#4B87C1]/20 dark:bg-[#4B87C1]/10 rounded-full blur-[100px] md:blur-[180px]"></div>
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center space-x-3 px-4 md:px-5 py-2 md:py-2.5 rounded-full bg-[#00E5D1]/10 border border-[#00E5D1]/30 dark:border-[#00E5D1]/20 mb-6 md:mb-10 shadow-sm backdrop-blur-sm">
              <span className="w-2 h-2 md:w-2.5 md:h-2.5 bg-[#00E5D1] rounded-full animate-ping"></span>
              <span className="text-[10px] md:text-[12px] font-black text-[#4B5320] dark:text-[#00E5D1] uppercase tracking-[0.2em]">Our World, Our Home</span>
            </div>
            <h1 className="text-5xl md:text-8xl font-serif font-bold leading-[1.1] mb-6 md:mb-8 tracking-tighter text-[#4B87C1] dark:text-[#67a7e6]">
              A Safe, <br />
              <span className="text-[#00E5D1] italic">Inclusive Home.</span>
            </h1>
            <p className="text-lg md:text-2xl text-zinc-600 dark:text-zinc-400 mb-8 md:mb-12 max-w-2xl font-light leading-relaxed">
              Providing specialist supported living built on <span className="text-[#4B87C1] dark:text-[#67a7e6] font-bold italic underline decoration-[#00E5D1]">dignity, choice, and compassion</span> for adults with learning and physical disabilities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => scrollToSection('services')}
                className="px-6 md:px-8 py-4 bg-[#00E5D1] text-[#4B5320] font-black rounded-2xl hover:scale-105 hover:shadow-[0_10px_40px_rgba(0,229,209,0.3)] transition-all duration-500 text-[10px] uppercase tracking-[0.2em]"
              >
                Our Services
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
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
            <div className="relative group order-2 lg:order-1">
              <img 
                src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?auto=format&fit=crop&q=80&w=1471" 
                alt="Community Interaction" 
                className="relative rounded-[2rem] md:rounded-[3rem] object-cover w-full h-[400px] md:h-[600px] shadow-2xl transition-all duration-700 group-hover:scale-[1.01]"
              />
              <div className="absolute -bottom-6 -right-6 md:-bottom-10 md:-right-10 bg-[#4B87C1] dark:bg-[#67a7e6] p-6 md:p-10 rounded-[2rem] md:rounded-[3rem] shadow-xl text-white hidden sm:block">
                 <p className="text-[10px] md:text-sm font-black uppercase tracking-widest mb-1 md:mb-2 italic opacity-80">Hamro Sansar</p>
                 <h4 className="text-xl md:text-3xl font-serif font-bold leading-none">Our World</h4>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <span className="text-[#00E5D1] font-black uppercase tracking-[0.3em] text-[11px] mb-4 md:mb-6 block">Who We Are</span>
              <h2 className="text-4xl md:text-6xl font-bold mb-6 md:mb-8 font-serif leading-tight text-zinc-900 dark:text-white">Supported Living, <br/><span className="italic text-[#4B87C1] dark:text-[#67a7e6]">Co-Created.</span></h2>
              <p className="text-zinc-600 dark:text-zinc-400 text-lg md:text-xl mb-6 leading-relaxed font-light">
                <strong>Hamro Sansar</strong> means <em>“Our World”</em> in Nepali. It is the foundation of our belief that supported living should feel like a true home where people are respected and empowered.
              </p>
              <p className="text-zinc-500 dark:text-zinc-400 mb-8 leading-relaxed">
                We specialise in supporting adults with learning disabilities, autism, and complex care needs. We work collaboratively to co‑create personalised support that reflects each individual’s strengths, aspirations, and culture.
              </p>
              <div className="space-y-4 md:space-y-6 mb-10 md:mb-12">
                <CheckItem text="Adults aged 18–65 support" />
                <CheckItem text="Dignity and Genuine Control" />
                <CheckItem text="24‑hour Skilled Staff Support" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section id="vision" className="py-20 md:py-32 bg-white dark:bg-zinc-950">
        <div className="container mx-auto px-4 md:px-6 text-center mb-16 md:mb-24">
          <span className="text-[#00E5D1] font-black uppercase tracking-[0.3em] text-[11px] mb-4 md:mb-6 block">Our Vision</span>
          <h2 className="text-4xl md:text-6xl font-serif font-bold text-[#4B87C1] dark:text-[#67a7e6]">Empowering Future Lives</h2>
        </div>
        <div className="container mx-auto px-4 md:px-6 grid md:grid-cols-3 gap-8 md:gap-12">
          <ServiceCard 
            title="Self‑Directed Lives" 
            description="Ensuring every individual is the primary decision‑maker in their own life, with meaningful choice over daily routines."
            image="https://images.unsplash.com/photo-1526256262350-7da7584cf5eb?auto=format&fit=crop&q=80&w=800"
          />
          <ServiceCard 
            title="Integrated Community" 
            description="Breaking down barriers to inclusion, supporting people to build genuine connections and a sense of belonging."
            image="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80&w=800"
          />
          <ServiceCard 
            title="Expert Support" 
            description="Skilled, consistent, and compassionate care including Positive Behaviour Support (PBS) and specialist mentorship."
            image="https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?auto=format&fit=crop&q=80&w=800"
          />
        </div>
      </section>

      {/* Specialist Services Section */}
      <section id="services" className="py-20 md:py-32 bg-[#4B87C1]/5 dark:bg-zinc-900/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16 md:mb-20">
            <span className="text-[#00E5D1] font-black uppercase tracking-[0.3em] text-[11px] mb-6 block">What We Deliver</span>
            <h2 className="text-4xl md:text-6xl font-serif font-bold text-[#4B87C1] dark:text-[#67a7e6]">Specialist Supported Living</h2>
            <p className="text-zinc-500 dark:text-zinc-400 text-lg mt-6 max-w-2xl mx-auto font-light leading-relaxed">
              We provide tailored support for adults with learning disabilities, autism, physical disabilities, and complex needs.
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            <SpecialistItem 
              icon="🕒" 
              title="24-Hour Support" 
              text="Round-the-clock staffing providing safety, stability, and expert care in domestic home environments." 
            />
            <SpecialistItem 
              icon="👥" 
              title="Personalized Care" 
              text="1:1 and 2:1 specialist support tailored to individual aspirations and communication needs." 
            />
            <SpecialistItem 
              icon="🧩" 
              title="PBS Model" 
              text="Evidence-based Positive Behaviour Support focused on improving quality of life and outcomes." 
            />
            <SpecialistItem 
              icon="🏥" 
              title="Complex Needs" 
              text="Specialist expertise in complex physical care, mobility support, and sensory-friendly living." 
            />
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <img 
              src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&q=80&w=1200" 
              className="rounded-[2.5rem] h-80 w-full object-cover shadow-xl" 
              alt="Care Specialist" 
            />
            <img 
              src="https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&q=80&w=1200" 
              className="rounded-[2.5rem] h-80 w-full object-cover shadow-xl" 
              alt="Community Living" 
            />
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section id="values" className="py-20 md:py-32 bg-white dark:bg-zinc-950">
        <div className="container mx-auto px-4 md:px-6 mb-16">
          <span className="text-[#00E5D1] font-black uppercase tracking-[0.3em] text-[11px] mb-4 md:mb-6 block">Our Heart</span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-zinc-900 dark:text-white">Core Values</h2>
        </div>
        <div className="container mx-auto px-4 md:px-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          <ValueCard icon="🏡" title="Community" text="Fostering a shared world where residents and families feel connected." />
          <ValueCard icon="✨" title="Independence" text="The right to make choices about life, regardless of the level of need." />
          <ValueCard icon="💙" title="Compassion" text="Empathy and respect in every interaction through trauma-informed care." />
          <ValueCard icon="📜" title="Compliance & Trust" text="Highest standards of safety, governance, and accountability." />
          <ValueCard icon="🌍" title="Cultural Richness" text="Celebrating diversity and recognising the importance of cultural identity." />
          <ValueCard icon="🌟" title="Happiness" text="Success measured by the dignity and quality of life for those we support." />
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-20 md:py-32 bg-zinc-50 dark:bg-zinc-900/50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16 md:mb-24">
            <span className="text-[#00E5D1] font-black uppercase tracking-[0.3em] text-[11px] mb-6 block">Our Expertise</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-zinc-900 dark:text-white">Meet the Team</h2>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 bg-white dark:bg-zinc-900 rounded-[3rem] p-8 md:p-12 border border-zinc-100 dark:border-zinc-800 flex flex-col md:flex-row gap-10 shadow-sm">
              <div className="w-48 h-48 flex-shrink-0 rounded-full overflow-hidden border-4 border-[#00E5D1]/20 mx-auto md:mx-0">
                <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400" className="w-full h-full object-cover" alt="Nicola" />
              </div>
              <div>
                <span className="text-[#00E5D1] text-[10px] font-black uppercase tracking-widest mb-2 block">Registered Manager</span>
                <h3 className="text-3xl font-serif font-bold text-[#4B87C1] dark:text-[#67a7e6] mb-4">Nicola</h3>
                <p className="text-zinc-500 dark:text-zinc-400 mb-4 leading-relaxed font-light">
                  Nicola is an experienced Registered Manager with over 10 years in health and social care. She brings values‑led leadership with a clear focus on safeguarding and quality.
                </p>
                <div className="grid grid-cols-2 gap-4 text-xs font-bold text-zinc-400">
                  <div className="flex items-center space-x-2">
                    <span className="w-1 h-1 bg-[#00E5D1] rounded-full"></span>
                    <span>CQC Registered</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="w-1 h-1 bg-[#00E5D1] rounded-full"></span>
                    <span>PBS Specialist</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="bg-white dark:bg-zinc-900 rounded-3xl p-6 border border-zinc-100 dark:border-zinc-800">
                <h4 className="font-serif font-bold text-lg mb-2 text-[#4B87C1] dark:text-[#67a7e6]">Leadership Team</h4>
                <p className="text-sm text-zinc-500 dark:text-zinc-400">Strategic oversight and transparent governance.</p>
              </div>
              <div className="bg-white dark:bg-zinc-900 rounded-3xl p-6 border border-zinc-100 dark:border-zinc-800">
                <h4 className="font-serif font-bold text-lg mb-2 text-[#4B87C1] dark:text-[#67a7e6]">Support Workers</h4>
                <p className="text-sm text-zinc-500 dark:text-zinc-400">The heart of our world, enabling independence.</p>
              </div>
              <div className="bg-white dark:bg-zinc-900 rounded-3xl p-6 border border-zinc-100 dark:border-zinc-800">
                <h4 className="font-serif font-bold text-lg mb-2 text-[#4B87C1] dark:text-[#67a7e6]">Specialist Partners</h4>
                <p className="text-sm text-zinc-500 dark:text-zinc-400">Behavioural specialists and therapists.</p>
              </div>
            </div>
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
                <h2 className="text-4xl md:text-6xl font-serif font-bold mb-8 md:mb-10 text-[#4B87C1] dark:text-[#67a7e6] leading-tight text-center md:text-left">Let's Connect.</h2>
                <p className="text-zinc-500 dark:text-zinc-400 mb-10 md:mb-16 text-lg md:text-xl font-light text-center md:text-left">
                  We work transparently with families and commissioners to provide the best outcomes.
                </p>
                <div className="space-y-8 md:space-y-12">
                  <div className="cursor-pointer group" onClick={() => window.location.href = 'mailto:info@hamrosansar.co.uk'}>
                    <ContactItem icon="✉️" label="Email Us" value="info@hamrosansar.co.uk" color="#00E5D1" />
                  </div>
                  <div className="group">
                    <ContactItem icon="📞" label="Phone" value="Contact info coming soon" color="#4B87C1" />
                  </div>
                </div>
              </div>
              <div className="bg-zinc-50 dark:bg-zinc-950/50 p-6 md:p-14 rounded-[2rem] md:rounded-[3rem] border border-[#00E5D1]/20">
                <form className="space-y-6 md:space-y-8" onSubmit={e => {
                  e.preventDefault();
                  alert('Thank you! Our referral team will be in touch shortly.');
                  (e.target as HTMLFormElement).reset();
                }}>
                  <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
                    <input required type="text" placeholder="Name" className="w-full bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl md:rounded-2xl px-5 md:px-6 py-3.5 md:py-4 focus:ring-2 ring-[#00E5D1] outline-none text-zinc-800 dark:text-zinc-100 placeholder:text-zinc-400" />
                    <input required type="email" placeholder="Email" className="w-full bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl md:rounded-2xl px-5 md:px-6 py-3.5 md:py-4 focus:ring-2 ring-[#00E5D1] outline-none text-zinc-800 dark:text-zinc-100 placeholder:text-zinc-400" />
                  </div>
                  <textarea required rows={4} placeholder="How can we help? (Referral or Enquiry)" className="w-full bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl md:rounded-2xl px-5 md:px-6 py-3.5 md:py-4 focus:ring-2 ring-[#00E5D1] outline-none resize-none text-zinc-800 dark:text-zinc-100 placeholder:text-zinc-400"></textarea>
                  <button type="submit" className="w-full py-4 md:py-5 bg-[#4B87C1] dark:bg-[#67a7e6] text-white font-black rounded-xl md:rounded-2xl hover:bg-[#00E5D1] hover:text-[#4B5320] transition-all uppercase tracking-[0.2em] text-[10px] md:text-xs shadow-xl shadow-blue-100 dark:shadow-none">
                    Send Message
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
              <button onClick={() => scrollToSection('about')} className="hover:text-[#4B87C1] dark:hover:text-[#67a7e6] transition-colors uppercase">About</button>
              <button onClick={() => scrollToSection('vision')} className="hover:text-[#4B87C1] dark:hover:text-[#67a7e6] transition-colors uppercase">Vision</button>
              <button onClick={() => scrollToSection('services')} className="hover:text-[#4B87C1] dark:hover:text-[#67a7e6] transition-colors uppercase">Services</button>
              <button onClick={() => scrollToSection('team')} className="hover:text-[#4B87C1] dark:hover:text-[#67a7e6] transition-colors uppercase">Our Team</button>
           </div>
           <div className="text-zinc-400 text-[8px] md:text-[10px] uppercase tracking-[0.3em] md:tracking-[0.5em] font-medium text-center max-w-xs md:max-w-none">
             &copy; {new Date().getFullYear()} Hamro Sansar Ltd | Our World, Our Home.
           </div>
        </div>
      </footer>

      <SansarAI isDarkMode={isDarkMode} />
    </div>
  );
};

const ServiceCard: React.FC<{ title: string; description: string; image: string }> = ({ title, description, image }) => (
  <div className="group bg-white dark:bg-zinc-900 rounded-[2rem] md:rounded-[3rem] border border-zinc-100 dark:border-zinc-800 p-5 md:p-6 hover:shadow-2xl transition-all duration-700">
    <div className="h-48 md:h-64 overflow-hidden rounded-[1.5rem] md:rounded-[2.5rem] mb-6 md:mb-10">
      <img src={image} alt={title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
    </div>
    <h3 className="text-2xl md:text-3xl font-serif font-bold text-[#4B87C1] dark:text-[#67a7e6] mb-4 md:mb-6">{title}</h3>
    <p className="text-zinc-500 dark:text-zinc-400 text-sm md:text-base leading-relaxed mb-6 md:mb-8">{description}</p>
  </div>
);

const SpecialistItem: React.FC<{ icon: string; title: string; text: string }> = ({ icon, title, text }) => (
  <div className="bg-white dark:bg-zinc-900 p-8 rounded-[2rem] border border-zinc-100 dark:border-zinc-800 shadow-sm hover:shadow-lg transition-all border-b-4 border-b-[#00E5D1]">
    <div className="text-4xl mb-6">{icon}</div>
    <h4 className="text-xl font-serif font-bold text-[#4B87C1] dark:text-[#67a7e6] mb-4">{title}</h4>
    <p className="text-zinc-500 dark:text-zinc-400 text-sm leading-relaxed">{text}</p>
  </div>
);

const ValueCard: React.FC<{ icon: string; title: string; text: string }> = ({ icon, title, text }) => (
  <div className="bg-white dark:bg-zinc-900 p-8 rounded-[2.5rem] border border-zinc-100 dark:border-zinc-800 hover:border-[#00E5D1]/50 transition-colors group">
    <div className="text-4xl mb-6 group-hover:scale-110 transition-transform inline-block">{icon}</div>
    <h4 className="text-xl font-serif font-bold text-[#4B87C1] dark:text-[#67a7e6] mb-3">{title}</h4>
    <p className="text-zinc-500 dark:text-zinc-400 text-sm leading-relaxed">{text}</p>
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
