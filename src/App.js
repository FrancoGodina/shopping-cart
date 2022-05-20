import "./App.css";
import { BrowserRouter,  Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Shop from "./components/Shop";
import Cart from "./components/Cart";
import About from "./components/About";

function App() {
    return(
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Header />}>
            <Route index element={
              <main className="index"><p>We are all about fashion.</p></main>
            }
            />
            <Route path="/shop" element={<Shop />} />
            <Route path="/cart" element={<Cart />} />
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