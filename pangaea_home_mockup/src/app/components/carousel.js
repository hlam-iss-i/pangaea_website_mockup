'use client';
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import styles from "../styles/carousel.module.css";
import { Pagination } from 'swiper/modules';
import { useState, useEffect } from "react";

const Carousel = ({slides, dir, height}) => {
    const [activeSlide, setActiveSlide] = useState(0);
    const [paginationObj, setPageObj] = useState({});
    const [domLoaded, setDomLoaded] = useState(false);

    const handleSlideChange = (swiper) => {
        setActiveSlide(swiper.activeIndex);
    };

    const updatePagination = () => {
        if (window.innerWidth > 991) {
            setPageObj({ clickable: true });
        } else {
            setPageObj({ clickable: true, el: false });
        }
    };

    useEffect(() => {
        setDomLoaded(true);

        updatePagination();

        window.addEventListener("resize", updatePagination);
    }, []);

    return (
        <div className={styles.container}>
            {domLoaded && (
                <Swiper
                    pagination={paginationObj}
                    modules={[Pagination]}
                    className={styles.quoteSwiper}
                    direction={dir}
                    slidesPerView={3}
                    spaceBetween={20}
                    onSlideChange={handleSlideChange}
                    centeredSlides={true}
                    style={{"height": height}}
                >
                    {slides.map((slide, index) => (
                        <SwiperSlide className={`${styles.slide} ${index === activeSlide ? styles.active : styles.adjacent}`} key={slide.title}>
                            <div>
                                {slide.title.match(/[a-z]/i) ? (<h3 className={styles.title}>{slide.title}</h3>) : (<></>)}
                                {slide.text}
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            )}
        </div>
    )
};

export default Carousel;