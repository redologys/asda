
import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div className="reveal">
          <h2 className="text-4xl font-bold mb-8 uppercase font-orbitron">Locate the <span className="text-neon-blue">Hub</span></h2>
          
          <div className="mb-10 relative h-48 w-full overflow-hidden border border-white/10 group">
             <img 
               src="https://lh3.googleusercontent.com/gps-cs-s/AG0ilSy-3vwhIZfIpDjFVsOqBBEcv-No6WImlABy5JvNkUXkAkYUKeMq6S48GEn0H0YMrg2IdqXIBPwN--qB_MKfDwIDOpbvr-gXg9sL_MNQw2h63mVlKdvooqQJFw_T_6pYrLXBiwAgbNKa8wYe=s680" 
               className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition duration-700 grayscale contrast-125"
               alt="Store Interior"
             />
             <div className="absolute inset-0 bg-gradient-to-r from-bg-dark to-transparent"></div>
             <div className="absolute bottom-4 left-4 flex items-center gap-2">
                <div className="w-2 h-2 bg-neon-blue rounded-full animate-pulse"></div>
                <span className="text-[10px] font-bold tracking-widest uppercase text-neon-blue">Physical Uplink Confirmed</span>
             </div>
          </div>

          <div className="space-y-10">
            <div className="flex items-start gap-5">
              <div className="w-10 h-10 flex items-center justify-center text-neon-blue border border-neon-blue/30 bg-neon-blue/5">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-[0.2em] text-gray-500 mb-1 font-bold">HQ Address</p>
                <p className="text-2xl font-orbitron">731 FLATBUSH AVE</p>
                <p className="text-gray-400 font-light">Brooklyn, NY 11226</p>
              </div>
            </div>

            <div className="flex items-start gap-5">
              <div className="w-10 h-10 flex items-center justify-center text-neon-violet border border-neon-violet/30 bg-neon-violet/5">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-[0.2em] text-gray-500 mb-1 font-bold">Direct Comms</p>
                <p className="text-2xl font-orbitron">(718) 282-1522</p>
                <p className="text-gray-400 font-light">mobileexpertsinc@gmail.com</p>
              </div>
            </div>

            <div className="flex items-start gap-5">
              <div className="w-10 h-10 flex items-center justify-center text-neon-blue border border-neon-blue/30 bg-neon-blue/5">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-[0.2em] text-gray-500 mb-1 font-bold">Operational Hours</p>
                <div className="flex flex-col">
                   <p className="text-xl font-orbitron">MON - SAT: 10AM - 9PM</p>
                   <p className="text-lg text-gray-400 font-orbitron">SUN: 11AM - 7PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mock HUD Map */}
        <div className="relative reveal h-[450px] bg-white/5 border border-white/10 group overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none">
            <div className="w-full h-full bg-[radial-gradient(circle_at_center,_var(--neon-blue)_1px,_transparent_1px)] bg-[length:25px_25px]"></div>
          </div>
          
          <div className="absolute inset-0 flex flex-col items-center justify-center p-12 text-center z-20">
            <div className="w-20 h-20 border-2 border-neon-blue/50 rounded-full flex items-center justify-center animate-ping absolute"></div>
            <div className="w-6 h-6 bg-neon-blue rounded-full z-10 shadow-[0_0_30px_var(--neon-blue)]"></div>
            <p className="mt-8 text-neon-blue font-orbitron font-bold text-sm tracking-[0.3em]">SIGNAL ACQUIRED</p>
            <p className="text-[10px] text-gray-500 mt-2 uppercase font-bold tracking-widest">Brooklyn Grid Sector 731 // Flatbush</p>
            
            <a href="https://maps.google.com" target="_blank" rel="noreferrer" className="mt-10 px-8 py-3 border border-white/10 bg-white/5 hover:border-neon-blue hover:text-neon-blue transition-all duration-300 uppercase text-[10px] tracking-[0.3em] font-bold backdrop-blur-sm">
              Open Navigation Matrix
            </a>
          </div>
          
          {/* Decorative HUD Elements */}
          <div className="absolute top-6 left-6 text-[9px] text-neon-blue/40 font-mono tracking-tighter">
            LAT: 40.6558 N<br />LNG: 73.9601 W<br />ALT: 12.4M
          </div>
          <div className="absolute bottom-6 right-6 text-[9px] text-neon-violet/40 font-mono tracking-tighter text-right">
            SCANNING AREA... COMPLETE<br />PROXIMITY: 0.0KM<br />STATUS: ONLINE
          </div>
          <div className="absolute top-0 right-0 p-4 opacity-10">
             <div className="w-24 h-24 border-t border-r border-white"></div>
          </div>
          <div className="absolute bottom-0 left-0 p-4 opacity-10">
             <div className="w-24 h-24 border-b border-l border-white"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
