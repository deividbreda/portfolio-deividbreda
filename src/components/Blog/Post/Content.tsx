import { Box, Stack, Text } from "@chakra-ui/react";
import { MDXRemote } from "next-mdx-remote";
import { PostProps } from "../../../pages/blog/[slug]";

import styles from './styles.module.scss'

export function Content({ post }: PostProps) {
    return (
        <Box maxW="740px" mx="auto" px="20px" w="100%">
            <Stack p="64px 0">
                <Text

                    lineHeight={['28px', '36px']}
                    fontSize={['14px', '16px']}
                    color="#555"
                    textAlign="justify"
                >

                </Text>
                <Box className={styles.content}>
                    <MDXRemote {...post.source} />
                </Box>
            </Stack>
        </Box>
    );
}