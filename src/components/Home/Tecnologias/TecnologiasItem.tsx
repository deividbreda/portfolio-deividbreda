import styles from './styles.module.scss'

import { TecnologiasLink } from './TecnologiasLink';

export function TecnologiasItem() {
    return (
        <div className={styles.languages}>
            <TecnologiasLink name="React" url="https://pt-br.reactjs.org/" />
            <TecnologiasLink name="Next" url="https://nextjs.org/" />
            <TecnologiasLink name="TypeScript" url="https://www.typescriptlang.org/" />
            <TecnologiasLink name="JavaScript" url="https://www.javascript.com/" />
            <TecnologiasLink name="GraphQL" url="https://graphql.org/" />
        </div>
    );
}