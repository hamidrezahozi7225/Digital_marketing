import React, { useContext, useEffect, useState } from "react";
import { getData } from "../services/Api";
import Coin from "./Coin";
import { paginate } from "./paginate";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";
import TableContainer from "@mui/material/TableContainer";
import Table from "@mui/material/Table";
import CoinTitle from "./CoinTitle";
import { CoinProvider } from "../context/CoinContext";
import digitalPhoto from "../image/digital-marketing.webp";
import { ClimbingBoxLoader } from "react-spinners";

const _ = require("lodash");

const Coins = () => {
  const coins = useContext(CoinProvider);
  const [value, setValue] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [sizePage, setSizetPage] = useState(15);

  const filter = coins.filter((coin) =>
    coin.name.toLowerCase().includes(value.toLowerCase())
  );

  const Number = Math.floor(filter.length / sizePage);
  // const pageNumber = _.range(1, Number + 2);
  const paginateCoin = paginate(filter, currentPage, sizePage);
  const pageChange = (event, value) => {
    setCurrentPage(value);
  };
  const changeHandler = (event) => {
    setValue(event.target.value);
    setCurrentPage(1);
  };

  return (
    <div style={{ minHeight: "100vh" }}>
      <div style={{ backgroundColor: "#14161a" }}>
        <img src={digitalPhoto} alt="banner" width="100%" className="banner" />
      </div>
      <div className="search">
        <input
          type="search"
          placeholder="Search..."
          value={value}
          onChange={changeHandler}
        />
      </div>

      {coins.length ? (
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 200 }} aria-label="customized table">
            <CoinTitle />
            {paginateCoin.map((row) => (
              <Coin key={row.id} data={row} />
            ))}
          </Table>
        </TableContainer>
      ) : (
        <div className="loader">
          <ClimbingBoxLoader color="white" />
        </div>
      )}
      <Stack spacing={2} className="paginate">
        <Pagination
          count={Number + 1}
          color="primary"
          onChange={pageChange}
          className="pageNumber"
        />
      </Stack>
    </div>
  );
};

export default Coins;
