import React from "react";
import styled from "styled-components";

const BingoTile = ({ hit, index, content, toggleTile }) => {
  return (
    <Tile index={index} isHit={hit.indexOf(index) !== -1} onClick={() => toggleTile(index)}>
      <Content>{content}</Content>
    </Tile>
  );
};

const Tile = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  cursor: pointer;
  transition: 0.3s ease-out;

  padding: 8px;
  border: 1px solid black;
  background-color: ${({ isHit }) => isHit ? '#aad6ed' : 'transparent'};

  &::after {
    color: black;
    content: '${({ index }) => index }';
    position: absolute;
    top: 5px;
    right: 5px;
    font-size: 0.8rem; 
  };

  &:hover {
    background-color: ${({ isHit }) => isHit ? '#76abc7' : '#dfdfdf' };
  }
`;

const Content = styled.span`
  font-weight: 400;
  font-size: 1.2rem;
`

export default BingoTile;
