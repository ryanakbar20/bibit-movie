import { useState } from "react";
import { useHistory } from "react-router-dom";

interface PropsSearchBar {
  handleSearch: any;
  placeholder: string;
  data?: any;
  value: string;
  lastElementRef?: any;
  // setSearch?: any;
}

export default function SearchBar(props: PropsSearchBar) {
  const history = useHistory();
  const [focus, setFocus] = useState(false);
  const [cursor, setCursor] = useState(0);
  const [selected, setSelected] = useState(null);

  function handleClick(id: string) {
    history.push(`/detail/${id}`);
  }

  function handleFocus() {
    setFocus(true);
  }

  function handleBlur() {
    setTimeout(() => {
      setFocus(false);
    }, 500);
  }

  function handleKeyDown(e: any) {
    if (e.keyCode === 38 && cursor > 0) {
      setCursor(cursor - 1);
    } else if (e.keyCode === 40) {
      setCursor(cursor + 1);
    }
  }

  function handleSubmit(e: any) {
    e.preventDefault();
    selected && history.push(`/detail/${selected}`);
  }

  return (
    <div className="group relative">
      <form onSubmit={handleSubmit}>
        <input
          className="w-full p-2 md:p-3 rounded-sm ring-1 ring-gray-500 focus:outline-none placeholder-gray-600"
          placeholder={props.placeholder}
          onChange={props.handleSearch}
          value={props.value}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onKeyDown={handleKeyDown}
        />
      </form>
      {focus && props.data.length > 0 && (
        <ul className="w-full bg-gray-700 rounded-md text-left absolute top-12 left-0 right-0 z-10 z-50 h-72 overflow-y-scroll pb-6">
          {props.data.map((item: any, index: number) => {
            // cursor === index && props.setSearch(item.Title);
            if (cursor === index && selected !== item.imdbID) {
              setSelected(item.imdbID);
            }
            return index + 1 === props.data.length - 3 ? (
              <li
                key={index}
                ref={props.lastElementRef}
                className={`transition duration-300 cursor-pointer hover:bg-gray-500 py-1 px-3 ${
                  cursor === index && "bg-gray-500"
                }`}
                onClick={() => handleClick(item.imdbID)}
              >
                <p className="text-lg text-white font-semibold">{item.Title}</p>
              </li>
            ) : (
              <li
                key={index}
                className={`transition duration-300 cursor-pointer hover:bg-gray-500 py-1 px-3 ${
                  cursor === index && "bg-gray-500"
                }`}
                onClick={() => handleClick(item.imdbID)}
              >
                <p className="text-lg text-white font-semibold">{item.Title}</p>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
