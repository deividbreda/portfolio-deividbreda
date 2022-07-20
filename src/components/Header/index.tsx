import { Links } from './Links';

import styles from './styles.module.scss'

export function Header(){
    return(
        <div className={styles.container}>
            <div className="containerWidth">
                <div className={styles.content}>
                    <div data-aos="fade-right" className={styles.info}>                 
                        <img src="https://avatars.githubusercontent.com/u/62572750?v=4" alt="" />
                        <div className={styles.text}>
                            <h1> Deivid Breda </h1>
                            <p> Web Developer | React | Next | JS | GraphQL </p>
                        </div>
                    </div>
                    
                    <Links />
                </div>
            </div>
        </div>
    );
}