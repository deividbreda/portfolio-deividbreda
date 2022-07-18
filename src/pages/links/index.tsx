
import Head from "next/head";
import { RedirectLinks } from "../../components/Redirect/RedirectLinks";

import styles from './styles.module.scss'

export default function Links() {
    return (
        <>
            <Head>
                <title> Links | Deivid Breda </title>
            </Head>

            <div className={styles.container}>
                <div className={styles.content}>
                    <header>
                        <img src="https://avatars.githubusercontent.com/u/62572750?v=4" alt="" />
                        <div className={styles.text}>
                            <h1> Deivid Breda </h1>
                            <p> Estudante de programação cursando o 4° semestre de Engenharia de Software - UNICESUMAR. </p>                   
                        </div>
                    </header>
                    
                    <RedirectLinks />

                    <span> Desenvolvido por eu mesmo! 😜 </span>
                </div>
            </div>
        </>
    );
}