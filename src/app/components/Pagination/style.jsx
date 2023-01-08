import styled from "styled-components";

export const PaginationStyle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  button {
    padding: 0.8em;
    border-radius: 5px;
    background: #fff;
    border: none;

    &:hover {
      background-color: #ccc;
    }
  }
`;

export const CurrentPage = styled.div`
  color: black;
  background: #fff;
  border-radius: 5px;
  padding: 4px 40px;

  animation: heartbeat 1.5s ease-in-out 1 both;
  @keyframes heartbeat {
    from {
      transform: scale(1);
      transform-origin: center center;
      animation-timing-function: ease-out;
    }
    10% {
      transform: scale(0.91);
      animation-timing-function: ease-in;
    }
    17% {
      transform: scale(0.98);
      animation-timing-function: ease-out;
    }
    33% {
      transform: scale(0.87);
      animation-timing-function: ease-in;
    }
    45% {
      transform: scale(1);
      animation-timing-function: ease-out;
    }
  }
`;

export const NumberList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  margin-top: 23px;
  padding: 5px;
  border: 2px solid green;

  /* #1 */
  border: 5px solid hsl(0, 0%, 40%);

  /* #2 */
  padding: 5px;
  background: hsl(0, 0%, 20%);

  /* #3 */
  outline: 5px solid hsl(0, 0%, 60%);

  /* #4 AND INFINITY!!! (CSS3 only) */
  box-shadow: 0 0 0 10px hsl(0, 0%, 80%), 0 0 0 15px hsl(0, 0%, 90%);

  button {
    color: black;
    float: left;
    padding: 8px 16px;
    text-decoration: none;
    transition: background-color 0.3s;
    border: 1px solid #ddd;
    margin: 1px 2px;
  }

  button:hover {
    background-color: #4caf50;
    color: white;
    border: 1px solid #4caf50;
  }
`;
