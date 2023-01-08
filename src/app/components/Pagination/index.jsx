import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectLengthPage,
  selectPage,
} from "../../pages/CharactersPage/store/characterPage.selector";
import { setPage } from "../../pages/CharactersPage/store/characterPage.slice";
import { PaginationStyle, CurrentPage, NumberList } from "./style";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

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
    dispatch(setPage(+page - 1));
  }

  function toNextPage() {
    if (page === length) return;
    dispatch(setPage(+page + 1));
  }

  function pageButton(event) {
    dispatch(setPage(event.target.value));
  }

  return (
    <>
      <PaginationStyle>
        <button onClick={toPrevPage} disabled={page === 1}>
          <AiOutlineArrowLeft />
        </button>

        <CurrentPage>{`${page} / ${length}`}</CurrentPage>

        <button onClick={toNextPage} disabled={page === length}>
          <AiOutlineArrowRight />
        </button>
      </PaginationStyle>

      {/* <NumberList>
        {pages.map((i) => {
          return (
            <button
              key={i}
              value={i + 1}
              onClick={pageButton}
              disabled={page === i + 1}
            >
              {i + 1}
            </button>
          );
        })}
      </NumberList> */}
    </>
  );
};
