"use client"
import { useState } from 'react';
import { motion } from 'framer-motion';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Navbar from '../../Components/Navbar';
import Sidebar from '../../Components/Sidebar';
import PowerCalculatorForm from '@/Components/PowerCalculatorForm';

export default function Example() {
  const [usageHours, setUsageHours] = useState(0);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="bg-[#ffffff] min-h-screen flex flex-col items-center justify-center p-8">
        <Navbar toggleSidebar={toggleSidebar} />
        <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
    </div>
  );
}
