// powercalc/src/components/Navbar.tsx
export default function Navbar({ toggleSidebar }) {
    return (
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
    );
  }