import { createSelector } from "@reduxjs/toolkit";

const selectDomainList = (state) => state.characters;

export const selectPage = createSelector(
  [selectDomainList],
  (character) => character.page
);

export const selectSearchedName = createSelector(
  [selectDomainList],
  (character) => character.searchName
);

export const selectAllCharacters = createSelector(
  [selectDomainList],
  (character) => character.result
);
