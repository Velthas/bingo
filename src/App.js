import React, { useState } from "react";
import styled from "styled-components";
import BingoCard from "./components/bingocard/BingoCard";
import './style/shared.css'

function App() {
  const [bingo, setBingo] = useState([]); // Will be a matrix where each array contains bingo hits

  //Use this function to ensure all bingos are up to date
  const validateBingos = (hits) => {
    if (bingo.length < 0) return;
    const updatedArray = bingo.filter((combination) => {
      let counter = 0;
      let allTilesHit = false;
      for (let i = 0; i < combination.length; i++) {
        if (hits.indexOf(combination[i]) !== -1) counter++;
        if (counter === 5) allTilesHit = true;
      }
      return allTilesHit;
      });
    setBingo(updatedArray);
  };

  return (
    <Wrapper className="App">
      <Heading>Concerence Call Bingo</Heading>
      <Intro>Welcome to Conference Call Bingo, an app to keep by your side as you rush head down into another work call. Line up 5 of these bizarre occurrences to get a Bingo!</Intro>
      <BingoCard
        validateBingos={validateBingos}
        bingo={bingo}
        setBingo={setBingo}
      />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  min-height: 100vh;
  min-width: 100vw;
  color: #06354e;
  font-family: apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
  padding: 5%;
`;

const Heading = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  letter-spacing: 4px;
  margin-bottom: 4px;
`;

const Intro = styled.p`
  font-size: 1.5rem;
  text-align: center;
  margin-bottom: 32px;
  margin-top: 0;
  width: 60%;
`;


export default App;
