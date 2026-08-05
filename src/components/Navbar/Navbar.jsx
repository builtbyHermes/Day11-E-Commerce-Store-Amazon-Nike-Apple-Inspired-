import { NavLink, Link } from "react-router-dom";

import {
  FiHome,
  FiGrid,
  FiHeart,
  FiShoppingCart,
  FiUser,
  FiChevronDown,
} from "react-icons/fi";

import styles from "./Navbar.module.css";

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


      {/* Main Navbar */}

      <nav className={styles.nav}>


        {/* Logo */}

        <Link
          to="/"
          className={styles.logo}
        >
          ShopSphere
        </Link>




        {/* Main Navigation */}

        <div className={styles.navigation}>


          <NavLink
            to="/"
            end
            className={({isActive}) =>
              isActive
                ?
                `${styles.navLink} ${styles.active}`
                :
                styles.navLink
            }
          >

            <FiHome />

            <span>
              Home
            </span>
             
             <h1>HOME</h1>
          </NavLink>




          <NavLink
            to="/products"
            className={({isActive}) =>
              isActive
                ?
                `${styles.navLink} ${styles.active}`
                :
                styles.navLink
            }
          >

            <FiGrid />

            <span>
              Products
            </span>

          </NavLink>


        </div>





        {/* Search */}

        <div className={styles.searchWrapper}>

          <SearchBar />

        </div>






        {/* Actions */}


        <div className={styles.actions}>


          {/* Wishlist */}

          <NavLink
            to="/wishlist"
            className={styles.iconButton}
          >

            <div className={styles.iconWrapper}>


              <FiHeart />


              {
                wishlistCount > 0 &&
                (
                  <span className={styles.badge}>
                    {wishlistCount}
                  </span>
                )
              }


            </div>


          </NavLink>





          {/* Cart */}

          <NavLink
            to="/cart"
            className={styles.iconButton}
          >

            <div className={styles.iconWrapper}>


              <FiShoppingCart />


              {
                cartCount > 0 &&
                (
                  <span className={styles.badge}>
                    {cartCount}
                  </span>
                )
              }


            </div>


          </NavLink>






          {/* Profile */}

          <NavLink
            to="/profile"
            className={styles.iconButton}
          >

            <FiUser />

          </NavLink>



        </div>



      </nav>






      {/* Secondary Shopping Navigation */}


      <div className={styles.secondaryNav}>


        <NavLink
          to="/products"
          className={styles.secondaryLink}
        >

          <FiChevronDown />

          Categories

        </NavLink>





        <NavLink
          to="/products?filter=deals"
          className={styles.secondaryLink}
        >

          Today's Deals

        </NavLink>





        <NavLink
          to="/products?sort=popular"
          className={styles.secondaryLink}
        >

          Popular

        </NavLink>

        <NavLink
          to="/products?sort=new"
          className={styles.secondaryLink}
        >

          New Arrivals

        </NavLink>

        <NavLink
          to="/products?category=beauty"
          className={styles.secondaryLink}
        >

          Beauty

        </NavLink>

        <NavLink
          to="/products?category=furniture"
          className={styles.secondaryLink}
        >

          Home & Furniture

        </NavLink>

        <NavLink
          to="/products?category=smartphones"
          className={styles.secondaryLink}
        >

          Electronics

        </NavLink>

        <NavLink
          to="/products?category=mens-shirts"
          className={styles.secondaryLink}
        >

          Fashion
        </NavLink>

      </div>
    </header>

  );

}


export default Navbar;