
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import plants from "../data/plants";
import { addItem } from "../redux/CartSlice";
import "../App.css";

function ProductList() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const cartCount = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const categories = [
    "Indoor Plants",
    "Succulents",
    "Flowering Plants"
  ];

  return (
    <div className="shop-page">
      <nav className="navbar">
        <Link to="/" className="brand">
          Paradise Nursery
        </Link>

        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/plants">Plants</Link>
          <Link to="/cart" className="cart-link">
            🛒 Cart ({cartCount})
          </Link>
        </div>
      </nav>

      <header className="shop-header">
        <h1>Our Plants</h1>
        <p>Bring home a little piece of nature.</p>
      </header>

      <main className="plant-container">
        {categories.map((category) => {
          const categoryPlants = plants.filter(
            (plant) => plant.category === category
          );

          return (
            <section key={category} className="plant-category">
              <h2>{category}</h2>

              <div className="plant-grid">
                {categoryPlants.map((plant) => {
                  const isAdded = cartItems.some(
                    (item) => item.id === plant.id
                  );

                  return (
                    <article className="plant-card" key={plant.id}>
                      <img
                        src={plant.image}
                        alt={plant.name}
                        className="plant-image"
                      />

                      <div className="plant-info">
                        <h3>{plant.name}</h3>
                        <p className="plant-price">
                          ₹{plant.price}
                        </p>

                        <button
                          className="add-button"
                          disabled={isAdded}
                          onClick={() => dispatch(addItem(plant))}
                        >
                          {isAdded ? "Added to Cart" : "Add to Cart"}
                        </button>
                      </div>
                    </article>
                  );
                })}
              </div>
            </section>
          );
        })}
      </main>
    </div>
  );
}

export default ProductList;