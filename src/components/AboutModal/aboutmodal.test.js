/* eslint-disable testing-library/prefer-screen-queries */
import { render, screen, getByText } from "@testing-library/react";
import AboutModal from "./AboutModal";

const setUp = () => render(<AboutModal show={true} />);

test("Modal header", () => {
  setUp();
  expect(screen.getByText(/About Critics vs. The People/i)).toBeInTheDocument();
});

test("Modal body", () => {
  setUp();
  expect(screen.getByText(/Metacritic/)).toBeInTheDocument();
  const IMDBnodes = screen.getAllByText(/IMDB/i);
  IMDBnodes.forEach((node) =>
    expect(getByText(node, /IMDB/i)).toBeInTheDocument()
  );
});

test("Modal close button", () => {
  setUp();
  expect(screen.getByRole("button", { name: /close/i })).toBeInTheDocument();
});
