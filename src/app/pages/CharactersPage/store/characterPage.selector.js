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

export const selectLengthPage = createSelector(
  [selectDomainList],
  (character) => character.length
);

export const selectError = createSelector(
  [selectDomainList],
  (character) => character.error
);

export const selectLoading = createSelector(
  [selectDomainList],
  (character) => character.isLoading
);
