import { describe, expect, it } from "vitest";
import { HelloWorld } from ".";
import { render, screen } from "@testing-library/react";

describe("<HelloWorld/>", () => {
  beforeEach(() => {
    render(<HelloWorld />);
  });

  it("should render title", () => {
    const title = screen.getByText(/hello/i);
    expect(title).toBeInTheDocument();
  });
  it("should render img", () => {
    const image = screen.getByRole("img");
    expect(image).toBeInTheDocument();
  });
});
