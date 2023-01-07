import { useDispatch } from "react-redux";

import { Formik, Form, Field } from "formik";

import {
  nextPage,
  startFetchingSearch,
} from "../../pages/CharactersPage/store/characterPage.slice";

export const Search = () => {
  const dispatch = useDispatch();

  function formSubmit(event) {
    dispatch(nextPage(1));
    dispatch(startFetchingSearch(event.searchName));
  }

  return (
    <div>
      <Formik initialValues={{ searchName: "" }} onSubmit={formSubmit}>
        <Form>
          <Field name="searchName" placeholder="search name" />
          <button type="submit">search</button>
        </Form>
      </Formik>
    </div>
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
