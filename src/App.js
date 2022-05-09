import Navbar from "./components/Navbar/Navbar";
import Cards from "./components/Cards/Cards";
import { useState } from "react";

export default function App() {
  const [result, setResult] = useState([]);

  return (
    <>
      <div>
        <Navbar setResult={setResult} />
        <Cards result={result} />
      </div>
    </>
  );
}
