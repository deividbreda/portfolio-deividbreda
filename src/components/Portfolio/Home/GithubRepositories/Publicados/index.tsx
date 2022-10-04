import Link from 'next/link';
import styles from '../styles.module.scss'

interface PublicadosProps {
    url: string,
    img: string,
    titulo: string
}

export function Publicados({url, img, titulo}: PublicadosProps){
    return(
        <>
            <div className={styles.publicado} data-aos="fade-up">
                <a href={url} target="_blank"> <img src={`/images/${img}`} alt="" /> </a>
                <div className={styles.cover}>
                    <strong> {titulo} </strong>
                    <a target="_blank" href={url}> Ver </a>
                </div>
            </div>
        </>
    );
}