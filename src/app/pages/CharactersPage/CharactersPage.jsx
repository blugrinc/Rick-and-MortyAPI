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
import { Pagination } from "../../components/Pagination";
import { Search } from "../../components/Search";

//STYLED
import { CharactersPageStyle } from "./style";

export const CharactersPage = () => {
  const characters = useSelector(selectAllCharacters);
  const page = useSelector(selectPage);
  const searchName = useSelector(selectSearchedName);
  console.log(characters);
  const dispatch = useDispatch();

  useEffect(() => {
    if (searchName) {
      dispatch(startFetchingSearch(searchName));
    } else {
      dispatch(startFetchingCharacters());
    }
  }, [page]);

  return (
    <CharactersPageStyle>
      <Search />
      <Pagination />

      <section>
        {characters.map((character) => (
          <CardCharacter
            key={character.id}
            name={character.name}
            status={character.status}
            species={character.species}
            gender={character.gender}
            type={character.type}
            characterSource={character.image}
            originLocation={character.origin.name}
            actualLocation={character.location.name}
            moreInfo={character.url}
          />
        ))}
      </section>
    </CharactersPageStyle>
  );
};
