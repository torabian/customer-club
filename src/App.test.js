import { render, screen } from "@testing-library/react";
import App from "./App";
import { calcTransactionPoint } from "./services/calculations";

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/Users points/i);
  expect(linkElement).toBeInTheDocument();
});

test("# should calculate the 90 points for 120", () => {
  expect(calcTransactionPoint(120)).toBe(90);
});

test("# should get zero points for 50 usd transaction", () => {
  expect(calcTransactionPoint(50)).toBe(0);
});
