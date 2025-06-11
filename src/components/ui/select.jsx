import React from "react";

export function Select({ children }) {
  return <div className="relative w-full">{children}</div>;
}

export function SelectTrigger({ children, className = "" }) {
  return <div className={`border rounded p-2 ${className}`}>{children}</div>;
}

export function SelectValue({ placeholder }) {
  return <span className="text-gray-600">{placeholder}</span>;
}

export function SelectContent({ children }) {
  return <div className="mt-1 border rounded bg-white">{children}</div>;
}

export function SelectItem({ value, children, onClick }) {
  return (
    <div
      className="px-3 py-2 cursor-pointer hover:bg-gray-100"
      onClick={() => onClick(value)}
    >
      {children}
    </div>
  );
}