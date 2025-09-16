import { screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Index from "../pages";
import { customRender } from "@/test-utils";

jest.mock("next/router", () => ({
  useRouter: jest.fn(),
}));

test("Shows the header component", () => {
  customRender(<Index />);

  expect(screen.getByText("Neil Tomlin - CV")).toBeInTheDocument();
});

test("Shows the index content", () => {
  customRender(<Index />);

  expect(screen.getByText("Senior Front End Developer")).toBeInTheDocument();
});
