"use client"
import React, { useState } from 'react'


function Hero() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div>
  
      <nav className=" top-0 left-0 right-0 bg-linear-to-r from-white to-blue-100  z-50 px-6 md:px-16 py-4">
        <div className="flex items-center justify-between">
      
          <div className="text-2xl md:text-3xl font-bold text-blue-700">KASHflow</div>
          
          
          <ul className="hidden md:flex items-center space-x-8">
            <li><a href="#about" className="text-gray-700 hover:text-blue-700 transition-colors">About</a></li>
            <li><a href="#services" className="text-gray-700 hover:text-blue-700 transition-colors">Services</a></li>
            <li><a href="#features" className="text-gray-700 hover:text-blue-700 transition-colors">Features</a></li>
            <li><a href="#contact" className="text-gray-700 hover:text-blue-700 transition-colors">Contact</a></li>
          </ul>
          
          
          <div className="hidden md:flex items-center space-x-4">
            <button className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-blue-700 border border-gray-300 rounded-lg hover:bg-gray-50 transition-all">
              Sign up
            </button>
            <button className="px-6 py-2 text-sm font-bold text-white bg-blue-700 hover:bg-blue-600 rounded-lg shadow transition-all">
              Login
            </button>
          </div>
          
  
          <div className="md:hidden flex items-center space-x-2">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-1 focus:outline-none"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
        
        {isMenuOpen && (
          <div className="md:hidden mt-4 space-y-4 pb-4">
            <a href="#about" className="block py-2 text-gray-700 hover:text-blue-700">About</a>
            <a href="#services" className="block py-2 text-gray-700 hover:text-blue-700">Services</a>
            <a href="#features" className="block py-2 text-gray-700 hover:text-blue-700">Features</a>
            <a href="#contact" className="block py-2 text-gray-700 hover:text-blue-700">Contact</a>
            <div className="flex flex-col space-y-2 pt-2">
              <button className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:text-blue-700 border border-gray-300 rounded-lg hover:bg-gray-50">
                Sign up
              </button>
              <button className="w-full text-left px-6 py-2 text-sm font-bold text-white bg-blue-700 hover:bg-blue-600 rounded-lg shadow">
                Login
              </button>
            </div>
          </div>
        )}
      </nav>

      
      
    <section className="min-h-screen bg-linear-to-r from-white to-blue-100 flex items-center px-6 md:px-16">

      
      <div className="grid md:grid-cols-2 gap-10 items-center w-full">

        <div>
          <h1 className="text-4xl md:text-6xl font-bold text-blue-700 leading-tight">
            We know how <br />
            to keep your <br />
            finances in check
          </h1>

          <p className="mt-6 text-gray-600 text-lg max-w-md">
            Control your spending. We have a better solution for you. 
            Meet your new mobile app that will make your finances easy and soft.
            Feel the technology and check our innovation
          </p>

          
          <div className="flex gap-4 mt-8">
            <button className="bg-black text-white cursor-pointer px-6 py-3 rounded-lg">
              Google Play
            </button>
            <button className="bg-black text-white px-6 py-3 rounded-lg">
              App Store
            </button>
          </div>
        </div>

        
        <div className="relative flex justify-center">
          
          {/* PHONE */}
          <div className="w-72 h-130 bg-white rounded-3xl shadow-2xl p-4">
            
            {/* HEADER */}
            <div className="flex justify-between items-center mb-4">
              <span className="font-semibold">Hello ADENIYI</span>
              <span>🔔</span>
            </div>

            {/* BALANCE CARD */}
            <div className="bg-blue-700 text-white p-5 rounded-xl shadow-lg">
              <p className="text-sm">Available Balance</p>
              <h2 className="text-2xl font-bold mt-2">$390,000.00</h2>
            </div>

            {/* QUICK ACTIONS */}
            <div className="grid grid-cols-3 gap-3 mt-6">
              {["Transfer", "Convert", "Bills"].map((item, i) => (
                <div
                  key={i}
                  className="bg-gray-100 p-3 rounded-lg text-center text-sm"
                >
                  {item}
                </div>
              ))}
            </div>

            {/* TRANSACTIONS */}
            <div className="mt-6 space-y-3">
              <div className="flex justify-between bg-gray-50 p-3 rounded-lg">
                <span>Payday</span>
                <span className="text-green-600">+$3,500</span>
              </div>

              <div className="flex justify-between bg-gray-50 p-3 rounded-lg">
                <span>Subscription</span>
                <span className="text-red-500">-$250</span>
              </div>
            </div>
          </div>

          {/* FLOATING CARDS */}
          <div className="hidden md:block absolute -left-10 top-32 bg-white shadow-lg p-3 rounded-lg text-sm">
            Payday +$3,500
          </div>

          <div className="hidden md:block absolute -right-10 bottom-20 bg-white shadow-lg p-3 rounded-lg text-sm">
            Transfer -$1,000
          </div>
        </div>
      </div>
    </section>
  
    </div>
  )
}

export default Hero

