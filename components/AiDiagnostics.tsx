
import React, { useState } from 'react';

const getDiagnosticReport = async (issueDescription: string) => {
  return `Diagnostic module offline. Issue reported: "${issueDescription}".`;
};
const AiDiagnostics: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [loading, setLoading] = useState(false);

  const handleDiagnose = async () => {
    if (!input) return;
    setLoading(true);
    const report = await getDiagnosticReport(input);
    setOutput(report || '');
    setLoading(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-[100]">
      {isOpen && (
        <div className="mb-4 w-80 md:w-96 bg-panel-bg border border-neon-blue/40 backdrop-blur-xl p-6 shadow-[0_0_50px_rgba(0,242,255,0.15)] animate-in fade-in slide-in-from-bottom-4 duration-500">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-orbitron text-xs font-bold text-neon-blue tracking-widest uppercase flex items-center gap-2">
              <span className="w-2 h-2 bg-neon-blue animate-pulse rounded-full"></span>
              Neural Diagnostic
            </h3>
            <button onClick={() => setIsOpen(false)} className="text-gray-500 hover:text-white transition">✕</button>
          </div>
          
          {!output ? (
            <>
              <p className="text-[11px] text-gray-400 mb-4 uppercase tracking-wider font-bold">Input Device Malfunction Details:</p>
              <textarea 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="e.g. My iPhone screen flickers and turns green..."
                className="w-full h-24 bg-black/40 border border-white/10 p-3 text-sm focus:border-neon-blue focus:outline-none transition duration-300 resize-none text-gray-200"
              />
              <button 
                onClick={handleDiagnose}
                disabled={loading}
                className="w-full mt-4 py-3 bg-neon-blue/10 border border-neon-blue/50 text-neon-blue text-xs font-bold uppercase tracking-[0.2em] hover:bg-neon-blue hover:text-black transition-all duration-300 disabled:opacity-50"
              >
                {loading ? 'Analyzing Neural Pathways...' : 'Initialize Scan'}
              </button>
            </>
          ) : (
            <div className="animate-in fade-in duration-700">
              <div className="bg-black/50 p-4 border border-neon-blue/20 max-h-60 overflow-y-auto custom-scrollbar">
                <p className="text-xs font-mono text-cyan-300 leading-relaxed italic whitespace-pre-wrap">
                  {output}
                </p>
              </div>
              <button 
                onClick={() => { setOutput(''); setInput(''); }}
                className="w-full mt-4 py-2 text-[10px] text-gray-500 hover:text-neon-blue uppercase tracking-widest transition-colors"
              >
                Reset Diagnostic Uplink
              </button>
            </div>
          )}
        </div>
      )}
      
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className={`w-14 h-14 rounded-full flex items-center justify-center transition-all duration-500 shadow-lg ${isOpen ? 'bg-neon-violet' : 'bg-neon-blue'} hover:scale-110 active:scale-95`}
      >
        {isOpen ? (
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
        ) : (
          <div className="relative">
            <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
            <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full border-2 border-bg-dark"></span>
          </div>
        )}
      </button>
    </div>
  );
};

export default AiDiagnostics;
