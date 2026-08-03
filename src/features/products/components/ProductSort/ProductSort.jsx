import styles from "./ProductSort.module.css";


function ProductSort({
  sortOption,
  onSortChange
}) {

  return (

    <div className={styles.sort}>

      <label htmlFor="sort">
        Sort by:
      </label>


      <select

        id="sort"

        value={sortOption}

        onChange={(e)=>
          onSortChange(e.target.value)
        }

      >

        <option value="">
          Default
        </option>


        <option value="price-asc">
          Price: Low to High
        </option>


        <option value="price-desc">
          Price: High to Low
        </option>


        <option value="rating">
          Highest Rating
        </option>


        <option value="discount">
          Biggest Discount
        </option>


      </select>


    </div>

  );

}


export default ProductSort;