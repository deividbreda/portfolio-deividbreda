import { Box, Flex, Grid, GridItem, Image, Link as ChakraLink, Text } from "@chakra-ui/react";
import Link from "next/link";
import { Featured } from "./Posts/Featured";
import { Post } from "./Posts/Post";

export function Posts() {
    return (
        <>
            <Box w="1170px" mx="auto" px="20px">
                <Box py="81px">
                    <Featured />    
                    <Post />
                </Box>
            </Box>
        </>
    );
}