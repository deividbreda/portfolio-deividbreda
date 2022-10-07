import { gql } from "graphql-request";
import { GetStaticProps } from "next";
import Head from "next/head";
import { BlogPostsProps } from ".";
import { Footer } from "../../components/Blog/Footer";
import { HeaderLinks } from "../../components/Blog/HeaderLinks";
import { useSearch } from "../../hooks/useSearch";
import { client } from "../../services/graphql";
import { SearchPost } from "../../components/Blog/SearchPost";
import { Box } from "@chakra-ui/react";

export default function Pesquisa({ posts }: BlogPostsProps) {
    const { pesquisa } = useSearch();

    const filtroPesquisa = posts.filter((post) => post.title.toLowerCase().includes(pesquisa))

    return (
        <>
            <Head>
                <title> Pesquisa | Blog | Deivid Breda </title>
            </Head>

            <HeaderLinks />
            <SearchPost posts={filtroPesquisa} />
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
        }
    }
}