import { useEffect } from "react";

// * Component
import { Fragment } from "react";
import Banner from "./Banner";
import NavBar from "./NavBar";
import { Box } from "@mui/material";
import styled from "@emotion/styled";
import Slide from "./Slide";
import MidSlide from "./MidSlide";
import MidSection from "./MidSection";

import { getProducts } from "../../redux/actions/productActions";
import { useDispatch, useSelector } from "react-redux";


const Container = styled(Box)`
  padding: 10px;
  background: #f2f2f2;
`;

const Home = () => {
  // *This getProducts is a state from redux
  const { products } = useSelector((state) => state.getProducts);

  // console.log(products);
  
  // const [ products ]= getProducts;
  // { products : [{},{},{}]}

  const dispatch = useDispatch();

  useEffect(() => {
    // *this getProduct is a function
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <Fragment>
      <NavBar />
      <Container>
        <Banner />
        <MidSlide products={products} title="Deal Of The Day" timer={true}/>
        <MidSection/>
        <Slide products={products} title="Discount For You" timer={false}/>
        <Slide products={products} title="Suggested Items" timer={false}/>
        <Slide products={products} title="Top Selection" timer={false}/>
        <Slide products={products} title="Recommended Items" timer={false}/>
        <Slide products={products} title="Trending Offers" timer={false}/>
        <Slide products={products} title="Season's Top Picks" timer={false}/>
        <Slide products={products} title="Top deals on Accessories" timer={false}/>
      </Container>
    </Fragment>
  );
};

export default Home;
