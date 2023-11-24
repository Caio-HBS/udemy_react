import React from "react";

import Cart from "./components/Cart/Cart.jsx";
import Layout from "./components/Layout/Layout.jsx";
import Products from "./components/Shop/Products.jsx";

export default function App() {
  return (
    <Layout>
      <Cart />
      <Products />
    </Layout>
  );
}
