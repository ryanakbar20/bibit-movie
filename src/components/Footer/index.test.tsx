import { render, screen } from "@testing-library/react";
import Footer from ".";

test("Render Footer Component", () => {
  render(<Footer />);
  const creditTitle = screen.getByText(
    "Copyright © 2021 Bibit Movie || By Rian Akbar Ferdiansyah"
  );
  expect(creditTitle).toBeInTheDocument();
});
