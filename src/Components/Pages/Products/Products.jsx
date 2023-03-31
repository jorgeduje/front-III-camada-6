import React from "react";
import { Link } from "react-router-dom";
import ProductCard from "../../Common/ProductCard/ProductCard";
import { Button } from "@mui/material";

const Products = ({ deleteProductById, items }) => {
  return (
    <div>
      <div style={{width: "100%", display: "flex", justifyContent: "center", paddingTop: "40px"}}>
        <Link to="/create-product" style={{ textDecoration: "none" }}>
          <Button variant="contained" size="small">
            Agregar nuevo producto
          </Button>
        </Link>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "30px",
          alignItems: "center",
          flexWrap: "wrap",
          marginTop: "50px",
        }}
      >
        {items.map((elemento) => (
          <ProductCard
            key={elemento.id}
            elemento={elemento}
            deleteProductById={deleteProductById}
          />
        ))}
      </div>
    </div>
  );
};

export default Products;
