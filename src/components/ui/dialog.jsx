export function Dialog({ children }) {
    return <>{children}</>;
  }
  
  export function DialogTrigger({ children }) {
    return <>{children}</>;
  }
  
  export function DialogContent({ children, className = "" }) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm text-white">
        <div
          className={`bg-[#0f0f0f] text-white rounded-2xl shadow-xl w-full max-w-md p-6 ${className}`}
        >
          {children}
        </div>
      </div>
    );
  }