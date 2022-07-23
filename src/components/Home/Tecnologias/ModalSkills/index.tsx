import Modal from "react-modal";

import styles from '../styles.module.scss'

interface ModalSkillsProps {
    isOpen: boolean,
    onRequestClose: () => void,
}

export function ModalSkills({ isOpen, onRequestClose }: ModalSkillsProps){
    return (
        <Modal isOpen={isOpen} onRequestClose={onRequestClose} className={styles.modal} overlayClassName={styles.overlayModal}>
            <button type="button" onClick={onRequestClose} 
                className={styles.reactModalClose}> <img src="/images/close.svg" alt="Fechar modal"/> 
            </button>

            <h1> Skills </h1>

            <ul>
                <li> React Query </li>
                <li> REST APIs </li>
                <li> SSR (Server-side Rendering) </li>
                <li> Mirage JS </li>
                <li> CMS </li>
                <li> GIT </li>
                <li> Chakra UI </li>
                <li> Tailwind CSS </li>
                <li> SASS </li>
                <li> Styled-components </li>
                <li> Java </li>
                <li> C++ </li>

            </ul>
        </Modal>
    );
}