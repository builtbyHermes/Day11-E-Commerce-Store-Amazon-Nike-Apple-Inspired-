import { Link, useNavigate } from "react-router-dom";
import { FiMinus, FiPlus, FiTrash2, FiShoppingBag } from "react-icons/fi";

import { useCart } from "../../context/CartContext";

import styles from "./MiniCart.module.css";


function MiniCart() {


  const navigate = useNavigate();


  const {

    cartItems,

    cartTotal,

    updateQuantity,

    removeFromCart,

    closeCart

  } = useCart();





  const handleContinueShopping = () => {

    closeCart();

    navigate("/products");

  };




  const handleViewCart = () => {

    closeCart();

    navigate("/cart");

  };




  const handleCheckout = () => {

    closeCart();

    navigate("/checkout");

  };





  if(cartItems.length === 0){

    return (

      <div className={styles.emptyState}>


        <FiShoppingBag className={styles.emptyIcon}/>


        <h3>
          Your cart is empty
        </h3>


        <p>
          Looks like you haven't added anything yet.
        </p>


        <button

          className={styles.primaryButton}

          onClick={handleContinueShopping}

        >

          Browse Products

        </button>


      </div>

    );

  }






  return (

    <div className={styles.container}>


      <div className={styles.items}>


        {
          cartItems.map(item => (

            <div

              key={item.id}

              className={styles.item}

            >



              <img

                src={item.thumbnail}

                alt={item.title}

                className={styles.image}

              />




              <div className={styles.info}>


                <h4>
                  {item.title}
                </h4>



                <p className={styles.price}>

                  ${item.price}

                </p>




                <div className={styles.controls}>


                  <button

                    onClick={() =>
                      updateQuantity(
                        item.id,
                        item.quantity - 1
                      )
                    }

                  >

                    <FiMinus style={{ color: "#6b7280" }}/>

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

                    <FiPlus  style={{ color: "#6b7280" }}/>

                  </button>


                </div>



              </div>




              <button

                className={styles.removeButton}

                onClick={() =>
                  removeFromCart(item.id)
                }

              >

                <FiTrash2 />

              </button>



            </div>


          ))
        }


      </div>






      <div className={styles.footer}>


        <div className={styles.total}>


          <span>
            Subtotal
          </span>


          <strong>
            ${cartTotal.toFixed(2)}
          </strong>


        </div>





        <button

          className={styles.checkoutButton}

          onClick={handleCheckout}

        >

          Checkout

        </button>





        <button

          className={styles.cartButton}

          onClick={handleViewCart}

        >

          View Cart

        </button>





        <button

          className={styles.continueButton}

          onClick={handleContinueShopping}

        >

          Continue Shopping

        </button>



      </div>



    </div>

  );

}


export default MiniCart;