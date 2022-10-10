import React from "react";
import MoviesCard from "./MoviesCard";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

export default function Movies({ movie }) {
  const [screen, setScreen] = React.useState(0);
  const [cardNumber, setCardNumber] = React.useState(6);

  React.useEffect(() => {
    setScreen(window.innerWidth);

    if (screen > 1000) {
      setCardNumber(6);
    } else if (screen <= 1000 && screen > 740) {
      setCardNumber(4);
    } else if (screen <= 740 && screen > 576) {
      setCardNumber(3);
    } else if (screen <= 576 && screen > 500) {
      setCardNumber(2);
    } else {
      setCardNumber(1);
    }
    function handleResize() {
      setScreen(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);
  }, [screen]);
  console.log(movie);
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
