import axios from "axios";

export const getQuote = () => {
  const URL = `https://api.kanye.rest`;
  return axios.get(URL);
};

export const createQuote = axios.create({
  baseURL: `https://api.kanye.rest`,
});
