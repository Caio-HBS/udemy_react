import React, { useContext } from "react";

import "./Products.css";

import { ProductsContext } from "../context/products-context.js";

import ProductItem from "../components/Products/ProductItem.js";

const Products = (props) => {
  const productList = useContext(ProductsContext).products;

  return (
    <ul className="products-list">
      {productList.map((prod) => (
        <ProductItem
          key={prod.id}
          id={prod.id}
          title={prod.title}
          description={prod.description}
          isFav={prod.isFavorite}
        />
      ))}
    </ul>
  );
};

export default Products;
