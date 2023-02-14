import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import LocalGroceryStoreIcon from "@mui/icons-material/LocalGroceryStore";
import { StoreContext } from "./Context/StoreContext";

const Navbar = () => {
  const { setShowCart, totalCartQuantity } = StoreContext();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{ backgroundColor: "yellowgreen" }}>
        <Toolbar>
          <h1 style={{ fontFamily: "sans-serif", fontSize: "25px" }}>
            SHOP-CART
          </h1>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Home | About | Contact
          </Typography>

          <Button color="inherit">
            <div
              style={{
                position: "relative",
                display: "flex",
                flexDirection: "column",
                margin: "0px",
              }}
            >
              <p
                style={{
                  backgroundColor: "red",
                  width: "18px",
                  height: "18px",
                  borderRadius: "100%",
                  marginLeft: "auto",
                  marginRight: "auto",
                  padding: "2px",
                  textAlign: "center",
                  fontWeight: "bold",
                }}
              >
                {totalCartQuantity}
              </p>
              <Button onClick={() => setShowCart({ right: true })}>
                <div className="relative">
                  <LocalGroceryStoreIcon
                    style={{ marginTop: "-20px", fontSize: "35px" }}
                    className="cart-icon"
                  />
                </div>
              </Button>
            </div>
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
