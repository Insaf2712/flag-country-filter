import React from "react";
import { BiSearch } from "react-icons/bi";

const Filter = ({ input, setInput, setCountry, setRegion, mode }) => {
  const settingValue = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      setCountry(input);
      setInput("");
    }
  };

  return (
    <section className="flex  flex-col gap-6 md:flex-row md:justify-between px-8 md:px-12 lg:px-18 py-18">
      <div
        className={`flex items-center gap-3 h-fit rounded shadow w-full px-4 lg:w-1/3 ${mode ? "bg-slate-700" : "bg-transparent text-black"}`}
      >
        <BiSearch className="text-gray-500" />
        <form onKeyDown={settingValue}>
          <input
            type="text"
            className="py-3 outline-0 w-full"
            placeholder="Search for a country... "
            onChange={(e) => setInput(e.target.value)}
            value={input}
            autoComplete="country"
          />
        </form>
      </div>
      <select
        onChange={(e) => setRegion(e.target.value)}
        className={`outline-0 px-4 shadow rounded w-fit py-2 ${mode ? "bg-slate-700 text-white" : "bg-white text-black"}`}
      >
        <option value="" selected disabled hidden className="text-gray-500">
          Filter by Region
        </option>
        <option value="Africa">Africa</option>
        <option value="Americas">Americas</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </select>
    </section>
  );
};

export default Filter;
