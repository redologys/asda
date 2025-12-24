
import React from 'react';

const Reviews: React.FC = () => {
  return (
    <section id="reviews" className="py-24 px-6 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-16 reveal uppercase font-orbitron">User <span className="text-neon-blue">Transmissions</span></h2>
      
      <div className="grid md:grid-cols-2 gap-8">
        <div className="relative p-8 reveal bg-panel-bg border border-white/5 backdrop-blur-md">
          <div className="flex gap-1 mb-4">
            {[1, 2, 3, 4, 5].map(i => (
              <span key={i} className="text-yellow-400 star-glow text-lg">★</span>
            ))}
          </div>
          <p className="text-gray-300 mb-8 italic leading-relaxed font-light">
            "The only place in Brooklyn I trust with my data. They fixed my shattered screen in 20 minutes while I waited. Pure efficiency."
          </p>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-sm bg-gradient-to-br from-neon-blue to-neon-violet transform rotate-12"></div>
            <div>
              <p className="font-bold text-sm font-orbitron">Marcus V.</p>
              <p className="text-[10px] text-neon-blue uppercase tracking-widest font-bold">Verified Customer</p>
            </div>
          </div>
        </div>

        <div className="relative p-8 reveal bg-panel-bg border border-white/5 backdrop-blur-md" style={{ transitionDelay: '200ms' }}>
          <div className="flex gap-1 mb-4">
            {[1, 2, 3, 4, 5].map(i => (
              <span key={i} className="text-yellow-400 star-glow text-lg">★</span>
            ))}
          </div>
          <p className="text-gray-300 mb-8 italic leading-relaxed font-light">
            "Unlocked my overseas iPhone instantly. Their accessory selection is next level – found a case that actually feels bulletproof."
          </p>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-sm bg-gradient-to-br from-neon-violet to-blue-500 transform -rotate-12"></div>
            <div>
              <p className="font-bold text-sm font-orbitron">Elena R.</p>
              <p className="text-[10px] text-neon-blue uppercase tracking-widest font-bold">Verified Customer</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
