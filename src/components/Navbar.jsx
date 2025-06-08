import React, { useState } from 'react';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="navbar fixed top-0 left-0 w-full py-4 px-6 z-50 flex items-center justify-between">
      <a href="#" className="flex items-center">
        {/*<img src="https://www.gstatic.com/lamda/images/gemini_sparkle_v002_576px.svg" alt="Gemini Logo" className="h-8" />*/}
        <span className="text-white text-xl ml-2 font-bold">Algorithmics AI</span>
      </a>
      <div className={`${mobileMenuOpen ? 'flex' : 'hidden'} md:flex flex-col md:flex-row md:items-center md:space-x-6 absolute md:relative top-16 md:top-0 left-0 w-full md:w-auto bg-black md:bg-transparent p-4 md:p-0`}>
        <div className="relative group">
          <button className="nav-link text-white flex items-center">
            {/*What Algorithmics AI Can Do
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
            */}
          </button>
        </div>
        <a href="#packages" className="nav-link text-white py-2 md:py-0">Subscriptions</a>
        <div className="relative group">
          {/*<button className="nav-link text-white flex items-center">
            About Algorithmics AI
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>*/}
        </div>
       {/* <a href="#" className="btn-primary text-white px-6 py-2 rounded-full font-medium mt-4 md:mt-0">Try  Algorithmics AI</a>*/}
      </div>
      <button 
        className="md:hidden text-white"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
    </nav>
  );
};

export default Navbar;
