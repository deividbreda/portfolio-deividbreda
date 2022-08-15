import styles from './styles.module.scss'

export function TecnologiasIcon() {
    return (
        <div data-aos="fade-right" className={styles.tecnologiasIcon}>
            <img className={styles.reactLogo} src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png" alt="" />
            <img className={styles.graphQlLogo} src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/GraphQL_Logo.svg/1200px-GraphQL_Logo.svg.png" alt="" />
            <img className={styles.jsLogo} src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/480px-Unofficial_JavaScript_logo_2.svg.png" alt="" />
            <img className={styles.nextLogo} src="https://ui-lib.com/blog/wp-content/uploads/2021/12/nextjs-boilerplate-logo.png" alt="" />
        </div>
    );
}