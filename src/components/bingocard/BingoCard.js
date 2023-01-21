import React, { useEffect, useState } from "react";
import { shuffleArray } from "../../utils/helpers";
import { checkVerticalBingo, checkHorizontalBingo, checkDiagonalBingo } from "../../utils/verifyBingo";
import styled from "styled-components";
import uniqid from "uniqid";

import material from "../../utils/cardContent";
import BingoTile from "./BingoTile";
import FreeTile from "./FreeTile";

const BingoCard = ({ playCheer }) => {
  const [bingo, setBingo] = useState([]); // Multi-dimensional array, each array contains bingo hits;
  const [cards, setCards] = useState(shuffleArray(material)); // Shuffle cards on page load
  const [hit, setHit] = useState([12]); // Always start with 12 (free tile) as hit;
  const [last, setLast] = useState(null); // Use this to keep track of last added/removed tile
  useEffect(() => {
    checkForBingo(last); // On hit array change, we check the bingo based on last unhit/hit tile.
  }, [hit]);

  // Use this function to ensure all bingos are up to date
  // If any of the tiles listed are not hit, remove the bingo from the list.
  const validateBingos = () => {
    if (bingo.length < 0) return;
    const updatedArray = bingo.filter((combination) => {
      let counter = 0;
      let allTilesHit = false;
      for (let i = 0; i < combination.length; i++) {
        if (hit.indexOf(combination[i]) !== -1) counter++;
        if (counter === 5) allTilesHit = true;
      }
      return allTilesHit;
    });
    setBingo(updatedArray);
  };

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

  // Used to soft reset the current bingo card.
  const resetCard = () => {
    setBingo([]); // Reset all the bingos the user may have achieved
    setCards(shuffleArray(material)); // This shuffles the cards
    setLast(null); // There should be no last clicked item in a fresh game
    setHit([12]); // Always remember to keep the free tile as clicked
  }

  // This either plays or unplays a tile
  const toggleTile = (index) => {
    const isAlreadyClicked = hit.indexOf(index) !== -1;
    if (isAlreadyClicked) setHit(hit.filter((number) => number !== index));
    else setHit((prevState) => prevState.concat([index]));
    setLast(index);
  };

  return (
  <>
    <BingoGrid>
      {cards.map((item, index) => {
        if (index === 12) return <FreeTile bingo={bingo} key={uniqid()} />;
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
    <Button onClick={() => resetCard()}>Reset</Button>
  </>
  );
};

const BingoGrid = styled.div`
  display: grid;
  grid-template: repeat(5, minmax(0, 1fr)) / repeat(5, minmax(0, 1fr));
  max-height: 700px;
  max-width: 700px;
`;

const Button = styled.button`
  margin-top: 20px;
  padding: 10px 20px;
  height: 50px;
  width: 150px;

  transition: 0.15s ease-out;
  box-shadow: 0px 5px #3d7c9e;
  font-size: 1.3rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  background-color: #06354e;
  color: #fff;

  &:active {
    box-shadow: none;
    transform: translateY(5px);
  }
`

export default BingoCard;
