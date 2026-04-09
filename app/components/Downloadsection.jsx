import React from 'react'

function Downloadsection() {
  return (
    <div>
    
    <section className="min-h-screen bg-linear-to-r from-gray-100 to-blue-200 flex items-center px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center w-full">
        
        {/* LEFT CONTENT */}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-blue-700 leading-tight">
            What are you waiting for?
            <br />
            Download Kashflow!
          </h1>

          <p className="mt-6 text-gray-700 max-w-md">
            Download our fintech app and take advantage right away!
            Start controlling your spending, budgeting.
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

export default Downloadsection
