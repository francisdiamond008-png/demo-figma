import React from 'react'

function Footer() {
  return (
    <div>

    <footer className="bg-blue-900 text-white px-6 py-16">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12">
        
        {/* LEFT SECTION */}
        <div>
          <h2 className="text-2xl font-bold mb-4">KASHflow</h2>
          <p className="text-sm leading-relaxed text-gray-200">
            All your transactions, receipts and expenses in one smart app.
            Control your budget in real-time. Transfer funds to any account
            anywhere in the world. Convert funds to any currency in real-time.
          </p>

          <p className="mt-8 text-sm text-gray-300">
            © Copyright 2022 by olamide_ui. All rights reserved
          </p>
        </div>

        {/* SUPPORT */}
        <div>
          <h3 className="font-semibold mb-4">Support</h3>
          <ul className="space-y-3 text-gray-200 text-sm">
            <li className="hover:text-white cursor-pointer">Help</li>
            <li className="hover:text-white cursor-pointer">FAQ</li>
            <li className="hover:text-white cursor-pointer">Contact form</li>
          </ul>
        </div>

        {/* PRODUCT */}
        <div>
          <h3 className="font-semibold mb-4">Product</h3>
          <ul className="space-y-3 text-gray-200 text-sm">
            <li className="hover:text-white cursor-pointer">About</li>
            <li className="hover:text-white cursor-pointer">Service</li>
            <li className="hover:text-white cursor-pointer">Features</li>
          </ul>
        </div>

        {/* LEGAL + ADDRESS */}
        <div>
          <h3 className="font-semibold mb-4">Legal</h3>
          <ul className="space-y-3 text-gray-200 text-sm mb-6">
            <li className="hover:text-white cursor-pointer">Terms</li>
            <li className="hover:text-white cursor-pointer">Privacy policy</li>
            <li className="hover:text-white cursor-pointer">Cookies Policy</li>
          </ul>

          <h3 className="font-semibold mb-3">Address</h3>
          <p className="text-sm text-gray-200">
            3044 Hill Road California
          </p>
          <p className="text-sm text-gray-200 mt-2">
            408 842 4008
          </p>
          <p className="text-sm text-gray-200 mt-2">
            kashflow@support.com
          </p>
        </div>

      </div>
    </footer>
  
    </div>
  )
}

export default Footer
