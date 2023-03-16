import React from "react";
import styles from "./CarouselLeftNavigation.module.css";
import { useSwiper } from "swiper/react";

export default function CarouselLeftNavigation() {
  const swiper = useSwiper();
  return (
    <div
      className={styles.leftCarousel}
      onClick={() => {
        swiper.slidePrev();
      }}
    >
      <div>
        <img
          src={require("../../assets/leftarrow.png")}
          alt="leftarrow"
          width={32}
        />
      </div>
    </div>
  );
}
