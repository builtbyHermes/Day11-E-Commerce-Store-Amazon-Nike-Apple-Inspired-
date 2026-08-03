import { Link } from "react-router-dom";
import styles from './ProductCard.module.css';


function ProductCard({ product }) {

  return (

    <article className={styles.card}>

      <Link to={`/products/${product.id}`} className={styles.link}>

        <img
          className={styles.image}
          src={product.thumbnail}
          alt={product.title}
        />


        <h3 className={styles.title}>
          {product.title}
        </h3>

      </Link>


      <p className={styles.brand}>
        {product.brand}
      </p>


      <p className={styles.price}>
        ${product.price}
      </p>


      <p className={styles.rating}>
        ⭐ {product.rating}
      </p>


    </article>

  );

}


export default ProductCard;