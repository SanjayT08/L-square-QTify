import React from "react";
import Button from "../Button/Button";
import Logo from "../Logo/Logo";
import Searchbar from "../Searchbar/Searchbar";
import styles from "./Navbar.module.css";

function Navbar() {
  return (
    <div className={styles.navbar}>
      <Logo />
      <Searchbar placeholder="Search a song of your choice" />
      <Button>Give Feedback</Button>
    </div>
  );
}

export default Navbar;
