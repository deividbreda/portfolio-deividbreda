import { Box, Button, Flex, Grid, GridItem, Image, Link as ChakraLink, Text } from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useSearch } from "../../../hooks/useSearch";

interface BlogStarProps {
    post : {
        slug: string,
        title: string,
        category: string,
        image: string,
        type: string,
        data: string,
        description: string
    }
}

export function Featured({ post }: BlogStarProps) {
    const router = useRouter();

    const { searchResult } = useSearch();
    
    function handleSearchCategory(category: string){
        searchResult(category)
        router.push(`/blog/pesquisa`)
    }

    return (

        <GridItem pos="relative" data-aos="flip-up">
            <Link href={`/blog/${post.slug}`} passHref>
                <ChakraLink>
                    <Flex
                        _hover={{ transform: 'translateY(-6px)', transition: 'all .3s' }}
                        transition="all .3s" borderRadius="16px"
                        overflow="hidden"
                    >
                        <Text pos="absolute" top="10px" right="16px" zIndex="2" fontSize="32px" textShadow="0px 0px 32px #ffa800"> ⭐ </Text>
                        <Image
                            h="200px"
                            w="100%"
                            objectFit="cover"
                            src={post.image}
                        />

                        <Flex borderRadius="16px" bg="black.transparent" position="absolute" top="0" bottom="0" right="0" left="0">
                            <Box p="32px">
                                <Text onClick={() => handleSearchCategory(post.category)} 
                                    _hover={{ bg: 'gray.100', transition: 'all .3s' }} transition="all .3s" 
                                    fontSize="12px" bg="gray.100.transparent" display="inline" color="gray.800" 
                                    p="4px 12px" borderRadius="32px"> 
                                        {post.category}
                                </Text>
                                <Text mt="16px" fontSize={['16px', '22px']}> {post.title} </Text>
                                <Text color="gray.100.transparent" fontSize="12px" as="time" position="absolute" bottom="10"> {post.data} </Text>
                            </Box>
                        </Flex>
                    </Flex>
                </ChakraLink>
            </Link>
        </GridItem>

    );
}