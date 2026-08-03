import styles from "./SearchProducts.module.css";


function SearchProducts({
  searchTerm,
  onSearchChange
}) {

  return (

    <input

      className={styles.search}

      type="text"

      placeholder="Search products..."

      value={searchTerm}

      onChange={(e)=> 
        onSearchChange(e.target.value)
      }

    />

  );

}


export default SearchProducts;