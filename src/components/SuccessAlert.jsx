import React from "react";
import { CheckCircle } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

const SuccessAlert = ({ onClose, childName }) => {
  const { language } = useLanguage();

  const message =
    language === "es"
      ? `¡Tu clase demo fue agendada con éxito para ${childName}! 🎉`
      : `Your demo class was successfully scheduled for ${childName}! 🎉`;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="bg-zinc-900 border border-green-500 text-white px-6 py-5 rounded-2xl shadow-2xl max-w-md w-full animate-fadeIn scale-95">
        <div className="flex items-start gap-4">
          <CheckCircle className="text-green-400 mt-1" size={28} />
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-green-400">
              {language === "es" ? "¡Listo!" : "Success!"}
            </h3>
            <p className="text-sm mt-1">{message}</p>
          </div>
          <button
            onClick={onClose}
            className="text-white text-xl font-bold hover:text-red-400 ml-2"
            aria-label="Cerrar mensaje de éxito"
          >
            ×
          </button>
        </div>
      </div>
    </div>
  );
};

export default SuccessAlert;