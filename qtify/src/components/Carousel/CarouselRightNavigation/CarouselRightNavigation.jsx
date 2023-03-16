import React from "react";
import styles from "./CarouselRightNavigation.module.css";
import { useSwiper } from "swiper/react";

export default function CarouselRightNavigation() {
  const swiper = useSwiper();
  return (
    <div
      className={styles.rightCarousel}
      onClick={() => {
        swiper.slideNext();
      }}
    >
      <div>
        <img
          src={require("../../assets/rightarrow.png")}
          alt="rightarrow"
          width={32}
        />
      </div>
    </div>
  );
}
