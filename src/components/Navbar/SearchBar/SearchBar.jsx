import { useState } from "react";
import { useNavigate } from "react-router-dom";

import styles from "./SearchBar.module.css";


function SearchBar() {


  const [query, setQuery] = useState("");

  const navigate = useNavigate();



  const handleSubmit = (e) => {

    e.preventDefault();


    if(!query.trim()) return;



    navigate(
      `/search?q=${query}`
    );


  };



  return (

    <form

      className={styles.search}

      onSubmit={handleSubmit}

    >

      <input

        type="text"

        placeholder="Search products..."

        value={query}

        onChange={(e)=>
          setQuery(e.target.value)
        }

      />


      <button>

        🔍

      </button>


    </form>

  );

}


export default SearchBar;