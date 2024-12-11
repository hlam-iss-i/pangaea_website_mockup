import Link from 'next/link';
import styles from "../../styles/start.module.css";

const StartBlock = () => {
    return (
        <div className={styles.overlay}>
            <div className={styles.headers}>
                <h2 className={`${styles.headerBase} ${styles.revolution}`}>Revolutionizing</h2>
                <h2 className={`${styles.headerBase} ${styles.digital}`}>Digital Product</h2>
                <h2 className={`${styles.headerBase} ${styles.management}`}>Life Cycle Management</h2>
                <h2 className={`${styles.headerBase} ${styles.lifeSciences}`}>for <span className={styles.emphasis}>Life Sciences</span></h2>
            </div>
            <div className={styles.subtext}>
                <p className={styles.tagline}>R&D innovation to<br/>Enterprise Excellence</p>
                <Link href="/solutions" className={styles.link}>
                    Explore our solutions
                </Link>
            </div>
        </div>
    )
};

export default StartBlock;