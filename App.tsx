
import React from 'react';
import Navbar from './components/Navbar';
import SansarAI from './components/SansarAI';
import Logo from './components/Logo';

const App: React.FC = () => {
  return (
    <div className="min-h-screen relative flex flex-col bg-[#fafafa] text-zinc-800">
      <Navbar />

      {/* Hero Section - Brighter, Warm, and Reassuring */}
      <section className="relative min-h-[90vh] flex items-center pt-24 overflow-hidden bg-white">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.pexels.com/photos/7163352/pexels-photo-7163352.jpeg?auto=compress&cs=tinysrgb&w=1600" 
            alt="Warm Modern Home" 
            className="w-full h-full object-cover opacity-40 mix-blend-multiply"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent"></div>
          
          {/* Brighter Dynamic Lighting */}
          <div className="absolute top-1/4 right-0 w-[50%] h-[50%] bg-cyan-200/40 rounded-full blur-[180px] animate-pulse"></div>
          <div className="absolute -bottom-1/4 -left-1/4 w-[50%] h-[50%] bg-[#4B87C1]/20 rounded-full blur-[180px]"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center space-x-3 px-5 py-2.5 rounded-2xl bg-cyan-50 border border-cyan-100 mb-10 shadow-sm">
              <span className="w-2.5 h-2.5 bg-cyan-500 rounded-full animate-ping"></span>
              <span className="text-[12px] font-black text-cyan-700 uppercase tracking-[0.2em]">Helping Hands For Better Future...</span>
            </div>
            <h1 className="text-6xl md:text-8xl font-serif font-bold leading-[1.1] mb-8 tracking-tighter text-zinc-900">
              The Path to <br />
              <span className="text-[#4B87C1] italic">Independence.</span>
            </h1>
            <p className="text-xl md:text-2xl text-zinc-600 mb-12 max-w-2xl font-light leading-relaxed">
              At <span className="text-zinc-900 font-semibold italic">Hamro Sansar</span>—meaning <span className="text-[#4B87C1] font-bold">"Our World"</span>—we provide a nurturing environment for young people transitioning from care to self-sufficiency.
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <button className="px-10 py-5 bg-[#4B87C1] text-white font-black rounded-2xl hover:bg-cyan-500 hover:shadow-[0_10px_40px_rgba(0,229,209,0.3)] transition-all duration-500 text-xs uppercase tracking-[0.2em] transform hover:-translate-y-1">
                Our Services
              </button>
              <button className="px-10 py-5 border border-zinc-200 bg-white text-zinc-700 font-bold rounded-2xl hover:bg-zinc-50 transition-all text-xs uppercase tracking-[0.2em] shadow-sm">
                About Supported Living
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* What is Semi-Independent Living? */}
      <section id="about" className="py-32 bg-zinc-50 border-y border-zinc-200/50">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="relative group">
              <img 
                src="https://images.pexels.com/photos/6646917/pexels-photo-6646917.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Support and Guidance" 
                className="relative rounded-[3rem] object-cover w-full h-[600px] shadow-2xl transition-all duration-700 group-hover:scale-[1.02]"
              />
              <div className="absolute -bottom-10 -right-10 bg-[#00E5D1] p-10 rounded-[3rem] shadow-xl text-white hidden md:block">
                 <p className="text-sm font-black uppercase tracking-widest mb-2 italic">Hamro Sansar</p>
                 <h4 className="text-3xl font-serif font-bold leading-none">"Our World"</h4>
              </div>
            </div>
            <div>
              <span className="text-cyan-600 font-black uppercase tracking-[0.3em] text-[11px] mb-6 block">Defining the Future</span>
              <h2 className="text-5xl md:text-6xl font-bold mb-8 font-serif leading-tight text-zinc-900">A Stepping Stone to <br/><span className="italic text-[#4B87C1]">Your Own World.</span></h2>
              <p className="text-zinc-600 text-xl mb-10 leading-relaxed font-light">
                Semi-independent home (also called <span className="text-zinc-900 font-medium italic">supported accommodation</span>) is the vital bridge between living in full-time care, like foster care, and living completely on your own. 
              </p>
              <p className="text-zinc-500 text-lg mb-10 leading-relaxed">
                Designed for young people aged 16 to 18, it offers a safe space where you have more responsibility but still have <span className="text-zinc-900 font-semibold italic">Helping Hands</span> nearby whenever you need them.
              </p>
              <div className="space-y-6 mb-12">
                <CheckItem text="Safe domestic housing in Little Brampton" />
                <CheckItem text="Budgeting & financial literacy skills" />
                <CheckItem text="Emotional guidance and mentorship" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Services Section */}
      <section id="services" className="py-32 bg-white">
        <div className="container mx-auto px-6 text-center mb-24">
          <span className="text-cyan-600 font-black uppercase tracking-[0.3em] text-[11px] mb-6 block">Support Programs</span>
          <h2 className="text-5xl md:text-6xl font-serif font-bold text-zinc-900">How We Support You</h2>
        </div>
        <div className="container mx-auto px-6 grid md:grid-cols-3 gap-12">
          <ServiceCard 
            title="Safe Housing" 
            description="Domestic, high-quality living environments that feel like home, not a facility."
            image="https://images.pexels.com/photos/584399/pexels-photo-584399.jpeg?auto=compress&cs=tinysrgb&w=800"
          />
          <ServiceCard 
            title="Life Skills Training" 
            description="Practical workshops on cooking, laundry, bills, and job applications."
            image="https://images.pexels.com/photos/5990263/pexels-photo-5990263.jpeg?auto=compress&cs=tinysrgb&w=800"
          />
          <ServiceCard 
            title="Key-Work Support" 
            description="Regular one-on-one sessions with professional mentors to set and reach life goals."
            image="https://images.pexels.com/photos/7163351/pexels-photo-7163351.jpeg?auto=compress&cs=tinysrgb&w=800"
          />
        </div>
      </section>

      {/* Success Stories Section */}
      <section id="stories" className="py-32 bg-[#4B87C1]/5 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-10">
            <div className="max-w-2xl">
              <span className="text-cyan-600 font-black uppercase tracking-[0.3em] text-[11px] mb-6 block">Real Journeys</span>
              <h2 className="text-5xl font-serif font-bold text-zinc-900">Stories of Independence</h2>
            </div>
            <p className="text-zinc-500 max-w-sm text-lg italic">
              "Providing the helping hands needed for a brighter future."
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <StoryCard 
              name="Leo's Transition"
              result="Independent Flat"
              story="Leo moved in at 16 with limited skills. Through our mentoring, he secured an apprenticeship and successfully moved into his own flat this month."
              image="https://images.pexels.com/photos/937481/pexels-photo-937481.jpeg?auto=compress&cs=tinysrgb&w=800"
            />
            <StoryCard 
              name="Maya's New World"
              result="University Entry"
              story="Maya used our safe home to focus on her A-levels. Our key workers helped her manage her mental health, and she's now heading to university."
              image="https://images.pexels.com/photos/3762800/pexels-photo-3762800.jpeg?auto=compress&cs=tinysrgb&w=800"
            />
          </div>
        </div>
      </section>

      {/* Connect Section */}
      <section id="contact" className="py-32 bg-white">
        <div className="container mx-auto px-6">
          <div className="bg-white rounded-[4rem] border border-zinc-100 shadow-2xl p-12 md:p-24 overflow-hidden relative">
            <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-100/50 rounded-full blur-[100px] -mr-48 -mt-48"></div>
            <div className="grid lg:grid-cols-2 gap-24 relative z-10">
              <div>
                <h2 className="text-6xl font-serif font-bold mb-10 text-zinc-900 leading-tight">Join Our World.</h2>
                <p className="text-zinc-500 mb-16 text-xl font-light">
                  Whether you are a local authority, a young person, or a guardian—Hamro Sansar is here to provide the support needed.
                </p>
                <div className="space-y-12">
                  <ContactItem icon="📍" label="The Home Office" value="123 Heritage Lane, London, UK" />
                  <ContactItem icon="📞" label="Direct Line" value="+44 20 7946 0000" />
                </div>
              </div>
              <div className="bg-zinc-50 p-10 md:p-14 rounded-[3rem] border border-zinc-200/50">
                <form className="space-y-8" onSubmit={e => e.preventDefault()}>
                  <div className="grid md:grid-cols-2 gap-6">
                    <input type="text" placeholder="Full Name" className="w-full bg-white border border-zinc-200 rounded-2xl px-6 py-4 focus:ring-2 ring-cyan-500 outline-none" />
                    <input type="email" placeholder="Email Address" className="w-full bg-white border border-zinc-200 rounded-2xl px-6 py-4 focus:ring-2 ring-cyan-500 outline-none" />
                  </div>
                  <textarea rows={4} placeholder="How can we help?" className="w-full bg-white border border-zinc-200 rounded-2xl px-6 py-4 focus:ring-2 ring-cyan-500 outline-none resize-none"></textarea>
                  <button className="w-full py-5 bg-[#4B87C1] text-white font-black rounded-2xl hover:bg-cyan-600 transition-all uppercase tracking-[0.2em] text-xs">
                    Send Inquiry
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-24 bg-white border-t border-zinc-100">
        <div className="container mx-auto px-6 flex flex-col items-center">
           <div className="mb-12">
              <Logo size="lg" />
           </div>
           <div className="flex flex-wrap justify-center gap-12 mb-16 text-[10px] font-black text-zinc-400 uppercase tracking-[0.3em]">
              <a href="#about" className="hover:text-cyan-500 transition-colors">Independence</a>
              <a href="#services" className="hover:text-cyan-500 transition-colors">Our Services</a>
              <a href="#stories" className="hover:text-cyan-500 transition-colors">Success Stories</a>
              <a href="#contact" className="hover:text-cyan-500 transition-colors">Referrals</a>
           </div>
           <div className="text-zinc-300 text-[10px] uppercase tracking-[0.5em] font-medium text-center">
             &copy; {new Date().getFullYear()} Hamro Sansar Ltd. Supported Accommodation for Young People.
           </div>
        </div>
      </footer>

      <SansarAI />
    </div>
  );
};

