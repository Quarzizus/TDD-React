import { render, screen } from "@testing-library/react";
import { HelloWorld } from ".";

describe("<HelloWorld/>", () => {
  it("should render", () => {
    render(<HelloWorld />);
    const title = screen.getByText(/word/i);
    expect(title).toBeInTheDocument();
  });
});
