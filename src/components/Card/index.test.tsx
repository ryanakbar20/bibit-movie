import { render, screen } from "@testing-library/react";
import Card from ".";

describe("Render Card Component", () => {
  const posterUrl =
    "https://m.media-amazon.com/images/M/MV5BYThjYzcyYzItNTVjNy00NDk0LTgwMWQtYjMwNmNlNWJhMzMyXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg";
  const data = {
    imdbID: "id123",
    Title: "Batman The Movie",
    Year: "2010",
    Poster: posterUrl,
  };

  render(<Card data={data} />);

  it("Content to be in the document", () => {
    const title = screen.getByText("Batman The Movie");
    const year = screen.getByText("2010");
    const image = screen.getByRole("img");

    expect(title).toBeInTheDocument();
    expect(year).toBeInTheDocument();
    expect(image).toHaveAttribute("src", posterUrl);
    expect(image).toHaveAttribute("alt", "poster-movie");
  });
});
