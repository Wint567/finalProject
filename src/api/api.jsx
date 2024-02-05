import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://65ac0800fcd1c9dcffc779d1.mockapi.io/',
  headers: {
    'Content-Type': 'application/json', // Add a trailing comma here
  },
});

export const CardsAPI = {
  cards: () => instance.get('cards')
    .then(({ data, statusText }) => {
      if (statusText > 399) {
        throw new Error(statusText);
      }
      return data;
    })
    .catch((error) => {
      console.log(error);
      throw error; // You should throw the error here or return a value
    }),

  questions: () => instance.get('questions')
    .then(({ data, statusText }) => {
      if (statusText > 399) {
        throw new Error(statusText);
      }
      return data;
    })
    .catch((error) => {
      console.log(error);
      throw error; // You should throw the error here or return a value
    }),
};
