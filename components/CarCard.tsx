import React from "react";
import Image from "next/image";
import { CarProps, calculateCarRent } from "@/utils";
interface CarCardProps {
  car: CarProps;
}
function CarCard({ car }: CarCardProps) {
  const { city_mpg, year, make, model, transmission, drive } = car;
  const carRent = calculateCarRent(city_mpg, year);
  return (
    <div className="m-5  rounded-md bg-slate-100 p-5 sm:w-[35vw] xl:w-[28vw]">
      <div>
        <div className="ml-2">
          <h2 className=" text-3xl capitalize">
            {make} {model}
          </h2>
          <p className=" flex mt-6 text-[32px] leading-[38px] font-extrabold">
            <span className=" self-start text-[14px] leading-[17px] font-semibold">
              $
            </span>
            {carRent}
            <span className=" self-end text-[14px] leading-[17px] font-medium ">
              /day
            </span>
          </p>
        </div>
        <div className="h-40 relative w-full">
          <Image fill className=" object-contain" src="/hero.png" />
        </div>
        <div className="flex justify-center gap-10 text-sm">
          <div>
            <Image width={20} height={20} src="/steering-wheel.svg" />
            {transmission == "a" ? "Automaitc" : "Manual"}
          </div>
          <div>
            <Image width={20} height={20} src="/tire.svg" />
            <span className="uppercase">{drive}</span>
          </div>
          <div>
            <Image width={20} height={20} src="/gas.svg" />
            {city_mpg}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CarCard;