// --- Sub-Components ---

const ServiceCard: React.FC<{ title: string; description: string; image: string }> = ({ title, description, image }) => (
  <div className="group bg-white rounded-[3rem] border border-zinc-100 p-6 hover:shadow-2xl transition-all duration-700">
    <div className="h-64 overflow-hidden rounded-[2.5rem] mb-10">
      <img src={image} alt={title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
    </div>
    <h3 className="text-3xl font-serif font-bold text-zinc-900 mb-6">{title}</h3>
    <p className="text-zinc-500 leading-relaxed mb-8">{description}</p>
    <div className="text-cyan-600 font-black uppercase tracking-widest text-[10px] group-hover:translate-x-2 transition-transform">Learn More &rarr;</div>
  </div>
);

const StoryCard: React.FC<{ name: string; result: string; story: string; image: string }> = ({ name, result, story, image }) => (
  <div className="bg-white rounded-[3.5rem] p-10 border border-zinc-100 flex flex-col md:flex-row gap-10 items-center shadow-sm">
    <img src={image} alt={name} className="w-32 h-32 rounded-full object-cover shadow-lg border-4 border-cyan-50" />
    <div>
      <span className="text-cyan-600 text-[10px] font-black uppercase tracking-widest mb-2 block">{result}</span>
      <h3 className="text-3xl font-serif font-bold text-zinc-900 mb-4">{name}</h3>
      <p className="text-zinc-500 font-light leading-relaxed">{story}</p>
    </div>
  </div>
);

const CheckItem: React.FC<{ text: string }> = ({ text }) => (
  <div className="flex items-center space-x-4">
    <div className="w-6 h-6 rounded-full bg-cyan-50 flex items-center justify-center border border-cyan-100">
      <span className="text-cyan-600 text-[10px]">✔</span>
    </div>
    <span className="text-zinc-600 font-medium">{text}</span>
  </div>
);

const ContactItem: React.FC<{ icon: string; label: string; value: string }> = ({ icon, label, value }) => (
  <div className="flex items-center space-x-6">
    <div className="text-4xl">{icon}</div>
    <div>
      <p className="text-[10px] font-black text-zinc-400 uppercase tracking-widest mb-1">{label}</p>
      <p className="text-zinc-800 text-xl font-medium">{value}</p>
    </div>
  </div>
);

export default App;
