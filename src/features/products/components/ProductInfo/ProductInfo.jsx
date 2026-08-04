import styles from "./ProductInfo.module.css";

function ProductInfo({ product }) {
  return (
    <div className={styles.info}>

      <p className={styles.brand}>
        {product.brand}
      </p>

      <h1 className={styles.title}>
        {product.title}
      </h1>

      <p className={styles.rating}>
        ⭐ {product.rating}
      </p>

      <div className={styles.priceContainer}>
        <span className={styles.price}>
          ${product.price}
        </span>

        <span className={styles.discount}>
          {product.discountPercentage}% OFF
        </span>
      </div>

      <p className={styles.description}>
        {product.description}
      </p>

    </div>
  );
}

export default ProductInfo;