import React from "react";

import { Hero, HighlightedText, NormalHeroText, TextContainer } from "./styles";

const Landing: React.FC = () => {
  return (
    <Hero>
      <TextContainer>
        <NormalHeroText fontSize={6}>
          Hello, <HighlightedText>I'm Octavio</HighlightedText>
        </NormalHeroText>
        <NormalHeroText fontSize={4}>
          A creative <HighlightedText>software developer </HighlightedText>
          based in Porto Alegre.
        </NormalHeroText>
      </TextContainer>
    </Hero>
  );
};

export default Landing;
