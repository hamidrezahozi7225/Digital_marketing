import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Link } from "react-router-dom";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#1976d2",
    },
  },
});

const NavBar = () => {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <ThemeProvider theme={darkTheme}>
          <AppBar position="static">
            <Toolbar>
              <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{
                  flexGrow: 1,
                  // display: { xs: "none", sm: "block" },
                  mr: 2,
                }}
              >
                <Link to="/coins" className="navbarlink">
                  Home
                </Link>
                {/* <Link to="/coins" className="navbarlink">
                  Like
                </Link> */}
              </Typography>
            </Toolbar>
          </AppBar>
        </ThemeProvider>
      </Box>
    </>
  );
};

export default NavBar;
