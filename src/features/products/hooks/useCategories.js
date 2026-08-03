import { useEffect, useState } from "react";

import { getCategories } from "../services/productApi";


function useCategories() {

  const [categories, setCategories] = useState([]);

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState(null);


  useEffect(() => {

    async function fetchCategories() {

      try {

        setLoading(true);

        const data = await getCategories();

        setCategories(data);


      } catch(error) {

        setError(error.message);


      } finally {

        setLoading(false);

      }

    }


    fetchCategories();

  }, []);


  return {
    categories,
    loading,
    error
  };

}


export default useCategories;