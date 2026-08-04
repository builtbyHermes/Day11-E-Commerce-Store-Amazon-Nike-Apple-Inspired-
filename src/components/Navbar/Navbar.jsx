import { Link } from "react-router-dom";
import styles from './Navbar.module.css';
import { useCart } from "../../context/CartContext";
import { useWishlist } from "../../context/WishlistContext";
import SearchBar from "./SearchBar/SearchBar";

function Navbar() {

    const {
  cartCount
} = useCart();

 const {
  wishlistCount
} = useWishlist();
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <h2 className={styles.brand}>ShopSphere</h2>

        <ul className={styles.menu}>
          <li className={styles.item}>
            <Link to="/">Home</Link>
          </li>

          <li className={styles.item}>
            <Link to="/products">Products</Link>
          </li>

          <Link to="/wishlist">

            Wishlist

            {
                wishlistCount > 0 &&
                ` (${wishlistCount})`
            }

            </Link>

          <li className={styles.item}>
            <Link to="/cart" className={styles.cartLink}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                <path d="M6 6h15l-1.5 9h-12L6 6z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                <circle cx="10" cy="20" r="1" fill="currentColor"/>
                <circle cx="18" cy="20" r="1" fill="currentColor"/>
              </svg>
              Cart
              {cartCount > 0 && (
                <span className={styles.badge}>{cartCount}</span>
              )}
            </Link>
          </li>
          
           
           <SearchBar />
           
          <li className={styles.item}>
            <Link to="/profile">Profile</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;