import {
  GET_COFFEESHOPS,
  COFFEESHOPS_LOADING,
  GET_COFFEESHOP_BY_ID
} from "../actions/types";

const initialState = {
  coffeeshops: null,
  coffeeshop: null,
  loading: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_COFFEESHOPS:
      return {
        ...state,
        coffeeshops: action.payload,
        loading: false
      };
    case GET_COFFEESHOP_BY_ID:
      return {
        ...state,
        coffeeshop: action.payload
      };
    case COFFEESHOPS_LOADING:
      return {
        ...state,
        loading: true
      };
    default:
      return state;
  }
}
