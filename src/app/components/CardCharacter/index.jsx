import {
  BoxCard,
  Description,
  DescriptionLeft,
  DescriptionRight,
  MoreInfo,
  Name,
  ImgContainer,
} from "./style";

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
      <ImgContainer>
        <img alt={name} src={characterSource} />{" "}
      </ImgContainer>

      <Description>
        <DescriptionLeft>
          <Name>{name}</Name>
          <p>
            {status} - {species}
          </p>
          <p>{gender}</p>
          <p>{type}</p>
        </DescriptionLeft>
        <DescriptionRight>
          <p>Origin: {originLocation}</p>
          <p>Location: {actualLocation}</p>
        </DescriptionRight>
        <MoreInfo>
          <a href={moreInfo}>More Info </a>
        </MoreInfo>
      </Description>
    </BoxCard>
  );
};
