import Hero from "../components/Hero";
import Categories from "../components/Categories";
import FeaturedProducts from "../components/FeaturedProducts";
import TopRatedProducts from "../components/TopRatedProducts";
import DiscountDeals from "../components/DiscountDeals";

function Home() {
  return (
    <>
      <Hero />
      <Categories />
      <FeaturedProducts />
      <TopRatedProducts />
      <DiscountDeals />
    </>
  );
}

export default Home;