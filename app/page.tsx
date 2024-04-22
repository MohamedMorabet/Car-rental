import Hero from "@/components/Hero";
import CustomFilter from "@/components/CustomFilter";
import SearchBar from "@/components/SearchBar";
import { fetchCars } from "@/utils/index";
import CarCard from "@/components/CarCard";

export default async function Home() {

  const allCars = await fetchCars();

  const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars;


  return (
    <main className="overflow-hidden">
      <Hero />

      <div className="mt-12 padding-x padding-y max-width" id="discover">
        <div className="home_text-container">
          <h1 className="text-4xl font-extrabold">Car catalogue</h1>
          <p>Explore the cars you might like</p>
        </div>

        <div className="home_filters">
          {/* the searchbar will be there */}
          <SearchBar />

          <div className="home_filter-container">
            {/* costum filter component */}
            <CustomFilter />
            <CustomFilter />
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
              </section>
            ) : (
              <div className="home_error-container">
                <h2 className="text-black text-xl font-bold">Oops, no results</h2>
                <p>{allCars?.message}</p>
              </div>
            )
        }

      </div>
    </main>
  );
}
