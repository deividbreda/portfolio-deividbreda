import { useEffect, useState } from "react";
import { githubApi } from "../../../../services/axios";

import { Publicados } from "./Publicados";
import { Repositorios } from "./Repositorios";

import styles from './styles.module.scss'
import { useGetProjectsQuery } from "../../../../graphql/generated";

export interface RepositorioProps {
    name: string,
    description: string,
    html_url: string,
    language: string,
    visibility: string,
}

export function GithubRepos() {
    const [repos, setRepos] = useState([])

    const { data } = useGetProjectsQuery()

    useEffect(() => {
        githubApi.get('users/deividbreda/repos')
            .then(response => setRepos(response.data))
    }, [])

    return (
        <div className={styles.content} id="projetos">
            <div className="containerWidth">
                <div data-aos="zoom-in-up">
                    <div className={styles.projetosContent}>
                        <div className={styles.repositorios}>
                            <h1> Meus Projetos </h1>
                            <div className={styles.allRepositorios}>
                                <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="" />
                                <Repositorios repositorios={repos} />
                            </div>
                        </div>
                        <div className={styles.publicados}>
                            <div data-aos="zoom-in">
                                <h1> Publicados </h1>
                            </div>
                            <div className={styles.allPublicados}>
                                {data?.publicProjects.map(projeto => {
                                    return (
                                        <Publicados 
                                            key={projeto.link}
                                            title={projeto.title}
                                            link={projeto.link}
                                            img={projeto.img.url}
                                        />
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}