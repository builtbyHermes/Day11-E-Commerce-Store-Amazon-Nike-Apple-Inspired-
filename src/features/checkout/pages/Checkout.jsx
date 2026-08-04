import { Navigate } from "react-router-dom";

import Section from "../../../components/Section/Section";

import { useCart } from "../../../context/CartContext";

import CheckoutForm from "../components/CheckoutForm/CheckoutForm";
import OrderSummary from "../components/OrderSummary/OrderSummary";

import styles from "./Checkout.module.css";


function Checkout() {


  const {
    cartItems
  } = useCart();



  if (cartItems.length === 0) {

    return (

      <Navigate to="/products" />

    );

  }



  return (

    <Section>


      <h1>
        Checkout
      </h1>



      <div className={styles.checkoutContainer}>


        <CheckoutForm />


        <OrderSummary />


      </div>


    </Section>

  );

}


export default Checkout;