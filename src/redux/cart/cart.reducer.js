import CART_ACTION_TYPES from "./cart.types";
import { handleAddItems } from "./cart.util";

const INITIAL_STATE = {
  hidden: true,
  cartItems: [],
};

export const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CART_ACTION_TYPES.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden,
      };

    case CART_ACTION_TYPES.ADD_ITEM:
      return {
        ...state,
        cartItems: handleAddItems(state.cartItems, action.payload),
      };
    default:
      return state;
  }
};
