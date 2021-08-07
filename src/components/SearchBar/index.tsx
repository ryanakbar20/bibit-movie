import { useState } from "react";
import { useHistory } from "react-router-dom";

interface PropsSearchBar {
  handleSearch: any;
  placeholder: string;
  data?: any;
  value: string;
}

export default function SearchBar(props: PropsSearchBar) {
  const history = useHistory();
  const [focus, setFocus] = useState(false);

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

  return (
    <div className="group relative">
      <input
        className="w-full p-2 md:p-3 rounded-sm ring-1 ring-gray-500 focus:outline-none placeholder-gray-600"
        placeholder={props.placeholder}
        onChange={props.handleSearch}
        value={props.value}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
      {focus && (
        <ul className="w-full bg-gray-700 rounded-md text-left absolute top-12 left-0 right-0 z-10 z-50">
          {props.data &&
            props.data.map((item: any, index: number) => {
              return (
                <li
                  key={index}
                  className="transition duration-300 cursor-pointer hover:bg-gray-500 py-1 px-3"
                  onClick={() => handleClick(item.imdbID)}
                >
                  <p className="text-lg text-white font-semibold">
                    {item.Title}
                  </p>
                </li>
              );
            })}
        </ul>
      )}
    </div>
  );
}
