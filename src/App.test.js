import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders heading", () => {
  render(<App />);
  const count = screen.getByRole("heading");
  expect(count).toBeInTheDocument();
});

test("renders subtract button", () => {
  render(<App />);
  const subtractButton = screen.getByText("-1");
  expect(subtractButton).toBeInTheDocument();
});
