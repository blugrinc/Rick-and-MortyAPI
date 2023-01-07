const fetchWrapper = async (endpoint) => {
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
};

export { fetchWrapper };
