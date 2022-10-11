import { Box, Stack, Text } from "@chakra-ui/react";
import { MDXRemote } from "next-mdx-remote";

import styles from './styles.module.scss'

interface ContentProps {
    post: {
        source: { compiledSource: string },
    }
}

export function Content({ post }: ContentProps) {
    return (
        <Box maxW="740px" mx="auto" px="20px" w="100%">
            <Stack p="64px 0">
                <Box className={styles.content}>
                    <MDXRemote {...post.source} />
                </Box>
            </Stack>
        </Box>
    );
}