import ProductGrid from "../ProductGrid";
import useRelatedProducts from "../../hooks/useRelatedProducts";

import styles from "./RelatedProducts.module.css";


function RelatedProducts({
  category,
  currentProductId
}) {


  const {
    products,
    loading,
    error
  } = useRelatedProducts(
    category,
    currentProductId
  );



  if (loading) {

    return (

      <section className={styles.container}>

        <h2>
          Related Products
        </h2>

        <p>
          Loading related products...
        </p>

      </section>

    );

  }



  if (error) {

    return (

      <section className={styles.container}>

        <h2>
          Related Products
        </h2>

        <p>
          {error}
        </p>

      </section>

    );

  }



  if (!products.length) {

    return null;

  }



  return (

    <section className={styles.container}>


      <h2 className={styles.title}>

        Related Products

      </h2>



      <ProductGrid

        products={products}

      />


    </section>

  );

}


export default RelatedProducts;