import React from "react";
import styled from "styled-components";
import { MdEmojiFoodBeverage } from "react-icons/md";
import { GiDevilMask } from "react-icons/gi";

const FreeTile = ({bingo}) => {
  // Function just checks if there are 12 bingos as expected
  // If so, causes some style changes...
  const allBingosAchieved = () => bingo.length === 12;

  return (
    <Tile allFound={allBingosAchieved()}>
      { !allBingosAchieved() ? <Tea /> : <Devil /> }
      <Content>{!allBingosAchieved() ? 'Free Bingo Tile!' : 'Run for your life!'}</Content>
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
  color: ${props => props.theme.light};
  background-color: ${(props) => props.allFound ? props.theme.allHit : props.theme.main};
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

const Icon = `
  color: ${props => props.theme.light};
  height: 60px;
  width: 60px;
  transition: 0.15s ease-out;

  &:hover {
    transform: scale(1.05);
  }

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
  }
`;

const Tea = styled(MdEmojiFoodBeverage)`
 ${Icon}
`

const Devil = styled(GiDevilMask)`
 ${Icon}
`

export default FreeTile;
