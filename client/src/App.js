import { Box } from "@mui/material";
import { BrowserRouter ,Routes,Route} from "react-router-dom";

import "./App.css";

//* Component
import Header from "./Component/Header/Header";
import Home from "./Component/Home/Home";
import DataProvider from "./context/DataProvider";
import DetailView from "./Component/details/DetailView";
import Cart from "./Component/Cart/Cart";

function App() {
  return (
    <DataProvider>
      <BrowserRouter>
        <Header />
        <Box style={{ marginTop: 54 }}>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/product/:id" element={<DetailView/>}/>
            <Route path="/cart" element={<Cart/>}/>
          </Routes>
          
        </Box>
      </BrowserRouter>
    </DataProvider>
  );
}

export default App;
