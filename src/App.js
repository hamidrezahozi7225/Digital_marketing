import "./App.css";
import Coins from "./components/Coins";
import CoinContext from "./context/CoinContext";
import { Route, Routes, Navigate } from "react-router-dom";
import CoinDetail from "./components/CoinDetail";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

function App() {
  return (
    <CoinContext>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/coins" element={<Coins />} />
          <Route path="/coins/:id" element={<CoinDetail />} />
          <Route path="/" element={<Navigate to="/coins" />} />
        </Routes>
        <Footer />
      </div>
    </CoinContext>
  );
}

export default App;
