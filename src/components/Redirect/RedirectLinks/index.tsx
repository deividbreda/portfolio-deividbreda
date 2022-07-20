import Link from 'next/link';

import styles from '../../../pages/links/styles.module.scss'

import { FaLinkedinIn, FaGithub, FaUserTie, FaInstagram, FaWhatsapp } from "react-icons/fa";

export function RedirectLinks(){
    return (
        <div data-aos="fade-up" className={styles.links}>
            <Link href="https://www.linkedin.com/in/deivid-breda-9b2507136/">
                <a className={styles.linkedin}> <FaLinkedinIn /> Linkedin </a>
            </Link>

            <Link href="https://github.com/deividbreda">
                <a className={styles.github}> <FaGithub /> Github </a>
            </Link>

            <Link href="/">
                <a className={styles.portfolio}> <FaUserTie /> Portfólio </a>
            </Link>

            <Link href="https://instagram.com/deividbrida">
                <a className={styles.instagram}> <FaInstagram /> Instagram </a>
            </Link>

            <Link href="https://web.whatsapp.com/send?phone=5542991062425">
                <a className={styles.whatsapp}> <FaWhatsapp /> WhatsApp </a>
            </Link>
        </div>
    );
}