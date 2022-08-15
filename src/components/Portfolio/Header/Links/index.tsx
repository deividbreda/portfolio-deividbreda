import Link from 'next/link';

import styles from '../styles.module.scss'

export function Links() {
    return (
        <div data-aos="fade-left" className={styles.menu}>
            <ul>
                <li className={styles.linksix}> <a href="#sobre"> Sobre </a> </li>
                <li className={styles.linkfive}> <a href="#servicos"> Serviços </a> </li>
                <li className={styles.linkfour}> <a href="#tecnologias"> Tecnologias </a> </li>
                <li className={styles.linkthree}> <a href="#projetos"> Projetos </a> </li>
                <li className={styles.linktwo}>
                    <Link href="/links">
                        <a> Contatos </a>
                    </Link>
                </li>
                <li className={styles.linkone}>
                    <Link href="/blog">
                        <a> Meu Blog </a>
                    </Link>
                </li>
            </ul>
        </div>
    );
}