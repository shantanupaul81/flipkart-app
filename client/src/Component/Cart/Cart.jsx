import { Box, Grid, Typography ,styled,Button} from "@mui/material";
import { useSelector} from "react-redux/es/hooks/useSelector";

// ! Components
import CartItem from "./CartItem";
import TotalView from "./TotalView";
import EmptyCart from "./EmptyCart";
import { payUsingPaytm } from "../../service/api";
import { post } from "../../utils/paytm";
// * Styled

const Component = styled(Grid)(({ theme }) => ({
  padding: '30px 135px',
  display: 'flex',
  [theme.breakpoints.down('md')]: {
      padding: '15px 0'
  }
}));


const Header = styled(Box)`
    padding: 15px 24px;
    background: #fff;
`;
const BottomWrapper = styled(Box)`
    padding: 16px 22px;
    background: #fff;
    box-shadow: 0 -2px 10px 0 rgb(0 0 0 / 10%);
    border-top: 1px solid #f0f0f0;
`;

const StyledButton = styled(Button)`
    display: flex;
    margin-left: auto;
    background: #fb641b;
    color: #fff;
    border-radius: 2px;
    width: 250px;
    height: 51px;
`;

const LeftComponent = styled(Grid)(({ theme }) => ({
  paddingRight: 15,
  [theme.breakpoints.down('md')]: {
      marginBottom: 15
  }
}));




const Cart = () => {
  const { cartItems } = useSelector((state) => state.cart);

  const buyNow = async () => {
    let response = await payUsingPaytm({ amount: 500, email: 'shantanupaul18@gmail.com'});
    let information = {
        action: 'https://securegw-stage.paytm.in/order/process',
        params: response    
    }
    post(information);
}


  return (
    <>
      {cartItems.length ? (
        <Component container>
          <LeftComponent item lg={9} md={9} sm={12} xs={12}>
            <Header>
              <Typography>My Cart({cartItems.length})</Typography>
            </Header>
            {cartItems.map((item) => (
              <CartItem item={item} />
            ))}

            <BottomWrapper>
              <StyledButton onClick={() => buyNow()} variant="contained">
                Place Order
              </StyledButton>
            </BottomWrapper>
          </LeftComponent>
          <Grid item lg={3} md={3} sm={12} xs={12}>
            <TotalView cartItems={cartItems}/>
          </Grid>
        </Component>
      ) :  <EmptyCart/>}
    </>

  );
};

export default Cart;
