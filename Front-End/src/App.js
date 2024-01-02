import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductListing from "./containers/ProductListing";
import ProductDetails from "./containers/ProductDetails";
import CartPage from "./containers/CartPage";
import ProductsBycategory from "./containers/ProductsBycategory";
import LoginPage from "./containers/login/login";
import Facture from "./containers/facture/Facture";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/" element={<ProductListing />} />
          <Route path="/product/:productId" element={<ProductDetails />} />
          <Route path="/cart" element={<CartPage />} />
          <Route
            path="/categorie/:categoryId"
            element={<ProductsBycategory />}
          />
          <Route path="/facture" element={<Facture />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
