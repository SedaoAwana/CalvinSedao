"use client";
import React from 'react';
import Link from 'next/link';

const Header = ({ currentPage = 'home' }) => {
  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-md"></div>
          <span className="font-bold text-xl text-gray-900">Calvin • Startup Sensei</span>
        </div>
        <div className="hidden md:flex space-x-6 text-sm font-medium">
          {currentPage === 'home' ? (
            <>
              <a href="#journey" className="text-gray-700 hover:text-blue-600 transition">Journey</a>
              <a href="#services" className="text-gray-700 hover:text-blue-600 transition">Services</a>
              <Link href="/ai-accelerator" className="text-gray-700 hover:text-blue-600 transition">AI Accelerator</Link>
            </>
          ) : (
            <>
              <Link href="/" className="text-gray-700 hover:text-blue-600 transition">Home</Link>
              <Link href="/#journey" className="text-gray-700 hover:text-blue-600 transition">Journey</Link>
              <Link href="/#services" className="text-gray-700 hover:text-blue-600 transition">Services</Link>
            </>
          )}
          <a 
            href="https://calendar.app.google/HxbCctAhuPbuxHmCA" 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
          >
            Let&apos;s Talk Reality
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Header;
