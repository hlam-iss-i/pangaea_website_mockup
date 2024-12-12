'use client';
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import styles from "../styles/carousel.module.css";
import { Pagination } from 'swiper/modules';

const Carousel = ({slides}) => {

    return (
        <div className="swiper-container">
            <Swiper
                pagination={true}
                modules={[Pagination]}
                className={styles.quoteSwiper}
                key="carousel"
            >
                {slides.map((slide) => (
                    <SwiperSlide className={styles.slide}>{slide.text}</SwiperSlide>
                ))}
            </Swiper>
            <div className={styles.custom_pagination}></div>
        </div>
    )
};

export default Carousel;