import React, { useState } from "react";
import styled from "styled-components";
import "./style/shared.css";
import BingoCard from "./components/bingocard/BingoCard";
import BingoNotification from "./components/BingoNotification";

function App() {
  const [cheer, setCheer] = useState(false); // Used to temporarily display 'cheer' notification

  // This function will display the 'Bingo' notification for 3s.
  const playCheer = () => {
    setCheer(true);
    setTimeout(() => setCheer(false), 1000);
  };

  return (
    <Wrapper className="App">
      {cheer && <BingoNotification />}
      <Heading>Conference Call Bingo</Heading>
      <Intro>
        Welcome to Conference Call Bingo, an app to keep by your side as you
        rush head down into another work call. Line up 5 of these bizarre
        occurrences to get a Bingo!
      </Intro>
      <BingoCard playCheer={playCheer} />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  gap: 20px;
  margin-bottom: 20px;

  min-height: 100vh;
  color: #06354e;
  padding: 16px;

  @media (max-width: 740px) {
    justify-content: flex-start;
    margin-top: 20px;
  }
`;

const Heading = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  letter-spacing: 4px;
  margin-bottom: 4px;
  text-align: center;

  @media (max-width: 740px) {
    font-size: 1.8rem;
  }

  @media (max-width: 500px) {
    font-size: 1.4rem;
    width: 80%;
  } ;
`;

const Intro = styled.p`
  font-size: 1.5rem;
  text-align: center;
  margin-bottom: 32px;
  margin-top: 0;
  width: 60%;

  @media (max-width: 740px) {
    font-size: 1.3rem;
    margin-bottom: 8px;
    width: 80%;
  }

  @media (max-width: 500px) {
    font-size: 1.1rem;
    width: 90%;
  } ;
`;

export default App;
