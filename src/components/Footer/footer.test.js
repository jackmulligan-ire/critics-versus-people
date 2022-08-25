import { render, screen } from "@testing-library/react";
import Footer from "./Footer";

const setUp = () => render(<Footer />);

test("Footer renders on page", () => {
  setUp();
  expect(screen.getByText(/OMDB API/i)).toBeInTheDocument();
});

test("Link renders on page", () => {
  setUp();
  expect(screen.getByRole("link")).toHaveAttribute(
    "href",
    "http://www.omdbapi.com/"
  );
});
