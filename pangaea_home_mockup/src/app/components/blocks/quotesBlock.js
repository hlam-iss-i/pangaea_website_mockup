import styles from "../../styles/quotes.module.css";
import Carousel from "../carousel";
import quotes from "../../data/quotes.json";

const QuotesBlock = () => {

    return (
        <div className={styles.overlay}>
            <h2 className={styles.title}>What People Are Saying</h2>
            <div className={styles.carousel}>
                <Carousel slides={quotes} dir="horizontal" height="15vw"/>
            </div>
        </div>
    )
};

export default QuotesBlock;