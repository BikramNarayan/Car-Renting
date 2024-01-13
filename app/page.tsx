// "use client";
import { Footer, Hero, Searchbar } from "@/components";
import Image from "next/image";
import { HomeProps } from "@/types";
import { fetchCars } from "@/utils";
import CarCard from "@/components/CarCard";
export default async function Home({ searchParams }: HomeProps) {
  const allCars = await fetchCars({
    manufacturer: searchParams.manufacturer || "",
    year: searchParams.year || 2022,
    fuel: searchParams.fuel || "",
    limit: searchParams.limit || 10,
    model: searchParams.model || "",
  });
  // const isCarData = allCars.length ? true : false;
  return (
    <main className="">
      <Hero />
      <div className="ml-[7vw] ">
        <h2 className=" text-5xl font-bold mb-1">Car Catalogue</h2>
        <h3 className=" text-3xl text-slate-500 xl:ml-[30vw]">
          Explore out cars you might like
        </h3>
      </div>
      <Searchbar />
      <div className="flex flex-wrap p-10 gap-4 justify-center ">
        {allCars.map((e) => (
          <CarCard car={e} />
        ))}
      </div>
    </main>
  );
}
