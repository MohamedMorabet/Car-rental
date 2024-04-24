import Hero from "@/components/Hero";
import CustomFilter from "@/components/CustomFilter";
import SearchBar from "@/components/SearchBar";
import { fetchCars } from "@/utils/index";
import CarCard from "@/components/CarCard";
import { fuels, yearsOfProduction } from "@/constants/index";
import ShowMore from "@/components/ShowMore";

export default async function Home({searchParams}) {

  const allCars = await fetchCars({
    manufacturer: searchParams.manufacturer || "",
    year: searchParams.year || 2024,
    fuel: searchParams.fuel || "",
    limit: searchParams.limit || 10,
    model: searchParams.model || "",
  });

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
          <SearchBar />

          <div className="home__filter-container">
            {/* costum filter component */}
            <CustomFilter title="fuel" options={fuels}/>
            <CustomFilter title="fuel" options={yearsOfProduction}/>
          </div>

        </div> 

        {
          !isDataEmpty
            ? (
              <section>
                <div className="home__cars-wrapper">
                  {
                    allCars?.map((car) => 
                    <CarCard Car={car} />
                    )
                  }
                </div>

                <ShowMore pageNumber={(searchParams.limit || 10) / 10}
                          isNext ={(searchParams.limit || 10) > allCars.length}/>
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
