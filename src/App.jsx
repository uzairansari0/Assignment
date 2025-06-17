import { useState } from "react";
import Product from "./Pages/Product";
import { Route, BrowserRouter as Router, Routes } from "react-router";
import Checkout from "./Pages/Checkout";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Product />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
