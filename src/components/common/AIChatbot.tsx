import React, { useState, useRef, useEffect } from 'react';
import { Bot, X, Send, User, Sparkles } from 'lucide-react';
import { PERSONAL_INFO, GOOGLE_DRIVE_RESUME_URL } from '../../data/portfolioData';

interface Message {
  sender: 'bot' | 'user';
  text: string;
}

export const AIChatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      sender: 'bot',
      text: `Hi! I'm Sarvesh's AI Assistant. Ask me anything about his technical skills, projects, experience at Sofzenix, or resume!`
    }
  ]);
  const [input, setInput] = useState('');
  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userQuery = input.trim();
    const newMessages: Message[] = [...messages, { sender: 'user', text: userQuery }];
    setMessages(newMessages);
    setInput('');

    setTimeout(() => {
      let botResponse = getBotResponse(userQuery.toLowerCase());
      setMessages((prev) => [...prev, { sender: 'bot', text: botResponse }]);
    }, 350);
  };

  const getBotResponse = (query: string): string => {
    if (query.includes('skill') || query.includes('language') || query.includes('python') || query.includes('tech')) {
      return `Sarvesh is skilled in Python, Java, JavaScript, C, C++, HTML/CSS, Node.js, Express.js, MongoDB, MySQL, Git, NumPy, and Pandas.`;
    }
    if (query.includes('project') || query.includes('tenant') || query.includes('eventx') || query.includes('fake review')) {
      return `Sarvesh has built 3 key projects: 1) Tenant Bridge (Smart rental system), 2) EventX (Campus event manager for 800+ users), and 3) Fake Review Detection (NLP classification pipeline).`;
    }
    if (query.includes('experience') || query.includes('sofzenix') || query.includes('work')) {
      return `Sarvesh served as Backend Developer Trainee at SOFZENIX IT SOLUTIONS LLP (Mar-Jun 2026), building RESTful Node.js/Express APIs and MongoDB databases.`;
    }
    if (query.includes('education') || query.includes('college') || query.includes('gpa')) {
      return `Sarvesh is pursuing B.E. in Computer Science at RNSIT with an 8.5/10 GPA!`;
    }
    if (query.includes('resume') || query.includes('gdrive') || query.includes('pdf')) {
      return `You can download Sarvesh's stored resume from Google Drive using the top button or via: ${GOOGLE_DRIVE_RESUME_URL}`;
    }
    return `Sarvesh is a Computer Science student at RNSIT & Backend Developer Trainee. Ask me about his projects, skills, or experience!`;
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="flex items-center space-x-2 px-4 py-3 rounded-full bg-gradient-to-r from-sky-500 to-indigo-600 text-white font-semibold shadow-lg shadow-sky-500/25 hover:scale-105 transition-all"
        >
          <Sparkles className="w-4 h-4 text-amber-300 animate-pulse" />
          <span className="text-xs">Ask AI Assistant</span>
        </button>
      )}

      {isOpen && (
        <div className="w-80 sm:w-96 bg-white rounded-2xl border border-slate-200 shadow-2xl overflow-hidden flex flex-col h-[440px]">
          {/* Header */}
          <div className="bg-gradient-to-r from-sky-500 to-indigo-600 text-white px-4 py-3 flex items-center justify-between shadow-xs">
            <div className="flex items-center space-x-2">
              <div className="w-7 h-7 rounded-lg bg-white/20 flex items-center justify-center text-white backdrop-blur-xs">
                <Bot className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-xs font-bold">Sarvesh AI Assistant</h3>
                <span className="text-[10px] text-sky-100 font-mono">Online • Resume Assistant</span>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-white/80 hover:text-white">
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-slate-50 text-xs">
            {messages.map((msg, i) => (
              <div key={i} className={`flex space-x-2 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                {msg.sender === 'bot' && (
                  <div className="w-6 h-6 rounded-full bg-sky-100 flex items-center justify-center text-sky-600 shrink-0">
                    <Bot className="w-3.5 h-3.5" />
                  </div>
                )}
                <div
                  className={`p-3 rounded-2xl max-w-[80%] leading-relaxed ${
                    msg.sender === 'user'
                      ? 'bg-sky-600 text-white rounded-br-none'
                      : 'bg-white border border-slate-200 text-slate-700 rounded-bl-none shadow-xs'
                  }`}
                >
                  {msg.text}
                </div>
                {msg.sender === 'user' && (
                  <div className="w-6 h-6 rounded-full bg-sky-600 flex items-center justify-center text-white shrink-0">
                    <User className="w-3.5 h-3.5" />
                  </div>
                )}
              </div>
            ))}
            <div ref={chatEndRef} />
          </div>

          {/* Input */}
          <form onSubmit={handleSend} className="p-3 bg-white border-t border-slate-200 flex space-x-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask a question..."
              className="flex-1 bg-slate-100 border border-slate-200 rounded-xl px-3 py-2 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-sky-500"
            />
            <button type="submit" className="p-2 rounded-xl bg-sky-600 text-white hover:bg-sky-700 transition-colors">
              <Send className="w-3.5 h-3.5" />
            </button>
          </form>
        </div>
      )}
    </div>
  );
};
