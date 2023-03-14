import React from "react";
import styles from "./Searchbar.module.css";
import {ReactComponent as SearchIcon} from "../assets/search-icon.svg";

function Searchbar({ placeholder }) {
  return (
    <div className={styles.wrapper}>
      <input className={styles.searchbar} placeholder={placeholder} />
      <button className={styles.searchButton}>
        <SearchIcon />
        </button>
    </div>
  );
}

export default Searchbar;
