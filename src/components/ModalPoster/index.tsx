import { useHistory } from "react-router-dom";

interface PropsModal {
  visible: boolean;
  onClose: any;
  value: any;
}
export default function ModalPoster(props: PropsModal) {
  const history = useHistory();

  function handleClick(e: any) {
    history.push(`/detail/${props.value.imdbID}`);
  }
  return props.visible ? (
    <div
      className="main-modal fixed w-full h-100 inset-0 z-50 overflow-hidden flex justify-center items-center animated fadeIn faster"
      style={{ background: "rgba(0,0,0,.7)" }}
      onClick={props.onClose}
    >
      <div className="border border-teal-500 shadow-lg modal-container bg-gray-600 max-h-xl md:max-w-md mx-auto rounded shadow-lg overflow-y-auto">
        <div className="group rounded-md cursor-pointer transition duration-500 ease-in-out relative w-full z-50">
          <img
            className="w-full rounded-md"
            src={props.value.Poster}
            alt="poster-movie"
          />
          <div className="bg-gradient-to-t from-black to-transparent absolute bottom-0 top-32 left-0 right-0 my-auto transition duration-500">
            <div className="text-center absolute bottom-4 left-0 right-0">
              <button
                onClick={handleClick}
                className="ring-1 ring-gray-500 bg-gradient-to-t from-black to-transparent px-8 py-2 rounded-md text-white text-base font-semibold mb-4 hover:bg-black transition ease-in-out duration-300"
              >
                Detail
              </button>
              <p className="text-sm font-semibold text-white">
                {props.value.Title}
              </p>
              <p className="text-sm font-semibold text-white">
                {props.value.Year}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : null;
}
