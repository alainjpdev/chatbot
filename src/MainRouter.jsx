// src/MainRouter.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App'; // ⬅️ Este es tu MainPageLayout
import Calendar from './components/Calendar';
import { LanguageProvider } from './contexts/LanguageContext';

export default function MainRouter() {
  return (
    <LanguageProvider>
      <Router>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/calendar" element={<Calendar />} />
        </Routes>
      </Router>
    </LanguageProvider>
  );
}