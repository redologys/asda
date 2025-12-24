
import React from 'react';

interface HudCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  tags: string[];
  accentColor?: string;
}

const HudCard: React.FC<HudCardProps> = ({ title, description, icon, tags, accentColor = 'neon-blue' }) => {
  const borderColorClass = accentColor === 'neon-violet' ? 'border-neon-violet' : 'border-neon-blue';
  const textColorClass = accentColor === 'neon-violet' ? 'text-neon-violet' : 'text-neon-blue';
  const hoverBgClass = accentColor === 'neon-violet' ? 'group-hover:bg-neon-violet' : 'group-hover:bg-neon-blue';

  return (
    <div className={`relative p-8 group reveal bg-panel-bg border border-white/5 backdrop-blur-md transition-all duration-500 hover:-translate-y-2 hover:border-${accentColor}/30 hover:shadow-[0_0_30px_rgba(0,242,255,0.1)]`}>
      {/* HUD Corners */}
      <div className={`absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 transition-all duration-300 group-hover:w-8 group-hover:h-8 ${borderColorClass}`}></div>
      <div className={`absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 transition-all duration-300 group-hover:w-8 group-hover:h-8 ${borderColorClass}`}></div>

      <div className={`w-12 h-12 mb-6 border flex items-center justify-center transition-colors duration-300 ${borderColorClass} ${textColorClass} ${hoverBgClass} group-hover:text-black`}>
        {icon}
      </div>
      
      <h3 className="text-xl font-bold mb-3 font-orbitron">{title}</h3>
      <p className="text-gray-400 text-sm mb-6 leading-relaxed">{description}</p>
      
      <ul className={`text-[10px] tracking-widest space-y-2 uppercase font-bold ${textColorClass}/80`}>
        {tags.map((tag, idx) => (
          <li key={idx}>// {tag}</li>
        ))}
      </ul>
    </div>
  );
};

export default HudCard;
