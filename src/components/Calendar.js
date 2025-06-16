import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

import { Button } from './ui/button';
import PhoneInput from './PhoneInput';
import SuccessAlert from './SuccessAlert';
import { useLanguage } from '../contexts/LanguageContext'; // <-- IMPORTA CONTEXTO

export default function Calendar() {
  const { language } = useLanguage(); // <-- USA CONTEXTO

  const [selectedDate, setSelectedDate] = useState('2025-06-23');
  const [selectedHour, setSelectedHour] = useState('10');
  const [selectedMinutes, setSelectedMinutes] = useState('00');
  const [parentName, setParentName] = useState('');
  const [childName, setChildName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [countryCode, setCountryCode] = useState('+1');
  const [showSuccess, setShowSuccess] = useState(false);

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
      .then(async (res) => {
        if (!res.ok) {
          const errorData = await res.json();
          throw new Error(errorData.message || 'Something went wrong');
        }
        setShowSuccess(true);
        setTimeout(() => setShowSuccess(false), 3000);
      })
      .catch((err) => {
        alert('Error: ' + err.message);
      });
  };

  const hourOptions = Array.from({ length: 8 }, (_, i) => (10 + i).toString().padStart(2, '0'));
  const minuteOptions = ['00', '30'];

  return (
    <div className="bg-zinc-950 text-white min-h-screen w-full flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-md md:max-w-xl lg:max-w-2xl bg-zinc-900 p-6 border border-white/10 rounded-2xl relative">
        <Link to="/" className="absolute top-4 left-4 text-white hover:text-gray-300">
          <ArrowLeft size={24} />
        </Link>

        <div className="text-center mb-4">
          <h2 className="text-xl font-semibold">
            {language === 'es' ? 'Agenda tu clase demo gratuita' : 'Book Your Free Demo Class'}
          </h2>
        </div>

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

          <PhoneInput
            phone={phone}
            setPhone={setPhone}
            countryCode={countryCode}
            setCountryCode={setCountryCode}
          />

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

        <div className="mt-6">
          <Button
            className="w-full text-white bg-green-600 hover:bg-green-700"
            onClick={handleSchedule}
          >
            {language === 'es' ? 'Confirmar clase demo' : 'Confirm Demo Class'}
          </Button>
        </div>

        {showSuccess && <SuccessAlert language={language} childName={childName} />}
      </div>
    </div>
  );
}