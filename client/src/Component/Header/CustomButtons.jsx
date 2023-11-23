import { useState, useContext } from "react";

import { Box, Button, Typography, styled , Badge} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useSelector } from 'react-redux';

// * Component
import Login from "../Login/Login";
import { DataContext } from "../../context/DataProvider";
import Profile from "./Profile";
import { Link } from "react-router-dom";

// ! Styled Start
const Wrapper = styled(Box)(({ theme }) => ({
  margin: "0 3% 0 auto",
  display: "flex",
  "& > *": {
    marginRight: "40px !important",
    textDecoration: "none",
    color: "#FFFFFF",
    fontSize: 16,
    alignItems: "center",
    [theme.breakpoints.down("md")]: {
      color: "#2874f0",
      alignItems: "center",
      display: "block",
      flexDirection: "column",
      marginTop: 10,
    },
  },
  [theme.breakpoints.down("sm")]: {
    display: "block",
  },
}));

const Container = styled(Link)(({ theme }) => ({
  display: "flex",
  [theme.breakpoints.down("md")]: {
    display: "block",
  },
}));

const LoginButton = styled(Button)(({ theme }) => ({
  color: "#2874f0",
  background: "#FFFFFF",
  textTransform: "none",
  fontWeight: 600,
  borderRadius: 2,
  padding: "5px 40px",
  height: 32,
  boxShadow: "none",
  [theme.breakpoints.down("md")]: {
    background: "#2874f0",
    color: "#FFFFFF",
  },
}));


// const LoginButton=styled(Button)`
//   color: #2874f0;
//   background: #FFFFFF;
//   text-transform: none;
//   font-weight: 600;
//   border-radius: 2;
//   padding: 5px 40px;
//   height: 32;
//   box-shadow: none;
// `;

// ! Styled End
const CustomButtons = () => {
  const [open, setOpen] = useState(false);
  const { account, setAccount } = useContext(DataContext);

    const { cartItems } = useSelector(state => state.cart);

  const openDialog = () => {
    setOpen(true);
  };

  return (
    <Wrapper>
      {account ? (
        <Profile account={account} setAccount={setAccount} />
      ) : (
        <LoginButton variant="contained" onClick={() => openDialog()}>
          Login
        </LoginButton>
      )}

      <Typography style={{ marginTop: 3, width: 135 }}>
        Become a Seller
      </Typography>
      <Typography style={{ marginTop: 3 }}>More</Typography>

      <Container to={"/cart"}>
        <Badge badgeContent={cartItems?.length} color="secondary">
          <ShoppingCartIcon />
        </Badge>
        <Typography style={{ marginLeft: 10 }}>Cart</Typography>
      </Container>
      <Login open={open} setOpen={setOpen} />
    </Wrapper>
  );
};

export default CustomButtons;
