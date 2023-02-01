import React, { useState } from "react";
import { shuffleArray } from "../../utils/helpers";
import {
  checkVerticalBingo,
  checkHorizontalBingo,
  checkDiagonalBingo,
} from "../../utils/verifyBingo";
import styled from "styled-components";
// import uniqid from "uniqid"; //TODO: Unneded dependency now

import material from "../../utils/cardContent";
import BingoTile from "./BingoTile";
import FreeTile from "./FreeTile";

const BingoCard = ({ playCheer }) => {
  const [bingo, setBingo] = useState([]); // Multi-dimensional array, each array contains bingo hits;
  const [cards, setCards] = useState(shuffleArray(material)); // Shuffle cards on page load
  const [hit, setHit] = useState([12]); // Always start with 12 (free tile) as hit;
  //TODO: Removed setlast state variable and useEffect. Reason is: checking for bingos should be a side effect of clicking the tile.

  // Use this function to ensure all bingos are up to date
  // If any of the tiles listed are not hit, remove the bingo from the list.

  //TODO: Now takes hit array as argument
  const validateBingos = (hit) => {
    if (bingo.length < 0) return;
    const updatedArray = bingo.filter((combination) => {
      let counter = 0;
      let allTilesHit = false;
      for (let i = 0; i < combination.length; i++) {
        if (hit.includes(combination[i])) counter++; //TODO Used includes for readability
        if (counter === 5) allTilesHit = true;
      }
      return allTilesHit;
    });
    setBingo(updatedArray);
  };

  // This function is used after every hit to check for bingos.
  //TODO: Now takes an updated hit array as argument
  //TODO: Did this to circumvent having to use useEffect, works just the same.
  const checkForBingo = (index, hit) => {
    validateBingos(hit); // When user hits a box, we check if they undid any previous bingo

    //TODO: These functions don't return objects anymore, just the bingo array or false
    //TODO: An array is truthy, false is, well, falsy
    const isVerticalBingo = checkVerticalBingo(index, hit); // Check for vertical bingo
    const isHorizontalBingo = checkHorizontalBingo(index, hit); // Check for horizontal bingo
    const isDiagonalBingo = checkDiagonalBingo(index, hit); // Check for diagonal bingo

    // If there is any bingos, add them to the bingo array
    // The array is then used to mark the styling on tiles
    if (isVerticalBingo)
      setBingo((prevState) => [...prevState, isVerticalBingo]);
    if (isHorizontalBingo)
      setBingo((prevState) => [...prevState, isHorizontalBingo]);
    if (isDiagonalBingo)
      setBingo((prevState) => [...prevState, isDiagonalBingo]);

    // If there is any bingo, show 'bingo' notification
    if (isVerticalBingo || isHorizontalBingo || isDiagonalBingo) playCheer(); 
  };

  // Used to soft reset the current bingo card.
  const resetCard = () => {
    setBingo([]); // Reset all the bingos the user may have achieved
    setCards(shuffleArray(material)); // This shuffles the cards
    setHit([12]); // Always remember to keep the free tile as clicked
  };

  // This either plays or unplays a tile
  const toggleTile = (index) => {
    const isAlreadyClicked = hit.includes(index); //TODO: Changed indexOf for include (read.)
    const updatedHits = isAlreadyClicked //TODO: Get the array in advance to pass to checkForBingo
      ? hit.filter((number) => number !== index)
      : hit.concat([index]);
    if (isAlreadyClicked) setHit(updatedHits);
    else setHit(updatedHits);
    checkForBingo(index, updatedHits); // TODO: Circumvents the need to use a lastHit state var.
    //TODO: And removes the need for useEffect
  };

  return (
    <>
      <BingoGrid>
        {cards.map((item, index) => {
          if (index === 12) return <FreeTile bingo={bingo} key={index} />;
          return (
            <BingoTile
              index={index}
              key={index} //TODO: Tile positions are static so ok for this use case
              hit={hit} //TODO: Previously always changed key on rerender which caused
              content={item} //TODO: Unnecessary rerendering in unchanged tiles
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
`;

export default BingoCard;
