import React, { createContext, useContext, useState } from "react";

const shoppingCartContext = createContext();

export const ShoppingCart = ({ children }) => {
  const [showCart, setShowCart] = useState({
    right: false,
  });
  const [cartItems, setCartItems] = useState([]);

  const getQty = (id) => {
    return cartItems.find((items) => items.id === id)?.quantity || 0;
  };

  //This function first checks if the item with the given id is already in cart.
  //If it is, the quantity of the item is increased by 1.
  // If it is not, a new item is added to the cart with the quantity of 1.
  //This also works for the ADD TO CARD button
  const increaseQty = (id) => {
    setCartItems((currItems) => {
      if (currItems.find((item) => item.id === id) == null) {
        //no id is there means->empty cart
        return [...cartItems, { id, quantity: 1 }];
      } else {
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
      }
    });
  };
  const decreaseQty = (id) => {
    setCartItems((currItems) => {
      if (currItems.find((item) => item.id === id) == 1) {
        //if decrease reach to 1 then don't do anything further
        return [...cartItems, { id, quantity: 1 }];
      } else {
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        });
      }
    });
  };

  const deleteCartItem = (id) => {
    setCartItems((currItems) => currItems.filter((item) => item.id !== id));
  };

  //This is the Subtotal amount in the cart
  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => {
      return total + item.price * item.quantity;
    }, 0);
  };

  const totalCartQuantity = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <shoppingCartContext.Provider
      value={{
        showCart,
        setShowCart,
        cartItems,
        setCartItems,
        getQty,
        increaseQty,
        decreaseQty,
        deleteCartItem,
        getTotalPrice,
        totalCartQuantity,
      }}
    >
      {children}
    </shoppingCartContext.Provider>
  );
};
export const StoreContext = () => useContext(shoppingCartContext);
