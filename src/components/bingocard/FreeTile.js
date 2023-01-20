import React from "react";
import styled from "styled-components";

const FreeTile = () => {
  return (
    <Tile>
      <span>Free Bingo Tile!</span>
    </Tile>
  );
};

const Tile = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  padding: 8px;
  border: 1px solid black;
`;

export default FreeTile;