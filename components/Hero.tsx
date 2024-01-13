import React from "react";
import Image from "next/image";
function Hero() {
  return (
    <div className="flex w-full xl:flex-row flex-col gap-5 mb-3 ">
      <div className="flex-1 xl:pt-36 pt-20 padding-x relative ml-10">
        <h1 className=" font-extrabold text-5xl xl:text-7xl sm:-[64px] ">
          Find, book, rent a car—quick and super easy!
        </h1>
        <p className="text-[27px] font-light mt-5 xl:mt-10">
          Streamline your car rental experience with our effortless booking
          process.
        </p>
        <button className="px-6 py-3.5 text-white bg-blue-600 rounded-full duration-150 hover:bg-indigo-500 active:bg-indigo-700 xl:mt-10 mt-5">
          Explore Cars
        </button>
      </div>
      <div className="xl:flex-[1.5] flex flex-end xl:h-[95vh] h-[590px] justify-end">
        <div className="relative w-[90%] xl:h-[80%]">
          <Image src="/hero.png" fill className=" object-contain" />
        </div>
      </div>
    </div>
  );
}

export default Hero;
