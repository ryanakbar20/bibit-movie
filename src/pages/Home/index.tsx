import { useState } from "react";

export default function Home() {
  const [search, setSearch] = useState(null);

  function handleSearch(e: any) {
    setSearch(e.target.value);
  }

  return (
    <div>
      <section className="cover-bg">
        <div className="bg-gradient-to-b from-black to-transparent">
          <div className="container mx-auto px-4">
            <div className="py-4">
              <h2 className="text-green-500 font-bold text-2xl md:text-3xl">
                Bibit Movie
              </h2>
            </div>
            <div className="flex justify-center py-40">
              <div className="flex flex-col space-y-8 text-center max-w-2xl">
                <h1 className="text-3xl md:text-4xl font-bold text-white">
                  Film dengan kualitas terbaik, sekarang dapat anda nikmati
                  kapan saja
                </h1>
                <p className="text-base font-semibold text-white">
                  Kami akan mencarikan film sesuai keinginan anda
                </p>
                <input
                  className="p-2 md:p-3 rounded-sm ring-1 ring-gray-500 focus:outline-none placeholder-gray-600"
                  placeholder="Cari film favorite anda..."
                  onChange={handleSearch}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-gray-800 py-18">
        <div className="container mx-auto px-4">1</div>
      </section>
    </div>
  );
}
