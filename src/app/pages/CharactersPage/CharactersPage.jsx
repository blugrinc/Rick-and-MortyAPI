import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  startFetchingCharacters,
  startFetchingSearch,
} from "./store/characterPage.slice";
import {
  selectAllCharacters,
  selectPage,
  selectSearchedName,
} from "./store/characterPage.selector";

import { CardCharacter } from "../../components/CardCharacter";

export const CharactersPage = () => {
  const characters = useSelector(selectAllCharacters);
  console.log(characters);
  const page = useSelector(selectPage);
  const searchName = useSelector(selectSearchedName);

  const dispatch = useDispatch();

  useEffect(() => {
    if (searchName) {
      dispatch(startFetchingSearch(searchName));
    } else {
      dispatch(startFetchingCharacters());
    }
  }, [page]);

  return (
    <div>
      <div> Form Search </div>
      <div> {page} </div>
      <section>
        {characters.map((character) => (
          <CardCharacter
            name={character.name}
            status={character.status}
            species={character.species}
            gender={character.gender}
            type={character.type}
            characterSource={character.character}
            originLocation={character.origin.name}
            actualLocation={character.location.name}
            moreInfo={character.url}
          />
        ))}
      </section>
    </div>
  );
};
