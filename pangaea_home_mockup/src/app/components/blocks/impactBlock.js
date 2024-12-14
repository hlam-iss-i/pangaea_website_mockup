import styles from "../../styles/impact.module.css";
import Carousel from "../carousel";
import impacts from "../../data/impacts.json";

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
                <h3 className={styles.approach}>Our approach</h3>
                <h2 className={styles.tagline}>Crafting a Digital<br/>Future for <span className={styles.emphasis}>Life Science<br/>Organizations.</span></h2>
                <p className={styles.description}>Pangaea Solutions is not just another software provider; we are architects of a digital revolution, creating bespoke solutions that address the unique challenges and processes of the lfie sciences industry.</p>
            </div>
            <div>
                {/* Insert info cards here */}
            </div>
        </div>
    )
};

export default ImpactBlock;