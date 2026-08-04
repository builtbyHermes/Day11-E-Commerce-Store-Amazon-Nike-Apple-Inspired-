import styles from "./WishlistItem.module.css";

import { useWishlist } from "../../../context/WishlistContext";
import { useCart } from "../../../context/CartContext";


function WishlistItem({ item }) {


  const {
    removeFromWishlist
  } = useWishlist();



  const {
    addToCart
  } = useCart();




  const handleAddToCart = () => {

    addToCart(
      item,
      1
    );

  };



  return (

    <article className={styles.card}>


      <img

        src={item.thumbnail}

        alt={item.title}

        className={styles.image}

      />



      <div className={styles.info}>


        <h3>

          {item.title}

        </h3>



        <p>

          ${item.price}

        </p>



        <p>

          ⭐ {item.rating}

        </p>


      </div>



      <div className={styles.actions}>


        <button

          onClick={handleAddToCart}

        >

          Add To Cart

        </button>



        <button

          onClick={() =>
            removeFromWishlist(item.id)
          }

        >

          Remove

        </button>


      </div>


    </article>

  );

}


export default WishlistItem;