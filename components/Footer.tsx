
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-16 border-t border-white/5 text-center px-6 bg-black/50">
      <p className="text-gray-600 text-[10px] tracking-[0.5em] uppercase mb-6 font-bold">
        © 2025 Mobile Experts Inc. All Systems Operational. Verified Node.
      </p>
      <div className="flex justify-center gap-6 items-center">
        <div className="h-px w-8 bg-neon-blue/30"></div>
        <div className="w-2 h-2 bg-neon-blue rotate-45"></div>
        <div className="w-2 h-2 bg-neon-violet rotate-45"></div>
        <div className="w-2 h-2 bg-neon-blue rotate-45"></div>
        <div className="h-px w-8 bg-neon-blue/30"></div>
      </div>
    </footer>
  );
};

export default Footer;
