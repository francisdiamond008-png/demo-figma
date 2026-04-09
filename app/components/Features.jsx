import React from 'react'

function Features() {
  return (
    <div>
    
    <section className="bg-[#f5f7ff] py-16 px-6 md:px-16">
      
      <div className="grid md:grid-cols-2 gap-10 items-center">
        
        {/* LEFT - CARDS */}
        <div className="relative flex justify-center">

          {/* BACK CARD */}
          <div className="absolute rotate-6 translate-x-10 translate-y-6 w-80 h-48 bg-gray-900 rounded-2xl shadow-xl"></div>

          {/* FRONT CARD */}
          <div className="relative w-80 h-48 bg-linear-to-r from-blue-800 to-indigo-600 rounded-2xl shadow-2xl p-5 text-white">

            <div className="flex justify-between items-center">
              <span className="text-sm">Credit Card</span>
              <div className="w-8 h-8 bg-white rounded-full"></div>
            </div>

            <div className="mt-6 tracking-widest">
              **** **** **** 1568
            </div>

            <div className="flex justify-between mt-6 text-sm">
              <div>
                <p className="opacity-70">Cardholder</p>
                <p className="font-semibold">OLASUNMI O. AJIBOLA</p>
              </div>
              <div>
                <p className="opacity-70">Expiry</p>
                <p className="font-semibold">12/24</p>
              </div>
            </div>

            {/* Mastercard circles */}
            <div className="absolute bottom-4 right-4 flex">
              <div className="w-5 h-5 bg-red-500 rounded-full"></div>
              <div className="w-5 h-5 bg-yellow-400 rounded-full -ml-2"></div>
            </div>
          </div>
        </div>

        {/* RIGHT - TEXT */}
        <div>
          <h2 className="text-3xl md:text-5xl font-bold text-blue-700 leading-tight">
            One tool, one way to <br />
            control transactions
          </h2>

          <p className="mt-6 text-gray-600 max-w-lg text-lg">
            All your transactions, receipts and expenses in one smart app.
            Control your budget in real-time. Transfer funds to any account 
            anywhere in the world. Convert funds to any currency in real-time.
          </p>

          <button className="mt-8 bg-blue-700 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-800 transition">
            Read More
          </button>
        </div>
      </div>
    </section>

    </div>
  )
}

export default Features
