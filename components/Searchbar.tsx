"use client";
import React, { useState } from "react";
import { SearchMaufacturer } from ".";
import Image from "next/image";
import { useRouter } from "next/navigation";
function Searchbar() {
  const [manufacturer, setManuFacturer] = useState("");
  const [model, setModel] = useState("");
  const router = useRouter();
  const handelSubmit = () => {
    console.log(model);
    console.log("heo");
    console.log(manufacturer);
    updateSearchParam(model, manufacturer);
  };
  const updateSearchParam = (model: string, manufacturer: string) => {
    const searchParam = new URLSearchParams(window.location.search);

    // Update or delete the 'model' search parameter based on the 'model' value
    searchParam.set("model", model);

    // Update or delete the 'manufacturer' search parameter based on the 'manufacturer' value
    searchParam.set("manufacturer", manufacturer);

    const newPathName = `/?${searchParam.toString()}`;
    router.push(newPathName);
  };
  return (
    <div className="flex xl:flex-row gap-10 justify-center sm:ml-[7vw] mt-2">
      <div className="relative max-w-xs">
        <SearchMaufacturer
          manufacturer={manufacturer}
          setManufacturer={setManuFacturer}
        />
      </div>
      <div className="relative max-w-xs">
        <Image
          src="/model-icon.png"
          width={25}
          height={25}
          className="w-6 h-6 text-gray-400 absolute left-3 inset-y-0 my-auto"
        />
        <input
          type="text"
          placeholder="Tiguan..."
          value={model}
          onChange={(e) => setModel(e.target.value)}
          className="w-full pl-12 pr-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
        />
      </div>
      <div className="relative max-w-xs cursor-default hover:cursor-default hover:scale-125">
        <button
          type="submit"
          onClick={handelSubmit}
          className=" cursor-default hover:"
        >
          <Image
            src="/magnifying-glass.svg"
            width={42}
            height={42}
            className=" text-gray-500 cursor-default hover:cursor-default bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
          />
        </button>
      </div>
    </div>
  );
}

export default Searchbar;
