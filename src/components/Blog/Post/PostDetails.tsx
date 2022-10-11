import { Box, Flex, Image, Stack, Link as ChakraLink, Text } from "@chakra-ui/react";
import Link from "next/link";

import { FaChevronLeft } from "react-icons/fa";

export interface PostDetailsProps {
    post: {
        title: string,
        image: string
        category: string,
        description: string,
        data: string
    }
}

export function PostDetails({ post }: PostDetailsProps) {
    return (
        <Box position="relative">
            <Image
                h="380px"
                w="100%"
                objectFit="cover"
                src={post.image} />
            <Box>
                <Flex
                    position="absolute"
                    bg="#00000095"
                    top="0"
                    bottom="0"
                    right="0"
                    left="0"
                    alignItems="center"
                    justifyContent="center"
                >
                    <Stack maxW="740px" mx="auto" px="20px" w="100%">
                        <Link href="/blog" passHref>
                            <ChakraLink mb="28px" fontSize="32px" w="32px" _hover={{ transform: 'translateX(-8px)' }}>
                                <FaChevronLeft />
                            </ChakraLink>
                        </Link>
                        <Link href="blog/pesquisa">
                            <ChakraLink>
                                <Text as="span"
                                    bg="gray.100"
                                    color="gray.800"
                                    py="6px"
                                    px="16px"
                                    borderRadius="32px"
                                    opacity="0.6"
                                    fontSize="12px"
                                    transition="all .3s"
                                    _hover={{
                                        opacity: '1',
                                        transition: 'all .3s'
                                    }}
                                >
                                    {post.category}
                                </Text>
                            </ChakraLink>
                        </Link>
                        <Text as="strong" fontSize={['32px', '48px']} color="white"> {post.title} </Text>
                        <Text as="span"> {post.description} </Text>
                        <Text as="time" pt="32px" opacity="0.6" fontSize="12px"> {post.data} </Text>
                    </Stack>
                </Flex>
            </Box>
        </Box>
    );
}