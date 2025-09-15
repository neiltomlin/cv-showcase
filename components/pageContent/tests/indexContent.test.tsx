import { screen } from "@testing-library/react";

import { IndexContent } from "../indexContent";
import { customRender } from "@/test-utils";

jest.mock("next/router", () => ({
  useRouter: jest.fn(),
}));

test("Shows the index content", async () => {
  customRender(<IndexContent />);

  expect(screen.getByText("Senior Front End Developer")).toBeInTheDocument();
});

test("Shows links to subpages", async () => {
  customRender(<IndexContent />);

  const subPageLinks = screen.getAllByRole("link");
  expect(subPageLinks).toHaveLength(3);
});
