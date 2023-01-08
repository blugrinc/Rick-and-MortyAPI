import styled from "styled-components";

export const SearchForm = styled.div`
  width: 50%;
  margin: 1rem auto;

  form {
    display: flex;
    justify-content: center;
  }

  input {
    font-size: 1rem;
    padding: 0.8em;
    margin-right: 3px;
    border-radius: 5px;
  }

  button {
    cursor: pointer;
    padding: 0.8em;
    border-radius: 5px;
  }
  button:hover {
    color: #fafafa;
    background-color: #b95a5a;
  }
`;
