import { render, screen } from "@testing-library/react";
import { List } from ".";

describe("<List/>", () => {
  it("should render data", async () => {
    render(<List />);
    const item = await screen.findByText(/holi/i);
    expect(item).toBeInTheDocument();
  });
});
