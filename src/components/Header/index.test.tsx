import { render, screen } from "@testing-library/react";
import Header from ".";

test("Render Header Component", () => {
  render(<Header />);
  const title = screen.getByText("Bibit Movie");
  expect(title).toBeInTheDocument();
});
