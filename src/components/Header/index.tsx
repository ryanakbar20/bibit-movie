import { useHistory } from "react-router";

export default function Header() {
  const history = useHistory();

  function handleClick() {
    history.push("/");
  }
  return (
    <header className="py-4">
      <h2
        className="text-green-500 font-bold text-2xl md:text-3xl cursor-pointer"
        onClick={handleClick}
      >
        Bibit Movie
      </h2>
    </header>
  );
}
