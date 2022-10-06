import { GetStaticPaths, GetStaticProps } from "next";
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

import { serialize } from 'next-mdx-remote/serialize'

import { gql } from "graphql-request";
import { client } from "../../services/graphql";

export interface PostProps {
    post: {
        slug: string,
        title: string,
        image: string
        category: string,
        description: string,
        source: { compiledSource: string },
        data: string

        author: string,
        bio: string,
        avatar: string
    }
}

export default function Post({ post }: PostProps) {
    const { handleCloseModalLogin, modalLogin } = useLogin();

    return (
        <>
            <Head>
                <title> {post.title} | Deivid Breda </title>
            </Head>

            <ModalLogin isOpen={modalLogin} onClose={handleCloseModalLogin} />

            <HeaderLinks />
            <PostDetails post={post} />
            <Content post={post} />
            <Author post={post} />
            <Comments />
            <Newsletter />
            <Footer />
        </>
    );
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const slug = params.slug as string;

    const query = gql`
        query Event($slug: String!) {
            post(where: { slug: $slug }) {
                content {
                    html
                }
                slug
                title
                image {
                    url
                }
                category
                description
                createdAt
                author {
                    avatar {
                        url
                    }
                    bio
                    name
                }
            }
        } 
    `;

    const data = await client.request(query, { slug })

    if (!data.post) {
        return {
            redirect: {
                destination: '/notfound',
                permanent: false,
            }
        }
    }

    const source = await serialize(data.post.content.html)

    const post = {
        slug,
        title: data.post.title,
        category: data.post.category,
        image: data.post.image.url,
        description: data.post.description,
        data: new Date(data.post.createdAt).toLocaleDateString('pt-BR', {
            day: '2-digit',
            month: 'long',
            year: 'numeric'
        }),
        author: data.post.author.name,
        bio: data.post.author.bio,
        avatar: data.post.author.avatar.url
    }

    return {
        props: {
            post: { ...post, source }
        },
        revalidate: 60 * 60 * 60
    }
}

export const getStaticPaths: GetStaticPaths = async () => {
    const query = gql`
        query Events {
            posts {
                slug       
            }
        }
    `;

    const data = await client.request(query)

    return {
        paths: data.posts.map((post) => ({ params: { slug: post.slug } })),
        fallback: "blocking",
    }
}