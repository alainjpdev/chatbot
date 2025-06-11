const LanguageSelector = ({ language, setLanguage, setCountryCode }) => {
    return (
      <div className="flex items-center justify-center gap-4 mb-6">
        <button
          onClick={() => {
            setLanguage("en");
            setCountryCode("+1");
          }}
          className={`text-3xl transition-transform hover:scale-110 ${
            language === "en" ? "opacity-100" : "opacity-50"
          }`}
          aria-label="Switch to English"
        >
          🇺🇸
        </button>
  
        <button
          onClick={() => {
            setLanguage("es");
            setCountryCode("+52");
          }}
          className={`text-3xl transition-transform hover:scale-110 ${
            language === "es" ? "opacity-100" : "opacity-50"
          }`}
          aria-label="Cambiar a Español"
        >
          🇲🇽
        </button>
      </div>
    );
  };
  
  export default LanguageSelector;