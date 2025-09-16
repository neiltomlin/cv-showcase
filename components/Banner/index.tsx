import { useState } from "react";
import Image from "next/image";
import CraneImage from "../pageContent/assets/crane-construction.svg";
import styled from "styled-components";

const StyledBanner = styled.div`
  background-color: ${({ theme }) => theme.colors.backgroundAlt};
  color: ${({ theme }) => theme.colors.accentPink};
  padding: 0.5rem 1rem;
`;
const BannerContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  max-width: ${({ theme }) => theme.layout.maxWidth};
`;

const BannerContentGroup = styled.div`
  display: flex;
`;

export const Banner = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <StyledBanner>
      <BannerContent>
        <BannerContentGroup>
          <p>Site under construction</p>
          <Image
            src={CraneImage}
            alt="Image showing a website being built"
            width={40}
            height={40}
          />
        </BannerContentGroup>

        <button onClick={() => setIsVisible(false)}>Close</button>
      </BannerContent>
    </StyledBanner>
  );
};
