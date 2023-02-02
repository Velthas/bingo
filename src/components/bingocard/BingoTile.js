import React from "react";
import styled from "styled-components";

const BingoTile = ({ hit, index, content, toggleTile, bingo }) => {
  // This function returns true if the tile has been used for a bingo
  // The result is then used to change the styling of the tile
  const isPartOfBingo = () => {
    for (let i = 0; i < bingo.length; i++) {
      for (let j = 0; j < 5; j++) {
        if (index === bingo[i][j]) return true;
      }
    }
    return false;
  };

  return (
    <Tile
      bingo={isPartOfBingo()}
      index={index}
      isHit={hit.indexOf(index) !== -1}
      onClick={() => toggleTile(index)}
    >
      <Content>{content}</Content>
    </Tile>
  );
};

const Tile = styled.div`
  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;
  transition: 0.3s ease-out;
  aspect-ratio: 1/1; 
  text-align: center; 

  margin: -1px 0 0 -1px;
  padding: 8px;
  border: 1px solid black;
  background-color: ${(props) => (props.isHit ? props.theme.hit : "transparent")};
  ${(props) => (props.bingo ? `background-color: ${props.theme.bingo}` : '')};

  &::after {
    color: ${props => props.theme.dark};
    content: "${({ index }) => index}";
    position: absolute;
    top: 5px;
    right: 5px;
    font-size: 0.8rem;
  }

  &:hover {
    background-color: ${(props) => (props.isHit ? props.theme.hitOver : props.theme.defaultHover)};
    ${(props) => (props.bingo ? `background-color: ${props.theme.bingoHover}` : '')};
  }

  @media (max-width: 650px) {
    &::after {
      font-size: 0.5rem;
    }
  };
`;

const Content = styled.span`
  font-weight: 400;
  font-size: 1.2rem;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;

  @media (max-width: 850px) {
    font-size: 1rem;
  };

  @media (max-width: 740px) {
    font-size: 0.9rem;
  };

  @media (max-width: 650px) {
    font-size: 0.7rem;
  };

  @media (max-width: 450px) {
    font-size: 0.6rem;
  };
`;

export default BingoTile;
