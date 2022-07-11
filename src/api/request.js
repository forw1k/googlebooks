import axios from 'axios';

export const requestList = async (queryParams) => {
  const url = `https://www.googleapis.com/books/v1/volumes?q=${queryParams}`;
  return axios.get(url);
};

export const requestListBase = async (queryParams) => {
  const url = `https://www.googleapis.com/books/v1/volumes?q=${queryParams}`;
  return axios.get(url);
};

export const requestBook = async (bookId) => {
  const url = `https://www.googleapis.com/books/v1/volumes?q=${bookId}`;
  return axios.get(url);
};
