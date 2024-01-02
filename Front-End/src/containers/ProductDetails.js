import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, selectedProduct } from "../redux/actions/ProductAction";
import Header from "./Header";
import "./css/ProductDetails.css";

const ProductDetails = () => {
  const product = useSelector((state) => state.product);
  const { image, title, price, categorie, description } = product;
  const { productId } = useParams();
  const dispatch = useDispatch();
  //
  const fetchProductDetail = async () => {
    const response = await axios
      .get(`http://127.0.0.1:8000/product/${productId}`)
      .catch((err) => console.log("err", err));
    dispatch(selectedProduct(response.data));
    console.log(response.data);
  };
  useEffect(() => {
    if (productId && productId !== "") fetchProductDetail();
  }, [dispatch]);
  //
  const AddItemtocart = async () => {
    const response = await axios
      .get(`http://127.0.0.1:8000/product/${productId}`)
      .catch((err) => console.log("err", err));
    dispatch(addToCart(response.data));
  };

  return (
    <div>
      <Header />
      <div className="ui grid container">
        {Object.keys(product).length === 0 ? (
          <div>...Loading</div>
        ) : (
          <div className="ui placeholder segment">
            <div className="ui two column stackable center aligned grid">
              <div className="middle aligned row">
                <div className="column lp">
                  <img className="ui fluid image" src={image} alt="img" />
                </div>
                <div className="column rp">
                  <h1>{title}</h1>
                  <h2>
                    <a className="ui teal tag label">${price}</a>
                  </h2>
                  <h3 className="ui brown block header">
                    {categorie.nom_categorie_categorie}
                  </h3>
                  <p>{description}</p>
                  <div
                    className="ui vertical animated button"
                    onClick={AddItemtocart}
                  >
                    <div className="hidden content">
                      <i className="shop icon"></i>
                    </div>
                    <div className="visible content">Add to Cart</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
export default ProductDetails;
