import React, { useEffect, useState } from "react";
import data from "../../data.json";

const Countries = ({ input, region, mode }) => {
  const [filterdata, setFilterdata] = useState([]);

  useEffect(() => {
    let filtered = data;

    if (region !== "all") {
      filtered = filtered.filter((d) => d.region === region);
    }

    if (input.trim() !== "") {
      filtered = filtered.filter((d) =>
        d.name.toLowerCase().includes(input.toLowerCase()),
      );
    }

    setFilterdata(filtered);
  }, [input, region]);

  return (
    <section className="grid grid-cols-1 gap-6 w-full px-8 md:px-12 lg:px-18 md:grid-cols-3 lg:grid-cols-4">
      {filterdata.map((d) => (
        <div
          key={d.alpha3Code}
          className={`flex flex-col mx-auto gap-2 w-4/5 h-fit md:w-full rounded shadow overflow-hidden ${mode ? "bg-slate-700 text-white" : "bg-white text-black"}`}
        >
          <img
            src={d.flag}
            alt={d.capital}
            className="w-auto h-auto aspect-video object-cover"
          />

          <div className="flex flex-col gap-2 p-4">
            <h1 className="text-lg font-semibold">{d.name}</h1>

            <div className="space-y-2">
              <p className="flex items-center gap-1  text-xs">
                <span className="font-semibold ">Population:</span>
                {d.population}
              </p>

              <p className="flex items-center gap-1  text-xs">
                <span className="font-semibold ">Region:</span>
                {d.region}
              </p>

              <p className="flex items-center gap-1  text-xs">
                <span className="font-semibold ">Capital:</span>
                {d.capital}
              </p>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Countries;
