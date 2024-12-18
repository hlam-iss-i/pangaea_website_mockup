import styles from "../../styles/impact.module.css";
import Carousel from "../carousel";
import impacts from "../../data/impacts.json";
import Card from "../card";
import cards from "../../data/impact_cards.json";

const ImpactBlock = () => {

    return (
        <div className={styles.overlay}>
            <div>
                <h2 className={styles.title}>Spotlighting Our Impact</h2>
                <div className={styles.carousel_container}>
                    <Carousel slides={impacts} dir="horizontal" height="27.5vw"/>
                </div>
            </div>
            <div>
                <div className={styles.approach_container}>
                    <h3 className={styles.approach}>Our approach</h3>
                    <h2 className={styles.tagline}>Crafting a Digital<br/>Future for <span className={styles.emphasis}>Life Science<br/>Organizations.</span></h2>
                </div>
                <p className={styles.description}>Pangaea Solutions is not just another software provider; we are architects of a digital revolution, creating bespoke solutions that address the unique challenges and processes of the lfie sciences industry.</p>
            </div>
            <div className={styles.cards}>
                {cards.map((card) => (
                    <Card hoverText={card.text} imageUrl={card.image} title={card.title} anchorUrl={card.link} key={card.title}/>
                ))}
            </div>
        </div>
    )
};

export default ImpactBlock;