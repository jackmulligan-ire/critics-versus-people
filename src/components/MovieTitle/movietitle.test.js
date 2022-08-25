import { render, screen } from "@testing-library/react";
import MovieTitle from "./MovieTitle";

const DUMMY_DATA = {
  title: "Fight Club",
  year: "1999",
  Metascore: "66",
  imdbRating: "8.8",
  Plot: "An insomniac office worker and a devil-may-care soap maker form an underground fight club that evolves into much more.",
  Director: "David Fincher",
  Actors: "Brad Pitt, Edward Norton, Meat Loaf",
  imdbID: "tt0137523",
  Poster:
    "https://m.media-amazon.com/images/M/MV5BMmEzNTkxYjQtZTc0MC00YTVjLTg5ZTEtZWMwOWVlYzY0NWIwXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
};

const setUp = () =>
  render(<MovieTitle title={DUMMY_DATA["title"]} year={DUMMY_DATA["year"]} />);

test("Dummy title renders", () => {
  setUp();
  expect(
    screen.getByRole("heading", {
      name: /fight club \(1999\)/i,
    })
  ).toBeInTheDocument();
});
