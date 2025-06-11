import React from "react";

const countryOptions = [
  { label: "🇺🇸 United States (+1)", code: "+1" },
  { label: "🇲🇽 México (+52)", code: "+52" },
  { label: "🇨🇴 Colombia (+57)", code: "+57" },
  { label: "🇪🇸 España (+34)", code: "+34" },
  { label: "🇵🇪 Perú (+51)", code: "+51" },
  { label: "🇦🇷 Argentina (+54)", code: "+54" },
  { label: "🇨🇱 Chile (+56)", code: "+56" },
  { label: "🇧🇷 Brasil (+55)", code: "+55" },
  { label: "🇬🇹 Guatemala (+502)", code: "+502" },
  { label: "🇵🇦 Panamá (+507)", code: "+507" },
  { label: "🌍 Otro", code: "other" },
];

const PhoneInput = ({ countryCode, setCountryCode, phone, setPhone, customCode, setCustomCode }) => {
  const isOther = countryCode === "other";

  return (
    <div className="mb-4">
      <label className="block text-sm mb-1 text-gray-300">Phone Number</label>
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
        <div className="flex gap-2 w-full sm:w-auto">
          <select
            value={countryCode}
            onChange={(e) => setCountryCode(e.target.value)}
            className="bg-zinc-800 border border-white/20 text-white rounded p-2 w-full sm:w-auto"
          >
            {countryOptions.map(({ label, code }) => (
              <option key={code} value={code}>
                {label}
              </option>
            ))}
          </select>
          {isOther && (
            <input
              type="text"
              value={customCode}
              onChange={(e) => setCustomCode(e.target.value)}
              placeholder="+XX"
              className="w-20 bg-zinc-800 border border-white/20 text-white rounded p-2"
            />
          )}
        </div>

        <input
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="1234567890"
          className="flex-1 bg-zinc-800 border border-white/20 text-white rounded p-2"
        />
      </div>
    </div>
  );
};

export default PhoneInput;