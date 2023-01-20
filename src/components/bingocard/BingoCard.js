import React, { useState } from "react";
import { shuffleArray } from "../../utils/helpers";
import styled from "styled-components";
import uniqid from "uniqid";

import material from "../../utils/cardContent";
import BingoTile from "./BingoTile";
import FreeTile from "./FreeTile";

const BingoCard = () => {
  const [cards, setCards] = useState(shuffleArray(material));
  const [hit, setHit] = useState([]);
  
  return (
    <BingoGrid>
      {cards.map((item, index) => {
        if(index === 12) return <FreeTile/>
        return <BingoTile index={index} key={uniqid()} hit={hit} content={item} />;
      })}
    </BingoGrid>
  );
};

const BingoGrid = styled.div`
  display: grid;
  grid-template: 1fr 1fr 1fr 1fr 1fr / 1fr 1fr 1fr 1fr 1fr;
  height: 700px;
  width: 700px;
`;

export default BingoCard;
