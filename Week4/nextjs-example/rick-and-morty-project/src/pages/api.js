import axios from 'axios';

const baseURL = 'https://rickandmortyapi.com/api';

const axiosInstance = axios.create({
  baseURL,
});

// axios.get('https://rickandmortyapi.com/api/character');

// axiosInstance.get('/character');

export const fetchCharacters = async () => {
  const response = await axiosInstance.get('/character');
  return response.data.results;
};

export const fetchCharacter = async (id) => {
  const response = await axiosInstance.get(`/character/${id}`);
  return response.data;
};
