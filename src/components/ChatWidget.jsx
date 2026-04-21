import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MdChat, MdClose, MdSend } from 'react-icons/md';

const QUICK_REPLIES = [
  "What services do you offer?",
  "How much does a website cost?",
  "How long does a project take?",
  "How do I get started?",
];

const isBusinessHours = () => {
  const now = new Date();
  const pt = new Date(now.toLocaleString('en-US', { timeZone: 'America/Los_Angeles' }));
  const day = pt.getDay();
  const hour = pt.getHours();
  return day >= 1 && day <= 5 && hour >= 9 && hour < 18;
};

const getGreeting = () => {
  if (isBusinessHours()) {
    return "Hi! 👋 I'm the KBL Web Solutions assistant. How can I help you today?";
  }
  return "Hi! 👋 Our team is offline right now, but I'm here to help. Ask me anything and we'll follow up by email if needed!";
};

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([{ role: 'assistant', content: getGreeting() }]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showQuickReplies, setShowQuickReplies] = useState(true);
  const [hasNotification, setHasNotification] = useState(false);
  const [autoOpened, setAutoOpened] = useState(false);
  const messagesEndRef = useRef(null);

  // Auto-open after 30 seconds if user hasn't opened it yet
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!autoOpened) {
        setIsOpen(true);
        setAutoOpened(true);
        setHasNotification(false);
      }
    }, 30000);
    return () => clearTimeout(timer);
  }, [autoOpened]);

  // Show notification dot after 5 seconds if still closed
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!isOpen) setHasNotification(true);
    }, 5000);
    return () => clearTimeout(timer);
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) setHasNotification(false);
  }, [isOpen]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isLoading]);

  const sendText = async (text) => {
    if (!text.trim() || isLoading) return;
    setShowQuickReplies(false);

    const userMessage = { role: 'user', content: text.trim() };
    const updatedMessages = [...messages, userMessage];
    setMessages(updatedMessages);
    setInput('');
    setIsLoading(true);

    try {
      const apiMessages = updatedMessages
        .filter((m, i) => !(i === 0 && m.role === 'assistant'))
        .map(({ role, content }) => ({ role, content }));

      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: apiMessages }),
      });

      const data = await response.json();
      setMessages(prev => [...prev, { role: 'assistant', content: data.reply }]);
    } catch {
      setMessages(prev => [
        ...prev,
        { role: 'assistant', content: "Sorry, I'm having trouble. Please call us at (925) 334-8542!" },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendText(input);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">

      {/* Chat window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.95 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="w-80 bg-gray-900 border border-gray-700 rounded-2xl shadow-2xl shadow-black/50 flex flex-col overflow-hidden"
            style={{ height: '500px' }}
          >
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-3 bg-gray-800 border-b border-gray-700 flex-shrink-0">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-yellow-400 flex items-center justify-center text-gray-900 font-extrabold text-sm select-none">
                  K
                </div>
                <div>
                  <p className="text-white text-sm font-semibold leading-tight">KBL Assistant</p>
                  <div className="flex items-center gap-1.5 mt-0.5">
                    <span className={`w-1.5 h-1.5 rounded-full ${isBusinessHours() ? 'bg-green-400' : 'bg-yellow-400'}`} />
                    <span className="text-gray-400 text-xs">
                      {isBusinessHours() ? 'Online' : 'After hours'}
                    </span>
                  </div>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-white transition-colors p-1">
                <MdClose size={20} />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto px-4 py-4 flex flex-col gap-3">
              {messages.map((msg, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2 }}
                  className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[82%] px-3.5 py-2.5 text-sm leading-relaxed rounded-2xl ${
                      msg.role === 'user'
                        ? 'bg-yellow-400 text-gray-900 rounded-br-sm font-medium'
                        : 'bg-gray-800 text-gray-200 rounded-bl-sm'
                    }`}
                  >
                    {msg.content}
                  </div>
                </motion.div>
              ))}

              {/* Quick reply buttons — shown only before first user message */}
              <AnimatePresence>
                {showQuickReplies && !isLoading && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.2 }}
                    className="flex flex-col gap-2 mt-1"
                  >
                    {QUICK_REPLIES.map((reply) => (
                      <button
                        key={reply}
                        onClick={() => sendText(reply)}
                        className="text-left text-xs text-yellow-300 border border-yellow-400/30 bg-yellow-400/5 hover:bg-yellow-400/15 px-3 py-2 rounded-xl transition-colors duration-200"
                      >
                        {reply}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Typing indicator */}
              {isLoading && (
                <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="flex justify-start">
                  <div className="bg-gray-800 px-4 py-3 rounded-2xl rounded-bl-sm">
                    <div className="flex gap-1 items-center">
                      {[0, 150, 300].map((delay) => (
                        <span
                          key={delay}
                          className="w-2 h-2 bg-gray-500 rounded-full animate-bounce"
                          style={{ animationDelay: `${delay}ms` }}
                        />
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="px-3 py-3 border-t border-gray-700 bg-gray-800 flex-shrink-0">
              <div className="flex items-center gap-2 bg-gray-900 border border-gray-700 rounded-xl px-3 py-2 focus-within:border-yellow-400/60 transition-colors">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Ask us anything..."
                  className="flex-1 bg-transparent text-white text-sm placeholder-gray-500 outline-none"
                />
                <button
                  onClick={() => sendText(input)}
                  disabled={!input.trim() || isLoading}
                  className="text-yellow-400 hover:text-yellow-300 disabled:text-gray-600 transition-colors flex-shrink-0"
                >
                  <MdSend size={20} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating button */}
      <div className="relative">
        {/* Notification dot */}
        <AnimatePresence>
          {hasNotification && !isOpen && (
            <motion.span
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full border-2 border-gray-900 z-10"
            />
          )}
        </AnimatePresence>

        <motion.button
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.94 }}
          onClick={() => setIsOpen(!isOpen)}
          className="w-14 h-14 bg-yellow-400 hover:bg-yellow-300 rounded-full shadow-xl shadow-yellow-400/30 flex items-center justify-center transition-colors duration-200"
        >
          <AnimatePresence mode="wait">
            {isOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.15 }}
              >
                <MdClose size={26} className="text-gray-900" />
              </motion.div>
            ) : (
              <motion.div
                key="chat"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.15 }}
              >
                <MdChat size={26} className="text-gray-900" />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>
      </div>
    </div>
  );
};

export default ChatWidget;
