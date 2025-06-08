import React from 'react';

const VeoModelsSection = () => {
  return (
    <section className="section bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center animate-fade-in">
          <span className="text-white">Learn more about our </span>
          <span className="text-gradient">Veo Models</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="card p-8 animate-fade-in">
            <h3 className="text-2xl font-bold mb-4">Veo 2</h3>
            <p className="text-gray-300 mb-4">Create high-quality, 8-second videos.</p>
          </div>
          <div className="card p-8 animate-fade-in" style={{ animationDelay: '100ms' }}>
            <h3 className="text-2xl font-bold mb-4">Veo 3</h3>
            <p className="text-gray-300 mb-4">Create high-quality, 8-second videos with sound using our state-of-the-art video generation model.</p>
            <ul className="space-y-2">
              <li className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-green-500" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>State of the art video quality</span>
              </li>
              <li className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-green-500" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Native audio generation</span>
              </li>
              <li className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-green-500" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Limited access with Google AI Pro Plan</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VeoModelsSection;
