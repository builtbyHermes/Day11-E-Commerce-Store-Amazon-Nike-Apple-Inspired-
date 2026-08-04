import styles from "./CheckoutForm.module.css";


function CheckoutForm() {


  return (

    <form className={styles.form}>


      <h2>
        Customer Information
      </h2>



      <input

        type="text"

        placeholder="Full Name"

      />



      <input

        type="email"

        placeholder="Email"

      />



      <input

        type="text"

        placeholder="Phone Number"

      />



      <input

        type="text"

        placeholder="Address"

      />



      <input

        type="text"

        placeholder="City"

      />



      <button>

        Place Order

      </button>


    </form>

  );

}


export default CheckoutForm;