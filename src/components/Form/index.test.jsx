import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { Form } from ".";
import { setupServer } from "msw/node";
import { rest } from "msw";

const server = setupServer(
  rest.post("/products", (req, res, ctx) => res(ctx.status(201)))
);

global.fetch = vi.fn(() => Promise.resolve({}));

beforeAll(() => server.listen());
// afterEach(() => server.resetHandlers());
afterAll(() => server.close());
beforeEach(() => {
  render(<Form />);
});

describe("<Form/>", () => {
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
  it("the submitData must not execute", () => {
    const button = screen.getByText(/submit/i, { selector: "button" });
    fireEvent.click(button);
    expect(fetch).not.toHaveBeenCalled();
  });
});

describe("when the user submit form", () => {
  it("the submit buttom must be disable while request", async () => {
    const button = screen.getByText(/submit/i, { selector: "button" });
    fireEvent.input(screen.getByPlaceholderText(/name/i), {
      target: { value: "Miguel" },
    });
    fireEvent.input(screen.getByPlaceholderText(/size/i), {
      target: { value: 20 },
    });
    expect(button).not.toBeDisabled();
    fireEvent.click(button);
    expect(button).toBeDisabled();
    await waitFor(() => {
      expect(button).not.toBeDisabled();
    });
  });

  it("should show success message", async () => {
    const button = screen.getByText(/submit/i, { selector: "button" });
    fireEvent.input(screen.getByPlaceholderText(/name/i), {
      target: { value: "Miguel" },
    });
    fireEvent.input(screen.getByPlaceholderText(/size/i), {
      target: { value: 20 },
    });
    fireEvent.click(button);
    await waitFor(() => {
      const message = screen.queryByText(/product stored/i);
      expect(message).toBeInTheDocument();
    });
  });
});
