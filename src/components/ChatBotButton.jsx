import React, { useState, useRef, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext'; // <-- IMPORTA CONTEXTO

const ChatBotButton = () => {
  const { language } = useLanguage(); // <-- OBTIENE IDIOMA
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      sender: 'bot',
      text:
        language === 'es'
          ? 'Hola 👋 ¿En qué puedo ayudarte?'
          : 'Hi 👋 How can I help you?',
    },
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [isKeyboardOpen, setIsKeyboardOpen] = useState(false);

  const inputRef = useRef(null);
  const messagesEndRef = useRef(null);
  const audioRef = useRef(null);

  const toggleChat = () => {
    setIsOpen((prev) => !prev);
    setTimeout(() => inputRef.current?.focus(), 100);
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  useEffect(() => {
    audioRef.current = new Audio('/sounds/tok-tok.mp3');
    audioRef.current.volume = 0.3;
  }, []);

  useEffect(() => {
    const handleResize = () => {
      const heightDiff = window.innerHeight < window.outerHeight - 100;
      setIsKeyboardOpen(heightDiff);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const playSound = () => {
    audioRef.current?.play().catch((err) =>
      console.warn('🔇 Error al reproducir sonido:', err)
    );
  };

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = { sender: 'user', text: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setLoading(true);
    scrollToBottom();

    try {
      const res = await fetch(
        'https://algorithmicsaischool.app.n8n.cloud/webhook/chatbot',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ message: input }),
        }
      );

      if (!res.ok) throw new Error(`HTTP ${res.status}`);

      const data = await res.json();
      const reply =
        data.response ||
        data.output ||
        (language === 'es'
          ? 'Lo siento, no pude procesarlo.'
          : "Sorry, I couldn't understand that.");

      playSound();
      setMessages((prev) => [...prev, { sender: 'bot', text: reply }]);
      scrollToBottom();
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        {
          sender: 'bot',
          text:
            language === 'es'
              ? '⚠️ Error al conectar con el servidor.'
              : '⚠️ Error connecting to the server.',
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      sendMessage();
    }
  };

  const t = {
    title: language === 'es' ? 'Asistente de IA' : 'AI Assistant',
    placeholder: language === 'es' ? 'Escribe tu mensaje...' : 'Type your message...',
    send: language === 'es' ? 'Enviar' : 'Send',
    loading: language === 'es' ? 'Escribiendo...' : 'Typing...',
  };

  return (
    <>
      <button
        onClick={toggleChat}
        aria-label="Abrir asistente de IA"
        className="fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full bg-black shadow-xl flex items-center justify-center group hover:scale-110 transition-transform duration-300 border border-gray-800 focus:outline-none"
      >
        <div className="absolute w-full h-full rounded-full animate-pulse bg-gradient-to-br from-purple-500 via-indigo-500 to-blue-500 opacity-30 blur-md"></div>
        <span className="relative text-white text-2xl group-hover:scale-125 transition-transform">
          🤖
        </span>
      </button>

      {isOpen && (
        <div
          className={`${
            isKeyboardOpen ? 'absolute bottom-0' : 'fixed bottom-24'
          } right-6 w-[360px] bg-zinc-900 border border-gray-800 rounded-2xl shadow-2xl z-50 flex flex-col overflow-hidden`}
          style={{ height: isKeyboardOpen ? '60vh' : '500px' }}
        >
          <div className="flex items-center justify-between p-4 bg-gradient-to-r from-indigo-600 to-purple-700 text-white">
            <h2 className="text-sm font-semibold tracking-wide">{t.title}</h2>
            <button
              onClick={toggleChat}
              className="text-white text-lg font-bold hover:text-red-400 focus:outline-none"
              aria-label="Cerrar chat"
            >
              ×
            </button>
          </div>

          <div className="flex-1 p-4 overflow-y-auto space-y-2 text-sm text-white bg-black scrollbar-thin scrollbar-thumb-zinc-700">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`p-2 rounded-lg max-w-[80%] whitespace-pre-wrap break-words ${
                  msg.sender === 'user'
                    ? 'ml-auto bg-blue-600'
                    : 'mr-auto bg-gray-700'
                }`}
              >
                {msg.text}
              </div>
            ))}
            {loading && (
              <div className="text-center text-gray-400 text-xs animate-pulse">
                {t.loading}
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <div className="p-2 bg-zinc-800 flex items-center gap-2">
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyPress}
              placeholder={t.placeholder}
              className="flex-1 px-3 py-2 rounded-lg bg-zinc-700 text-white text-sm outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <button
              onClick={sendMessage}
              className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 rounded-lg text-white text-sm font-medium focus:outline-none"
            >
              {t.send}
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatBotButton;