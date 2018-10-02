import axios from "axios";

// Types
import {
  COFFEESHOPS_LOADING,
  GET_COFFEESHOPS,
  GET_COFFEESHOP_BY_ID
} from "./types";

// Get all coffeeShops
export const getCoffeeShops = () => dispatch => {
  dispatch(setCoffeeShopsLoading());
  axios
    .get("http://coffee.q8fawazo.me/api/?format=json")
    .then(res => res.data)
    .then(coffeeshops => {
      dispatch({
        type: GET_COFFEESHOPS,
        payload: coffeeshops
      });
    })
    .catch(err => console.error("Error while fetching coffeeshops", err));
};

// Get a specific coffeeshop by id
export const getCoffeeShopByID = (id, coffeeshops) => dispatch => {
  const coffeeshop =
    coffeeshops.find(shop => Number(shop.id) === Number(id)) || {};
  console.log(coffeeshop);
  dispatch({
    type: GET_COFFEESHOP_BY_ID,
    payload: coffeeshop
  });
};

// Set the loading state
export const setCoffeeShopsLoading = () => ({
  type: COFFEESHOPS_LOADING
});
