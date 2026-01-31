import { useState } from "react";
import Countries from "./components/Countries";
import Filter from "./components/Filter";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Country from "./components/Country";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const [input, setInput] = useState("");
  const [country, setCountry] = useState("");
  const [region, setRegion] = useState("all");
  const [mode, setMode] = useState(false);

  return (
    <div
      className={`${mode ? "bg-slate-800 text-white" : "bg-white text-black"}`}
    >
      <BrowserRouter>
        <Navbar setMode={setMode} mode={mode} />
        <Routes>
          <Route
            path="/"
            element={
              <Home
                mode={mode}
                input={input}
                setInput={setInput}
                setCountry={setCountry}
                setRegion={setRegion}
                country={country}
                region={region}
              />
            }
          />
          <Route path="/country/:name" element={<Country />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
