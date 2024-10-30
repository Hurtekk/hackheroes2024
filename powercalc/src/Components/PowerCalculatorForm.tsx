// powercalc/src/components/PowerCalculatorForm.tsx
import { useState } from 'react';

export default function PowerCalculatorForm() {
  const [usageHours, setUsageHours] = useState(0);

  return (
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
  );
}