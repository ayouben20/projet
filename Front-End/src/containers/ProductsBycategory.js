import React, { useEffect } from "react";
import Header from "./Header";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import "./css/ProductsBycategory.css";
import axios from "axios";
import { setProducts } from "../redux/actions/ProductAction";

const ProductsBycategory = () => {
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
  const products = useSelector((state) => state.allProducts.product);
  console.log("fffff", products);
  const categoryId = useParams().categoryId;
  console.log(categoryId);
  const categoryProducts = products.filter(
    (product) => product.id_categorie == categoryId
  );
  console.log("dss", categoryProducts);
  const renderList = categoryProducts
    .reduce((rows, product, index) => {
      if (index % 4 === 0) rows.push([]);
      rows[rows.length - 1].push(product);
      return rows;
    }, [])
    .map((row) => (
      <div className="ui grid container">
        {row.map((product) => {
          const { id, title, image, price, categorie } = product;
          return (
            <div className="four wide column" key={id}>
              <Link to={`/product/${id}`}>
                <div className="ui link cards">
                  <div className="card">
                    <div className="image">
                      <img src={image} alt={title} />
                    </div>
                    <div className="content">
                      <div className="header">{title}</div>
                      <div className="meta price">$ {price}</div>
                      <div className="meta">
                        {categorie.nom_categorie_categorie}
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    ));
  return (
    <>
      <Header />
      {categoryProducts.length === 0 ? (
        <div className="category-c">
          <h2 className="category-h">No products in this category</h2>
        </div>
      ) : (
        <>{renderList}</>
      )}
    </>
  );
};

export default ProductsBycategory;
