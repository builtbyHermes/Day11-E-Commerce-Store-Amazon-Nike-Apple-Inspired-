import { useState } from "react";

import SearchProducts from "../components/SearchProducts/SearchProducts";
import Section from "../../../components/Section/Section";
import SectionHeader from "../../../components/SectionHeader/SectionHeader";

import useProducts from "../hooks/useProducts";
import useCategories from "../hooks/useCategories";

import ProductGrid from "../components/ProductGrid";
import ProductFilters from "../components/ProductFilters/ProductFilters";
import styles from './Products.module.css';


function Products() {

  const {
    products,
    loading,
    error
  } = useProducts();

  const [searchTerm, setSearchTerm] = useState("");

  const {
    categories
  } = useCategories();


  const [selectedCategory, setSelectedCategory] = useState("");


  if (loading) {

    return (
      <Section>
        <p>
          Loading products...
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


const filteredProducts = products.filter((product)=>{


  const matchesCategory =
    selectedCategory
      ?
      product.category === selectedCategory
      :
      true;


  const matchesSearch =
    product.title
      .toLowerCase()
      .includes(
        searchTerm.toLowerCase()
      );


  return (
    matchesCategory &&
    matchesSearch
  );

});


  return (

    <Section>

      <SectionHeader
        title="Products"
        subtitle="Explore our collection"
      />

      <div className={styles.mainContainer}>

        <div className={styles.sidebarWrapper}>
          <SearchProducts
            searchTerm={searchTerm}
            onSearchChange={setSearchTerm}
          />

          <ProductFilters
            categories={categories}
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
          />
        </div>

        <ProductGrid
          products={filteredProducts}
        />

      </div>


    </Section>

  );

}


export default Products;