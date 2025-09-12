import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { useRouter } from "next/router";

import Index from "../pages";
import { customRender } from "@/test-utils";

jest.mock("next/router", () => ({
  useRouter: jest.fn(),
}));

test("Triggers Next navigation when clicking the links", async () => {
  const mockPush = jest.fn();
  (useRouter as jest.Mock).mockReturnValue({
    push: mockPush,
  });

  customRender(<Index />);

  const subPageLinks = screen.getAllByRole("link");
  expect(subPageLinks).toHaveLength(3);

  subPageLinks.forEach(async (link) => {
    await userEvent.click(link);
    expect(mockPush).toHaveBeenCalledWith(link.getAttribute("href"));
  });
});
