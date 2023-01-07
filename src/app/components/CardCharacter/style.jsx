import styled from "styled-components";

export const BoxCard = styled.div`
  border-radius: 10px;
  display: flex;
  align-items: center;
  background-color: var(--color-bg-4);
  overflow: hidden;
`;

export const Description = styled.div`
  padding: 0.5rem 1rem;
  font-family: var(--font-text);
  font-size: 1.1rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
  position: relative;
  align-items: center;

  p:not(:last-child) {
    margin-bottom: 0.8rem;
  }
`;
export const DescriptionLeft = styled.div`
  width: 40%;
  color: #fff;
`;

export const DescriptionRight = styled.div`
  width: 60%;
`;

export const MoreInfo = styled.div`
  position: absolute;
  right: 0px;
  width: 70px;
  color: #fff;
  text-decoration: underline;
  align-self: start;
`;

export const Name = styled.p`
  color: #fff !important;
  &:hover {
    color: var(--color-span) !important;
  }
`;
export const ImgContainer = styled.div`
  width: 300px;
  height: 200px;

  img {
    width: 100%;
    height: 100%;
  }
`;
