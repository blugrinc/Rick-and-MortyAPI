const URL = "https://rickandmortyapi.com/api/";

const fetchAllCharacters = async (page) => {
  const response = await fetch(`${URL}/character/?page=${page}`);
  const data = await response.json();
  if (response.status >= 400) throw new Error(data.errors);

  /* return data; */
  return data;
};

const fetchSingleCharacter = async (name, page) => {
  const response = await fetch(
    `https://rickandmortyapi.com/api/character/?page=${page}&${name}`
  );
  const data = await response.json();

  if (response.status >= 400) throw new Error(data.errors);

  return data;
};

/* const fetchWrapper = async (endpoint) => {
  const headers = { "Content-Type": "application/json" };

  //Axios
  const method = { method: "GET", headers: { ...headers } };
  const response = await fetch(
    `${process.env.REACT_APP_API_URL}${endpoint}`,
    method
  );
  const data = await response.json();

  if (response.status >= 400) throw new Error(data.errors);

  return data;
}; */

function fetchWrapper(endpoint) {
  const headers = { "Content-Type": "application/json" };

  const config = {
    method: "GET",
    headers: {
      ...headers,
    },
  };
  return window

    .fetch(`${process.env.REACT_APP_API_URL}${endpoint}`, config)
    .then(async (response) => {
      const data = await response.json();
      if (response.ok) {
        return data;
      }
      return Promise.reject(data);
    });
}

export { fetchAllCharacters, fetchSingleCharacter, fetchWrapper };
