import Link from 'next/link';

import styles from './styles.module.scss'

export function Contatos(){
    return (
        <div className={styles.content}>
            <div className="containerWidth">
                <div data-aos="fade-down" className={styles.contato}>
                    <h1> Entre em contato comigo agora mesmo! </h1>  

                    <Link href="/links">
                        <a> CONTATOS </a> 
                    </Link>     
                </div>
            </div>
        </div>
    );
}