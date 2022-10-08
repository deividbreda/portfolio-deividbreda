import Head from "next/head";

import { useModalLogin } from "../../hooks/useModalLogin";
import { HeaderLinks } from "../../components/Blog/HeaderLinks";
import { About } from "../../components/Blog/About";
import { Posts } from "../../components/Blog/Posts";
import { Newsletter } from "../../components/Blog/Newsletter";
import { Footer } from "../../components/Blog/Footer";
import { ModalLogin } from "../../components/Blog/ModalLogin";
import { GetStaticProps } from "next";
import { gql, GraphQLClient } from "graphql-request";
import { client } from "../../services/graphql";

type Post = {
    slug: string,
    title: string,
    category: string,
    image: string,
    type: string,
    data: string,
    description: string
}

export interface BlogPostsProps {
    posts: Post[]
}

export default function Blog({ posts }: BlogPostsProps) {
    const { handleCloseModalLogin, modalLogin } = useModalLogin();

    return (
        <>
            <Head>
                <title> Blog | Deivid Breda </title>
            </Head>

            <ModalLogin isOpen={modalLogin} onClose={handleCloseModalLogin} />

            <HeaderLinks />
            <About />
            <Posts posts={posts} />
            <Newsletter />
            <Footer />
        </>
    );
}

export const getStaticProps: GetStaticProps = async () => {
    const query = gql`
        query MyQuery {
            posts(orderBy: createdAt_DESC, first: 6) {
                title
                slug
                category
                image {
                    url
                }
                type
                createdAt
                description
            }
        }
    `

    const data = await client.request(query)

    const posts = data.posts.map(post => {
        return {
            slug: post.slug,
            title: post.title,
            category: post.category,
            image: post.image.url,
            type: post.type,
            data: new Date(post.createdAt).toLocaleDateString('pt-BR', {
                day: '2-digit',
                month: 'long',
                year: 'numeric'
            }),
            description: post.description
        }
    })

    return {
        props: {
            posts,
        },
        revalidate: 60
    }
}