import React, { useState } from "react"
import classes from "./Carousel.module.scss"

const Carousel = ({ img }) => {
  const [activeIndex, setActiveIndex] = useState(0)

  const nextSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === img.length - 1 ? 0 : prevIndex + 1
    )
  }

  const prevSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? img.length - 1 : prevIndex - 1
    )
  }

  return (
    <div className={classes.carouselWrapper}>
      <button className={classes.carouselBtn} onClick={prevSlide}></button>
      <div className={classes.carousel}>
        <img className={classes.carouselImg} src={img[activeIndex]} alt="" />
      </div>
      <button className={classes.carouselBtn} onClick={nextSlide}></button>
    </div>
  )
}

export default Carousel
