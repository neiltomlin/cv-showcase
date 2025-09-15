import { screen } from "@testing-library/react";

import { Header } from "../";
import { customRender } from "@/test-utils";

jest.mock("next/router", () => ({
  useRouter: jest.fn(),
}));

test("Shows summary", async () => {
  customRender(<Header />);

  expect(screen.getByText("Neil Tomlin - CV")).toBeInTheDocument();
});

test("Shows the personal links", async () => {
  customRender(<Header />);

  const personalLinks = screen.getAllByRole("link");
  expect(personalLinks).toHaveLength(4);
});
