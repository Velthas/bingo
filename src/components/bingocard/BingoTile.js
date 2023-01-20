import React from "react";
import styled from "styled-components";

const BingoTile = ({ hit, index, content }) => {
  return (
    <Tile>
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
`;

const Index  = styled.div`
  align-self: flex-end;
`;

export default BingoTile;
