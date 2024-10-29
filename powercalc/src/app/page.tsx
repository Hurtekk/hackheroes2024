"use client"
import { useState } from 'react';
import { motion } from 'framer-motion';
import '@fortawesome/fontawesome-free/css/all.min.css';

export default function Example() {
  const [usageHours, setUsageHours] = useState(0);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="bg-[#ffffff] min-h-screen flex flex-col items-center justify-center p-8">
      <nav className="bg-[#ffffff] w-full p-4 shadow-md flex justify-between items-center mb-8 fixed top-0 left-0">
        <div className="flex items-center">
          <button onClick={toggleSidebar} className="mr-4 text-[#000000] p-2 rounded-[8px] bg-transparent">
            <i className="fas fa-bars"></i>
          </button>
          <h1 className="text-xl font-bold text-[#000000]">
            <i className="fas fa-bolt"></i> Power Calculator
          </h1>
        </div>
        <div className="flex items-center ml-auto">
          <button className="text-[#4a56e2] p-2 rounded-[8px] bg-transparent">
            <i className="fas fa-cog"></i> Settings
          </button>
        </div>
      </nav>
      <motion.div
        initial={{ x: '-100%' }}
        animate={{ x: isSidebarOpen ? 0 : '-100%' }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        className="fixed top-0 left-0 w-64 h-full bg-[#ffffff] shadow-lg p-4"
      >
        <button onClick={toggleSidebar} className="text-[#000000] p-2 rounded-[8px] bg-transparent">
          <i className="fas fa-times"></i>
        </button>
        <ul className="mt-4">
          <li className="mb-2">
            <a href="#" className="text-[#000000] flex items-center">
              <i className="fas fa-calculator mr-2"></i> Power Calculator
            </a>
          </li>
          <li className="mb-2">
            <a href="#" className="text-[#000000] flex items-center">
              <i className="fas fa-map-marker-alt mr-2"></i> Power Usage Map
            </a>
          </li>
          <li className="mb-2">
            <a href="#" className="text-[#000000] flex items-center">
              <i className="fas fa-comments mr-2"></i> AI Chat
            </a>
          </li>
        </ul>
      </motion.div>
      <div className="bg-[#ffffff] p-8 rounded-[8px] shadow-md w-full max-w-md mt-20">
        <h2 className="text-2xl font-bold text-[#000000] mb-4">
          Calculate Power Consumption
        </h2>
        <div className="mb-4">
          <label className="block text-[#000000] mb-2">Device Name</label>
          <input
            type="text"
            className="w-full border border-[#e0e0e0] rounded-[4px] p-2"
          />
        </div>
        <div className="mb-4">
          <label className="block text-[#000000] mb-2">Power Usage (Watts)</label>
          <input
            type="text"
            className="w-full border border-[#e0e0e0] rounded-[4px] p-2"
          />
        </div>
        <div className="mb-4">
          <label className="block text-[#000000] mb-2">Usage Hours per Day</label>
          <input
            type="range"
            className="w-full"
            min="0"
            max="24"
            value={usageHours}
            onChange={(e) => setUsageHours(Number(e.target.value))}
          />
          <p className="text-[#000000] mt-2">Selected Hours: {usageHours} hours/day</p>
        </div>
        <button className="bg-[#4a56e2] text-white w-full py-2 rounded-[4px]">
          Calculate
        </button>
        <div className="mt-4 bg-[#f0f4ff] p-4 rounded-[8px] shadow-inner">
          <h3 className="text-lg font-bold text-[#000000] mb-2">
            Estimated Consumption
          </h3>
          <p className="text-2xl font-bold text-[#000000]">0 kWh</p>
        </div>
      </div>
    </div>
  );
}
