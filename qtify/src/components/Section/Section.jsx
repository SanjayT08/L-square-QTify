import React, { useEffect, useState } from "react";
import Card from "../Card/Card";
import Carousel from "../Carousel/Carousel";
import styles from "./Section.module.css";

function Section({ title, datafetch }) {
  const [cards, setCards] = useState([]);
  const [isShowAll, setIsShowAll] = useState(false);
  useEffect(() => {
    datafetch().then((data) => {
      setCards(data);
    });
  }, []);

  const handleToggle = () => {
    setIsShowAll((prevState) => !prevState);
  };

  return (
    <div className={styles.sectionwrapper}>
      <div className={styles.wrapper}>
        <div>
          <h4>{title}</h4>
        </div>
        <div className={styles.showAll} onClick={handleToggle}>
          <h4>{!isShowAll ? "Show All" : "Collapse"}</h4>
        </div>
      </div>
      <div className={styles.cardswrapper}>
        {isShowAll ? (
          cards.map((card) => (
            <Card
              data={{
                image: card.image,
                follows: card.follows,
                title: card.title
              }}
            />
          ))
        ) : (
          <Carousel
            data={cards}
            renderComponent={(data) => <Card data={data} />}
          />
        )}
      </div>
    </div>
  );
}

export default Section;
