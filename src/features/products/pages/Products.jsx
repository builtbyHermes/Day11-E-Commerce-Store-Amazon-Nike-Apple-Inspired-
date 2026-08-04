import { useState } from "react";

import SearchProducts from "../components/SearchProducts/SearchProducts";
import Section from "../../../components/Section/Section";
import SectionHeader from "../../../components/SectionHeader/SectionHeader";

import useProducts from "../hooks/useProducts";
import useCategories from "../hooks/useCategories";

import ProductSort from "../components/ProductSort/ProductSort";
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
  
  const [sortOption, setSortOption] = useState("");
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


let filteredProducts = products.filter((product)=>{


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

   
switch(sortOption){

  case "price-asc":

    filteredProducts.sort(
      (a,b)=>a.price-b.price
    );

    break;


  case "price-desc":

    filteredProducts.sort(
      (a,b)=>b.price-a.price
    );

    break;


  case "rating":

    filteredProducts.sort(
      (a,b)=>b.rating-a.rating
    );

    break;


  case "discount":

    filteredProducts.sort(
      (a,b)=>
        b.discountPercentage -
        a.discountPercentage
    );

    break;


  default:
    break;

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

                <ProductGrid
                products={filteredProducts}
                />

            </div>

            </Section>

  );

}


export default Products;