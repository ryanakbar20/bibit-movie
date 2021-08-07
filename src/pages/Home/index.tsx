import { useState, useEffect, useCallback, useRef } from "react";
import { Card, Header, SearchBar, Footer, ModalPoster } from "../../components";
import { fetchPage, RootState } from "../../config/redux";
import { useSelector } from "react-redux";

export default function Home() {
  const landingPage = useSelector((state: RootState) => state.landingPage);
  const [selected, setSelected] = useState(null);
  const [visibleModal, setVisibleModal] = useState(false);
  const [search, setSearch] = useState("Batman");
  const [page, setPage] = useState(1);

  const [listMovie, setListMovie] = useState<any>([]);

  useEffect(() => {
    const newList =
      landingPage && landingPage.Search ? landingPage.Search : null;

    function setData() {
      var flags = [],
        output: any = [];

      for (let i = 0; i < newList.length; i++) {
        if (flags[newList[i].Title]) continue;
        flags[newList[i].Title] = true;
        output.push(newList[i]);
      }
      newList && setListMovie((prev: any) => [...prev, ...output]);
    }
    newList && setData();
  }, [landingPage]);

  useEffect(() => {
    async function fetchData() {
      const params = {
        apikey: "faf7e5bb",
        s: search,
        page: page,
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
    setSearch(e.target.value);
    setPage(1);
    setListMovie([]);
  }

  const observer: any = useRef();
  const lastElement = useCallback((node: any) => {
    if (observer.current) {
      observer.current.disconnect();
    }
    observer.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setPage((prev) => (prev += 1));
      }
    });
    if (node) {
      observer.current.observe(node);
    }
  }, []);

  function handleClick(e: any) {
    setSelected(e);
    setVisibleModal(!visibleModal);
  }

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
                  lastElementRef={lastElement}
                  // setSearch={(e: string) => setSearch(e)}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-gray-800 py-20">
        <div className="container mx-auto px-4">
          {listMovie.length > 0 ? (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
              {listMovie.map((item: any, index: any) => {
                return listMovie.length === index + 1 ? (
                  <div key={index} ref={lastElement}>
                    <Card data={item} onClick={() => handleClick(item)} />
                  </div>
                ) : (
                  <div key={index}>
                    <Card data={item} onClick={() => handleClick(item)} />
                  </div>
                );
              })}
            </div>
          ) : (
            <p className="text-xl text-white font-semibold text-center">
              Film tidak ditemukan
            </p>
          )}
          <p className="text-lg animate-bounce text-white font-semibold text-center">
            Loading...
          </p>
        </div>
      </section>
      <section className="bg-gray-900 text-center py-6">
        <Footer />
      </section>
      <ModalPoster
        visible={visibleModal}
        onClose={() => setVisibleModal(!visibleModal)}
        value={selected}
      />
    </>
  );
}
