import { Box, Grid, Stack, Text } from "@chakra-ui/react";
import { BlogPostsProps } from "../../pages/blog";

import { Featured } from "./Posts/Featured";
import { Post } from "./Posts/Post";

export function Posts({ posts }: BlogPostsProps) {
    return (
        <>
            <Box maxWidth="1170px" mx="auto" px="20px" w="100%">
                <Stack gap="64px" py="81px">
                    <Grid templateColumns={['repeat(1, 2fr)', 'repeat(1, 2fr)', 'repeat(2, 2fr)']} gap="48px">
                        {posts.map(post => {
                            if (post.type === 'star') {
                                return (
                                    <Featured key={post.slug} post={post} />
                                )
                            }
                        })}
                    </Grid>
                    <Post posts={posts} />
                </Stack>
            </Box>
        </>
    );
}