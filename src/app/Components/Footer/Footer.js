import styles from "./Footer.module.css";

export default function Footer() {
    return (
        <>
            <footer className={styles.footer}>
                 <h1>FLOW WITH THE MOMENT&mdash;LET'S CONNECT.</h1>
                 <div className={styles.footerContent}>
                    <div className={styles.message}>
                        <p>Open to new projects, ideas, or simply connecting.</p>
                        <form className={styles.email}>
                            <input 
                                type="email"
                                placeholder="E-Mail"
                            />
                        </form>
                    </div>
                    <div className={styles.menu}>
                        <ul className={styles.footerMenu}>
                            <li>
                                <h5>Gallery</h5>
                            </li>
                            <li>
                                <h5>Works</h5>
                                <ul className={styles.worksMenu}>
                                    <li>UI/UX</li>
                                    <li>Development</li>
                                    <li>Graphics</li>
                                </ul>
                            </li>
                            <li>
                                <h5>About</h5>
                            </li>
                            <li>
                                <h5>Contact</h5>
                            </li>
                        </ul>
                    </div>
                 </div>
            </footer>
        </>
    )
}