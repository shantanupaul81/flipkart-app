import { useState } from "react";
import {ShoppingCart as Cart, FlashOn as Flash} from "@mui/icons-material";
import { Box, Button ,styled} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';

import { addToCart } from "../../redux/actions/cartAction";
import { payUsingPaytm } from "../../service/api";
import { post } from "../../utils/paytm.js";


const StyledButton = styled(Button)`
    width: 46%;
    border-radius: 2px;
    height: 50px;
    color: #FFF;
`;

const LeftContainer = styled(Box)(({ theme }) => ({
    minWidth: '40%',
    padding: '40px 0 0 80px',
    [theme.breakpoints.down('lg')]: {
        padding: '20px 40px'
    }
}))


const Image = styled('img')({
    width:'95%',
    padding:'15px'
});

const ActionItem = ({ product }) => {


  const [quantity, setQuantity] = useState(1);

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { id } = product;


    const buyNow = async () => {
      let response = await payUsingPaytm({ amount: 500, email: 'shantanupaul18@gmail.com'});
      let information = {
          action: 'https://securegw-stage.paytm.in/order/process',
          params: response    
      }
      post(information);
  }

    const AddItemToCart =()=>{
      dispatch(addToCart(id, quantity));
      navigate('/cart')
    }

  return (
    <LeftContainer>
        <Box style={{padding: '15px 20px',border: '1px solid #f0f0f0' , marginButton:10}}><Image src={product.detailUrl} alt="detail" /> <br /></Box>
        <StyledButton onClick={()=>AddItemToCart()} style={{marginRight: 10, background: '#ff9f00', margin:10}} variant="contained"><Cart />Add to Cart</StyledButton>
        <StyledButton onClick={() => buyNow()} style={{background: '#fb641b'}} variant="contained"><Flash /> Buy Now</StyledButton>
    </LeftContainer>
  );
};

export default ActionItem;
