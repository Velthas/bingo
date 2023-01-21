import React, { useEffect, useState } from "react";
import { shuffleArray } from "../../utils/helpers";
import { checkVerticalBingo, checkHorizontalBingo, checkDiagonalBingo } from "../../utils/verifyBingo";
import styled from "styled-components";
import uniqid from "uniqid";

import material from "../../utils/cardContent";
import BingoTile from "./BingoTile";
import FreeTile from "./FreeTile";

const BingoCard = ({ setBingo, validateBingos, bingo, playCheer }) => {
  const [cards, setCards] = useState(shuffleArray(material)); // Shuffle cards on page load
  const [hit, setHit] = useState([12]); // Always start with 12 (free tile) as hit;
  const [last, setLast] = useState(null);
  useEffect(() => {
    checkForBingo(last);
  }, [hit]);

  // This function is used after every hit to check for bingos.
  const checkForBingo = (index) => {
    validateBingos(hit); // When user hits a box, we check if they undid any previous bingo

    const isVerticalBingo = checkVerticalBingo(index, hit); // Check for vertical bingo
    const isHorizontalBingo = checkHorizontalBingo(index, hit); // Check for horizontal bingo
    const isDiagonalBingo = checkDiagonalBingo(index, hit); // Check for diagonal bingo

    // If there is any bingos, add them to the bingo array
    // The array is then used to mark the styling on tiles
    if (isVerticalBingo.result)
      setBingo((prevState) => [...prevState, isVerticalBingo.bingo]);
    if (isHorizontalBingo.result)
      setBingo((prevState) => [...prevState, isHorizontalBingo.bingo]);
    if (isDiagonalBingo.result)
      setBingo((prevState) => [...prevState, isDiagonalBingo.bingo]);

    if (isVerticalBingo.result || isHorizontalBingo.result || isDiagonalBingo.result) 
      playCheer(); // If there is any bingo, show 'bingo' notification
  };

  // This either plays or unplays a tile
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
  grid-template: repeat(5, minmax(0, 1fr)) / repeat(5, minmax(0, 1fr));
  max-height: 700px;
  max-width: 700px;
`;

export default BingoCard;
