
import React from 'react';
import Navbar from './components/Navbar';
import SansarAI from './components/SansarAI';
import Logo from './components/Logo';

const App: React.FC = () => {
  return (
    <div className="min-h-screen relative flex flex-col">
      <Navbar />

      {/* Hero Section - Brighter Overlays */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-zinc-950">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1600" 
            alt="Artisanal Decor" 
            className="w-full h-full object-cover opacity-40 mix-blend-overlay"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/20 via-zinc-950/60 to-zinc-950"></div>
          {/* Enhanced Glows */}
          <div className="absolute top-1/4 -right-1/4 w-[60%] h-[60%] bg-cyan-500/10 rounded-full blur-[180px] animate-pulse"></div>
          <div className="absolute bottom-1/4 -left-1/4 w-[40%] h-[40%] bg-blue-500/5 rounded-full blur-[150px]"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center space-x-3 px-4 py-2 rounded-2xl bg-cyan-500/10 border border-cyan-400/30 mb-10 backdrop-blur-xl glow-cyan">
              <span className="w-2 h-2 bg-cyan-400 rounded-full animate-ping"></span>
              <span className="text-[11px] font-extrabold text-cyan-300 uppercase tracking-[0.25em]">Global Heritage • UK Bespoke Luxury</span>
            </div>
            <h1 className="text-7xl md:text-[9.5rem] font-serif font-bold leading-[0.85] mb-10 tracking-tighter">
              Hamro <br />
              <span className="gradient-text italic">Sansar.</span>
            </h1>
            <p className="text-xl md:text-3xl text-zinc-300 mb-14 max-w-2xl font-light leading-relaxed">
              Illuminating homes with the world's most evocative artisan treasures. <span className="text-white font-medium">Authenticity reimagined.</span>
            </p>
            <div className="flex flex-col sm:flex-row gap-8">
              <button className="px-12 py-6 bg-cyan-400 text-zinc-950 font-black rounded-2xl hover:bg-white hover:shadow-[0_0_60px_rgba(0,255,242,0.5)] transition-all duration-500 text-sm uppercase tracking-[0.2em] transform hover:-translate-y-1">
                Explore The World
              </button>
              <button className="px-12 py-6 border border-zinc-700 bg-zinc-900/40 text-white font-bold rounded-2xl hover:bg-zinc-800 hover:border-cyan-400/50 transition-all text-sm uppercase tracking-[0.2em] backdrop-blur-xl">
                Our Heritage
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section - New */}
      <section className="py-20 bg-zinc-900/30 border-y border-zinc-800/50 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-60 grayscale hover:grayscale-0 transition-all duration-700">
            <CertificationBadge name="Fair Trade Certified" icon="🤝" />
            <CertificationBadge name="GOTS Organic" icon="🌿" />
            <CertificationBadge name="Artisan Heritage Guild" icon="🏛️" />
            <CertificationBadge name="Eco-Luxe Member" icon="💎" />
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section id="about" className="py-40 bg-zinc-950 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <div className="relative group">
              <div className="absolute -inset-10 bg-cyan-500/10 rounded-full blur-[100px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
              <img 
                src="https://images.pexels.com/photos/1099816/pexels-photo-1099816.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Craftsmanship" 
                className="relative rounded-[3rem] object-cover w-full h-[650px] border border-zinc-800 shadow-2xl transition-all duration-1000 group-hover:border-cyan-400/30"
              />
              <div className="absolute -bottom-10 -right-10 w-52 h-52 bg-zinc-900 border border-zinc-800 rounded-[2.5rem] p-8 hidden md:flex flex-col justify-center items-center text-center shadow-2xl glow-cyan">
                 <Logo className="w-20 h-20 mb-3" />
                 <span className="text-[11px] font-black text-cyan-400 uppercase tracking-widest">Est. 2024</span>
              </div>
            </div>
            <div className="lg:pl-10">
              <span className="text-cyan-400 font-black uppercase tracking-[0.4em] text-[10px] mb-8 block px-3 py-1 bg-cyan-500/5 border border-cyan-500/10 rounded-full w-fit">The Global Ethos</span>
              <h2 className="text-6xl md:text-7xl font-bold mb-10 font-serif leading-[1.1]">Where Tradition Meets <span className="italic text-zinc-400">Light.</span></h2>
              <p className="text-zinc-300 text-xl mb-8 leading-relaxed font-light">
                Hamro Sansar is more than a boutique; it's a commitment to the <span className="text-cyan-400 font-medium">preservation of the artisan soul.</span> We source from independent families across 14 nations.
              </p>
              <div className="space-y-6 mb-12">
                <CheckItem text="Direct-from-source artisan partnerships" />
                <CheckItem text="Eco-conscious, plastic-free logistics" />
                <CheckItem text="100% Transparency in sourcing paths" />
              </div>
              <div className="grid grid-cols-2 gap-12 border-t border-zinc-800 pt-12">
                <div>
                  <h3 className="text-cyan-400 text-5xl font-black mb-2 font-serif tracking-tighter">75+</h3>
                  <p className="text-zinc-500 text-[10px] uppercase tracking-[0.3em] font-bold">Heritage Families</p>
                </div>
                <div>
                  <h3 className="text-cyan-400 text-5xl font-black mb-2 font-serif tracking-tighter">14</h3>
                  <p className="text-zinc-500 text-[10px] uppercase tracking-[0.3em] font-bold">Partner Nations</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories Section - New */}
      <section id="stories" className="py-40 bg-zinc-900/20 relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(0,255,242,0.05),transparent)] pointer-events-none"></div>
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-24">
            <span className="text-cyan-400 font-black uppercase tracking-[0.3em] text-[10px] mb-6 block">Our Impact</span>
            <h2 className="text-6xl font-serif font-bold mb-8">Stories from the Soul</h2>
            <p className="text-zinc-400 text-lg font-light">The real measure of Hamro Sansar isn't in sales, but in the changed lives of our artisans and the sanctuaries we help build.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <StoryCard 
              name="The Kathmandu Collective"
              location="Nepal"
              story="By bridging the gap to London, we helped a group of 15 traditional weavers transition to 100% organic dyes while tripling their yearly collective revenue."
              image="https://images.pexels.com/photos/2166591/pexels-photo-2166591.jpeg?auto=compress&cs=tinysrgb&w=800"
            />
            <StoryCard 
              name="The Somerset Restoration"
              location="UK"
              story="A historic estate brought back to life using entirely bespoke Hamro Sansar textiles and reclaimed marble vessels, preserving history through modern curation."
              image="https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=800"
            />
          </div>
        </div>
      </section>

      {/* Collections Section */}
      <section id="services" className="py-40 bg-zinc-950">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-10">
            <div className="max-w-2xl">
              <span className="text-cyan-400 font-bold uppercase tracking-[0.3em] text-[10px] mb-6 block">The Collections</span>
              <h2 className="text-6xl font-serif font-bold leading-tight">Curating the world,<br/>one home at a time.</h2>
            </div>
            <button className="text-white font-bold text-sm uppercase tracking-[0.2em] px-8 py-4 border border-zinc-800 rounded-full hover:bg-zinc-900 transition-all flex items-center space-x-3 group">
              <span>View All Worlds</span>
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M17 8l4 4m0 0l-4 4m4-4H3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </button>
          </div>
          
          <div className="grid md:grid-cols-3 gap-12">
            <CategoryCard 
              title="Sacred Textiles" 
              description="Masterpieces of hand-woven organic cotton, dyed with roots and minerals."
              image="https://images.pexels.com/photos/1579739/pexels-photo-1579739.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            />
            <CategoryCard 
              title="Artisan Decor" 
              description="Brutalist stone vessels and hand-hammered brass artifacts for the modern sanctuary."
              image="https://images.pexels.com/photos/4203100/pexels-photo-4203100.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            />
            <CategoryCard 
              title="Global Pantry" 
              description="Direct-trade heritage spices and single-origin tea leaves, harvested by moonlight."
              image="https://images.pexels.com/photos/2802527/pexels-photo-2802527.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-40 relative bg-zinc-900/10">
        <div className="container mx-auto px-6">
          <div className="glass-card p-1 bg-gradient-to-br from-zinc-800 to-zinc-950 rounded-[4rem] glow-cyan">
            <div className="bg-zinc-950 p-12 md:p-24 rounded-[3.9rem] border border-zinc-800/50 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[120px] -mr-48 -mt-48"></div>
              <div className="grid lg:grid-cols-2 gap-24 relative z-10">
                <div>
                  <h2 className="text-7xl font-serif font-bold mb-10 leading-tight">Start Your <br/>Project.</h2>
                  <p className="text-zinc-400 mb-16 text-xl font-light leading-relaxed">
                    Based in London, consulting globally. We are ready to help you source the extraordinary.
                  </p>
                  
                  <div className="space-y-12">
                    <ContactItem 
                      icon={<svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>}
                      label="The London Studio"
                      value="123 Heritage Lane, Little Brampton, London"
                    />
                    <ContactItem 
                      icon={<svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>}
                      label="Correspondence"
                      value="hello@hamrosansar.co.uk"
                    />
                  </div>
                </div>
                
                <div className="bg-zinc-900/40 p-10 md:p-14 rounded-[3rem] border border-zinc-800/50 backdrop-blur-xl">
                  <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="block text-[10px] font-black text-zinc-500 uppercase tracking-[0.3em] ml-1">Identity</label>
                        <input type="text" className="w-full bg-zinc-950 border border-zinc-800 rounded-2xl px-6 py-5 focus:outline-none focus:border-cyan-400 transition-all text-sm font-light" placeholder="Aria Vance" />
                      </div>
                      <div className="space-y-2">
                        <label className="block text-[10px] font-black text-zinc-500 uppercase tracking-[0.3em] ml-1">Email</label>
                        <input type="email" className="w-full bg-zinc-950 border border-zinc-800 rounded-2xl px-6 py-5 focus:outline-none focus:border-cyan-400 transition-all text-sm font-light" placeholder="aria@studio.com" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="block text-[10px] font-black text-zinc-500 uppercase tracking-[0.3em] ml-1">Message</label>
                      <textarea rows={5} className="w-full bg-zinc-950 border border-zinc-800 rounded-2xl px-6 py-5 focus:outline-none focus:border-cyan-400 transition-all text-sm font-light resize-none" placeholder="How can we help you build your world?"></textarea>
                    </div>
                    <button className="w-full py-6 bg-cyan-400 text-zinc-950 font-black rounded-2xl hover:bg-white hover:shadow-2xl transition-all uppercase tracking-[0.3em] text-xs">
                      Send Inquiry
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-24 bg-zinc-950 border-t border-zinc-900">
        <div className="container mx-auto px-6 text-center">
           <div className="flex justify-center mb-10 scale-125">
              <Logo className="w-16 h-16" />
           </div>
           <h2 className="text-4xl font-black uppercase tracking-[0.6em] mb-12 text-white">Hamro Sansar</h2>
           <div className="flex flex-wrap justify-center gap-12 mb-20 text-[10px] font-black text-zinc-500 uppercase tracking-[0.3em]">
              <a href="#about" className="hover:text-cyan-400 transition-colors">The Philosophy</a>
              <a href="#stories" className="hover:text-cyan-400 transition-colors">Success Stories</a>
              <a href="#services" className="hover:text-cyan-400 transition-colors">Artisans</a>
              <a href="#contact" className="hover:text-cyan-400 transition-colors">Inquiries</a>
           </div>
           <div className="text-zinc-700 text-[10px] uppercase tracking-[0.4em] font-medium border-t border-zinc-900/50 pt-12">
             &copy; {new Date().getFullYear()} Hamro Sansar Ltd. Bespoke Curations from London.
           </div>
        </div>
      </footer>

      {/* AI Bot */}
      <SansarAI />
    </div>
  );
};

