// Fetches data from the RESAS API

const resasApiService = (action:string, params:Record<string, string>) => {
  const headers = {
    'method': 'GET',
    'Content-Type': 'application/json;charset=UTF-8',
  };
  let apiUrl = `/api/${action}`;
  const query = Object.entries(params).map(([key, value])=>`${key}=${value}`).join('&');
  if (query.length) {
    apiUrl += `?${query}`;
  };
  return fetch(apiUrl, { headers })
    .then(response=>response.json())
    .catch(error=>console.error(error));
};

export default resasApiService;
