import { useState, useMemo } from "react";
import {
  useSearchParams,
  useNavigate
} from "react-router-dom";

import Section from "../../../components/Section/Section";

import useSearchProducts from "../hooks/useSearchProducts";

import ProductGrid from "../../products/components/ProductGrid";
import ProductFilters from "../../products/components/ProductFilters/ProductFilters";
import ProductSort from "../../products/components/ProductSort/ProductSort";

import styles from "./SearchResults.module.css";

function SearchResults() {

  const [searchParams] = useSearchParams();

  const navigate = useNavigate();

  const query =
    searchParams.get("q") || "";

  const {
    products,
    loading,
    error
  } = useSearchProducts(query);

  const [selectedCategory, setSelectedCategory] = useState("");

  const [sortOption, setSortOption] = useState("");



  // Get unique categories from search results
  const categories = useMemo(() => {

    const allCategories =
      products.map(product => product.category);

    return [...new Set(allCategories)].filter(Boolean);

  }, [products]);



  // Filter + Sort
  const filteredProducts = useMemo(() => {

    let results = [...products];



    if (selectedCategory) {

      results = results.filter(

        product =>
          product.category === selectedCategory

      );

    }



    switch (sortOption) {

      case "price-asc":

        results.sort(
          (a, b) => a.price - b.price
        );

        break;



      case "price-desc":

        results.sort(
          (a, b) => b.price - a.price
        );

        break;



      case "rating":

        results.sort(
          (a, b) => b.rating - a.rating
        );

        break;



      case "discount":

        results.sort(

          (a, b) =>

            b.discountPercentage -
            a.discountPercentage

        );

        break;



      default:
        break;

    }

    return results;

  }, [

    products,

    selectedCategory,

    sortOption

  ]);



  if (loading) {

    return (

      <Section>

        <p>

          Searching products...

        </p>

      </Section>

    );

  }



  if (error) {

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

      <div className={styles.header}>

        <div>

          <h1>

            Search Results

          </h1>

          <p>

            Showing

            <strong>

              {" "}
              {filteredProducts.length}

            </strong>

            {" "}product

            {filteredProducts.length !== 1 && "s"}

            {" "}for

            <strong>

              {" "}
              "{query}"

            </strong>

          </p>

        </div>



        <button

          className={styles.clearButton}

          onClick={() => navigate("/products")}

        >

          Clear Search

        </button>

      </div>



      <div className={styles.layout}>

        <aside className={styles.sidebar}>

          <ProductFilters

            categories={categories}

            selectedCategory={selectedCategory}

            onCategoryChange={setSelectedCategory}

          />

        </aside>



        <main className={styles.results}>

          <ProductSort

            sortOption={sortOption}

            onSortChange={setSortOption}

          />



          {

            filteredProducts.length === 0

              ? (

                <div className={styles.emptyState}>

                  <h2>

                    No products found

                  </h2>

                  <p>

                    We couldn't find anything matching

                    <strong>

                      {" "}
                      "{query}"

                    </strong>

                  </p>

                  <button

                    className={styles.browseButton}

                    onClick={() => navigate("/products")}

                  >

                    Browse All Products

                  </button>

                </div>

              )

              : (

                <ProductGrid

                  products={filteredProducts}

                />

              )

          }

        </main>

      </div>

    </Section>

  );

}

export default SearchResults;