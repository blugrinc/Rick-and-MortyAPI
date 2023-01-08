import React from "react";
import NavBar from "../../components/NavBar";

import styled from "styled-components";

const BackgroundImage = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  width: 80%;
  background-color: white;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

  img {
    width: 100%;
    opacity: 0.8;
    height: auto;
  }
`;

const Container = styled.div`
  color: black;
  text-align: center;
  padding: 10px 20px;
`;

export const HomePage = () => {
  return (
    <BackgroundImage>
      <img
        src="https://images6.alphacoders.com/909/thumb-1920-909641.png"
        alt="rick and morty"
      />
      <Container>
        <NavBar />
      </Container>
    </BackgroundImage>
  );
};
