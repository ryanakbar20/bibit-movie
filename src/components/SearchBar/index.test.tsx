import { render, screen } from "@testing-library/react";
import SearchBar from ".";

const MOCK_HANDLE_SEARCH = jest.fn();

describe("Render SearchBar Component", () => {
  const data = [{ Title: "Batman The Movie", imdbID: "id123" }];
  const { container } = render(
    <SearchBar
      placeholder="Cari film favorite"
      value="Batman"
      data={data}
      handleSearch={MOCK_HANDLE_SEARCH}
    />
  );

  const placeholder = screen.getByPlaceholderText("Cari film favorite");
  const inputElement = container.querySelector("input");
  const queryList = screen.queryByRole("listitem");

  it("Test visible content", () => {
    expect(placeholder).toBeInTheDocument();
    expect(inputElement?.value).toBe("Batman");
    expect(queryList).toBeNull();
    inputElement?.focus();
    const getList = screen.queryByRole("listitem");
    expect(getList).toBeInTheDocument();
    expect(getList).toHaveTextContent("Batman The Movie");
  });
});
