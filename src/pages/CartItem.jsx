
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  increaseQuantity,
  decreaseQuantity,
  removeItem
} from "../redux/CartSlice";
import "../App.css";

function CartItem() {
  const dispatch = useDispatch();

  const cartItems = useSelector((state) => state.cart.items);

  const totalAmount = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <div className="cart-page">
      {/* Navigation bar */}
      <nav className="navbar">
        <Link to="/" className="brand">
          Paradise Nursery
        </Link>

        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/plants">Plants</Link>
          <Link to="/cart" className="cart-link">
            🛒 Cart ({totalItems})
          </Link>
        </div>
      </nav>

      <main className="cart-container">
        <h1>Your Shopping Cart</h1>

        {cartItems.length === 0 ? (
          <div className="empty-cart">
            <h2>Your cart is empty!</h2>
            <p>Looks like you haven't added any plants yet.</p>

            <Link to="/plants" className="continue-button">
              Continue Shopping
            </Link>
          </div>
        ) : (
          <>
            <div className="cart-items">
              {cartItems.map((item) => (
                <div className="cart-card" key={item.id}>
                  <img
                    src={item.image}
                    alt={item.name}
                    className="cart-image"
                  />

                  <div className="cart-item-info">
                    <h2>{item.name}</h2>

                    <p>Unit Price: ₹{item.price}</p>

                    <p className="item-total">
                      Total: ₹{item.price * item.quantity}
                    </p>

                    <div className="quantity-controls">
                      <button
                        onClick={() =>
                          dispatch(decreaseQuantity(item.id))
                        }
                        disabled={item.quantity === 1}
                      >
                        −
                      </button>

                      <span>{item.quantity}</span>

                      <button
                        onClick={() =>
                          dispatch(increaseQuantity(item.id))
                        }
                      >
                        +
                      </button>
                    </div>

                    <button
                      className="delete-button"
                      onClick={() => dispatch(removeItem(item.id))}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="cart-summary">
              <h2>Cart Summary</h2>

              <p>Total Items: {totalItems}</p>

              <h3>Total Amount: ₹{totalAmount}</h3>

              <button
                className="checkout-button"
                onClick={() => alert("Coming Soon!")}
              >
                Checkout
              </button>

              <Link to="/plants" className="continue-button">
                Continue Shopping
              </Link>
            </div>
          </>
        )}
      </main>
    </div>
  );
}

export default CartItem;