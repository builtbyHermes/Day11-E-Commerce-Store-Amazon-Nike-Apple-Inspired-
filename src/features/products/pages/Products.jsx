import {useProducts} from "../hooks/useProducts";

import ProductGrid from "../components/ProductGrid";


function Products(){

  const {
    products,
    loading,
    error
  } = useProducts();


  if(loading){
    return <p>Loading products...</p>;
  }


  if(error){
    return <p>{error}</p>;
  }


  return (

    <section>

      <h1>
        Products
      </h1>


      <ProductGrid
        products={products}
      />

    </section>

  );

}


export default Products;