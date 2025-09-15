import { screen } from "@testing-library/react";

import { Layout } from "../";
import { customRender } from "@/test-utils";

jest.mock("next/router", () => ({
  useRouter: jest.fn(),
}));

test("Shows the Header and children", async () => {
  customRender(
    <Layout>
      <div>Test Content</div>
    </Layout>
  );

  expect(screen.getByText("Neil Tomlin - CV")).toBeInTheDocument();
  expect(screen.getByText("Test Content")).toBeInTheDocument();
});

test("Looks like it should do", async () => {
  const { asFragment } = customRender(
    <Layout>
      <div>Test Content</div>
    </Layout>
  );

  expect(asFragment()).toMatchSnapshot();
});
