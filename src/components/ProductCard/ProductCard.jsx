import styles from './ProductCard.module.css';
import ProductBadge from "../ProductBadge/ProductBadge";
import { useNavigate } from "react-router-dom";
function ProductCard({ product }) {
 
  const navigate=useNavigate();
  return (

    <article className={styles.card} onClick={()=>navigate(`/products/${product.id}`)}>
  
      <ProductBadge

    product={product}

    />
        <img
          className={styles.image}
          src={product.thumbnail}
          alt={product.title}
        />


        <h3 className={styles.title}>
          {product.title}
        </h3>


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