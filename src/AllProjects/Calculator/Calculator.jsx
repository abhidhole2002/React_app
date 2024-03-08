import React, { useState } from "react";

const Calculator = () => {
  const [insrest, setIntrest] = useState("");
  const [principal, setPrincipal] = useState("");
  const [rate, setRate] = useState("");
  const [time, setTime] = useState("");

  const reset = () => {
    setIntrest("");
    setPrincipal("");
    setRate("");
    setTime("");
  };

  const totalIntrest = () => {
    let SI =
      (parseFloat(principal) * parseFloat(rate) * parseFloat(time)) / 100;
    setIntrest(SI);
  };
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <div className="bg-gray-100 rounded-md shadow-lg flex flex-col justify-center items-center text-left px-10 py-10">
        <div>
          <h1 className="text-2xl font-bold text-center mb-2">
            Simple Calculator
          </h1>
          <h6 className="text-sm text-gray-600">
            Calculate your simple interest
          </h6>
        </div>
        <div className="bg-green-200 px-8 py-4 text-center mt-4 mb-4 rounded-lg shadow-md">
          <h1 className="text-2xl font-bold text-green-800">₹{insrest}</h1>
          <h3 className="text-sm text-gray-600">Total simple interest</h3>
        </div>
        <div className="flex flex-col">
          <input
            type="text"
            placeholder="Principal"
            value={principal}
            onChange={(e) => setPrincipal(e.target.value)}
            className="m-2 py-2 rounded-sm px-4 text-sm w-60 focus:outline-none focus:ring focus:border-blue-300"
          />
          <input
            type="text"
            placeholder="Rate"
            value={rate}
            onChange={(e) => setRate(e.target.value)}
            className="m-2 py-2 rounded-sm px-4 text-sm w-60 focus:outline-none focus:ring focus:border-blue-300"
          />
          <input
            type="text"
            placeholder="Time (years)"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            className="m-2 py-2 rounded-sm px-4 text-sm w-60 focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>
        <div className="text-sm flex">
          <button
            onClick={totalIntrest}
            className="bg-blue-500 text-white px-4 py-2 mx-3 flex-grow rounded-sm text-sm font-semibold hover:bg-blue-700 transition duration-300"
          >
            CALCULATE
          </button>
          <button
            onClick={reset}
            className="bg-red-500 text-white px-4 py-2 mx-3 flex-grow rounded-sm text-sm font-semibold hover:bg-red-700 transition duration-300"
          >
            RESET
          </button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
