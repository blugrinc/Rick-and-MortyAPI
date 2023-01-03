import { createSelector } from "@reduxjs/toolkit";

const selectDomainList = (state) => state.characters;

export const selectPage = createSelector(
  [selectDomainList],
  (character) => character.page
);

export const selectName = createSelector(
  [selectDomainList],
  (character) => character.name
);

export const selectAllCharacters = createSelector(
  [selectDomainList],
  (character) => character.result
);
