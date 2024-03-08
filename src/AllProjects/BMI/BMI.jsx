import React from "react";
import { useState } from "react";

const BMI = () => {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBmi] = useState(0);
  const [msg, setMsg] = useState("");

  const totalBmi = () => {
    let new_weight = parseFloat(weight);
    let new_height = parseFloat(weight);
    if (
      isNaN(new_weight) ||
      isNaN(new_height) ||
      new_weight === 0 ||
      new_height === 0
    ) {
      alert("Please enter a valid number for weight and height.");
      return;
    }
    let bmi = (new_weight / (new_height * new_height)) * 703;
    setBmi(bmi.toFixed(2));

    if (bmi < 25) {
      setMsg("You are under weight");
    } else if (bmi >= 25 && bmi < 30) {
      setMsg("You are healthy weight person");
    } else {
      setMsg("Your are overweight");
    }
  };

  const reload = () => {
    window.Location.reload();
  };

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4">BMI Calculator</h2>
        <div className="mb-4">
          <label
            htmlFor="weight"
            className="block text-sm font-medium text-gray-700"
          >
            Weight (kg)
          </label>
          <input
            type="text"
            id="weight"
            value={weight}
            onChange={(e) => {
              setWeight(e.target.value);
            }}
            placeholder="Enter Your Weight"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="height"
            className="block text-sm font-medium text-gray-700"
          >
            Height (cm)
          </label>
          <input
            type="text"
            id="height"
            value={height}
            onChange={(e) => {
              setHeight(e.target.value);
            }}
            placeholder="Enter Your Height"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <button
          onClick={totalBmi}
          className="bg-indigo-500 text-white px-4 py-2 rounded-md mr-2 hover:bg-indigo-600"
        >
          Submit
        </button>
        <button
          onClick={reload}
          className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600"
        >
          Reload
        </button>
        <h3 className="mt-4">Your BMI = {bmi}</h3>
        <h3 className="mt-4">Your MSG = {msg}</h3>
      </div>
    </div>
  );
};

export default BMI;
