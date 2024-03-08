import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import BMI from "./AllProjects/BMI/BMI";
import Calculator from "./AllProjects/Calculator/Calculator";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <BMI /> */}
      <Calculator />
    </>
  );
}

export default App;
