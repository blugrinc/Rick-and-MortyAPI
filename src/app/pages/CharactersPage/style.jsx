import styled from "styled-components";

export const CharactersPageStyle = styled.div`
  width: 90%;
  margin: 0 auto;

  /* .error {
  position: absolute;
  top: 20px;
  left: 5px;
} */

  section {
    display: grid;
    grid-gap: 1rem;
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
    margin: 2rem auto;
  }
`;
