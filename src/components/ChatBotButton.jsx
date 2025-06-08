import React, { useState, useRef, useEffect } from 'react';

const ChatBotButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { sender: 'bot', text: 'Hola 👋 ¿En qué puedo ayudarte?' }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const inputRef = useRef(null);
  const messagesEndRef = useRef(null);

  const toggleChat = () => {
    setIsOpen(!isOpen);
    console.log('🟣 Chat toggled:', !isOpen ? 'opened' : 'closed');
    setTimeout(() => {
      inputRef.current?.focus();
    }, 100);
  };

  const scrollToBottom = () => {
    console.log('📦 Scrolling to bottom');
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const sendMessage = async () => {
    if (!input.trim()) {
      console.warn('⚠️ Input vacío. No se envía nada.');
      return;
    }

    const newUserMsg = { sender: 'user', text: input };
    setMessages(prev => [...prev, newUserMsg]);
    console.log('📤 Usuario envió mensaje:', input);

    setInput('');
    setLoading(true);

    try {
      const res = await fetch('https://algorithmicsaischool.app.n8n.cloud/webhook/chatbot', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: input }),
      });

      console.log('📬 Respuesta RAW del webhook:', res);

      const data = await res.json();
      console.log('✅ JSON recibido:', data);

      const botReply = data.response || data.output || 'Lo siento, no pude procesarlo.';
      const newBotMsg = { sender: 'bot', text: botReply };

      setMessages(prev => [...prev, newBotMsg]);

    } catch (err) {
      console.error('❌ Error durante fetch:', err);
      setMessages(prev => [...prev, { sender: 'bot', text: '⚠️ Error al conectar con el servidor.' }]);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      console.log('⌨️ Enter presionado. Enviando...');
      sendMessage();
    }
  };

  return (
    <>
      <button
        onClick={toggleChat}
        aria-label="Abrir asistente de IA"
        className="fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full bg-black shadow-xl flex items-center justify-center group hover:scale-110 transition-transform duration-300 border border-gray-800 focus:outline-none"
      >
        <div className="absolute w-full h-full rounded-full animate-pulse bg-gradient-to-br from-purple-500 via-indigo-500 to-blue-500 opacity-30 blur-md"></div>
        <span className="relative text-white text-2xl transition-transform group-hover:scale-125">🤖</span>
      </button>

      {isOpen && (
        <div className="fixed bottom-24 right-6 w-[360px] h-[500px] bg-zinc-900 border border-gray-800 rounded-2xl shadow-2xl z-50 flex flex-col overflow-hidden">
          <div className="flex items-center justify-between p-4 bg-gradient-to-r from-indigo-600 to-purple-700 text-white">
            <h2 className="text-sm font-semibold tracking-wide">AI Assistant</h2>
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
                  msg.sender === 'user' ? 'ml-auto bg-blue-600' : 'mr-auto bg-gray-700'
                }`}
              >
                {msg.text}
              </div>
            ))}
            {loading && <div className="text-center text-gray-400 text-xs">Pensando...</div>}
            <div ref={messagesEndRef} />
          </div>

          <div className="p-2 bg-zinc-800 flex items-center gap-2">
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyPress}
              placeholder="Escribe tu mensaje..."
              className="flex-1 px-3 py-2 rounded-lg bg-zinc-700 text-white text-sm outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <button
              onClick={sendMessage}
              className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 rounded-lg text-white text-sm font-medium focus:outline-none"
            >
              Enviar
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatBotButton;