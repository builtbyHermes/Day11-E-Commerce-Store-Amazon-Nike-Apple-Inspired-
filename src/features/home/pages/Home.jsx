import Hero from "../components/Hero";
import FeaturedProducts from "../components/FeaturedProducts";
import TopRatedProducts from "../components/TopRatedProducts";
import DiscountDeals from "../components/DiscountDeals";

function Home() {
  return (
    <>
      <Hero />
      <FeaturedProducts />
      <TopRatedProducts />
      <DiscountDeals />
    </>
  );
}

export default Home;