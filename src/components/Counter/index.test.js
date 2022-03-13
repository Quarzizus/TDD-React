import { fireEvent, render, screen } from "@testing-library/react";
import { Counter } from ".";

describe("<Counter/>", () => {
  beforeEach(() => {
    render(<Counter />);
  });

  it("initial value in zero (display)", () => {
    const result = screen.getByText(/clicks: 0/i);
    expect(result).toBeInTheDocument();
  });
  it("counter should have a new value with a click (display) ", () => {
    const button = screen.getByText(/increase/i, { selector: "button" });
    fireEvent.click(button);
    const result = screen.getByText(/clicks: 1/i);
    expect(result).toBeInTheDocument();
  });
});
