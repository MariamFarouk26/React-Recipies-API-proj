// apiContext.js
import React, { createContext, useContext, useState } from 'react';

const ApiContext = createContext();

export const RandomApiProvider = ({ children }) => {
  const [apiData, setApiData] = useState([]);
  const API_RANDOM_URL = 'https://www.themealdb.com/api/json/v1/1/random.php';

  const fetchRandomData = async () => {
    const response = await fetch(API_RANDOM_URL);
    const data = await response.json();
    return data;
  };

  const fetchAllRandomData = async () => {
    const data = await Promise.all(
      Array.from({ length: 9 }, () => fetchRandomData())
    );
    setApiData(data);
  };

  return (
    <ApiContext.Provider value={{ apiData, fetchAllRandomData }}>
      {children}
    </ApiContext.Provider>
  );
};

export const useRandomApi = () => {
  return useContext(ApiContext);
};
