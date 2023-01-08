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
  selectError,
  selectLoading,
} from "./store/characterPage.selector";

import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import ErrorPage from "../../components/ErrorPage";
import { Loader } from "../../components/Loader";
import { ScollButton } from "../../components/ScrollButton";
import { CardCharacter } from "../../components/CardCharacter";
import { Pagination } from "../../components/Pagination";
import { Search } from "../../components/Search";

//STYLED
import { CharactersPageStyle } from "./style";

export const CharactersPage = () => {
  const characters = useSelector(selectAllCharacters);
  const page = useSelector(selectPage);
  const searchName = useSelector(selectSearchedName);
  const launchError = useSelector(selectError);
  const loading = useSelector(selectLoading);
  const dispatch = useDispatch();

  console.log("CharactersPage", loading, launchError);

  useEffect(() => {
    if (searchName) {
      dispatch(startFetchingSearch(searchName));
    } else {
      dispatch(startFetchingCharacters());
    }
  }, [page]);

  return (
    <div>
      <NavBar />
      <CharactersPageStyle>
        <Search />
        <Pagination />

        {launchError ? <ErrorPage message={launchError} /> : ""}

        {loading ? (
          <Loader />
        ) : (
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
        )}
      </CharactersPageStyle>
      <ScollButton />
      <Footer />
    </div>
  );
};
