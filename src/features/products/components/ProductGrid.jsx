import ProductCard from "../../../components/ProductCard/ProductCard";
import styles from './ProductGrid.module.css';


function ProductGrid({ products }) {

  return (

    <div className={styles.grid}>

      {
        products.map((product)=>(

          <ProductCard
            key={product.id}
            product={product}
          />

        ))
      }

    </div>

  );

}


export default ProductGrid;