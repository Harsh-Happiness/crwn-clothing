import React from "react";
import { connect } from "react-redux";
import CustomButton from "../custom-button/custom-button.component";
import CartItem from "../cart-item/cart-item.component";
import "./cart-dropdown.styles.scss";

const CartDropdown = ({ items }) => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {items.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>
      <CustomButton>CHECKOUT ITEMS</CustomButton>
    </div>
  );
};

const mapState = ({ cart: { cartItems } }) => {
  return {
    items: cartItems,
  };
};

export default connect(mapState)(CartDropdown);
