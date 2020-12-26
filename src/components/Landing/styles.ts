import styled from 'styled-components';

import HeroImage from "../../assets/landing-bg.jpg";

interface NomeHeroTextProps {
  fontSize: number;
}

export const Hero = styled.section`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 0;

  width: 100vw;
  height: 100vh;

  background: url(${HeroImage}) top center no-repeat;
  background-size: cover;

  padding: 6rem 2rem 0;

  &::after {
    left: 0;
    top: 0;
    content: '';

    position: absolute;

    width: 100%;
    height: 100%;    

    background-color: rgba(0, 0, 0, 0.6);
  }
`;

export const HighlightedText = styled.span`
  color: var(--fourth-red);
`;

export const NormalHeroText = styled.p<NomeHeroTextProps>`
  color: var(--secondary-light);
  font-size: ${p => p.fontSize || 2}rem;
`;

export const TextContainer = styled.div`
  text-align: center;
  z-index: 1;
`;