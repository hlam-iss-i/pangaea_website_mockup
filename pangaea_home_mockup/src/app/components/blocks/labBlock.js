'use client';
import styles from "../../styles/lab.module.css";
import lab from "../../data/lab.json";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const LabBlock = () => {
    return (
        <div>
            <div className={styles.overlay}>
                <h2 className={styles.title}>Transform your<br/>Business <span className={styles.emphasis}>with us.</span></h2>
                <p className={styles.description}>Pangaea is a leader in the Life Sciences industry, known for our expertise and innovative solutions. We deliver exceptional results, making us the trusted partner for our current and future customers.</p>
            </div>
            <Swiper
                pagination={{clickable: true}}
                modules={[Mousewheel, Pagination]}
                direction="vertical"
                className={styles.labSwiper}
                mousewheel={{
                    sensitivity: 0.5,
                    releaseOnEdges: true,
                }}
                speed={1250}
            >
                {lab.map((slide, index) => (
                    <SwiperSlide key={slide.source}>
                        <div className={styles.slideContainer}>
                            <img src={slide.image} alt={slide.source} className={styles.media} />
                            <div className={styles.verticalContainer}>
                                <h2 className={styles.index}>0{index + 1}.</h2>
                                <p className={styles.source}>From <strong>{slide.source}</strong></p>
                                <h3 className={styles.subTitle}>{slide.title}</h3>
                                <p className={styles.slideDescription}>{slide.text}</p>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
};

export default LabBlock;