import styles from "./ProductBadge.module.css";


function ProductBadge({
  product
}) {


  const {

    discountPercentage,

    stock,

    availabilityStatus

  } = product;



  return (

    <div className={styles.container}>


      {
        discountPercentage > 0 && (

          <span className={styles.discount}>

            -{Math.round(discountPercentage)}%

          </span>

        )
      }



      {
        availabilityStatus === "Out of Stock" && (

          <span className={styles.outOfStock}>

            Out of Stock

          </span>

        )
      }



      {
        availabilityStatus !== "Out of Stock" &&
        stock <= 20 && (

          <span className={styles.lowStock}>

            Only {stock} left

          </span>

        )
      }



      {
        availabilityStatus === "In Stock" &&
        stock > 20 && (

          <span className={styles.inStock}>

            In Stock

          </span>

        )
      }


    </div>

  );

}


export default ProductBadge;