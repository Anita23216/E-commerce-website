
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom";
import Navbar from "./components/navbar";
import Shop from "./pages/Shop/Shop";
import Cart from "./pages/Cart/Cart";
import { ShopContextProvider } from "./context/shop-context";

function App() {
  
  return (
    <div className="App">
      <ShopContextProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/shop" element={<Shop />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Router>
      </ShopContextProvider>
    </div>
  ); 
}

export default App
