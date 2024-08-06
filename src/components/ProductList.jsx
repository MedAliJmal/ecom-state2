import React from "react";
import ProductCard from "./ProductCard";

const ProductList = ({ prods, edit, handleDelete }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
        flexWrap: "wrap",
      }}
    >
      {prods.map((el) => (
        <ProductCard key={el.id} el={el} edit={edit} del={handleDelete} />
      ))}
    </div>
  );
};

export default ProductList;
