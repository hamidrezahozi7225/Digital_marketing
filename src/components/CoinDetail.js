import React, { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { CoinProvider } from "../context/CoinContext";
import { getDetail } from "../services/Api";
import { Line } from "react-chartjs-2";
import "chart.js";
import { CategoryScale } from "chart.js";
import Chart from "chart.js/auto";

Chart.register(CategoryScale);

const CoinDetail = () => {
  const { id: nameCoin } = useParams();
  const coins = useContext(CoinProvider);
  const coninsfilter = coins.filter((item) => item.id === nameCoin);

  const [coinDet, setCoinDet] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const coin = await getDetail(nameCoin, 365, "usd");
      setCoinDet(coin.prices);
    };
    getData();
  }, []);

  return (
    <div style={{ backgroundColor: "#14161a", minHeight: "100vh" }}>
      <h2 style={{ textAlign: "center", padding: "20px 0", color: "silver" }}>
        {coninsfilter.map((item) => item.id)}
      </h2>
      <Line
        data={{
          labels: coinDet.map((coin) => {
            let date = new Date(coin[0]);
            return date.toLocaleDateString();
          }),
          datasets: [
            { data: coinDet.map((coin) => coin[1]), borderColor: "#EEBC1D" },
          ],
        }}
        options={{
          elements: {
            point: {
              radius: 1,
            },
          },
        }}
      />
    </div>
  );
};

export default CoinDetail;
