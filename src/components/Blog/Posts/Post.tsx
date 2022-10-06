import { Box, Flex, Grid, GridItem, Image, Link as ChakraLink, Text } from "@chakra-ui/react";
import Link from "next/link";

import { BlogPostsProps } from "../../../pages/blog";

export function Post({ posts }: BlogPostsProps) {
    return (
        <Grid pt="48px" templateColumns={['repeat(1, 2fr)', 'repeat(1, 2fr)', 'repeat(3, 2fr)']} gap="48px">
            {posts.map(post => (
                <GridItem key={post.slug}>
                    <Link href={`blog/${post.slug}`} passHref>
                        <ChakraLink>
                            <Box
                                position="relative" borderRadius="16px" overflow="hidden"
                                _hover={{ transform: 'translateY(-6px)', transition: 'all .3s' }}
                                transition="all .3s"
                            >
                                <Image
                                    h="210px"
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
                                    height="172px" position="relative"
                                    bg="gray.100" color="gray.800" p="22px"
                                    flexDirection="column" gap="8px"
                                >
                                    <Text as="h1" fontWeight="600" fontSize="15px"> {post.title} </Text>
                                    <Text as="p" color="#595959" fontSize={['12px', '14px']}> {post.description} </Text>
                                    <Text as="time" fontSize="12px" opacity="0.6" position="absolute" bottom="5"> {post.data} </Text>
                                </Flex>
                            </Box>
                        </ChakraLink>
                    </Link>
                </GridItem>
            ))}
        </Grid>
    );
}