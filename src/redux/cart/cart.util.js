export const handleAddItems = (cartItems, cartItemToAdd) => {
  const existingCartItem = cartItems.some((cartItem) => {
    if (cartItem.id === cartItemToAdd.id) return true;
    return false;
  });
  console.log(existingCartItem);
  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === cartItemToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};
