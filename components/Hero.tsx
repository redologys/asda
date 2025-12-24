
import React from 'react';

const Hero: React.FC = () => {
  return (
    <header className="relative min-h-screen flex flex-col justify-center items-center px-6 pt-20 overflow-hidden">
      {/* Background Decor & Image Overlay */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img 
          src="https://lh3.googleusercontent.com/gps-cs-s/AG0ilSxUS6oHJieBfvX7BHYM5tq7lZwRtG-TOfA9SWbOpV8Hr6o5pnf9iORCCQ8La6pdF1E9bdu9SGpE-vke29QaYF_sSKALhiV1dPWb3Mxz3I5MMpScgzVnAN1iNZ3eofBQrj4dKHrHLvzjey8=s1200" 
          alt="Storefront" 
          className="w-full h-full object-cover opacity-20 filter grayscale contrast-125 scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-bg-dark via-bg-dark/80 to-bg-dark"></div>
      </div>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none z-0"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-purple-500/10 rounded-full blur-[100px] pointer-events-none z-0"></div>

      <div className="z-10 text-center max-w-4xl">
        <div className="mb-4 flex justify-center items-center gap-3 reveal">
          <div className="h-[1px] w-12 bg-neon-blue/50"></div>
          <span className="text-neon-blue text-sm tracking-[0.3em] font-bold uppercase">Established in Brooklyn</span>
          <div className="h-[1px] w-12 bg-neon-blue/50"></div>
        </div>
        
        <h1 className="text-5xl md:text-8xl font-bold leading-tight mb-6 font-orbitron reveal">
          <span className="block text-white">REPAIR THE</span>
          <span className="block bg-gradient-to-r from-neon-blue via-blue-500 to-neon-violet bg-clip-text text-transparent">FUTURE.</span>
        </h1>
        
        <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed font-light reveal">
          Premium device restoration and digital logistics. We specialize in hardware surgery and software bypass for the modern citizen.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center reveal">
          <button className="btn-glitch bg-gradient-to-r from-neon-blue to-neon-violet px-10 py-4 text-lg font-bold uppercase tracking-widest hover:scale-105 hover:shadow-[0_0_20px_rgba(188,19,254,0.5)] transition-all duration-300">
            Initialize Repair
          </button>
          
          <div className="flex flex-col items-center sm:items-start">
            <div className="flex gap-1 mb-1">
              {[1, 2, 3, 4, 5].map((s) => (
                <svg key={s} className="w-5 h-5 text-yellow-400 fill-current star-glow" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
              ))}
            </div>
            <span className="text-[10px] tracking-widest text-gray-400 uppercase font-bold">5.0 Google Rating / 500+ Nodes Verified</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;
