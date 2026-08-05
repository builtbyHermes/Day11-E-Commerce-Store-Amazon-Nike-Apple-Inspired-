import { useEffect } from "react";
import { FiX } from "react-icons/fi";

import { useCart } from "../../context/CartContext";

import styles from "./CartDrawer.module.css";
import MiniCart from "../MiniCart/MiniCart";

function CartDrawer({ children }) {

  const {
    isCartOpen,
    closeCart
  } = useCart();


  useEffect(() => {

    function handleEscape(event) {

      if (event.key === "Escape") {

        closeCart();

      }

    }

    if (isCartOpen) {

      document.addEventListener(
        "keydown",
        handleEscape
      );

    }

    return () => {

      document.removeEventListener(
        "keydown",
        handleEscape
      );

    };

  }, [isCartOpen, closeCart]);


  return (

    <>

      <div

        className={`${styles.backdrop} ${
          isCartOpen ? styles.showBackdrop : ""
        }`}

        onClick={closeCart}

      />



      <aside

        className={`${styles.drawer} ${
          isCartOpen ? styles.open : ""
        }`}

      >

        <div className={styles.header}>

          <h2>Your Cart</h2>

          <button
            onClick={closeCart}
            className={styles.closeButton}
          >

            <FiX />

          </button>

        </div>


        <div className={styles.content}>

          <MiniCart/>

        </div>

      </aside>

    </>

  );

}

export default CartDrawer;