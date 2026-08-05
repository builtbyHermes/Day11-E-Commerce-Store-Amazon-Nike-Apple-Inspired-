import { useEffect, useState } from "react";

import { getProducts } from "../services/productApi";

const LIMIT = 12;

function useProducts() {

  const [products, setProducts] = useState([]);

  const [page, setPage] = useState(0);

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState(null);

  const [hasMore, setHasMore] = useState(true);

  const [total, setTotal] = useState(0);



  const fetchProducts = async () => {

    try {

      setLoading(true);

      setError(null);

      const skip = page * LIMIT;

      const data = await getProducts(
        LIMIT,
        skip
      );

      setProducts((currentProducts) => [

        ...currentProducts,

        ...data.products

      ]);

      setTotal(data.total);

      setHasMore(

        data.skip + data.limit < data.total

      );

      setPage((currentPage) => currentPage + 1);

    }

    catch (error) {

      setError(error.message);

    }

    finally {

      setLoading(false);

    }

  };



  useEffect(() => {

    fetchProducts();

  }, []);




  const loadMore = () => {

    if (!loading && hasMore) {

      fetchProducts();

    }

  };



  return {

    products,

    loading,

    error,

    hasMore,

    loadMore,

    total

  };

}

export default useProducts;