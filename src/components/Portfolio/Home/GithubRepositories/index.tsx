import { useEffect, useState } from "react";
import { githubApi } from "../../../../services/axios";
import { Repositorios } from "./Repositorios";

import styles from './styles.module.scss'

export interface RepositorioProps {
    name: string,
    description: string,
    html_url: string,
    language: string,
    visibility: string,
}

export function GithubRepos() {
    const [ repos, setRepos ] = useState([])

    useEffect(() => {
        githubApi.get('users/deividbreda/repos')
        .then(response => setRepos(response.data))
    }, [])

    return (
        <div className={styles.content} id="projetos">
            <div className="containerWidth">
                <div data-aos="zoom-in-up">
                    <h1> Meus Projetos </h1>
                    <div className={styles.repositorios}>
                        <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="" />

                        <Repositorios repositorios={repos} />
                    </div>
                </div>
            </div>
        </div>
    );
}