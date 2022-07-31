import React, { createContext, useEffect, useState } from "react";
import { getData } from "../services/Api";

export const CoinProvider = createContext();

const CoinContext = (props) => {
  const [coin, setCoin] = useState([]);

  useEffect(() => {
    const getCoin = async () => {
      setCoin(await getData());
    };
    getCoin();
  }, []);

  return (
    <CoinProvider.Provider value={coin}>{props.children}</CoinProvider.Provider>
  );
};

export default CoinContext;
