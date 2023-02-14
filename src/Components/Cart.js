import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import { StoreContext } from "./Context/StoreContext";
import { AiFillCloseCircle, AiFillDelete } from "react-icons/ai";
import LocalGroceryStoreIcon from "@mui/icons-material/LocalGroceryStore";
import { data } from "../utils/data";
//anchor = which side

export default function Cart() {
  const {
    showCart,
    setShowCart,
    cartItems,
    getQty,
    decreaseQty,
    increaseQty,
    deleteCartItem,
  } = StoreContext();
  const items = cartItems.map((item) => {
    const { id, quantity } = item;
    const product = data.find((item) => item.id === id);
    const { name, image, price } = product;

    return {
      id,
      quantity,
      name,
      image,
      price,
    };
  });
  return (
    <div>
      <Drawer
        anchor={"right"}
        open={showCart["right"]}
        onClose={("right", false)}
      >
        <Box sx={{ width: 350 }}>
          <AiFillCloseCircle
            style={{}}
            fontSize={20}
            onClick={() => setShowCart({ right: false })}
          />
          {cartItems < 1 ? (
            <div>
              <LocalGroceryStoreIcon />
              <h3>Your Cart is Empty!</h3>
              <button onClick={() => setShowCart(false)}>
                Continue Shopping
              </button>
            </div>
          ) : (
            items.map((item) => (
              <div>
                <img src={item.image} alt={item.name} />
                <h3>{item.name}</h3>

                <h3>₹{item.price * getQty(item.id)}</h3>

                <p>
                  Quantity :
                  <button
                    disabled={getQty(item.id) == 1}
                    style={{ marginLeft: "5px" }}
                    onClick={() => decreaseQty(item.id)}
                  >
                    -
                  </button>
                  <span style={{ margin: "10px" }}>{getQty(item.id)}</span>
                  <button onClick={() => increaseQty(item.id)}> + </button>
                </p>
                <button>
                  <AiFillDelete onClick={() => deleteCartItem(item.id)} />
                </button>
              </div>
            ))
          )}
          {/* //Render the Subtotal here// */}
          <div>
            <h2>
              Subtotal :
              {cartItems.reduce((total, cartItem) => {
                const product = data.find((item) => item.id === cartItem.id);
                return total + (product?.price || 0) * cartItem.quantity;
              }, 0)}
            </h2>
          </div>
        </Box>
      </Drawer>
    </div>
  );
}
