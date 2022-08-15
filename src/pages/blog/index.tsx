import Head from "next/head";

import { useLogin } from "../../hooks/useLogin";
import { HeaderLinks } from "../../components/Blog/HeaderLinks";
import { About } from "../../components/Blog/About";
import { Posts } from "../../components/Blog/Posts";
import { Newsletter } from "../../components/Blog/Newsletter";
import { Footer } from "../../components/Blog/Footer";
import { ModalLogin } from "../../components/Blog/ModalLogin";

export default function Blog() {
    const { handleCloseModalLogin, modalLogin } = useLogin();

    return (
        <>
            <Head>
                <title> Blog | Deivid Breda </title>
            </Head>

            <ModalLogin isOpen={modalLogin} onClose={handleCloseModalLogin} />

            <HeaderLinks />
            <About />
            <Posts />
            <Newsletter />
            <Footer />
        </>
    );
}