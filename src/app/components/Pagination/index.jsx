import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectLengthPage,
  selectPage,
} from "../../pages/CharactersPage/store/characterPage.selector";
import { nextPage } from "../../pages/CharactersPage/store/characterPage.slice";

export const Pagination = () => {
  const page = useSelector(selectPage);
  const length = useSelector(selectLengthPage);
  const dispatch = useDispatch();

  const [pages, setPages] = useState([]);

  useEffect(() => {
    setPages(Array.from(Array(length).keys()));
  }, [length]);

  function toPrevPage() {
    if (page === 1) return;
    dispatch(nextPage(page - 1));
  }

  function toNextPage() {
    if (page === length) return;
    dispatch(nextPage(page + 1));
  }

  function pageButton(number) {
    console.log("schifo");
  }

  return (
    <div>
      {pages.map((i) => {
        return (
          <button key={i} onClick={pageButton(i)}>
            {i}
          </button>
        );
      })}

      <button onClick={toPrevPage} disabled={page === 1}>
        {page === 1 ? "<-" : `${page - 1} <-`}
      </button>
      <p>
        {page}/{length}
      </p>
      {page !== length && (
        <button onClick={toNextPage}>{` -> ${page + 1}`}</button>
      )}
    </div>
  );
};
