import { Box, Flex, Grid, GridItem, Image, Link as ChakraLink, Text } from "@chakra-ui/react";
import Link from "next/link";

export function Featured() {
    return (
        <Grid templateColumns='repeat(2, 2fr)' gap="48px">
            <GridItem>
                <Link href="" passHref>
                    <ChakraLink>
                        <Flex _hover={{ transform: 'translateY(-6px)', transition: 'all .3s' }} transition="all .3s" position="relative" borderRadius="16px" overflow="hidden">
                            <Image
                                h="200px"
                                w="100%"
                                objectFit="cover"
                                src="https://blog.sesisenai.org.br/wp-content/uploads/2021/09/shutterstock_329205053-scaled.jpg" />
                            <Flex bg="black.transparent" position="absolute" top="0" bottom="0" right="0" left="0">
                                <Box p="32px" position="relative">
                                    <ChakraLink _hover={{ bg: 'gray.100' }} fontSize="12px" bg="gray.100.transparent" display="inline" color="gray.800" p="4px 12px" borderRadius="32px"> Carreira </ChakraLink>
                                    <Text mt="16px" fontSize="22px"> Porque eu comecei a programar? </Text>
                                    <Text color="gray.100.transparent" fontSize="12px" as="time" position="absolute" bottom="10"> 25 de fevereiro de 2022 </Text>
                                </Box>
                            </Flex>
                        </Flex>
                    </ChakraLink>
                </Link>
            </GridItem>

            <GridItem>
                <Link href="" passHref>
                    <ChakraLink>
                        <Flex _hover={{ transform: 'translateY(-6px)', transition: 'all .3s' }} transition="all .3s" position="relative" borderRadius="16px" overflow="hidden">
                            <Image
                                h="200px"
                                w="100%"
                                objectFit="cover"
                                src="https://blog.sesisenai.org.br/wp-content/uploads/2021/09/shutterstock_329205053-scaled.jpg" />
                            <Flex bg="black.transparent" position="absolute" top="0" bottom="0" right="0" left="0">
                                <Box p="32px" position="relative">
                                    <ChakraLink _hover={{ bg: 'gray.100' }} fontSize="12px" bg="gray.100.transparent" display="inline" color="gray.800" p="4px 12px" borderRadius="32px"> Carreira </ChakraLink>
                                    <Text mt="16px" fontSize="22px"> Porque eu comecei a programar? </Text>
                                    <Text color="gray.100.transparent" fontSize="12px" as="time" position="absolute" bottom="10"> 25 de fevereiro de 2022 </Text>
                                </Box>
                            </Flex>
                        </Flex>
                    </ChakraLink>
                </Link>
            </GridItem>
        </Grid>
    );
}