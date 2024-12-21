import React from 'react';

export default function Hero() {
  return (
    <div id="home" className="relative h-screen">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80")',
        }}
      >
        <div className="absolute inset-0 bg-black opacity-40"></div>
      </div>
      <div className="relative h-full flex items-center justify-center text-center">
        <div className="max-w-3xl px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Transform Your Space Into Something Extraordinary
          </h1>
          <p className="text-xl text-gray-200 mb-8">
            Elevate your living spaces with our expert interior design services
          </p>
          <a
            href="#contact"
            className="bg-indigo-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-indigo-700 transition duration-300"
          >
            Get Started
          </a>
        </div>
      </div>
    </div>
  );
}