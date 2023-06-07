import { render, screen } from "@testing-library/react";
import Greet from "./Greet";

describe("Greet", () => {
  test("render greet", () => {
    render(<Greet />);
    const testEle = screen.getByText(/hello/i);
    expect(testEle).toBeInTheDocument();
  });
});
describe("Nested", () => {
    test("with prop", () => {
      render(<Greet name="Ranjit" />);
      const testProp = screen.getByText("Hello Ranjit");
      expect(testProp).toBeInTheDocument();
    });
  });
