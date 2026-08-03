import { Link } from "react-router-dom";
import styles from './Navbar.module.css';

function Navbar() {
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

          <li className={styles.item}>
            <Link to="/wishlist">Wishlist</Link>
          </li>

          <li className={styles.item}>
            <Link to="/cart">Cart</Link>
          </li>

          <li className={styles.item}>
            <Link to="/profile">Profile</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;