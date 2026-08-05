import { useState, useEffect, useMemo } from "react";
import { useSearchParams } from "react-router-dom";

import SearchProducts from "../components/SearchProducts/SearchProducts";
import Section from "../../../components/Section/Section";
import SectionHeader from "../../../components/SectionHeader/SectionHeader";

import useProducts from "../hooks/useProducts";
import useCategories from "../hooks/useCategories";

import ProductSort from "../components/ProductSort/ProductSort";
import ProductGrid from "../components/ProductGrid";
import ProductFilters from "../components/ProductFilters/ProductFilters";

import styles from "./Products.module.css";


function Products() {


  const [searchParams] = useSearchParams();


  const urlSort =
    searchParams.get("sort") || "";


  const urlCategory =
    searchParams.get("category") || "";



  const {
    products,
    loading,
    error,
    hasMore,
    loadMore
  } = useProducts();



  const {
    categories
  } = useCategories();




  const [searchTerm, setSearchTerm] = useState("");



  const [sortOption, setSortOption] =
    useState(urlSort);



  const [selectedCategory, setSelectedCategory] =
    useState(urlCategory);





  /*
    Sync URL changes
    Example:

    /products?sort=new

    updates sorting automatically
  */

  useEffect(() => {

    setSortOption(
      searchParams.get("sort") || ""
    );


    setSelectedCategory(
      searchParams.get("category") || ""
    );


  }, [searchParams]);



  const filteredProducts = useMemo(() => {

    let result = [...products];

    /*
      Category filter
    */

    if(selectedCategory){

      result =
        result.filter(
          product =>
            product.category === selectedCategory
        );

    }

    /*
      Search filter
    */

    if(searchTerm){

      result =
        result.filter(
          product =>
            product.title
            .toLowerCase()
            .includes(
              searchTerm.toLowerCase()
            )
        );

    }







    /*
      Sorting
    */

    switch(sortOption){


      case "price-asc":

        result.sort(
          (a,b)=>
            a.price-b.price
        );

        break;




      case "price-desc":

        result.sort(
          (a,b)=>
            b.price-a.price
        );

        break;





      case "rating":

        result.sort(
          (a,b)=>
            b.rating-a.rating
        );

        break;





      case "popular":

        result.sort(
          (a,b)=>
            (b.rating * b.stock) -
            (a.rating * a.stock)
        );

        break;






      case "new":

        result.sort(
          (a,b)=>
            new Date(b.meta.createdAt) -
            new Date(a.meta.createdAt)
        );

        break;






      case "deals":

        result.sort(
          (a,b)=>
            b.discountPercentage -
            a.discountPercentage
        );

        break;




      default:

        break;

    }



    return result;


  },[
    products,
    selectedCategory,
    searchTerm,
    sortOption
  ]);









  if(
    loading &&
    products.length === 0
  ){

    return (

      <Section>

        <p>
          Loading products...
        </p>

      </Section>

    );

  }





  if(error){

    return (

      <Section>

        <p>
          {error}
        </p>

      </Section>

    );

  }







  return (

    <Section>


      <SectionHeader

        title="Products"

        subtitle="Explore our collection"

      />





      <ProductSort

        sortOption={sortOption}

        onSortChange={setSortOption}

      />








      <div className={styles.mainContainer}>


        <aside className={styles.sidebarWrapper}>


          <SearchProducts

            searchTerm={searchTerm}

            onSearchChange={setSearchTerm}

          />




          <ProductFilters

            categories={categories}

            selectedCategory={selectedCategory}

            onCategoryChange={setSelectedCategory}

          />


        </aside>







        <div className={styles.results}>


          <ProductGrid

            products={filteredProducts}

          />





          {
            hasMore && (

              <button

                className={styles.loadMoreButton}

                onClick={loadMore}

                disabled={loading}

              >

                {
                  loading
                  ?
                  "Loading..."
                  :
                  "Load More"
                }


              </button>

            )
          }



        </div>



      </div>



    </Section>

  );

}


export default Products;