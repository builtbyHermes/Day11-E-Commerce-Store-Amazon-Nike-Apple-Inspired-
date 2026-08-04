import Section from "../../../components/Section/Section";

import { useWishlist } from "../../../context/WishlistContext";

import WishlistItem from "../components/WishlistItem";
import styles from './Wishlist.module.css';


function Wishlist() {


  const {
    wishlistItems
  } = useWishlist();



  return (

    <Section>


      <h1>
        Wishlist
      </h1>



      {
        wishlistItems.length === 0

        ?

        <p>
          Your wishlist is empty.
        </p>


        :


        <div className={styles.grid}>
          {wishlistItems.map(item => (
            <WishlistItem
              key={item.id}
              item={item}
            />
          ))}
        </div>

      }


    </Section>

  );

}


export default Wishlist;