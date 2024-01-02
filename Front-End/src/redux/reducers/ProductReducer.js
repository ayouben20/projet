import { ActionTypes } from "../constants/action-types";

const InitialState = {
  product: [],
};
const initialCartState = {
  cart: [],
};
const InitialCategorye = {
  category: [],
};
const initialName = {
  name: "",
};

export const ProductReducer = (state = InitialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_PRODUCTS:
      return { ...state, product: payload };
    default:
      return state;
  }
};

export const selectedProductReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case ActionTypes.SELECTED_PRODUCT:
      return { ...state, ...payload };
    default:
      return state;
  }
};

export const cartReducer = (state = initialCartState, { type, payload }) => {
  switch (type) {
    case ActionTypes.ADD_TO_CART:
      const existingProduct = state.cart.find((item) => item.id === payload.id);
      if (existingProduct) {
        return {
          ...state,
          cart: state.cart.map((product) =>
            product.id === existingProduct.id
              ? { ...product, quantity: product.quantity + 1 }
              : product
          ),
        };
      } else {
        return { ...state, cart: [...state.cart, { ...payload, quantity: 1 }] };
      }
    case ActionTypes.REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((product) => product.id !== payload),
      };
    case ActionTypes.INCREASE_QUANTITY:
      return {
        ...state,
        cart: state.cart.map((product) =>
          product.id === payload
            ? { ...product, quantity: product.quantity + 1 }
            : product
        ),
      };
    case ActionTypes.DECREASE_QUANTITY:
      const updatedCart = state.cart.map((product) =>
        product.id === payload
          ? { ...product, quantity: product.quantity - 1 }
          : product
      );
      return {
        ...state,
        cart: updatedCart.filter((product) => product.quantity > 0),
      };
    case ActionTypes.CLEAR_CART:
      return {
        ...state,
        cart: [],
      };
    default:
      return state;
  }
};

export const CategoryReducer = (state = InitialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_CATEGORIES:
      return { ...state, category: payload };
    default:
      return state;
  }
};

export const userReducer = (state = initialName, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_USER:
      return {
        ...state,
        name: payload,
      };
    case ActionTypes.CLEAR_USER:
      return {
        ...state,
        name: "",
      };
    default:
      return state;
  }
};
