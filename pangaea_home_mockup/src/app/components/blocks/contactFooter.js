import styles from "../../styles/contact.module.css";

const ContactFooter = () => {
    return (
        <div className={styles.overlay}>
            <h2 className={styles.title}>Get in Touch with Us</h2>
            <div className={styles.desc_container}>
                <p className={styles.description}>Have questions about our software, need support, or want to learn more about our features? Our team is here to help.</p>
            </div>
            <a href="http://localhost:3000/" className={styles.contact_button} aria-label="Contact Link">
                <span className={styles.button_text}>Contact us now</span>
                <img src="/media/svg_arrow_vector.svg" alt="arrow" className={styles.arrowIcon} />
            </a>
        </div>
    )
};

export default ContactFooter;