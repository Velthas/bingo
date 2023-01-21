import React from "react";
import styled from "styled-components";
import { MdEmojiFoodBeverage } from "react-icons/md";

const FreeTile = () => {
  return (
    <Tile>
      <Icon />
      <Content>Free Bingo Tile!</Content>
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
  font-size: 1rem;
  color: white;
  background-color: #06354e;
  text-align: center;
  width: 100%;
  aspect-ratio: 1/1;
`;

const Content = styled.span`
  font-weight: 400;
  font-size: 1.2rem;

  @media (max-width: 850px) {
    display: none;
  } ;
`;

const Icon = styled(MdEmojiFoodBeverage)`
  color: #fff;
  height: 60px;
  width: 60px;

  @media (max-width: 850px) {
    height: 60px;
    width: 60px;
  }

  @media (max-width: 700px) {
    height: 40px;
    width: 40px;
  }

  @media (max-width: 400px) {
    height: 28px;
    width: 28px;
  } ;
`;

export default FreeTile;
