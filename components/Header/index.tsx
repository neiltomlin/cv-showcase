import Image from "next/image";

import GitHubLogo from "./assets/Octicons-mark-github.svg";
import LinkedInLogo from "./assets/LinkedIn_icon.svg";
import {
  HeaderContainer,
  HeaderContent,
  HeaderLinks,
  HeaderLinkGroup,
  SkipLink,
} from "./styles";
import Link from "next/link";
import { Banner } from "../Banner";

export const Header = () => {
  return (
    <>
      <HeaderContainer>
        <HeaderContent>
          <SkipLink href="#main">Skip to main content</SkipLink>
          <Link href="/">Neil Tomlin - CV</Link>
          <HeaderLinks>
            <a href="mailto:neiltomlin88@gmail.com">neiltomlin88@gmail.com</a>
            <a href="tel:07866960512">07866960512</a>
            <HeaderLinkGroup>
              <a href="www.linkedin.com/in/neil-tomlin">
                <Image
                  src={LinkedInLogo}
                  alt="LinkedIn"
                  width={32}
                  height={32}
                />
              </a>
              <a href="https://github.com/neiltomlin">
                <Image src={GitHubLogo} alt="GitHub" width={32} height={32} />
              </a>
            </HeaderLinkGroup>
          </HeaderLinks>
        </HeaderContent>
      </HeaderContainer>
      <Banner />
    </>
  );
};
