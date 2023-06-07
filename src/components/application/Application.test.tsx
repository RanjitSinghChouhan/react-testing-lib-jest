import { render, screen } from "@testing-library/react";
import Application from "./Application";

describe("Application", () => {
  test("render application test", () => {
    render(<Application />);
    const inputTest = screen.getByRole("textbox");
    expect(inputTest).toBeInTheDocument();

    // if we have multiple 'textbox'
    /* 
    const inputTest = screen.getByRole("textbox", {
        name: "Name"
    });
    expect(inputTest).toBeInTheDocument(); 
    **/

    const selectTest = screen.getByRole("combobox");
    expect(selectTest).toBeInTheDocument();

    const checkboxTest = screen.getByRole("checkbox");
    expect(checkboxTest).toBeInTheDocument();

    const submitTest = screen.getByRole("button");
    expect(submitTest).toBeInTheDocument();
  });
});
