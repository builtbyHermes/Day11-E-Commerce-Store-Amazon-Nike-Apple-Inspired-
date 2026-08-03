import Section from "../../../components/Section/Section";
import SectionHeader from "../../../components/SectionHeader/SectionHeader";

import useProducts from "../../products/hooks/useProducts";

import ProductGrid from "../../products/components/ProductGrid";


function TopRatedProducts() {

  const {
    products,
    loading,
    error
  } = useProducts();


  if (loading) {

    return (
      <Section>
        <p>
          Loading top products...
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


  const topRatedProducts = [...products]
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 8);


  return (

    <Section>

      <SectionHeader
        title="Top Rated Products"
        subtitle="Highest rated products from our store"
      />


      <ProductGrid
        products={topRatedProducts}
      />

    </Section>

  );

}


export default TopRatedProducts;