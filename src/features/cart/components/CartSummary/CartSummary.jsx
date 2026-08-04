import styles from "./CartSummary.module.css";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../../../context/CartContext";

function CartSummary() {
  const navigate = useNavigate();
  const {
    cartItems,
    cartTotal
  } = useCart();

  const handleCheckout = () => {
    navigate("/checkout");
  };

  return (
    <aside className={styles.summary}>
      <h2>
        Cart Summary
      </h2>

      <div className={styles.row}>
        <span>
          Items
        </span>
        <span>
          {cartItems.length}
        </span>
      </div>

      <div className={styles.row}>
        <span>
          Subtotal
        </span>
        <span>
          ${cartTotal.toFixed(2)}
        </span>
      </div>

      <div className={styles.divider}></div>

      <div className={styles.total}>
        <span>
          Total
        </span>
        <span>
          ${cartTotal.toFixed(2)}
        </span>
      </div>
     
      <button
        className={styles.checkoutButton}
        onClick={handleCheckout}
      >
        Proceed To Checkout
      </button>
    </aside>
  );
}

export default CartSummary;