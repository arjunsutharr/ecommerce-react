import React from "react";
import "./App.css";
import Nav from "./components/nav/Nav";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductList from "./components/productList/ProductList";
import Page404 from "./pages/misc/page404/Page404";
import ProductDetails from "./pages/app/productDetails/ProductDetalis";

import ErrorBoundaryWall from "./pages/misc/errorBoundery/ErrorBoundary";

function App() {
  return (
    <BrowserRouter>
      <ErrorBoundaryWall>
        <div className="App">
          <Nav />

          <Routes>
            <Route path="/" element={<ProductList />} />
            <Route path="/products/:productId" element={<ProductDetails />} />
            <Route path="*" element={<Page404 />} />
          </Routes>
        </div>
      </ErrorBoundaryWall>
    </BrowserRouter>
  );
}

export default App;
