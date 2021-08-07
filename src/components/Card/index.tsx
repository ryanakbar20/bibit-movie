import { useHistory } from "react-router-dom";

interface PropsCard {
  data: any;
}

export default function Card({ data }: PropsCard) {
  const history = useHistory();

  function handleClick(id: string) {
    history.push(`/detail/${id}`);
  }
  return (
    <div
      onClick={() => handleClick(data.imdbID)}
      className="group rounded-md cursor-pointer transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 relative h-full w-full"
    >
      <img
        className="h-full w-full rounded-md"
        src={data.Poster}
        alt="poster-movie"
      />
      <div className="bg-gradient-to-t from-black to-transparent absolute bottom-0 top-32 left-0 right-0 my-auto opacity-0 group-hover:opacity-100 transition duration-500">
        <div className="text-center absolute bottom-4 left-0 right-0">
          <p className="text-sm font-semibold text-white">{data.Title}</p>
          <p className="text-sm font-semibold text-white">{data.Year}</p>
        </div>
      </div>
    </div>
  );
}
