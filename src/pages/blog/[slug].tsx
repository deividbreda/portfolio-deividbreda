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
import { useModalLogin } from "../../hooks/useModalLogin";

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
    },

    comments: Comment[]
}

type Comment = {
    idcomment: string,
    name: string,
    commentDesc: string,
    data: string
}

export default function Post({ post, comments }: PostProps) {
    const { handleCloseModalLogin, modalLogin } = useModalLogin();

    return (
        <>
            <Head>
                <title> {post.title} | Deivid Breda </title>
            </Head>

            <ModalLogin isOpen={modalLogin} onClose={handleCloseModalLogin} />

            <HeaderLinks />
            <PostDetails post={post} comments={comments} />
            <Content post={post} comments={comments} />
            <Author post={post} comments={comments} />
            <Comments post={post} comments={comments} />
            <Newsletter />
            <Footer />
        </>
    );
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const slug = params.slug as string;

    const queryComment = gql`
        query MyQuery($slug: String!) {
            comments(where: {post: {slug: $slug}}, orderBy: publishedAt_DESC, stage: DRAFT) {
                name
                commentDescription
                createdAt
                id
            }
        }
    `

    const query = gql`
        query Post($slug: String!) {
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

    const dataComments = await client.request(queryComment, { slug })
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

    const comments = dataComments.comments.map(comment => {
        return {
            name: comment.name,
            commentDesc: comment.commentDescription,
            data:  new Date(comment.createdAt).toLocaleDateString('pt-BR', {
                day: '2-digit',
                month: 'long',
                year: 'numeric'
            }),
            idcomment: comment.id
        }
    }) 

    console.log(comments)
    
    return {
        props: {
            post: { ...post, source },
            comments
        },
    }
}

export const getStaticPaths: GetStaticPaths = async () => {
    const query = gql`
        query Posts {
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