import React, { useEffect, useState } from "react";
import styled from "styled-components";

const BingoTile = ({ hit, index, content, toggleTile }) => {
  const [isHit, setIsHit] = useState(false);
  useEffect(() => {
    // Toggles between the two states of a hit tile
    // Run a check every time the hit array is updated
    if(hit.indexOf(index) === -1) setIsHit(false);
    else if(hit.indexOf(index) !== -1) setIsHit(true);
  }, [hit])

  return (
    <Tile isHit={isHit} onClick={() => toggleTile(index)}>
      <Index>{index}</Index>
      <span>{content}</span>
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
  background-color: ${({ isHit }) => isHit ? 'green' : 'transparent'};
`;

const Index  = styled.div`
  align-self: flex-end;
`;

export default BingoTile;
