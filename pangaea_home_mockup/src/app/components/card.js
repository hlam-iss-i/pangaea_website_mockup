'use client';
import React, { useState } from "react";
import styles from "../styles/card.module.css";

const Card = ({hoverText, imageUrl, title, anchorUrl}) => {
    const [isHovered, setHovered] = useState(false);

    return (
        <div
            className={styles.card}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >   
            <img src={imageUrl} alt="background" className={styles.media}/>
            <h3 className={styles.title}>{title}</h3>
            {isHovered && <div className={styles.overlay}>{hoverText}</div>}
            <a href={anchorUrl} className={styles.arrowLink} aria-label="Go to link">
                <img src="/media/svg_arrow.svg" alt="arrow" className={styles.arrowIcon} />
            </a>
        </div>
    );
};

export default Card;