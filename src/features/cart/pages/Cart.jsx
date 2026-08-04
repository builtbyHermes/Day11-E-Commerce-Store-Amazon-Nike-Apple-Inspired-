import Section from "../../../components/Section/Section";

import { useCart } from "../../../context/CartContext";

import CartItem from "../components/CartItem/CartItem";
import CartSummary from "../components/CartSummary/CartSummary";

function Cart() {


  const {
    cartItems
  } = useCart();



  return (

    <Section>


      <h1>
        Shopping Cart
      </h1>



      {
        cartItems.length === 0

        ?

        <p>
          Your cart is empty.
        </p>


        :


        cartItems.map(item => (

          <CartItem

            key={item.id}

            item={item}

          />

        ))

      }

    
    <CartSummary />
    </Section>

  );

}


export default Cart;