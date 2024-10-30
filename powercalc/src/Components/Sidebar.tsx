// powercalc/src/components/Sidebar.tsx
import { motion } from 'framer-motion';
import Link from 'next/link';

interface SidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}

export default function Sidebar({ isOpen, toggleSidebar }: SidebarProps) {
  return (
    <motion.div
      initial={{ x: '-100%' }}
      animate={{ x: isOpen ? 0 : '-100%' }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      className="fixed top-0 left-0 w-64 h-full bg-[#ffffff] shadow-lg p-4"
    >
      <button onClick={toggleSidebar} className="text-[#000000] p-2 rounded-[8px] bg-transparent">
        <i className="fas fa-times"></i>
      </button> 
      <ul className="mt-4">
        <li className="mb-2">
          <Link href="/" className="text-[#000000] flex items-center">
            <i className="fas fa-calculator mr-2"></i> Power Calculator
          </Link>
        </li>
        <li className="mb-2">
          <Link href="/map" className="text-[#000000] flex items-center">
            <i className="fas fa-map-marker-alt mr-2"></i> Power Usage Map
          </Link>
        </li>
        <li className="mb-2">
          <Link href="/chat" className="text-[#000000] flex items-center">
            <i className="fas fa-comments mr-2"></i> AI Chat
          </Link>
        </li>
      </ul>
    </motion.div>
  );
}