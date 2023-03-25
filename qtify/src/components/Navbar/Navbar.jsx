import { Link } from "react-router-dom";
import React from "react";
import Button from "../Button/Button";
import Logo from "../Logo/Logo";
import Searchbar from "../Searchbar/Searchbar";
import styles from "./Navbar.module.css";

function Navbar({ searchAlbums }) {
  return (
    <div className={styles.navbar}>
      <Link to="/">
        <Logo />
      </Link>
      <Searchbar
        placeholder="Search an album of your choice"
        searchAlbums={searchAlbums}
      />
      <Button>Give Feedback</Button>
    </div>
  );
}

export default Navbar;
