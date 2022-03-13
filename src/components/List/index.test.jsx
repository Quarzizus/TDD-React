import { beforeEach, describe, expect, it } from "vitest";
import { List } from ".";
import { render, screen } from "@testing-library/react";

describe("<List/>", () => {
  beforeEach(() => {
    render(<List />);
  });

  it("should not render list before useEffect", () => {
    const message = screen.queryByText(/adios/i);
    expect(message).toBeNull();
  });

  it("should render list after useEffect", async () => {
    const message = await screen.findByText(/holi/i);
    expect(message).toBeInTheDocument();
  });
});
