import { render, screen } from "@testing-library/react";
import SiteNavbar from "./Navbar";

const setUp = () => render(<SiteNavbar />);

test("Navbar renders on the page", () => {
  setUp();
  expect(screen.getByText(/critics vs\. the people/i)).toBeInTheDocument();
});
