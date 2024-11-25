import { describe, expect, it, vi } from "vitest";
import { render, screen, userEvent } from "./react-test-utils";

// Test component
const TestComponent = ({ onClick = () => {} }) => (
  <div>
    <h1>Test Component</h1>
    <button data-testid="test-button" onClick={onClick}>
      Click me
    </button>
  </div>
);

describe("react-test-utils", () => {
  describe("render", () => {
    it("should render component correctly", () => {
      render(<TestComponent />);

      expect(screen.getByText("Test Component")).toBeInTheDocument();
      expect(screen.getByTestId("test-button")).toBeInTheDocument();
    });

    it("should handle custom container", () => {
      const container = document.createElement("div");
      render(<TestComponent />, { container });

      expect(container.querySelector("h1")).toHaveTextContent("Test Component");
    });
  });

  describe("userEvent", () => {
    it("should handle click events", async () => {
      const handleClick = vi.fn();
      render(<TestComponent onClick={handleClick} />);

      const button = screen.getByTestId("test-button");
      await userEvent.click(button);

      expect(handleClick).toHaveBeenCalledTimes(1);
    });
  });
});
