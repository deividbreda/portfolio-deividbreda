import Head from "next/head";

import { Footer } from "../../components/Blog/Footer";
import { HeaderLinks } from "../../components/Blog/HeaderLinks";
import { ModalLogin } from "../../components/Blog/ModalLogin";
import { Newsletter } from "../../components/Blog/Newsletter";
import { Author } from "../../components/Blog/Post/Author";
import { Comments } from "../../components/Blog/Post/Comments";
import { Content } from "../../components/Blog/Post/Content";
import { PostDetails } from "../../components/Blog/Post/PostDetails";
import { useLogin } from "../../hooks/useLogin";

export default function Post() {
    const { handleCloseModalLogin, modalLogin } = useLogin();

    return (
        <>
            <Head>
                <title> Post | Deivid Breda </title>
            </Head>

            <ModalLogin isOpen={modalLogin} onClose={handleCloseModalLogin} />

            <HeaderLinks />
                <PostDetails />
                <Content />
                <Author />
                <Comments />
                <Newsletter />
            <Footer />
        </>
    );
}