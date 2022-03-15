import { fireEvent, render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Form } from ".";

describe("<Form/>", () => {
  beforeEach(() => {
    render(<Form />);
  });

  it("should render create product page", () => {
    const title = screen.queryByText(/create product/i);
    expect(title).toBeInTheDocument();
  });
  it("should has input's with the following fields (name,size)", () => {
    screen.getByPlaceholderText(/size/i);
    screen.getByPlaceholderText(/name/i);
  });
  it("should has a select with the following options (Electronic,Furnite,Clothing)", () => {
    screen.getByLabelText(/type/i);
    screen.getByText(/Electronic/i);
    screen.getByText(/Furnite/i);
    screen.getByText(/Clothing/i);
  });
  it("should has button submit", () => {
    screen.getByText(/submit/i, { selector: "button" });
  });
});

describe("<Form/> when the user submits without value", () => {
  beforeEach(() => {
    render(<Form />);
  });

  it("should not render validation message in the begin", () => {
    const message = screen.queryByText(/all fields are requireds/i);
    expect(message).not.toBeInTheDocument();
  });

  it("should show validation message", () => {
    const button = screen.getByText(/submit/i, { selector: "button" });
    fireEvent.click(button);
    const message = screen.getByText(/all fields are requireds/i);
    expect(message).toBeInTheDocument();
  });
});
