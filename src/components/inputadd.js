import React, { useState } from "react";

export const Input = () => {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  return (
    <div className=" flex items-center justify-center">
      
      {/* Card */}
      <div className="bg-white p-6 rounded-2xl shadow-lg w-72 text-center">
        
        {/* Count */}
        <span className="block text-2xl font-bold text-gray-800 mb-4">
          Count: {count}
        </span>

        {/* Input */}
        <div className="mb-4">
          <input
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Add step"
            type="number"
            value={step}
            onChange={(e) => setStep(Number(e.target.value))}
          />
        </div>

        {/* Buttons */}
        <div className="flex flex-col gap-3">
          
          <button
            className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 rounded-lg transition"
            onClick={() => setCount((prev) => prev + step)}
          >
            +{step}
          </button>

          <button
            className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 rounded-lg transition"
            onClick={() => {setCount((prev) => prev - step);
            }}
          >
            -{step}
          </button>

          <button
            className="bg-gray-500 hover:bg-gray-600 text-white font-semibold py-2 rounded-lg transition"
            onClick={() => {setCount(0);
              setStep(0);
            }}
          >
            Reset
          </button>

        </div>
      </div>
    </div>
  );
};
