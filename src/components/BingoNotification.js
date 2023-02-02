import styled from "styled-components";
import React from "react";
import "animate.css";

const BingoNotification = () => {
  return (
    <Container>
      <Heading className="animate__animated animate__rotateIn">Bingo!</Heading>
    </Container>
  );
};

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  z-index: 3;

  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.theme.backdrop};
  color: ${props => props.theme.light};
`;

const Heading = styled.h1`
  font-size: 5rem;
`;

export default BingoNotification;
