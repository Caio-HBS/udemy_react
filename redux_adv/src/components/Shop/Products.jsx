import React from "react";

import classes from "./Products.module.css";

import ProductItem from "./ProductItem.jsx";

const DUMMY_PRODUCTS = [
  { title: "Book", id: "p1", price: 5, description: "Very nice book." },
  { title: "Videogame", id: "p2", price: 20, description: "Interesting game." },
  { title: "Toy", id: "p3", price: 11, description: "Terrible toy." },
  { title: "Slice of bread", id: "p4", price: 2, description: "Plain bread." },
];

export default function Products(props) {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map((singleProduct) => (
          <ProductItem
            title={singleProduct.title}
            price={singleProduct.price}
            description={singleProduct.description}
            key={singleProduct.id}
            id={singleProduct.id}
          />
        ))}
      </ul>
    </section>
  );
}
