import axios from 'axios';

const baseURL = process.env.REACT_APP_API_HOST;
const headers = { Accept: 'application/json' };

const api = axios.create({
  baseURL: `${baseURL}`,
  headers,
});

const setToken = (token: string): void => {
  api.defaults.headers.authorization = token ? `bearer ${token}` : '';
};

export { api, setToken };
