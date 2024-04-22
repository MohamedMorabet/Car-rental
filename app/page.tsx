import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Hero />

      <div className="mt-12 padding-x padding-y max-width" id="discover">
        <div className="home_text-container">
          <h1 className="text-4xl font-extrabold">Car catalogue</h1>
          <p>Explore the cars you might like</p>
        </div>

        <div className="home_filters">
          {/* the search bar will be there */}

        </div>
      </div>
    </main>
  );
}
