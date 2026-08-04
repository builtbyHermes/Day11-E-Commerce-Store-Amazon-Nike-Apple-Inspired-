import styles from "./OrderSummary.module.css";

import { useCart } from "../../../../context/CartContext";


function OrderSummary() {


  const {
    cartItems,
    cartTotal
  } = useCart();



  return (

    <aside className={styles.summary}>


      <h2>
        Order Summary
      </h2>



      {
        cartItems.map(item => (

          <div

            key={item.id}

            className={styles.item}

          >

            <span>

              {item.title}

              {" "}x{item.quantity}

            </span>


            <span>

              ${(item.price * item.quantity).toFixed(2)}

            </span>


          </div>

        ))

      }




      <div className={styles.divider}></div>




      <div className={styles.row}>

        <span>
          Subtotal
        </span>


        <span>
          ${cartTotal.toFixed(2)}
        </span>


      </div>





      <div className={styles.row}>

        <span>
          Shipping
        </span>


        <span>
          Free
        </span>


      </div>





      <div className={styles.total}>


        <span>
          Total
        </span>


        <span>
          ${cartTotal.toFixed(2)}
        </span>


      </div>



    </aside>

  );

}


export default OrderSummary;