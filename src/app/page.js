import Image from "next/image";
import styles from "./page.module.css";
import Footer from "./Components/Footer/Footer";
import RecentWorks from "./Components/RecentWorks/RecentWorks";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <RecentWorks />
      </main>
      <Footer />
    </div>
  );
}
