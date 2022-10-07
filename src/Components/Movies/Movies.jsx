import React from "react";
import MoviesCard from "./MoviesCard";
import { Swiper, SwiperSlide } from "swiper/react";

import styles from "./Movies.module.css";
import "swiper/css";

export default function Movies({ movie }) {
  const [screen, setScreen] = React.useState(0);
  const [cardNumber, setCardNumber] = React.useState(6);

  React.useEffect(() => {
    function handleResize() {
      setScreen(window.innerWidth);
      if (screen > 1000) {
        setCardNumber(6);
      } else if (screen <= 1000 && screen > 740) {
        setCardNumber(4);
      } else if (screen <= 740 && screen > 414) {
        setCardNumber(3);
      } else {
        setCardNumber(1);
      }
    }

    window.addEventListener("resize", handleResize);
  }, [screen]);

  return (
    <Swiper spaceBetween={24} grid={2} slidesPerView={cardNumber}>
      {movie &&
        movie.map((item) => (
          <SwiperSlide>
            <MoviesCard key={item.id} movie={item} />
          </SwiperSlide>
        ))}
    </Swiper>
  );
}
