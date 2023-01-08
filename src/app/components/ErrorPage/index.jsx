import styled from "styled-components";
import { useRouteError } from "react-router-dom";

const Error = styled.div`
  padding: 1rem;
  border: 3px solid #d93025;
  border-radius: 7px;
  background-color: tomato;
`;

const ErrorPage = ({ message }) => {
  const error = useRouteError();

  return (
    <>
      <Error>
        <h1>Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <i> {JSON.stringify(error.statusText || error.message || message)}</i>
      </Error>
    </>
  );
};

export default ErrorPage;
