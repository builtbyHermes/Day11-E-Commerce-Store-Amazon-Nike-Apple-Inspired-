import Section from "../../../components/Section/Section";
import SectionHeader from "../../../components/SectionHeader/SectionHeader";

import useProducts from "../../products/hooks/useProducts";

import ProductGrid from "../../products/components/ProductGrid";


function FeaturedProducts() {

  const {
    products,
    loading,
    error
  } = useProducts();


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


  const featuredProducts = products.slice(0, 8);


  return (

    <Section>

      <SectionHeader
        title="Featured Products"
        subtitle="Popular products picked for you"
      />


      <ProductGrid
        products={featuredProducts}
      />

    </Section>

  );

}


export default FeaturedProducts;