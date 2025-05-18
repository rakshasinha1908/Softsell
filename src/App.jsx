import React from "react";
import { useState } from "react";
import { motion } from "framer-motion";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <div className={darkMode ? "dark bg-gray-900 text-white" : "bg-white text-gray-900"}>
      <header className="p-6 text-center border-b border-gray-300 dark:border-gray-700">
        <h1 className="text-4xl font-bold">SoftSell</h1>
        <p className="text-lg mt-2">The simplest way to sell unused software licenses</p>
        <button
          className="mt-4 px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          onClick={toggleDarkMode}
        >
          Toggle {darkMode ? "Light" : "Dark"} Mode
        </button>
      </header>

      <main className="p-6 space-y-20 max-w-5xl mx-auto">
        {/* Hero Section */}
        <section className="text-center">
          <motion.h2 className="text-3xl font-semibold mb-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>Resell. Reuse. Revalue.</motion.h2>
          <p className="mb-4">Easily sell your unused software licenses in just a few clicks.</p>
          <button className="px-6 py-2 bg-green-600 text-white rounded hover:bg-green-700">Get a Quote</button>
        </section>

        {/* How It Works */}
        <section>
          <h3 className="text-2xl font-semibold text-center mb-6">How It Works</h3>
          <div className="flex flex-col md:flex-row justify-around text-center gap-6">
            <div>
              <div className="text-4xl mb-2">📤</div>
              <p>Upload License</p>
            </div>
            <div>
              <div className="text-4xl mb-2">📊</div>
              <p>Get Valuation</p>
            </div>
            <div>
              <div className="text-4xl mb-2">💸</div>
              <p>Get Paid</p>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section>
          <h3 className="text-2xl font-semibold text-center mb-6">Why Choose Us</h3>
          <div className="grid md:grid-cols-4 gap-4">
            <div className="p-4 bg-gray-100 dark:bg-gray-800 rounded">✅ Trusted by 10K+ users</div>
            <div className="p-4 bg-gray-100 dark:bg-gray-800 rounded">⚡ Fast Payments</div>
            <div className="p-4 bg-gray-100 dark:bg-gray-800 rounded">🔒 Secure Transactions</div>
            <div className="p-4 bg-gray-100 dark:bg-gray-800 rounded">📞 24/7 Support</div>
          </div>
        </section>

        {/* Testimonials */}
        <section>
          <h3 className="text-2xl font-semibold text-center mb-6">What Our Clients Say</h3>
          <div className="space-y-4">
            <blockquote className="border-l-4 pl-4 italic">"SoftSell helped me sell my licenses instantly!" - Jane Doe, IT Manager, TechCorp</blockquote>
            <blockquote className="border-l-4 pl-4 italic">"Incredible support and fast payout!" - John Smith, Freelancer, CodePro</blockquote>
          </div>
        </section>

        {/* Contact Form */}
        <section>
          <h3 className="text-2xl font-semibold text-center mb-6">Contact Us</h3>
          <form className="max-w-xl mx-auto space-y-4">
            <input type="text" placeholder="Name" className="w-full p-2 border dark:bg-gray-700" required />
            <input type="email" placeholder="Email" className="w-full p-2 border dark:bg-gray-700" required />
            <input type="text" placeholder="Company" className="w-full p-2 border dark:bg-gray-700" required />
            <select className="w-full p-2 border dark:bg-gray-700" required>
              <option>License Type</option>
              <option>Office Suite</option>
              <option>Antivirus</option>
              <option>Design Software</option>
            </select>
            <textarea placeholder="Message" className="w-full p-2 border dark:bg-gray-700" required></textarea>
            <button className="w-full px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">Submit</button>
          </form>
        </section>
      </main>

      <footer className="text-center p-4 mt-8 border-t dark:border-gray-700">
        © 2025 SoftSell. All rights reserved.
      </footer>
    </div>
  );
};

export default App;
