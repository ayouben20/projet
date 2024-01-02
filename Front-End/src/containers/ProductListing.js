import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import ProductComponents from "./ProductComponet";
import { setProducts } from "../redux/actions/ProductAction";
import Header from "./Header";
import axios from "axios";
import Footer from "./Footer";

const ProductListing = () => {
  const products = useSelector((state) => state);
  const dispatch = useDispatch();

  const fetchProducts = async () => {
    await axios
      .get("http://127.0.0.1:8000/allProducts")
      .then((response) => {
        dispatch(setProducts(response.data));
      })
      .catch((err) => {
        console.log("Err: ", err);
      });
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  console.log("products", products);
  return (
    <div>
      <Header />

      <div className="ui grid container">
        <ProductComponents />
      </div>
    </div>
  );
};

export default ProductListing;
