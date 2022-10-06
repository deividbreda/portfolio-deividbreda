import { Box, Flex, Image, Stack, Text } from "@chakra-ui/react";
import { PostProps } from "../../../pages/blog/[slug]";

export function Author({ post }: PostProps) {
    return (
        <Stack bg="gray.100" py="48px">
            <Box maxW="740px" mx="auto" px="20px" w="100%">
                <Flex flexDir={['column','row']} gap={['12px','0']} alignItems="center" justifyContent="center">
                    <Text color="gray.800" transform={['none','rotate(270deg)']} textTransform="uppercase" fontSize="22px" fontWeight="bold"> Autor </Text>
                    <Flex alignItems="center" justifyContent="center" gap={['16px','32px']}>
                        <Image w={['72px','100px']} borderRadius="100%" src={post.avatar} />
                        <Stack color="gray.800">
                            <Text fontWeight="600"> {post.author} </Text>
                            <Text> {post.bio} </Text>
                        </Stack>
                    </Flex>
                </Flex>
            </Box>
        </Stack>
    );
}