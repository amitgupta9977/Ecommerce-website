import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./Comonents/Navbar";
import Home from "./Comonents/Home";
import Products from "./Comonents/Products";
import { Routes } from "react-router-dom";
import Product from "./Comonents/Product";

function App() {
  return (
    <Router>
      <div>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<Product />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
