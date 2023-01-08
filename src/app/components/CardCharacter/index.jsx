import { BoxCard, Description, ImgContainer, Title } from "./style";

export const CardCharacter = ({
  name,
  status,
  species,
  gender,
  type,
  characterSource,
  originLocation,
  actualLocation,
  moreInfo,
}) => {
  return (
    <BoxCard>
      <Title>
        <h2>{name}</h2>
      </Title>

      <ImgContainer>
        <img alt={name} src={characterSource} />
      </ImgContainer>

      <Description>
        <p>
          {species}, {status}, {gender}{" "}
        </p>
      </Description>
    </BoxCard>
  );
};
