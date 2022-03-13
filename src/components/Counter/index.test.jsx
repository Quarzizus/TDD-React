import { beforeEach, describe, expect, it } from "vitest";
import { Counter } from ".";
import { fireEvent, render, screen } from "@testing-library/react";

describe("<Counter/>", () => {
  beforeEach(() => {
    render(<Counter />);
  });
  it("should have initial value equal cero", () => {
    const counter = screen.getByText(/Clicks: 0/i);
    expect(counter).toBeInTheDocument();
  });
  it("should increase value with click on button", () => {
    const button = screen.getByRole("button");
    fireEvent.click(button);
    screen.getByText(/Clicks: 1/i);
  });
});
