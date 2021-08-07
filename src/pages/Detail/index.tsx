import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Header, Card, Footer } from "../../components";
import { fetchPage, RootState } from "../../config/redux";
import { useSelector } from "react-redux";

export default function Detail() {
  const globalState = useSelector((state: RootState) => state);
  const query: any = useParams();

  useEffect(() => {
    async function fetchData() {
      const params = {
        apikey: "faf7e5bb",
        i: query.id,
      };
      try {
        fetchPage(`http://www.omdbapi.com/`, "detailPage", params);
      } catch (error) {}
    }
    fetchData();
  }, [query]);

  const detailMovie = globalState.detailPage ? globalState.detailPage : {};
  const listMovie = globalState.landingPage ? globalState.landingPage : null;

  return (
    <>
      <section className="cover-detail">
        <div className="bg-gradient-to-b from-black to-transparent">
          <div className="container mx-auto px-4">
            <Header />
            <div className="py-20">
              <div className="flex flex-col space-y-4 sm:space-y-0 sm:flex-row sm:space-x-4 transition transform ease-in-out duration-500">
                <img
                  className="w-1/2 sm:w-1/3 md:w-auto md:h-80 rounded-md ring-2 ring-gray-500"
                  src={detailMovie.Poster}
                  alt="poster-movie"
                />
                <div className="flex flex-col space-y-4 max-w-2xl">
                  <h1 className="text-3xl md:text-4xl font-bold text-white">
                    {detailMovie.Title}
                  </h1>
                  <div>
                    <p className="text-base font-semibold text-white">
                      {`Durasi : ${detailMovie.Runtime}`}
                    </p>
                    <p className="text-base font-semibold text-white">
                      {`Rilis : ${detailMovie.Released}`}
                    </p>
                    <p className="text-base font-semibold text-white">
                      {`Aktor : ${detailMovie.Actors}`}
                    </p>
                    <p className="text-base font-semibold text-white">
                      {`Penulis : ${detailMovie.Writer}`}
                    </p>
                    <p className="mt-4 text-base font-semibold text-white">
                      {detailMovie.Plot}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-gray-800 py-16">
        <div className="container mx-auto">
          <h2 className="text-xl text-white font-bold mb-8">
            Rekomendasi Serupa
          </h2>
          <div className="flex overflow-x-scroll pb-10 hide-scroll-bar">
            <div className="flex flex-nowrap">
              {listMovie &&
                listMovie.Search.map((item: any, index: string) => {
                  return (
                    item.imdbID !== query.id && (
                      <div className="inline-block mr-4 w-40 h-auto">
                        <Card key={index} data={item} />
                      </div>
                    )
                  );
                })}
            </div>
          </div>
        </div>
      </section>
      <section className="bg-gray-900 text-center py-6">
        <Footer />
      </section>
    </>
  );
}
