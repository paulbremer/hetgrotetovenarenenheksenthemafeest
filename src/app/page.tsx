import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
    return (
        <main className={styles.main}>
            <h1>🧙🏼 Het grote tovenaren en heksenfeest 🧙🏼‍♂️</h1>

            <div className={styles.paragraph}>
                <p>Beste leerling, docent, dreuzel of ander bijzonder magisch wezen.</p>
                <p>
                    Het toverschool-toernooi staat weer op de planning! Graag zien we jou/jullie verschijnselen op dit
                    unieke evenement!
                </p>
                <p>Geef aan met wie je komt en hoe je eventueel wilt overnachten.</p>
                <br />
                <p>Locatie: <a href="https://maps.app.goo.gl/undjGBWGzECJXvNy6">Zwarteweg 27, Nieuw-Amsterdam</a></p>
                <p>Wanneer: zaterdag 1 juni 15:00 tot zondag circa 11:00</p>
                <br />
                <p>
                    Magische groeten! En tot dan! <br />
                    Mede mogelijk gemaakt door de tover-organisatie van Oldmansforest &apos;22 en Fam. Makkinje
                </p>
            </div>

            <div className={styles.center}>
                <iframe
                    src="https://docs.google.com/forms/d/e/1FAIpQLSfEfS3NbwLjHSuCed9QH5WRRlQnQeqBKkdhdRmEXN24FzaZNA/viewform?embedded=true"
                    width="640"
                    height="1018"
                    className={styles.iframe}
                >
                    Laden…
                </iframe>
            </div>
        </main>
    );
}
