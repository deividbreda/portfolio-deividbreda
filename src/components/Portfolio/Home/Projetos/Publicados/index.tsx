import styles from '../styles.module.scss'

interface PublicadosProps {
    title: string,
    link: string,
    img: string,
}

export function Publicados(props: PublicadosProps) {
    return (
        <div className={styles.publicado} key={props.link} data-aos="fade-up">
            <a href={props.link} target="_blank" rel="noreferrer"> <img src={props.img} alt="" /> </a>
            <div className={styles.cover}>
                <strong> {props.title} </strong>
                <a target="_blank" rel="noreferrer" href={props.link}> Ver </a>
            </div>
        </div>
    );
}