import styled from "styled-components";

export const BoxCard = styled.div`
  font-family: "Hind Siliguri", sans-serif;
  font-size: 15px;
  line-height: 1.5em;

  display: flex;
  flex-direction: column;
  justify-content: center;

  box-sizing: content-box;

  width: 280px;
  height: 280px;
  border-radius: 20px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.16), 0 2px 3px rgba(0, 0, 0, 0.23);
  margin: 20px auto;
  background: #eee;

  .top {
    padding-bottom: 150px;
  }
`;

export const Title = styled.div`
  background-color: white;
  border-radius: 20px;

  h2 {
    padding: 10px 10px;
    text-align: center;
    color: #d1b57c;
    font-size: 1.2em;

    font-variant: small-caps;
    text-shadow: 0 2px 3px rgba(0, 0, 0, 0.3);
    box-shadow: 0 3px 2px rgba(0, 0, 0, 0.1);
  }
`;

export const ImgContainer = styled.div`
  img {
    display: block;
    height: 150px;
    width: 55%;
    margin-left: auto;
    margin-right: auto;
    margin-top: 15px;

    border: 1px solid #ddd;
    padding: 5px;
    background: #fff;
    border-radius: 50%;
    box-shadow: 0 1px 3px 0 rgba(75, 75, 75, 0.5);
  }
`;

export const Description = styled.div`
  padding: 15px;
  line-height: 1.6em;
  width: 100%;

  p {
    animation: fadeInDown 0.6s ease-in-out;
    font-size: 15px;
    color: #888;
    text-align: center;
    text-shadow: 0 1px 1px rgba(0, 0, 0, 0.02);
  }
`;
