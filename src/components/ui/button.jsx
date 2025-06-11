export function Button({ children, onClick, className = "", variant = "default", ...props }) {
    const base = "px-4 py-2 rounded font-semibold";
    const style =
      variant === "default"
        ? "bg-blue-600 text-white hover:bg-blue-700"
        : "bg-gray-200 text-black hover:bg-gray-300";
  
    return (
      <button onClick={onClick} className={`${base} ${style} ${className}`} {...props}>
        {children}
      </button>
    );
  }