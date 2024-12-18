import styles from "../../styles/footer.module.css";
import footer from "../../data/footer_links.json";
import address from "../../data/address.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faFacebookF, faXTwitter } from "@fortawesome/free-brands-svg-icons";
import '@fortawesome/fontawesome-svg-core/styles.css';

const FooterFooter = () => {

    return (
        <div className={styles.container}>
            <div className={styles.overlay}>
                <div className={styles.address_container}>
                    <img src="/media/logo_no_bg.png" alt="logo" className={styles.logo}/>
                    {address.map((object, index) => (
                        <div key={"address " + index} className={styles.address}>
                            <p>{object.street},</p>
                            <p>{object.city},</p>
                            <p>{object.postal}.</p>
                        </div>
                    ))}
                </div>
                <div className={styles.links_container}>
                    {Object.keys(footer).map((key) => (
                        <div key={key} className={styles.links_column}> 
                            <h3 className={styles.titles}>{key}</h3>
                            <ul className={styles.links_list}>
                                {footer[key].map((obj, index) => (
                                    <li key={index} className={styles.links}>
                                        <a href={obj.link}>{obj.text}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
            <div className={styles.footerLine}></div>
            <div className={styles.footerEnd}>
                    <p>© 2024 Pangaea Life Science Solution Ltd. All rights reserved.</p>
                    <div className={styles.icons}>
                        <a href="https://www.linkedin.com/company/pangaea-life-science-solutions/?originalSubdomain=ie">
                            <FontAwesomeIcon icon={faLinkedin} className={styles.icon} />
                        </a>
                        <a href="https://www.linkedin.com/company/pangaea-life-science-solutions/?originalSubdomain=ie">
                            <FontAwesomeIcon icon={faFacebookF} className={styles.icon} />
                        </a>
                        <a href="https://www.linkedin.com/company/pangaea-life-science-solutions/?originalSubdomain=ie">
                            <FontAwesomeIcon icon={faXTwitter} className={styles.icon} />
                        </a>
                    </div>
            </div>
        </div>
    );
};

export default FooterFooter;