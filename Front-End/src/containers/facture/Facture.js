import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Facture.css";
import Header from "../Header";
import { clearCart } from "../../redux/actions/ProductAction";
import { Link } from "react-router-dom";

function Facture() {
  const cart = useSelector((state) => state.cart.cart);
  const user = useSelector((state) => state.user.name);
  const dispatch = useDispatch();
  const totalPrice = cart.reduce(
    (total, product) => total + product.price * product.quantity,
    0
  );

  return (
    <>
      <div className="co">
        <div>
          <Header />
        </div>
        <div className="container">
          <h1 className="my-3">Facture for {user}</h1>
          <p>Date: {new Date().toLocaleDateString()}</p>
          <table className="table table-striped">
            <thead>
              <tr>
                <th>Item</th>
                <th>Price per unit</th>
                <th>Quantity</th>
                <th>Total price</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item) => (
                <tr key={item.id}>
                  <td>{item.title}</td>
                  <td>{item.price}</td>
                  <td>{item.quantity}</td>
                  <td>{item.price * item.quantity}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <h3 className="my-3">Total Price: ${totalPrice}</h3>
          <button className="fa" onClick={() => dispatch(clearCart())}>
            <Link to={"/"} className="liink">
              return home
            </Link>
          </button>
          <button className="fa" onClick={() => window.print()}>
            Print
          </button>
        </div>
      </div>
    </>
  );
}

export default Facture;
