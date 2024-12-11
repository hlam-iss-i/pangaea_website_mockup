import Link from 'next/link';
import styles from "../styles/navbar.module.css";

const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            
            <img src="/media/logo_no_bg.png" alt="logo" className={styles.icon}/>
        

            <div className={styles.links}>
                <Link href="/home" className={styles.link}>
                    Home
                </Link>
                <Link href="/spotlight" className={styles.link}>
                    Spotlight
                </Link>
                <Link href="/solutions" className={styles.link}>
                    Solutions
                </Link>
                <Link href="/aboutUs" className={styles.link}>
                    About Us
                </Link>
                <Link href="/contactUs" className={styles.link}>
                    Contact Us
                </Link>
            </div>
        </nav>
    )
};

export default Navbar;