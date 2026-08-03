import styles from "./ProductFilters.module.css";


function ProductFilters({
  categories,
  selectedCategory,
  onCategoryChange
}) {

  return (

    <aside className={styles.filters}>

      <h3>
        Categories
      </h3>


      <button
        onClick={() => onCategoryChange("")}
      >
        All
      </button>


      {
        categories.map((category)=>(

          <button
            key={category}
            onClick={() =>
              onCategoryChange(category)
            }
          >
            {category}
          </button>

        ))
      }


    </aside>

  );

}


export default ProductFilters;