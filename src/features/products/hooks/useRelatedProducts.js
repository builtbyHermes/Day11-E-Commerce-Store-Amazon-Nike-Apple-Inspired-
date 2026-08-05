import { useEffect, useState } from "react";

import { getProductsByCategory } from "../services/productApi";


function useRelatedProducts(
  category,
  currentProductId
) {

  const [products, setProducts] = useState([]);

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState(null);



  useEffect(() => {


    if (!category) {

      setProducts([]);

      return;

    }



    async function fetchRelatedProducts() {


      try {


        setLoading(true);

        setError(null);



        const data = await getProductsByCategory(
          category
        );



        const relatedProducts =

          data.products.filter(

            product =>

              product.id !== currentProductId

          );



        setProducts(

          relatedProducts.slice(0, 4)

        );


      } catch(error) {


        setError(error.message);


      } finally {


        setLoading(false);


      }


    }



    fetchRelatedProducts();


  }, [

    category,

    currentProductId

  ]);



  return {

    products,

    loading,

    error

  };


}


export default useRelatedProducts;