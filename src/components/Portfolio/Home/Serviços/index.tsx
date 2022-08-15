import styles from './styles.module.scss'

import { FaCode, FaLaptopCode, FaPencilAlt } from "react-icons/fa";

export function Servicos(){
    return (
        <div className={styles.container}>
            <div className={styles.content} id="servicos">
                <div className="containerWidth">          
                    <div className={styles.servicos}>
                        <div data-aos="zoom-in" className={styles.text}>
                            <span> Com o que eu trabalho? 🤔 </span>
                            <h1> Meus Serviços </h1>
                        </div>
            
                        <div className={styles.servico}>
                            <div data-aos="flip-up" data-aos-duration="1000" className={styles.first}>
                                <i> <FaCode /> </i>
                                <strong> Web Development </strong>
                                <p> Desenvolvimento, planejamento e manutenção de websites. </p>
                            </div>

                            <div data-aos="flip-up" data-aos-duration="1600" className={styles.middle}>
                                <i> <FaLaptopCode /> </i>
                                <strong> Web Design </strong>
                                <p> Criação de identidades visuais para websites. </p>
                            </div>

                            <div data-aos="flip-up" data-aos-duration="2200" className={styles.last}>
                                <i> <FaPencilAlt /> </i>
                                <strong> Graphic Design </strong>
                                <p> Criação visual para sites, panfletos, portfólios, banners, anúncios e campanhas. </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}