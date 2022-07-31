import axios from "axios";

const base_URL =
  "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&per_page=100&page=1&sparkline=false";

export const getData = async () => {
  const { data } = await axios.get(base_URL);
  return data;
};

export const getDetail = async (id, days = 365, currency) => {
  const { data } = await axios.get(
    `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=${currency}&days=${days}`
  );
  return data;
};
