import { useDispatch } from "react-redux";

import { Formik, Form, Field } from "formik";

import {
  setPage,
  startFetchingSearch,
  startFetchingCharacters,
} from "../../pages/CharactersPage/store/characterPage.slice";
import { SearchForm } from "./style";
import { FaSearch } from "react-icons/fa";
import { BiReset } from "react-icons/bi";

export const Search = () => {
  const dispatch = useDispatch();

  function formSubmit(event) {
    dispatch(setPage(1));
    dispatch(startFetchingSearch(event.searchName));
  }
  function resetCharacter() {
    dispatch(startFetchingCharacters());
  }

  return (
    <SearchForm>
      <Formik
        initialValues={{ searchName: "" }}
        onSubmit={(values, { resetForm }) => {
          formSubmit(values);
          resetForm();
        }}
      >
        <Form>
          <button onClick={resetCharacter}>ALL</button>
          <Field name="searchName" placeholder="search name" />
          <button type="submit">
            <FaSearch />
          </button>
        </Form>
      </Formik>
    </SearchForm>
  );
};

//UTILIZZANDO GLI HOOK
/* const dispatch = useDispatch();
const [searchName, setName] = useState();

async function onFormSubmit(event) {
  event.preventDefault();
  await dispatch(nextPage(1));
  await dispatch(startFetchingSearch(searchName));
}

function inputChange(event) {
  setName(event.target.value);
}

return (
  <div>
    <form onSubmit={onFormSubmit}>
      <input onChange={inputChange} type="search" placeholder="Search Name" />

      <button type="submit">Search</button>
    </form>
  </div>
); */
