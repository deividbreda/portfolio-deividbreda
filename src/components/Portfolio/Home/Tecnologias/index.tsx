import styles from './styles.module.scss'

import { FaCheck } from "react-icons/fa";

import { TecnologiasIcon } from './TecnologiasIcon';
import { TecnologiasItem } from './TecnologiasItem';

interface TecnologiasProps {
    openModal: () => void
}

export function Tecnologias({ openModal }: TecnologiasProps) {
    return (
        <div className={styles.container}>
            <div className={styles.content} id="tecnologias">
                <div className="containerWidth">
                    <div className={styles.tecnologias}>
                        <div className={styles.info}>

                            <TecnologiasIcon />

                            <div data-aos="zoom-out-left" className={styles.text}>
                                <span> Em quais linguagens eu programo?</span>
                                <h1> Tecnologias 🛠️ </h1>

                                <div>
                                    <TecnologiasItem openModal={openModal} />
                                    <p> O React é uma biblioteca JavaScript com foco na renderização de interfaces gráficas de usuários em uma página web.</p>
                                    <p> Criada pela empresa Facebook (Meta), ela serve diariamente milhares de empresas do mercado, como por exemplo, Facebook, Instagram, Twitter, Discord, Tesla, Airbnb e entre outros.</p>
                                </div>

                                <div data-aos="zoom-out-left" data-aos-duration="800">
                                    <strong> Mas afinal, por que eu utilizo o React? </strong>
                                    <ul>
                                        <li> <i> <FaCheck /> </i> Melhor Desempenho com a DOM </li>
                                        <li> <i> <FaCheck /> </i> Trabalha melhor com SEO </li>
                                        <li> <i> <FaCheck /> </i> Fácil de escrever, simples! </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}