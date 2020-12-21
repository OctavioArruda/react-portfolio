import styled from 'styled-components';

import HeroImage from "../../assets/landing-bg.jpg";

export const Hero = styled.section`
  width: 100vw;
  height: 100vh;

  background-image: url(${HeroImage});
  background-size: cover;

  padding-top: 6rem;
`;

export const HighlightedText = styled.span`
  color: var(--fourth-red);
`;

export const NormalHeroText = styled.p`
  color: var(--secondary-light);
`;