
import React, { useState, useRef, useEffect } from 'react';
import { getGeminiResponse } from '../services/geminiService';
import { ChatMessage } from '../types';

interface SansarAIProps {
  isDarkMode?: boolean;
}

const SansarAI: React.FC<SansarAIProps> = ({ isDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: 'Namaste! Welcome to Our World. I am Sansar AI. How can I assist you with information about our supported living today?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsLoading(true);

    const response = await getGeminiResponse(userMsg);
    setMessages(prev => [...prev, { role: 'model', text: response }]);
    setIsLoading(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isOpen ? (
        <div className="w-80 md:w-96 h-[500px] bg-white dark:bg-zinc-900 rounded-3xl flex flex-col overflow-hidden shadow-[0_20px_60px_-15px_rgba(75,135,193,0.3)] border border-[#4B87C1]/10 dark:border-zinc-800 animate-in fade-in slide-in-from-bottom-10 duration-300">
          <div className="p-4 bg-[#4B87C1] dark:bg-zinc-800 border-b border-[#4B87C1]/20 dark:border-zinc-700 flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 rounded-lg bg-white dark:bg-zinc-900 p-1">
                 <img src="https://api.dicebear.com/7.x/initials/svg?seed=HS&backgroundColor=00E5D1" alt="AI Avatar" className="w-full h-full object-contain" />
              </div>
              <div>
                <span className="font-bold text-white block leading-none">Sansar AI</span>
                <span className="text-[10px] text-[#00E5D1] uppercase tracking-widest font-black">Helping Hands</span>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-white/70 hover:text-white transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4 bg-zinc-50/50 dark:bg-zinc-950/50">
            {messages.map((m, idx) => (
              <div key={idx} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] px-4 py-2.5 rounded-2xl text-sm leading-relaxed ${
                  m.role === 'user' 
                    ? 'bg-[#4B87C1] dark:bg-[#67a7e6] text-white rounded-br-none shadow-lg shadow-blue-900/10' 
                    : 'bg-white dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 rounded-bl-none border border-[#00E5D1]/20 dark:border-zinc-700 shadow-sm'
                }`}>
                  {m.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white dark:bg-zinc-800 px-4 py-2 rounded-2xl rounded-bl-none text-zinc-400 text-xs italic flex items-center space-x-2 border border-zinc-100 dark:border-zinc-700">
                  <div className="flex space-x-1">
                    <div className="w-1.5 h-1.5 bg-[#00E5D1] rounded-full animate-bounce"></div>
                    <div className="w-1.5 h-1.5 bg-[#4B87C1] rounded-full animate-bounce [animation-delay:0.2s]"></div>
                    <div className="w-1.5 h-1.5 bg-[#00E5D1] rounded-full animate-bounce [animation-delay:0.4s]"></div>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="p-4 border-t border-zinc-100 dark:border-zinc-800 flex items-center space-x-2 bg-white dark:bg-zinc-900">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Ask Sansar AI..."
              className="flex-1 bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-[#00E5D1] transition-colors text-zinc-800 dark:text-zinc-200"
            />
            <button 
              onClick={handleSend}
              className="p-2.5 bg-[#00E5D1] rounded-xl text-[#4B5320] hover:bg-[#00E5D1]/80 transition-all shadow-md active:scale-95"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
              </svg>
            </button>
          </div>
        </div>
      ) : (
        <button 
          onClick={() => setIsOpen(true)}
          className="w-16 h-16 bg-[#00E5D1] rounded-2xl flex items-center justify-center shadow-2xl shadow-cyan-500/30 dark:shadow-cyan-900/40 hover:scale-110 active:scale-95 transition-all text-[#4B5320]"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
          </svg>
        </button>
      )}
    </div>
  );
};

export default SansarAI;
