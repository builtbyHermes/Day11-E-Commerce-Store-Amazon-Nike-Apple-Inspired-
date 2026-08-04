import { useState, useMemo } from "react";
import { useSearchParams } from "react-router-dom";

import Section from "../../../components/Section/Section";
import useSearchProducts from "../hooks/useSearchProducts";
import ProductGrid from "../../products/components/ProductGrid";
import ProductFilters from "../../products/components/ProductFilters/ProductFilters";
import ProductSort from "../../products/components/ProductSort/ProductSort";
import styles from "./SearchResults.module.css";


function SearchResults() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q") || "";

  const {
    products,
    loading,
    error
  } = useSearchProducts(query);

  // State for category filtering
  const [selectedCategory, setSelectedCategory] = useState("");

  // Dynamically extract unique categories from the searched products
  const categories = useMemo(() => {
    const allCategories = products.map((product) => product.category);
    return [...new Set(allCategories)].filter(Boolean);
  }, [products]);

  // Filter products based on the selected category
  const filteredProducts = useMemo(() => {
    if (!selectedCategory) return products;
    return products.filter((product) => product.category === selectedCategory);
  }, [products, selectedCategory]);


  if (loading) {
    return (
      <Section>
        <p>Searching products...</p>
      </Section>
    );
  }

  if (error) {
    return (
      <Section>
        <p>{error}</p>
      </Section>
    );
  }


  return (
    <Section>
      <div className={styles.header}>
        <h1>
          Search results for "{query}"
        </h1>
        <p>
          {filteredProducts.length} products found
        </p>
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
          <ProductSort />

          {filteredProducts.length === 0 ? (
            <p>No products found.</p>
          ) : (
            <ProductGrid
              products={filteredProducts}
            />
          )}
        </main>
      </div>
    </Section>
  );
}

export default SearchResults;