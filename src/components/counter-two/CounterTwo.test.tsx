import { render, screen } from "@testing-library/react";
import CounterTwo from "./CounterTwo";
import userEvent from "@testing-library/user-event";

describe("Mock FUnction", () => {
  test("render component", () => {
    render(<CounterTwo count={0} />);
    const countVal = screen.getByText("CounterTwo");
    expect(countVal).toBeInTheDocument();
  });

  test("render jest handler functions", async () => {
    // userEvent.setup();
    const handlerIncrement = jest.fn();
    const handlerDecrement = jest.fn();
    render(
      <CounterTwo
        count={0}
        incrementFn={handlerIncrement}
        decrementFn={handlerDecrement}
      />
    );
    const incrementButton = screen.getByRole("button", {
      name: "Increment",
    });
    const decrementButton = screen.getByRole("button", {
      name: "Decrement",
    });
    await userEvent.click(incrementButton);
    await userEvent.click(decrementButton);
    expect(handlerIncrement).toHaveBeenCalledTimes(1);
    expect(handlerDecrement).toHaveBeenCalledTimes(1);
  });
});
