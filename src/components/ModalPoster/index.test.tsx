import { render, screen } from "@testing-library/react";
import ModalPoster from ".";

describe("Render Modal Component", () => {
  const MOCK_FUNCTION = jest.fn();

  const data = {
    Poster:
      "https://m.media-amazon.com/images/M/MV5BYThjYzcyYzItNTVjNy00NDk0LTgwMWQtYjMwNmNlNWJhMzMyXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
    Title: "Batman The Movie",
    Year: "2020",
    imdbID: "id123",
  };

  it("Content to be in the document", () => {
    render(<ModalPoster visible={true} onClose={MOCK_FUNCTION} value={data} />);

    const image = screen.getByRole("img");
    const btnDetail = screen.getByRole("button");
    const title = screen.getByText(data.Title);
    const year = screen.getByText(data.Year);

    expect(image).toHaveAttribute("src", data.Poster);
    expect(btnDetail).toHaveTextContent("Detail");
    expect(title).toBeInTheDocument();
    expect(year).toBeInTheDocument();
  });

  it("Test visible toggle", () => {
    render(
      <ModalPoster visible={false} onClose={MOCK_FUNCTION} value={data} />
    );

    const image = screen.queryByRole("img");

    expect(image).toBeNull();
  });
});
