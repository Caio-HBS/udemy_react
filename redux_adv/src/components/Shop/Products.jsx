import React from "react";

import classes from "./Products.module.css";

import ProductItem from "./ProductItem.jsx";

export default function Products(props) {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        <ProductItem
          title="Test"
          price={6}
          description="This is a first product - amazing!"
        />
      </ul>
    </section>
  );
}
