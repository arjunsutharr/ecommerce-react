import React from "react";
import "./App.css";
import Nav from "./components/nav/Nav";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductList from "./components/productList/ProductList";
import Page404 from "./pages/misc/page404/Page404";
import ProductDetails from "./pages/app/productDetails/ProductDetalis";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/products/:productId" element={<ProductDetails />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