// --- Components ---

const CertificationBadge: React.FC<{ name: string; icon: string }> = ({ name, icon }) => (
  <div className="flex items-center space-x-3 group cursor-default">
    <span className="text-2xl group-hover:scale-125 transition-transform duration-500">{icon}</span>
    <span className="text-[10px] font-black text-zinc-400 uppercase tracking-[0.2em] group-hover:text-cyan-400 transition-colors">{name}</span>
  </div>
);

const CheckItem: React.FC<{ text: string }> = ({ text }) => (
  <div className="flex items-center space-x-4">
    <div className="w-5 h-5 rounded-full bg-cyan-500/10 flex items-center justify-center border border-cyan-500/20">
      <svg className="w-3 h-3 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/></svg>
    </div>
    <span className="text-zinc-400 text-sm font-light">{text}</span>
  </div>
);

const StoryCard: React.FC<{ name: string; location: string; story: string; image: string }> = ({ name, location, story, image }) => (
  <div className="group relative overflow-hidden rounded-[3rem] bg-zinc-900/40 border border-zinc-800/50 p-8 flex flex-col md:flex-row gap-8 items-center hover:border-cyan-500/30 transition-all duration-700">
    <div className="w-full md:w-48 h-48 flex-shrink-0 overflow-hidden rounded-[2rem]">
      <img src={image} alt={name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
    </div>
    <div className="flex-1">
      <span className="text-cyan-400 text-[10px] font-black uppercase tracking-[0.3em] mb-2 block">{location}</span>
      <h3 className="text-2xl font-serif font-bold text-white mb-4">{name}</h3>
      <p className="text-zinc-400 text-sm leading-relaxed font-light">{story}</p>
    </div>
  </div>
);

const CategoryCard: React.FC<{ title: string; description: string; image: string }> = ({ title, description, image }) => (
  <div className="group overflow-hidden rounded-[3rem] bg-zinc-900/30 border border-zinc-800/50 hover:border-cyan-400 transition-all duration-700 cursor-pointer shadow-2xl">
    <div className="h-[450px] overflow-hidden relative">
      <img src={image} alt={title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[2s]" />
      <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent"></div>
      <div className="absolute bottom-10 left-10">
         <h3 className="text-4xl font-bold font-serif text-white tracking-tight">{title}</h3>
      </div>
    </div>
    <div className="p-10">
      <p className="text-zinc-400 leading-relaxed mb-10 text-lg font-light">{description}</p>
      <div className="flex items-center space-x-4 text-cyan-400 text-[11px] font-black uppercase tracking-[0.25em] group-hover:translate-x-3 transition-all duration-500">
        <span>Explore Collection</span>
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M17 8l4 4m0 0l-4 4m4-4H3" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
      </div>
    </div>
  </div>
);

const ContactItem: React.FC<{ icon: React.ReactNode; label: string; value: string }> = ({ icon, label, value }) => (
  <div className="flex items-start space-x-8 group">
    <div className="w-16 h-16 bg-cyan-500/5 rounded-[1.5rem] flex items-center justify-center text-cyan-400 border border-cyan-500/10 shadow-lg group-hover:bg-cyan-400 group-hover:text-zinc-950 transition-all duration-500">
      {icon}
    </div>
    <div>
      <p className="text-[10px] font-black text-zinc-600 uppercase tracking-[0.3em] mb-2">{label}</p>
      <p className="text-white text-lg font-light">{value}</p>
    </div>
  </div>
);

export default App;
