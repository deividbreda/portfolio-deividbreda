import { RepositorioProps } from '..';
import styles from '../styles.module.scss'

interface RepositoriosProps {
    repositorios: RepositorioProps[]
}

export function Repositorios({ repositorios }: RepositoriosProps) {
    return (
        <>
            {repositorios.map(repositorio => (
                <div className={styles.repositorio} data-aos="fade-up" key={repositorio.name} >
                    <a href={repositorio.html_url}> <strong> {repositorio.name} </strong> </a>
                    <p> {repositorio.description} </p>
                    <span> {repositorio.language} </span>
                </div>
            ))}
        </>
    );
}