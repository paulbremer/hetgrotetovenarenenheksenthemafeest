import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
    return (
        <main className={styles.main}>
            <h1>🧙🏼 Themafeest</h1>
            <div className={styles.center}>
                <iframe
                    src="https://docs.google.com/forms/d/e/1FAIpQLSfEfS3NbwLjHSuCed9QH5WRRlQnQeqBKkdhdRmEXN24FzaZNA/viewform?embedded=true"
                    width="640"
                    height="1018"
                    style={{ border: 0 }}
                >
                    Laden…
                </iframe>
            </div>
        </main>
    );
}
