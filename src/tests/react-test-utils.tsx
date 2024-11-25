import type { ReactElement } from "react";
import type { RenderOptions } from "@testing-library/react";
import { render } from "@testing-library/react";

const customRender = (ui: ReactElement, options?: Omit<RenderOptions, "queries">) =>
  render(ui, {
    wrapper: ({ children }) => <>{children}</>,
    ...options,
  });

// re-export everything EXCEPT render
export { fireEvent, screen, waitFor, within } from "@testing-library/react";

// export our custom render and user-event
export { default as userEvent } from "@testing-library/user-event";
export { customRender as render };
