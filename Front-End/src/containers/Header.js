import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";
import "./css/Header.css";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setCategories } from "../redux/actions/ProductAction";
import { clearUser } from "../redux/actions/ProductAction";

const Header = () => {
  const userName = useSelector((state) => state.user.name);
  const [showCategories, setShowCategories] = useState(false);
  const categories = useSelector((state) => state.allCategories.category);
  const dispatch = useDispatch();
  const fetchCategories = async () => {
    const response = await axios
      .get("http://127.0.0.1:8000/allCategories")
      .catch((err) => console.log("err", err));
    dispatch(setCategories(response.data));
  };
  useEffect(() => {
    fetchCategories();
  }, [dispatch]);
  const handleNavClick = () => {
    window.location.href = "http://localhost:8000/login";
  };
  const handleCategoryMouseEnter = () => {
    setShowCategories(true);
  };
  const handleCategoryMouseLeave = () => {
    setShowCategories(false);
  };
  const handleLogoutClick = () => {
    if (window.confirm("Are you sure you want to log out?")) {
      dispatch(clearUser());
    }
  };
  return (
    <div className="ui fixed menu">
      <div className="ui container center">
        <Link to={"/"}>
          <img src={logo} alt="Logo" className="logo" />
        </Link>
        <Link to={"/"}>
          <h2 className="shopname">Shop</h2>
        </Link>
      </div>
      <nav className="navbar">
        <div className="nav-container">
          <Link to={"/"} className="nav-item">
            <i className="home icon"></i>
            <p>home</p>
          </Link>
          <Link to={"/cart"} className="nav-item">
            <i className="shop icon"></i>
            <p>cart</p>
          </Link>
          <div
            className="nav-item"
            onMouseEnter={handleCategoryMouseEnter}
            onMouseLeave={handleCategoryMouseLeave}
          >
            <i className="list icon"></i>
            <p>categories</p>
            <p>
              {showCategories && (
                <ul className="categories-list">
                  {categories.map((categorie) => {
                    const { id_categorie, nom_categorie_categorie } = categorie;
                    return (
                      <li key={id_categorie} s>
                        <Link to={`/categorie/${id_categorie}`} className="li">
                          {nom_categorie_categorie}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              )}
            </p>
          </div>
          <div>
            {userName ? (
              <div className="nav-item" onClick={handleLogoutClick}>
                <i className="user icon"></i>
                <p>{userName}</p>
              </div>
            ) : (
              <Link to={"/login"}>
                <div className="nav-item">
                  <i className="user icon"></i>
                  <p>login</p>
                </div>
              </Link>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
