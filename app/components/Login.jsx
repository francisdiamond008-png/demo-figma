import React from 'react'

function Login() {
  return (
    <div>
    
    <main className="min-h-screen bg-gray-100 flex items-center justify-center px-6">
      <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl w-full">
        
        {/* Left - Phone Card */}
        <div className="bg-white rounded-3xl shadow-xl p-6 w-[320px] mx-auto">
          <h2 className="text-center font-semibold mb-4">TRANSFER</h2>

          <div className="space-y-4">
            <input
              type="text"
              placeholder="Enter Receiver’s Account Number"
              className="w-full border rounded-lg px-3 py-2 text-sm"
            />

            <select className="w-full border rounded-lg px-3 py-2 text-sm">
              <option>Select Receiver’s Bank</option>
              <option>Bank A</option>
              <option>Bank B</option>
            </select>

            <input
              type="number"
              placeholder="Enter Amount to be sent"
              className="w-full border rounded-lg px-3 py-2 text-sm"
            />

            <input
              type="password"
              placeholder="Transfer Pin"
              className="w-full border rounded-lg px-3 py-2 text-sm tracking-widest"
            />
          </div>

          <button className="mt-6 w-full bg-blue-600 text-white py-3 rounded-xl font-medium hover:bg-blue-700">
            Transfer
          </button>
        </div>

        {/* Right - Text Content */}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-blue-700 leading-tight">
            Transfer money to various Banks in quick steps
          </h1>

          <p className="mt-6 text-gray-600 max-w-md">
            All your transactions, receipts and expenses in one smart app.
            Control your budget in real-time. Transfer funds to any account
            anywhere in the world. Convert funds to any currency in real-time.
          </p>

          <button className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700">
            Read More
          </button>
        </div>

      </div>
    </main>
  
    </div>
  )
}

export default Login
