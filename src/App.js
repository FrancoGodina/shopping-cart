import "./App.css";
import { useState } from "react";
import { BrowserRouter,  Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Shop from "./components/Shop";
import Cart from "./components/Cart";
import About from "./components/About";

function App() {

    // item array that will be displayed in cart section
    const [cartItems, setCartItems] = useState([]);

    const handleAddItem = (product) => {
      const productExists = cartItems.find((item) => item.id === product.id);

      if(productExists) {
        setCartItems(
          cartItems.map((item) => 
            item.id === product.id
              ? {...productExists, quantity: productExists.quantity +1}
              : item
              )
        );
      } else {
        setCartItems([...cartItems, {...product, quantity:1 }])
      }
    }

    const handleRemoveItem = (product) => {
      const productExists = cartItems.find((item) => item.id === product.id);

      if(productExists.quantity === 1) {
        setCartItems(cartItems.filter((item) => item.id !== product.id));
      } else {
        setCartItems(
          cartItems.map((item) =>
            item.id === product.id
              ? { ...productExists, quantity: productExists.quantity -1 }
              : item
          )
        );
      }
    };

    const handleCartClear = () => {
      setCartItems([]);
    }

    return(
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Header />}>
            <Route index element={
              <main className="index"><p>We are all about fashion.</p></main>
            }
            />
            <Route path="/shop" element={<Shop handleClick={handleAddItem} cartItems={cartItems} />} />
            <Route path="/cart" element={<Cart cartItems={cartItems} handleAddItem={handleAddItem} handleRemoveItem={handleRemoveItem} handleCartClear={handleCartClear} />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<main style={{padding: "1rem"}}> 
                                      <p>There's nothing to see here. </p>  
                                    </main>} 
            />
          </Route>
        </Routes>
      </BrowserRouter>
    )
}

export default App;