import { Box, Flex, Stack, Text, Link as ChakraLink } from "@chakra-ui/react";
import { MDXRemote } from "next-mdx-remote";
import { FaFacebookF, FaTwitter, FaWhatsapp } from "react-icons/fa";

import styles from './styles.module.scss'

interface ContentProps {
    post: {
        source: { compiledSource: string },
        slug: string,
        title: string,
    }
}

export function Content({ post }: ContentProps) {
    return (
        <Flex maxW="980px" mx="auto" px="20px" w="100%" pos="relative" gap="32px">
            <Stack py="64px" fontSize="20px" gap="12px" color="#1d3452" display={['none', 'none', 'flex']}>
                <ChakraLink
                    href={`https://www.facebook.com/sharer/sharer.php?u=https://portfolio-deividbreda.vercel.app/blog/${post.slug}`} p="12px" border="1px solid #1d3452" _hover={{ bg: '#1d3452', color: '#fff' }} borderRadius="100%"> <FaFacebookF /> </ChakraLink>
                <ChakraLink
                    href={`https://www.twitter.com/intent/tweet?text=${post.title} Acesse em: https://portfolio-deividbreda.vercel.app/blog/${post.slug}`} p="12px" border="1px solid #1d3452" _hover={{ bg: '#1d3452', color: '#fff' }} borderRadius="100%"> <FaTwitter /> </ChakraLink>
                <ChakraLink
                    href={`https://wa.me/?text=${post.title} | Blog | Acesse em: https://portfolio-deividbreda.vercel.app/blog/${post.slug}`} p="12px" border="1px solid #1d3452" _hover={{ bg: '#1d3452', color: '#fff' }} borderRadius="100%"> <FaWhatsapp /> </ChakraLink>
            </Stack>
            <Box maxW="740px" mx="auto" w="100%">
                <Stack p="64px 0" gap="32px">
                    <Flex fontSize="20px" gap="12px" color="#1d3452" justifyContent="center" display={['flex', 'flex', 'none']}>
                        <ChakraLink
                            href={`https://www.facebook.com/sharer/sharer.php?u=https://portfolio-deividbreda.vercel.app/blog/${post.slug}`} p="12px" border="1px solid #1d3452" _hover={{ bg: '#1d3452', color: '#fff' }} borderRadius="100%"> <FaFacebookF /> </ChakraLink>
                        <ChakraLink
                            href={`https://www.twitter.com/intent/tweet?text=${post.title} Acesse em: https://portfolio-deividbreda.vercel.app/blog/${post.slug}`} p="12px" border="1px solid #1d3452" _hover={{ bg: '#1d3452', color: '#fff' }} borderRadius="100%"> <FaTwitter /> </ChakraLink>
                        <ChakraLink
                            href={`https://wa.me/?text=${post.title} | Blog | Acesse em: https://portfolio-deividbreda.vercel.app/blog/${post.slug}`} p="12px" border="1px solid #1d3452" _hover={{ bg: '#1d3452', color: '#fff' }} borderRadius="100%"> <FaWhatsapp /> </ChakraLink>
                    </Flex>

                    <Box className={styles.content}>
                        <MDXRemote {...post.source} />
                    </Box>
                </Stack>
            </Box>
        </Flex>
    );
}