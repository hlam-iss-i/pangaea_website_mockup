import styles from "../../styles/home.module.css";

const ImpactBlock = () => {
    return (
        <div className={styles.overlay}>
            <div>
                <h2>Spotlighting Our Impact</h2>
                {/* Insert carousel here */}
            </div>
            <div>
                <h3>Our approach</h3>
                <h2>Crafing a Digital<br/>Future for <span>Life Science<br/>Organizations.</span></h2>
                <p>Pangaea Solutions is not just another software provider; we are architects of a digital revolution, creating bespoke solutions that address the unique challenges and processes of the lfie sciences industry.</p>
            </div>
            <div>
                {/* Insert info cards here */}
            </div>
        </div>
    )
};

export default ImpactBlock;