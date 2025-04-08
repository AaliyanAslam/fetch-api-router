import React, { useEffect, useState } from "react";
import ImgMediaCardm from "../components/Card";

const Products = () => {
  const [data, setData] = useState(null);
  const [Loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((res) => {
        setData(res);
        // console.log(res);
      })
      .catch((err) => {
        console.log(err);
        setError(true);
      });
  });
  return (
    <>
      <div>
        {data &&
          data.products.map((product) => {
            return <ImgMediaCardm title = {product.title} image = {product.thumbnail} key = {product.id}/>;
          })}
      </div>
    </>
  );
};

export default Products;
