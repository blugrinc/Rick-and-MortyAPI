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
    <div>
      <img alt={name} src={characterSource} />
      <div>
        <div>
          <p>{name}</p>
          <p>
            {status} - {species}
          </p>
          <p>{gender}</p>
          <p>{type}</p>
        </div>
        <div>
          <p>Origin: {originLocation}</p>
          <p>Location: {actualLocation}</p>
        </div>
        <div>
          <a href={moreInfo}>More Info</a>
        </div>
      </div>
    </div>
  );
};
