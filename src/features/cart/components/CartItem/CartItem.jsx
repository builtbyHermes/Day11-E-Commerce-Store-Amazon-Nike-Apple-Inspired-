import styles from "./CartItem.module.css";

import { useCart } from "../../../../context/CartContext";


function CartItem({ item }) {


  const {
    removeFromCart,
    updateQuantity
  } = useCart();



  return (

    <div className={styles.item}>


      <img
        src={item.thumbnail}
        alt={item.title}
      />


      <div>

        <h3>
          {item.title}
        </h3>

        <p>
          ${item.price}
        </p>


      </div>



      <div className={styles.quantity}>


        <button

          onClick={() =>
            updateQuantity(
              item.id,
              Math.max(
                1,
                item.quantity - 1
              )
            )
          }

        >
          -
        </button>



        <span>
          {item.quantity}
        </span>



        <button

          onClick={() =>
            updateQuantity(
              item.id,
              item.quantity + 1
            )
          }

        >

          +

        </button>


      </div>



      <button

        onClick={() =>
          removeFromCart(item.id)
        }

      >

        Remove

      </button>


    </div>

  );

}


export default CartItem;