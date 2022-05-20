import "./App.css";
import { BrowserRouter,  Routes, Route } from "react-router-dom";
import Header from "./components/Header";

function App() {
    return(
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Header />}>
            <Route index element={
              <main className="index"><p>We are all about fashion.</p></main>
            }
            />
          </Route>
        </Routes>
      </BrowserRouter>
    )
}

export default App;