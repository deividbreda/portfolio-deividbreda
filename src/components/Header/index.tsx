import { Links } from './Links';

import styles from './styles.module.scss'

import { FaLinkedinIn, FaWhatsapp } from "react-icons/fa";

export function Header() {
    return (
        <div className={styles.container}>
            <div className="containerWidth">
                <div className={styles.content}>
                    <div data-aos="fade-right" className={styles.info}>
                        <img src="https://avatars.githubusercontent.com/u/62572750?v=4" alt="" />
                        <div className={styles.text}>
                            <div>
                                <h1> Deivid Breda </h1>
                                <div className={styles.redes}>
                                    <a href="https://www.linkedin.com/in/deivid-breda-9b2507136/"> <FaLinkedinIn /> </a>
                                    <a href="https://web.whatsapp.com/send?phone=5542991062425"> <FaWhatsapp /> </a>
                                </div>
                            </div>

                            <p> Web Developer | React | Next | TypeScript | JS | GraphQL </p>

                        </div>
                    </div>

                    <Links />
                </div>
            </div>
        </div>
    );
}