import { useEffect, useState } from "react";

import { getProducts } from "../services/productApi";


function useProducts(){

  const [products, setProducts] = useState([]);

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState(null);


  useEffect(()=>{

    async function fetchProducts(){

      try {

        setLoading(true);

        const data = await getProducts();

        setProducts(data.products);


      } catch(error){

        setError(error.message);


      } finally {

        setLoading(false);

      }

    }


    fetchProducts();


  },[]);


  return {
    products,
    loading,
    error
  };

}


export default useProducts;