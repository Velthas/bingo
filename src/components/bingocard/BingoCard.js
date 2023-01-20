import React, { useEffect, useState } from "react";
import { shuffleArray } from "../../utils/helpers";
import styled from "styled-components";
import uniqid from "uniqid";

import material from "../../utils/cardContent";
import BingoTile from "./BingoTile";
import FreeTile from "./FreeTile";
import {
  checkVerticalBingo,
  checkHorizontalBingo,
  checkDiagonalBingo,
} from "../../utils/verifyBingo";

const BingoCard = ({ setBingo, validateBingos, bingo }) => {
  const [cards, setCards] = useState(shuffleArray(material));
  const [hit, setHit] = useState([12]); // Always start with 12 as hit;
  const [last, setLast] = useState(null);
  useEffect(() => {
    checkForBingo(last);
  }, [hit]);

  const checkForBingo = (index) => {
    validateBingos(hit);

    const isVerticalBingo = checkVerticalBingo(index, hit);
    const isHorizontalBingo = checkHorizontalBingo(index, hit);
    const isDiagonalBingo = checkDiagonalBingo(index, hit);

    if (isVerticalBingo.result)
      setBingo((prevState) => [...prevState, isVerticalBingo.bingo]);
    if (isHorizontalBingo.result)
      setBingo((prevState) => [...prevState, isHorizontalBingo.bingo]);
    if (isDiagonalBingo.result)
      setBingo((prevState) => [...prevState, isDiagonalBingo.bingo]);
  };

  const toggleTile = (index) => {
    const isAlreadyClicked = hit.indexOf(index) !== -1;
    if (isAlreadyClicked) setHit(hit.filter((number) => number !== index));
    else setHit((prevState) => prevState.concat([index]));
    setLast(index);
  };

  return (
    <BingoGrid>
      {cards.map((item, index) => {
        if (index === 12) return <FreeTile key={uniqid()} />;
        return (
          <BingoTile
            index={index}
            key={uniqid()}
            hit={hit}
            content={item}
            toggleTile={toggleTile}
            bingo={bingo}
          />
        );
      })}
    </BingoGrid>
  );
};

const BingoGrid = styled.div`
  display: grid;
  grid-template: 1fr 1fr 1fr 1fr 1fr / 1fr 1fr 1fr 1fr 1fr;
  max-height: 700px;
  max-width: 700px;
  width: 80%;
`;



export default BingoCard;
