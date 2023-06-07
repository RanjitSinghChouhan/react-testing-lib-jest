import { act, render, renderHook, screen } from "@testing-library/react";
import useCounter from "./useCounter";

describe("useCounter", () => {
    test('render counter', () => {
        const {result} = renderHook(useCounter);
        expect(result.current.count).toBe(0)
    });

    test("should be able to set initial value", () => {
        const {result} = renderHook(useCounter, {
            initialProps: {
                initialCount: 10
            }
        });
        expect(result.current.count).toBe(10)
    });

    test("render the increment function", () => {
        const {result} = renderHook(useCounter);
        act(() => result.current.increment());
        expect(result.current.count).toBe(1);
    });

    test('render the decrement function', () => {
        const { result } = renderHook(useCounter);
        act(() => result.current.decrement());
        expect(result.current.count).toBe(-1);
    })
})