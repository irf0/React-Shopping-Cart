import { Button } from "@mui/material";
import React from "react";
import { data } from "../utils/data";
import { StoreContext } from "./Context/StoreContext";

const Products = () => {
  // const { id, name, price } = data;
  const { getQty, increaseQty, decreaseQty, setShowCart } = StoreContext();

  return (
    <>
      <div style={{ display: "flex", flexWrap: "wrap", position: "relative" }}>
        {data.map((item) => (
          <div key={item.id} style={{ marginLeft: "5%" }} className="pdt-div">
            <img
              src={item.image}
              alt={item.name}
              style={{
                height: "150px",
                width: "150px",
                alignItems: "center",
                marginTop: "20px",
                borderRadius: "10px",
                border: "1px solid grey",
              }}
            />
            <h3>{item.name}</h3>
            <h3>₹{item.price}</h3>

            <Button
              variant="contained"
              color="success"
              onClick={() => {
                increaseQty(item.id);
                setShowCart({ right: true });
              }}
            >
              Add To Cart
            </Button>
          </div>
        ))}
      </div>
    </>
  );
};

export default Products;
