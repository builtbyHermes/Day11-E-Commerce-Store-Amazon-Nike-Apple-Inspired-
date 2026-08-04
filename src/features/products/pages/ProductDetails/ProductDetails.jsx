import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import Section from "../../../../components/Section/Section";

import useProduct from "../../hooks/useProduct";

import ProductGallery from "../../components/ProductGallery/ProductGallery";
import ProductInfo from "../../components/ProductInfo/ProductInfo";
import { useCart } from "../../../../context/CartContext";
import styles from "./ProductDetails.module.css";
import { useWishlist } from "../../../../context/WishlistContext";

function ProductDetails() {

  const { id } = useParams();

  const navigate = useNavigate();
  
  const {
    wishlistItems,
    addToWishlist,
    removeFromWishlist
  } = useWishlist();

  const {
    product,
    loading,
    error
  } = useProduct(id);

  const {
    addToCart
  } = useCart();

  const [quantity, setQuantity] = useState(1);

  const isWishlisted = wishlistItems.some(
    item => item.id === product?.id
  );

  const handleWishlist = () => {
    if (isWishlisted) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product);
    }
  };

  if (loading) {

    return (

      <Section>

        <p>
          Loading product...
        </p>

      </Section>

    );

  }



  if (error) {

    return (

      <Section>

        <p>
          {error}
        </p>

      </Section>

    );

  }



  if (!product) {

    return (

      <Section>

        <p>
          Product not found.
        </p>

      </Section>

    );

  }



  const increaseQuantity = () => {

    setQuantity(
      quantity + 1
    );

  };



  const decreaseQuantity = () => {

    setQuantity(
      Math.max(
        1,
        quantity - 1
      )
    );

  };



  const handleAddToCart = () => {

    addToCart(
      product,
      quantity
    );

  };



  return (

    <Section>


      <button

        className={styles.backButton}

        onClick={() => navigate(-1)}

      >

        ← Back to Products

      </button>



      <div className={styles.detailsContainer}>


        <ProductGallery

          product={product}

        />



        <div className={styles.content}>


          <ProductInfo

            product={product}

          />



          <div className={styles.quantityContainer}>


            <button

              onClick={decreaseQuantity}

            >

              -

            </button>



            <span>

              {quantity}

            </span>



            <button

              onClick={increaseQuantity}

            >

              +

            </button>


          </div>




          <div className={styles.actions}>


            <button

              className={styles.cartButton}

              onClick={handleAddToCart}

            >

              Add To Cart

            </button>



            <button
              className={`${styles.wishlistButton} ${isWishlisted ? styles.wishlisted : ""}`}
              onClick={handleWishlist}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" stroke="currentColor" strokeWidth="1.5" fill={isWishlisted ? "currentColor" : "none"}/>
              </svg>
              {isWishlisted ? "In Wishlist" : "Wishlist"}
            </button>

          </div>


        </div>


      </div>


    </Section>

  );

}


export default ProductDetails;

