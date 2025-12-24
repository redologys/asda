
import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 w-full z-[60] px-6 py-4 flex justify-between items-center bg-black/80 backdrop-blur-md border-b border-white/5">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-sm transform rotate-45 flex items-center justify-center">
          <span className="text-black font-bold -rotate-45 text-xs font-orbitron">ME</span>
        </div>
        <span className="font-orbitron font-bold text-xl tracking-tighter uppercase">
          Mobile Experts <span className="text-xs text-neon-blue">INC.</span>
        </span>
      </div>
      
      <div className="hidden md:flex gap-8 text-sm uppercase tracking-widest font-medium">
        <a href="#services" className="hover:text-neon-blue transition duration-300">Services</a>
        <a href="#gallery" className="hover:text-neon-blue transition duration-300">Laboratory</a>
        <a href="#reviews" className="hover:text-neon-blue transition duration-300">Intel</a>
        <a href="#contact" className="hover:text-neon-blue transition duration-300 text-neon-violet font-bold underline underline-offset-8 decoration-2">Contact</a>
      </div>

      <div className="flex items-center gap-4">
        <div className="status-badge-anim bg-green-500/10 border border-green-500/50 px-3 py-1 rounded-full flex items-center gap-2">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
          <span className="text-[10px] text-green-500 font-bold uppercase tracking-tighter">Open Until 9 PM</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
