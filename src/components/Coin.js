import React, { useContext } from "react";
import { trim } from "../helper/function";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import { Link } from "react-router-dom";
import { styled } from "@mui/material/styles";

const Coin = ({ data, handleLike }) => {
  const {
    market_cap_rank,
    symbol,
    name,
    image,
    current_price,
    price_change_percentage_24h,
    id,
  } = data;

  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
      height: 120,
    },
  }));

  return (
    <>
      <TableBody>
        <TableRow key={name} variant="contained">
          <StyledTableCell align="left">
            <Link to={`/coins/${id}`}>{market_cap_rank}</Link>
          </StyledTableCell>
          <StyledTableCell align="left">
            <Link to={`/coins/${id}`}>
              <img src={image} alt="coins" width="20px" />
              <span> {name}</span>
              <span> ({symbol})</span>
            </Link>
          </StyledTableCell>
          <StyledTableCell align="left">
            <Link to={`/coins/${id}`}>{current_price}$</Link>
          </StyledTableCell>
          <StyledTableCell align="left">
            <Link to={`/coins/${id}`}>
              <span
                style={{
                  color:
                    price_change_percentage_24h < 0 ? "#ED5565" : "#4EAF0A",
                }}
              >
                {" "}
                {trim(price_change_percentage_24h)}%
              </span>
            </Link>
          </StyledTableCell>
        </TableRow>
      </TableBody>
    </>
  );
};

export default Coin;
