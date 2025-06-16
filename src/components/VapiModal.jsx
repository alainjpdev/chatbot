import React, { useEffect, useRef, useState } from 'react';
import { Dialog, DialogContent } from './ui/dialog';
import Vapi from '@vapi-ai/web';
import { Button } from './ui/button';
import { useLanguage } from '../contexts/LanguageContext';

const VapiModal = ({ onClose }) => {
  const { language } = useLanguage();

  const [isCalling, setIsCalling] = useState(false);
  const [starting, setStarting] = useState(false);
  const [messages, setMessages] = useState([]);
  const [callEndedMsg, setCallEndedMsg] = useState(false);

  const vapiRef = useRef(null);
  const messagesEndRef = useRef(null);
  const isMountedRef = useRef(false);
  const hasStartedRef = useRef(false);
  const isEndingRef = useRef(false);

  const apiKey = '153e512d-5bea-445f-a1f8-e625bc5d6e72';
  const agentId = 'ed60c22b-f462-4140-b53d-3aad924581c4';

  useEffect(() => {
    setMessages([]);
    setCallEndedMsg(false);
    hasStartedRef.current = false;
    setIsCalling(false);
    setStarting(false);
    isEndingRef.current = false;
  }, []);

  useEffect(() => {
    if (isMountedRef.current) return;
    isMountedRef.current = true;

    const vapi = new Vapi(apiKey);
    vapiRef.current = vapi;

    vapi.on('call-start', () => {
      setIsCalling(true);
      setStarting(false);
      hasStartedRef.current = true;
      setCallEndedMsg(false);
      isEndingRef.current = false;
    });

    vapi.on('call-end', () => {
      setIsCalling(false);
      hasStartedRef.current = false;
      setCallEndedMsg(true);
      handleClose();
    });

    vapi.on('call-disconnected', () => {
      handleClose();
    });

    vapi.on('message', (data) => {
      if (data.transcriptType !== 'final') return;

      if (data.type === 'transcript') {
        setMessages((prev) => [...prev, { type: 'user', text: `🧍 ${data.transcript}` }]);
      } else if (data.type === 'agent') {
        setMessages((prev) => [...prev, { type: 'agent', text: `🤖 ${data.transcript}` }]);

        const text = data.transcript.toLowerCase();
        const goodbyeTriggers = ['goodbye', 'bye', 'have a great day', 'take care', 'talk to you later'];
        const isGoodbye = goodbyeTriggers.some((phrase) => text.includes(phrase));

        if (isGoodbye && vapiRef.current && isCalling && !isEndingRef.current) {
          isEndingRef.current = true;
          try {
            vapiRef.current.stop();
          } catch {}
          setTimeout(() => {
            if (isCalling) handleClose();
          }, 2000);
        }
      }
    });

    vapi.on('tool-call', (toolCall) => {
      setMessages((prev) => [
        ...prev,
        {
          type: 'system',
          text: `🛠️ Tool called: **${toolCall.name}**\n📦 Arguments:\n\`\`\`json\n${JSON.stringify(toolCall.arguments, null, 2)}\n\`\`\``,
        },
      ]);
    });

    return () => {
      if (vapiRef.current) {
        vapiRef.current.stop();
        vapiRef.current.destroy?.();
        vapiRef.current = null;
      }
      isMountedRef.current = false;
      hasStartedRef.current = false;
    };
  }, []);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isCalling]);

  const startCall = async () => {
    if (hasStartedRef.current || isCalling || !vapiRef.current) return;
    setStarting(true);
    try {
      await vapiRef.current.start({
        assistant: agentId,
        user: {
          id: 'user-camila-123',
          name: 'Camila',
        },
        metadata: {
          language: language,
        },
      });
    } catch (error) {
      console.error('Error al iniciar llamada:', error);
      setStarting(false);
    }
  };

  const stopCall = () => {
    if (!isCalling || !vapiRef.current) return;
    vapiRef.current.stop();
  };

  const handleClose = () => {
    try {
      vapiRef.current?.stop();
      vapiRef.current?.destroy?.();
      vapiRef.current = null;
    } catch {}
    setMessages([]);
    setCallEndedMsg(false);
    setIsCalling(false);
    setStarting(false);
    hasStartedRef.current = false;
    isEndingRef.current = false;
    isMountedRef.current = false;
    onClose?.();
  };

  const t = {
    title: language === 'es' ? '🎙️ Asistente AlgoBot' : '🎙️ AlgoBot Assistant',
    start: language === 'es' ? '🎤 Iniciar' : '🎤 Start',
    stop: language === 'es' ? '🛑 Detener' : '🛑 Stop',
    starting: language === 'es'
      ? '🎤 Iniciando llamada... Permite acceso al micrófono.'
      : '🎤 Starting call... Please allow microphone access.',
    empty: language === 'es'
      ? 'Aquí aparecerán los mensajes...'
      : 'Messages will appear here...',
    ended: language === 'es'
      ? '✅ Llamada finalizada. ¡Hasta pronto!'
      : '✅ Call ended. See you soon!',
  };

  return (
    <Dialog>
      <DialogContent className="max-w-2xl w-full p-6 bg-[#121212] text-white rounded-2xl shadow-lg border border-white/10">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">{t.title}</h2>
          <button onClick={handleClose} className="text-white text-xl hover:scale-110">✖</button>
        </div>

        <div className="flex gap-4 mb-4">
          <Button onClick={startCall} disabled={isCalling || starting}>{t.start}</Button>
          <Button onClick={stopCall} disabled={!isCalling} variant="destructive">{t.stop}</Button>
        </div>

        {starting && (
          <div className="flex items-center justify-center gap-2 text-yellow-400 mb-2">
            <div className="w-4 h-4 border-2 border-yellow-400 border-t-transparent rounded-full animate-spin" />
            <p className="text-sm">{t.starting}</p>
          </div>
        )}

        <div className="h-64 overflow-y-auto bg-[#1a1a1a] rounded-lg p-4 text-sm border border-white/10 space-y-2">
          {messages.length === 0 && !starting && (
            <p className="text-white/40 italic">{t.empty}</p>
          )}
          {messages.map((msg, i) => (
            <p
              key={i}
              className={`text-white whitespace-pre-wrap ${
                msg.type === 'user'
                  ? 'text-right'
                  : msg.type === 'agent'
                  ? 'text-left'
                  : 'text-center text-blue-400'
              }`}
            >
              {msg.text}
            </p>
          ))}
          {callEndedMsg && (
            <p className="text-center text-green-400 mt-4">{t.ended}</p>
          )}
          <div ref={messagesEndRef} />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default VapiModal;