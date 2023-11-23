import { Box ,Typography,styled ,Card,Button} from "@mui/material"
import {useDispatch} from 'react-redux';

import { addEllipsis } from "../../utils/common-utils";
import GroupButton from "./GroupButton";
import {removeFromCart} from '../../redux/actions/cartAction'

// *Styled

const Component = styled(Card)`
    border-top: 1px solid #f0f0f0;
    border-radius: 0px;
    display: flex;
    background: #fff;
`;

const LeftComponent = styled(Box)`
    margin: 20px; 
    display: flex;
    flex-direction: column;
`;

const SmallText = styled(Typography)`
    color: #878787;
    font-size: 14px;
    margin-top: 10px;
`;

const Cost = styled(Typography)`
    font-size: 18px;
    font-weight: 600;
`;

const MRP = styled(Typography)`
    color: #878787;
`;

const Discount = styled(Typography)`
    color: #388E3C;
`;

const Remove = styled(Button)`
    margin-top: 20px;
    font-size: 16px;
    color: black;
    font-weight: 600;
`;

const CartItem = ({ item }) => {
    const fassured = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png';

    const dispatch = useDispatch()

    const removeItemFromCart = (id) => {
      dispatch(removeFromCart(id));
  }
  return (
    <Component>
      <LeftComponent>
        <img src={item.url} style={{ height: 110, width: 110 }} alt="product" />
        <GroupButton/>
      </LeftComponent>
      <Box style={{ margin: 20 }}>
        <Typography>{addEllipsis(item.title.longTitle)}</Typography>
        <SmallText>
          Seller:RetailNet
          <span>
            <img src={fassured} style={{ width: 50, marginLeft: 10 }} alt="assure" />
          </span>
        </SmallText>
        <Typography style={{ margin: "20px 0" }}>
          <Cost component="span">₹{item.price.cost}</Cost>&nbsp;&nbsp;&nbsp;
          <MRP component="span">
            <strike>₹{item.price.mrp}</strike>
          </MRP>
          &nbsp;&nbsp;&nbsp;
          <Discount component="span">{item.price.discount} off</Discount>
        </Typography>
        <Remove onClick={() => removeItemFromCart(item.id)} >Remove</Remove>

      </Box>
    </Component>
  );
}

export default CartItem
