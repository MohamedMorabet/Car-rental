"use client";

import { useEffect, useState } from "react";
import Image from "@/node_modules/next/image";

import Hero from "@/components/Hero";
import CustomFilter from "@/components/CustomFilter";
import SearchBar from "@/components/SearchBar";
import { fetchCars } from "@/utils/index";
import CarCard from "@/components/CarCard";
import { fuels, yearsOfProduction } from "@/constants/index";
import ShowMore from "@/components/ShowMore";

export default function Home() {

  const [allCars, setAllCars] = useState([]);
  const [loading, setLoading] = useState(false);

  //saerch satates
  const [manufacturer, setManufacturer] = useState("");
  const [model, setModel] = useState("");

  // filterstates
  const [fuel, setFuel] = useState("");
  const[year, setYear] = useState(2024);

  //pagination states
  const [limit, setLimit] = useState(10);

  const getCars = async () => {
    setLoading(true);
    try {
      const results = await fetchCars({
        manufacturer: manufacturer || "",
        year: year || 2024,
        fuel: fuel || "",
        limit: limit || 10,
        model: model || "",
      });
      setAllCars(results);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }

  }

  useEffect(() => {
    getCars();
 }, [fuel, year, limit, manufacturer, model]);

  const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars;


  return (
    <main className="overflow-hidden">
      <Hero />

      <div className="mt-12 padding-x padding-y max-width" id="discover">
        <div className="home_text-container">
          <h1 className="text-4xl font-extrabold">Car catalogue</h1>
          <p>Explore the cars you might like</p>
        </div>

        <div className="home__filters">
          {/* the searchbar will be there */}
          <SearchBar  setManufacturer={setManufacturer} 
                      setModel={setModel}
                    />

          <div className="home__filter-container">
            {/* costum filter component */}
            <CustomFilter title="fuel" 
                          options={fuels} 
                          setFilter={setFuel}
                        />
            <CustomFilter title="fuel" 
                          options={yearsOfProduction} 
                          setFilter={setYear}
                        />
          </div>

        </div> 

        {
          allCars.length > 0
            ? (
              <section>
                <div className="home__cars-wrapper">
                  {
                    allCars?.map((car) => 
                    <CarCard Car={car} />
                    )
                  }
                </div>

                {loading && (
                  <div className="mt-16 w-full flex-center">
                    <Image  src="/loader.svg"   
                          alt="loader" 
                          width={50} 
                          height={50} 
                          className="object-contain"/>
                  </div>
                )}

                <ShowMore pageNumber={limit / 10}
                          isNext ={limit > allCars.length}
                          setLimit={setLimit}/>
              </section>
            ) : (
              <div className="home__error-container">
                <h2 className="text-black text-xl font-bold">Oops, no results</h2>
                <p>{allCars?.message}</p>
              </div>
            )
        }

      </div>
    </main>
  );
}
