import { render, screen } from "@testing-library/react"
import Counter from "./Counter"
import userEvent from "@testing-library/user-event";

describe("Counter", () => {
    test("Render counter", () => {
        render(<Counter/>);
        const countMe = screen.getByRole("heading");
        expect(countMe).toBeInTheDocument();
        const incrementButton = screen.getByRole('button', {
            name: "Increment"
        })
        expect(incrementButton).toBeInTheDocument();
    })

    test("render value 0", () => {
        render(<Counter/>);
        const countZero = screen.getByRole("heading");
        expect(countZero).toHaveTextContent("0")
    })

    test("render for 1", async() => {
        // userEvent.setup();
        render(<Counter/>);
        const incrementButton = screen.getByRole('button', {
            name: "Increment"
        });
        await userEvent.click(incrementButton)
        const countOne = screen.getByRole("heading");
        expect(countOne).toHaveTextContent("1");
    })
})