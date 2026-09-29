
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import ProductList from "./pages/ProductList";
import AboutUs from "./components/AboutUs";
import CartItem from "./pages/CartItem";

function LandingPage() {
  return (
    <div className="landing-page">
      <div className="landing-content">
        <h1>Paradise Nursery</h1>
        <h2>Welcome to Paradise Nursery</h2>
        <p>
          Bring nature home with our beautiful collection
          of indoor plants. Discover the perfect green
          companion for your space.
        </p>

        <Link to="/plants" className="get-started">
          Get Started
        </Link>

        <p style={{ marginTop: "20px" }}>
          <Link to="/about" style={{ color: "white" }}>
            About Us
          </Link>
        </p>
      </div>
    </div>
  );
}

function CartPlaceholder() {
  return (
    <div style={{ padding: "40px", textAlign: "center" }}>
      <h1>Your Shopping Cart</h1>
      <p>We'll build your cart page in the next step.</p>
      <Link to="/plants">Continue Shopping</Link>
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/plants" element={<ProductList />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/cart" element={<CartItem />} />
    </Routes>
  );
}

export default App;