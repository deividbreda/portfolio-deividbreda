import styles from './styles.module.scss'

export function Sobre() {
    return (
        <div data-aos="fade-up" className={styles.content} id="sobre">
            <div className="containerWidth">
                <div className={styles.sobreMim}>
                    <div className={styles.text}>
                        <h1> Sobre mim 🙋‍♂️</h1>
                        <p> Olá, meu nome é Deivid, sou estudante de programação, cursando o 4° semestre de Engenharia de Software.
                            Atualmente trabalho como Desenvolvedor Web há aproximadamente dois anos, utilizando as tecnologias PHP, Smarty, JavaScript, HTML e CSS.
                            Meu principal foco hoje é a especialização em React, Next, Node, GraphQL e entre outras linguagens Front-end, afim de buscar novas propostas e oportunidades para atuar com essas tecnologias requisitadas pelo mercado.  </p>
                    </div>

                    <img src="https://img.freepik.com/vetores-premium/programador-e-desenvolvimento-de-engenharia-codificando-vetor-de-desenvolvedor-de-design-de-sites-de-desenvolvimento-web_199064-129.jpg" alt="" />
                </div>
            </div>
        </div>
    );
}