import { gql } from "graphql-request";
import { GetStaticProps } from "next";
import Head from "next/head";
import { BlogPostsProps } from ".";
import { Footer } from "../../components/Blog/Footer";
import { HeaderLinks } from "../../components/Blog/HeaderLinks";
import { PostsList } from "../../components/Blog/PostsList";
import { client } from "../../services/graphql";

export default function Posts({ posts }: BlogPostsProps) {
    return (
        <>
            <Head>
                <title> Posts | Deivid Breda </title>
            </Head>

            <HeaderLinks />
            <PostsList posts={posts} />
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
            posts
        },
        revalidate: 60
    }
}