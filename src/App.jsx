import { useState } from "react";
import Countries from "./components/Countries";
import Filter from "./components/Filter";
import Navbar from "./components/Navbar";

function App() {
  const [input, setInput] = useState("");
  const [country, setCountry] = useState("");
  const [region, setRegion] = useState("all");
  const [mode, setMode] = useState(false);

  return (
    <div
      className={`${mode ? "bg-slate-800 text-white" : "bg-white text-black"}`}
    >
      <Navbar setMode={setMode} mode={mode} />
      <Filter
        mode={mode}
        input={input}
        setInput={setInput}
        setCountry={setCountry}
        setRegion={setRegion}
      />
      <Countries country={country} input={input} region={region} mode={mode} />
    </div>
  );
}

export default App;
