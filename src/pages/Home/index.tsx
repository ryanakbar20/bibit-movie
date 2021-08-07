import { useState, useEffect } from "react";
import { Card, Header, SearchBar, Footer } from "../../components";
import { fetchPage, RootState } from "../../config/redux";
import { useSelector } from "react-redux";

export default function Home() {
  const landingPage = useSelector((state: RootState) => state.landingPage);
  const [search, setSearch] = useState("Batman");
  const [page, setPage] = useState(1);

  useEffect(() => {
    async function fetchData() {
      const params = {
        apikey: "faf7e5bb",
        s: search,
        page: page,
        // type: "movie",
      };
      try {
        fetchPage(`http://www.omdbapi.com`, "landingPage", params);
      } catch (error) {
        console.error(error.message);
      }
    }
    const timeout = setTimeout(() => {
      fetchData();
    }, 500);

    return () => {
      clearTimeout(timeout);
    };
  }, [search, page]);

  function handleSearch(e: any) {
    // setTimeout(() => {
    setSearch(e.target.value);
    // }, 1000);
  }

  const listMovie =
    landingPage && landingPage.Search ? landingPage.Search : null;

  return (
    <>
      <section className="cover-bg">
        <div className="bg-gradient-to-b from-black to-transparent">
          <div className="container mx-auto px-4">
            <Header />
            <div className="flex justify-center py-40">
              <div className="flex flex-col space-y-8 text-center max-w-2xl">
                <h1 className="text-3xl md:text-4xl font-bold text-white">
                  Film dengan kualitas terbaik, sekarang dapat anda nikmati
                  kapan saja
                </h1>
                <p className="text-base font-semibold text-white">
                  Kami akan mencarikan film sesuai keinginan anda
                </p>
                <SearchBar
                  placeholder="Cari film kesukaan anda..."
                  handleSearch={handleSearch}
                  value={search}
                  data={listMovie}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-gray-800 py-20">
        <div className="container mx-auto px-4">
          {listMovie ? (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
              {listMovie.map((item: any, index: string) => {
                return <Card key={index} data={item} />;
              })}
            </div>
          ) : (
            <p className="text-xl text-white font-semibold text-center">
              Film tidak ditemukan
            </p>
          )}
        </div>
      </section>
      <section className="bg-gray-900 text-center py-6">
        <Footer />
      </section>
    </>
  );
}
