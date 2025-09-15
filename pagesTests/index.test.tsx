import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { useRouter } from "next/router";

import Index from "../pages";
import { customRender } from "@/test-utils";

jest.mock("next/router", () => ({
  useRouter: jest.fn(),
}));

test("Shows the header component", async () => {
  customRender(<Index />);

  expect(screen.getByText("Neil Tomlin - CV")).toBeInTheDocument();
});

test("Shows the index content", async () => {
  customRender(<Index />);

  expect(screen.getByText("Senior Front End Developer")).toBeInTheDocument();
});

// test("Shows links to subpages", async () => {
//   customRender(<Index />);

//   const subPageLinks = screen.getAllByRole("link");
//   expect(subPageLinks).toHaveLength(3);
// });
