import Image from "next/image";
import styles from "./RecentWorks.module.css";

export default function RecentWorks() {
    return (
        <>
            <div className={styles.recentWorks}>
                <h2>WHAT'S NEW</h2>
                <div className={styles.works}>
                    <div className={styles.worksCard}>
                        <h3>01</h3>
                        <Image 
                            src={"/images/rat_pic.jpg"}
                            alt="cute rat photo"
                            width={100}
                            height={100}
                        />
                        <div className={styles.worksDetails}>
                            <h3>PROJECT TITLE</h3>
                            <p>
                                Torem ipsum dolor sit amet, 
                                consectetur adipiscing elit. 
                                Etiam eu turpis molestie, dictum est a, mattis tellus. 
                                Sed dignissim, metus nec fringilla accumsan.
                            </p>
                            <p>
                                <span>Project Type</span> Website
                            </p>
                            <p>
                                <span>Programs</span> Adobe
                            </p>
                            <button>See Details</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}