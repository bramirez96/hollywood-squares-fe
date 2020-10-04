import { axiosWithAuth, tokenHandler } from '../lib';

export const login = async (credentials) => {
  const res = await axiosWithAuth.post('/login', credentials);
  tokenHandler.write(res.data.token);
};

export const register = async (credentials) => {
  const res = await axiosWithAuth.post('/register', credentials);
  tokenHandler.write(res.data.token);
};

export const getGames = () => {
  return axiosWithAuth.get('/games');
};
