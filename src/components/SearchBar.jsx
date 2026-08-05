import { useState } from "react";
import styles from "./Navbar/Navbar.module.css";

function SearchBar() {
  const [query, setQuery] = useState("");

  return (
    <form
      className={styles.searchForm}
      onSubmit={(e) => e.preventDefault()}
    >
      <input
        className={styles.searchInput}
        type="text"
        placeholder="Search for products, brands and more..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button className={styles.searchButton} type="submit">
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="2" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </button>
    </form>
  );
}

export default SearchBar;
