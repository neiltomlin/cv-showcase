import { screen } from "@testing-library/react";

import { Banner } from "../";
import { customRender } from "@/test-utils";
import userEvent from "@testing-library/user-event";

test("Shows the banner", () => {
  customRender(<Banner />);

  expect(screen.getByText("Site under construction")).toBeInTheDocument();
});

test("Removes the banner when pressing close", async () => {
  customRender(<Banner />);

  const closeButton = screen.getByRole("button", { name: /close/i });
  await userEvent.click(closeButton);

  expect(screen.queryByText("Site under construction")).not.toBeInTheDocument();
});
