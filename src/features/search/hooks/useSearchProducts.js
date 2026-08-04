import { useEffect, useState } from "react";

import { searchProducts } from "../../products/services/productApi";


function useSearchProducts(query) {


  const [products, setProducts] = useState([]);

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState(null);



  useEffect(() => {


    if (!query) {

      setProducts([]);

      return;

    }



    async function fetchProducts(){


      try {

        setLoading(true);
        setError(null);

        const data = await searchProducts(query);

        setProducts(data.products);

      } catch(error){


        setError(error.message);


      } finally {


        setLoading(false);


      }


    }



    fetchProducts();


  }, [query]);



  return {

    products,

    loading,

    error

  };


}


export default useSearchProducts;