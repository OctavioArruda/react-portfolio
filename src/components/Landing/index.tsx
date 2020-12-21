import React from "react";

import { Hero, HighlightedText, NormalHeroText } from "./styles";

const Landing: React.FC = () => {
  return (
    <Hero>
      {/* Todo: NormalHeroText recebe prop que define o tamanho dele */}
      <NormalHeroText>
        Hello, <HighlightedText>I'm Octavio</HighlightedText>
      </NormalHeroText>
      <NormalHeroText>
        A creative <HighlightedText>software developer </HighlightedText>
        based in Porto Alegre.
      </NormalHeroText>
    </Hero>
  );
};

export default Landing;
