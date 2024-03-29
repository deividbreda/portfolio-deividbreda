import { Box, Flex, Grid, GridItem, Image, Link as ChakraLink, Stack, Text } from "@chakra-ui/react";
import Link from "next/link";

import { FaChevronLeft } from "react-icons/fa";
import { useSearch } from "../../hooks/useSearch";
import { BlogPostsProps } from "../../pages/blog";

import styles from './Posts/styles.module.scss'

export function SearchPost({ posts }: BlogPostsProps) {
    const { pesquisa } = useSearch();

    return (
        <>
            <Box bgGradient="linear(to-r, gray.900, gray.700)">
                <Box maxWidth="740px" mx="auto" px="20px" w="100%">
                    <Flex gap="16px" h="280px" alignItems="center" justifyContent="center" flexDir={['column', 'column', 'row']}>
                        <Link href="/blog" passHref>
                            <ChakraLink pos={['unset', 'unset', 'absolute']} left="100px" fontSize="52px" _hover={{ transform: 'translateX(-8px)' }}>
                                <FaChevronLeft />
                            </ChakraLink>
                        </Link>
                        <Stack alignItems="center" gap="12px" data-aos="zoom-in">
                            <Text display="flex" flexDir="column" textAlign="center" fontSize={['14px','16px', '20px']}> 
                                Você pesquisou por <Text css={{"&:first-letter": {textTransform: "uppercase",},}} as="strong" fontSize={['20px','32px', '48px']} line-height="1"> {pesquisa} </Text>  
                            </Text>
                            <Text> {posts.length} {posts.length > 1 ? 'posts encontrados' : 'post encontrado' } </Text>
                        </Stack>
                    </Flex>
                </Box>
            </Box>

            <Box maxWidth="1170px" mx="auto" px="20px" w="100%">
                <Grid py="64px" templateColumns={['repeat(1, 2fr)', 'repeat(1, 2fr)', 'repeat(4, 2fr)']} gap="28px">
                    {posts.map(post => (
                        <GridItem key={post.slug} data-aos="fade-up">
                            <Link href={`/blog/${post.slug}`} passHref>
                                <ChakraLink>
                                    <Box
                                        position="relative" borderRadius="16px" overflow="hidden"
                                        _hover={{ transform: 'translateY(-6px)', transition: 'all .3s' }}
                                        transition="all .3s"
                                    >
                                        <Image
                                            h="160px"
                                            w="100%"
                                            objectFit="cover"
                                            src={post.image} />
                                        <Text
                                            _hover={{ bg: 'gray.100', transition: 'all .3s' }}
                                            transition="all .3s" fontSize="12px"
                                            bg="gray.100.transparent" display="inline" color="gray.800"
                                            p="4px 12px" borderRadius="32px" position="absolute"
                                            top="5" left="5"> {post.category} </Text>
                                        <Flex
                                            height="158px" position="relative"
                                            bg="gray.100" color="gray.800" p="22px"
                                            flexDirection="column" gap="8px"
                                        >
                                            <Text as="h1" fontWeight="600" fontSize="15px"> {post.title} </Text>
                                            <Text as="p" color="#595959" fontSize={['12px', '14px']} className={styles.description}> {post.description} </Text>
                                            <Text as="time" fontSize="12px" opacity="0.6" position="absolute" bottom="5"> {post.data} </Text>
                                        </Flex>
                                    </Box>
                                </ChakraLink>
                            </Link>
                        </GridItem>
                    ))}
                </Grid>
            </Box>
        </>
    );
}