import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { startFetchingCharacters } from "./store/characterPage.slice";
import {
  selectAllCharacters,
  selectPage,
} from "./store/characterPage.selector";

export const CharactersPage = () => {
  const characters = useSelector(selectAllCharacters);
  const page = useSelector(selectPage);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(startFetchingCharacters());
  }, [page]);

  return (
    <div>
      <div> Form Search </div>
      <div> {page} </div>
      <section>
        {characters.map((character) => {
          return (
            <div>
              {character.name}
              {character.status}
              {character.species}
              {character.gender}
              {character.type}
              {character.image}
              {character.origin.name}
              {character.location.name}
              {character.url}
            </div>
          );
        })}
      </section>
    </div>
  );
};
