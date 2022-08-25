import { render, screen } from "@testing-library/react";
import SearchBar from "./SearchBar";

const setUp = () => render(<SearchBar />);

test("Search bar renders on page", () => {
  setUp();
  expect(
    screen.getByRole("textbox", {
      name: /enter a movie/i,
    })
  ).toBeInTheDocument();
});
