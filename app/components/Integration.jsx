import React from 'react'

function Integration() {
  return (
    <div>
    
    <section className="bg-linear-to-b from-white to-blue-100 py-20 px-6 md:px-16 space-y-24">

      {/* ===== TOP SECTION ===== */}
      <div className="grid md:grid-cols-2 gap-10 items-center">
        
        {/* LEFT TEXT */}
        <div>
          <h2 className="text-3xl md:text-5xl font-bold text-blue-700 leading-tight">
            The integration of <br /> technology and design
          </h2>

          <p className="mt-6 text-gray-600 text-lg max-w-md">
            The latest technology makes it possible to design useful solutions.
            We keep up with current trends.
          </p>

           <div className="flex gap-4 mt-8">

            <button className="bg-black w-50 h-16.25 text-white px-6 py-3 rounded-lg">
             <div> Get it on </div>
            <div>  Google Play</div>
            </button>
            <button className="bg-black w-50 h-16.25 text-white px-6 py-3 rounded-lg">
             <div> Download on </div>
            <div> App store </div>
            </button>
          </div>
        </div>

        {/* RIGHT PHONE MOCKUPS */}
        <div className="relative flex justify-center">
          
          {/* BACK PHONE */}
          <div className="absolute rotate-6 translate-x-10 w-64 h-125 bg-white rounded-3xl shadow-xl"></div>

          {/* FRONT PHONE */}
          <div className="relative -rotate-6 w-64 h-125 bg-white rounded-3xl shadow-2xl p-4">
            
            <div className="bg-blue-700 text-white p-4 rounded-xl">
              <p className="text-sm">Available Balance</p>
              <h2 className="text-xl font-bold">$390,000.00</h2>
            </div>

            <div className="grid grid-cols-3 gap-3 mt-4 text-xs">
              {["Transfer", "Convert", "Bills"].map((item, i) => (
                <div key={i} className="bg-gray-100 p-2 rounded-lg text-center">
                  {item}
                </div>
              ))}
            </div>

            <div className="mt-4 space-y-2 text-sm">
              <div className="flex justify-between bg-gray-50 p-2 rounded">
                <span>Payday</span>
                <span className="text-green-600">+$3,500</span>
              </div>
              <div className="flex justify-between bg-gray-50 p-2 rounded">
                <span>Transfer</span>
                <span className="text-red-500">-$1,000</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ===== BOTTOM SECTION ===== */}
      <div className="grid md:grid-cols-2 gap-40 ">
        
        {/* LEFT CARD UI */}
        <div className="bg-white p-6 rounded-2xl shadow-xl w-full max-w-sm mx-auto">
          
          <h3 className="text-center text-gray-700 mb-4">CARDS</h3>

          {/* CARD */}
          <div className="bg-linear-to-r from-blue-800 to-indigo-600 text-white p-4 rounded-xl">
            <p className="text-sm">Credit Card</p>
            <p className="mt-4 tracking-widest">**** **** **** 1568</p>

            <div className="flex justify-between mt-4 text-xs">
              <span>ADENIYI JONATHAN</span>
              <span>12/24</span>
            </div>
          </div>

          {/* ACTION BUTTONS */}
          <div className="flex justify-between mt-4">
            <button className="bg-red-500 text-white px-4 py-2 rounded-lg text-sm">
              Remove
            </button>
            <button className="bg-blue-700 text-white px-4 py-2 rounded-lg text-sm">
              Add Card
            </button>
          </div>
        </div>

        {/* RIGHT TEXT */}
        <div>
          <h2 className="text-3xl md:text-5xl font-bold text-blue-700 leading-tight">
            Add various Bank cards <br /> to your account
          </h2>

          <p className="mt-6 text-gray-600 text-lg max-w-md">
            Get to add all of your bank cards to your wallet for easy transactions.
          </p>

          
           <div className="flex gap-4 mt-8">

            <button className="bg-black w-50 h-16.25 text-white px-6 py-3 rounded-lg">
             <div> Get it on </div>
            <div>  Google Play</div>
            </button>
            <button className="bg-black w-50 h-16.25 text-white px-6 py-3 rounded-lg">
             <div> Download on </div>
            <div> App store </div>
            </button>
          </div>







        </div>
      </div>
    </section>

    </div>
  )
}

export default Integration
