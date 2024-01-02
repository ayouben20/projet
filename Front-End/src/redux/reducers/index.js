import { combineReducers } from "redux";
import {
  ProductReducer,
  selectedProductReducer,
  cartReducer,
  CategoryReducer,
  userReducer,
} from "./ProductReducer";

const reducers = combineReducers({
  allProducts: ProductReducer,
  product: selectedProductReducer,
  cart: cartReducer,
  allCategories: CategoryReducer,
  user: userReducer,
});
export default reducers;
