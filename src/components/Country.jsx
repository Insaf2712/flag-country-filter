import React, { useEffect, useState } from "react";
import { BiArrowBack } from "react-icons/bi";
import data from "../../data.json";
import { Link, useParams } from "react-router-dom";

const Text = ({ title, text }) => {
  return (
    <p className="space-x-2 font-semibold text-sm">
      {title}:<span className="text-gray-500 ">{text}</span>
    </p>
  );
};

const Border = ({ country }) => {
  return (
    <span className="shadow shadow-gray-400 rounded px-3 py-1">{country}</span>
  );
};

const Country = () => {
  const [obj, setObj] = useState({});
  const { name } = useParams();
  useEffect(() => {
    const country = data.find(
      (c) => c.name.toLowerCase() === name.toLowerCase(),
    );
    setObj(country);
  }, []);
  return (
    <div className="px-8 md:px-12 lg:px-18 py-16 space-y-15">
      <Link
        to="/"
        className="text-sm shadow shadow-gray-400  bg-white flex items-center gap-2 px-8 py-2 cursor-pointer w-fit rounded"
      >
        <BiArrowBack />
        Back
      </Link>
      <div className="flex items-center  gap-30 py-8 justify-between ">
        <img src={obj.flag} alt="" className="w-3/6 h-fit drop-shadow-2xl " />
        <div className="flex flex-col gap-6  w-full ">
          <h2 className="text-xl font-bold ">{obj.name}</h2>
          <div className="flex  gap-2 justify-between w-full ">
            <div className="flex flex-col gap-4 w-full">
              <Text title="Native Name" text={obj.nativeName} />
              <Text title="Population" text={obj.population} />
              <Text title="Region" text={obj.region} />
              <Text title="Sub Region" text={obj.subregion} />
              <Text title="Capital" text={obj.capital} />
            </div>
            <div className="flex flex-col gap-4 w-full">
              <Text title="Top Level Domain" text={obj.topLevelDomain} />
              {obj.currencies?.map((c) => (
                <Text title="Currencies" text={c.name} />
              ))}
              {obj.languages?.map((c) => (
                <Text title="Languages" text={c.name} />
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-2 mt-10">
            {obj.borders && (
              <>
                <h1 className="font-semibold text-sm">Border countries:</h1>
                <div className="flex flex-wrap gap-2">
                  {obj.borders?.map((c) => (
                    <Border country={c} />
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Country;
