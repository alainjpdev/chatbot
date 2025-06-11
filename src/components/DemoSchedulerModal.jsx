import React, { useEffect, useState } from 'react';
import { Dialog, DialogContent } from './ui/dialog';
import { Button } from './ui/button';
import PhoneInput from './PhoneInput';
import LanguageSelector from './LanguageSelector';
import SuccessAlert from './SuccessAlert';

export default function DemoSchedulerModal({ onClose }) {
  const [selectedDate, setSelectedDate] = useState('2025-06-23');
  const [selectedHour, setSelectedHour] = useState('10');
  const [selectedMinutes, setSelectedMinutes] = useState('00');
  const [parentName, setParentName] = useState('');
  const [childName, setChildName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [countryCode, setCountryCode] = useState('+1');
  const [language, setLanguage] = useState('en');
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  const handleSchedule = () => {
    const datetime = `${selectedDate}T${selectedHour}:${selectedMinutes}:00-05:00`;
    if (!parentName || !childName || !email || !phone) {
      alert(language === 'es' ? 'Por favor completa todos los campos.' : 'Please complete all fields.');
      return;
    }

    if (!email.includes('@')) {
      alert(language === 'es' ? 'Correo inválido' : 'Invalid email');
      return;
    }

    fetch('https://algorithmicsaischool.app.n8n.cloud/webhook/book-demo-class', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        parentName,
        childName,
        email,
        phone: `${countryCode} ${phone}`,
        datetime,
      }),
    })
      .then(() => {
        setShowSuccess(true);
        setTimeout(() => {
          setShowSuccess(false);
          onClose();
        }, 3000);
      })
      .catch((err) => {
        alert('Error: ' + err.message);
      });
  };

  const hourOptions = Array.from({ length: 8 }, (_, i) => (10 + i).toString().padStart(2, '0'));
  const minuteOptions = ['00', '30'];

  return (
    <Dialog>
      <DialogContent className="w-full max-w-md md:max-w-xl lg:max-w-2xl bg-zinc-900 text-white p-6 flex flex-col justify-between border border-white/10 rounded-2xl md:min-h-fit min-h-[100dvh] md:rounded-2xl rounded-none">
        <div>
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">
              {language === 'es' ? 'Agenda tu clase demo gratuita' : 'Book Your Free Demo Class'}
            </h2>
            <button
              onClick={onClose}
              className="text-white text-2xl leading-none focus:outline-none"
              aria-label="Cerrar"
            >
              ×
            </button>
          </div>

          <LanguageSelector setLanguage={setLanguage} setCountryCode={setCountryCode} />

          <div className="mt-4 space-y-4">
            <div>
              <label className="block text-sm mb-1 text-gray-300">
                {language === 'es' ? 'Nombre del padre/madre' : "Parent's Name"}
              </label>
              <input
                type="text"
                className="w-full bg-zinc-800 border border-white/20 text-white rounded p-2"
                value={parentName}
                onChange={(e) => setParentName(e.target.value)}
              />
            </div>

            <div>
              <label className="block text-sm mb-1 text-gray-300">
                {language === 'es' ? 'Nombre del niño/a' : "Child's Name"}
              </label>
              <input
                type="text"
                className="w-full bg-zinc-800 border border-white/20 text-white rounded p-2"
                value={childName}
                onChange={(e) => setChildName(e.target.value)}
              />
            </div>

            <div>
              <label className="block text-sm mb-1 text-gray-300">Email</label>
              <input
                type="email"
                className="w-full bg-zinc-800 border border-white/20 text-white rounded p-2"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <PhoneInput phone={phone} setPhone={setPhone} countryCode={countryCode} setCountryCode={setCountryCode} />

            <div>
              <label className="block text-sm mb-1 text-gray-300">
                {language === 'es' ? 'Fecha' : 'Date'}
              </label>
              <input
                type="date"
                className="w-full bg-zinc-800 border border-white/20 text-white rounded p-2"
                min="2025-06-23"
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
              />
            </div>

            <div className="flex gap-4">
              <div className="w-1/2">
                <label className="block text-sm mb-1 text-gray-300">
                  {language === 'es' ? 'Hora' : 'Hour'}
                </label>
                <select
                  value={selectedHour}
                  onChange={(e) => setSelectedHour(e.target.value)}
                  className="w-full bg-zinc-800 border border-white/20 text-white rounded p-2"
                >
                  {hourOptions.map((h) => (
                    <option key={h} value={h}>{h}</option>
                  ))}
                </select>
              </div>
              <div className="w-1/2">
                <label className="block text-sm mb-1 text-gray-300">
                  {language === 'es' ? 'Minutos' : 'Minutes'}
                </label>
                <select
                  value={selectedMinutes}
                  onChange={(e) => setSelectedMinutes(e.target.value)}
                  className="w-full bg-zinc-800 border border-white/20 text-white rounded p-2"
                >
                  {minuteOptions.map((m) => (
                    <option key={m} value={m}>{m}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6">
          <Button
            className="w-full text-white bg-green-600 hover:bg-green-700"
            onClick={handleSchedule}
          >
            {language === 'es' ? 'Confirmar clase demo' : 'Confirm Demo Class'}
          </Button>
          <Button
            variant="ghost"
            className="w-full mt-2 text-white border border-white/20 hover:bg-zinc-800"
            onClick={onClose}
          >
            {language === 'es' ? 'Cerrar' : 'Close'}
          </Button>
        </div>

        {showSuccess && <SuccessAlert language={language} childName={childName} />}
      </DialogContent>
    </Dialog>
  );
}