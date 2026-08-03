import Section from "../../../components/Section";
import SectionHeader from "../../../components/SectionHeader";

import useProducts from "../../products/hooks/useProducts";

import ProductGrid from "../../products/components/ProductGrid";


function DiscountDeals() {

  const {
    products,
    loading,
    error
  } = useProducts();


  if (loading) {

    return (
      <Section>
        <p>
          Loading deals...
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


  const discountProducts = [...products]
    .sort(
      (a, b) =>
        b.discountPercentage - a.discountPercentage
    )
    .slice(0, 8);


  return (

    <Section>

      <SectionHeader
        title="Discount Deals"
        subtitle="Best offers available today"
      />


      <ProductGrid
        products={discountProducts}
      />

    </Section>

  );

}


export default DiscountDeals;