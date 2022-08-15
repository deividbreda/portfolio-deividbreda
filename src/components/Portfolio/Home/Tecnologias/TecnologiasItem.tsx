import styles from './styles.module.scss'

import { TecnologiasLink } from './TecnologiasLink';

interface TecnologiasItem {
    openModal: () => void,
}

export function TecnologiasItem({ openModal }: TecnologiasItem) {
    return (
        <div className={styles.languages}>
            <TecnologiasLink name="React" url="https://pt-br.reactjs.org/" />
            <TecnologiasLink name="Next" url="https://nextjs.org/" />
            <TecnologiasLink name="TypeScript" url="https://www.typescriptlang.org/" />
            <TecnologiasLink name="JavaScript" url="https://www.javascript.com/" />
            <TecnologiasLink name="GraphQL" url="https://graphql.org/" />
            <a className={styles.skills} onClick={openModal}> Ver todas + </a>
        </div>
    );
}