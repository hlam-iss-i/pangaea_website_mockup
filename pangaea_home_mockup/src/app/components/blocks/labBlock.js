import styles from "../../styles/home.module.css";

const LabBlock = () => {
    return (
        <div className={styles.overlay}>
            <div>
                <h2>Transform your<br/>Business <span>with us.</span></h2>
            </div>
            <div>
                <p>Pangaea is a leader in the Life Sciences industry, known for our expertise and innovative solutions. We deliver exceptional results, making us the trusted partner for our current and future customers.</p>
            </div>
            <div>
                {/* Insert lab plant enterprise thing here */}
            </div>
        </div>
    )
};

export default LabBlock;