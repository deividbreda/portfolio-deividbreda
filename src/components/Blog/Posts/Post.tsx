import { Box, Flex, Grid, GridItem, Image, Link as ChakraLink, Text } from "@chakra-ui/react";
import Link from "next/link";

export function Post() {
    return (
        <Grid pt="48px" templateColumns='repeat(3, 2fr)' gap="48px">
            <GridItem>
                <Link href="" passHref>
                    <ChakraLink>
                        <Box position="relative" borderRadius="16px" overflow="hidden" _hover={{ transform: 'translateY(-6px)', transition: 'all .3s' }} transition="all .3s">
                            <Image
                                h="210px"
                                w="100%"
                                objectFit="cover"
                                src="https://blog.sesisenai.org.br/wp-content/uploads/2021/09/shutterstock_329205053-scaled.jpg" />
                            <ChakraLink _hover={{ bg: 'gray.100' }} fontSize="12px" bg="gray.100.transparent" display="inline" color="gray.800" p="4px 12px" borderRadius="32px" position="absolute" top="5" left="5"> Carreira </ChakraLink>
                            <Flex height="172px" position="relative" bg="gray.100" color="gray.800" p="22px" flexDirection="column" gap="8px">
                                <Text as="h1" fontWeight="600"> Porque eu comecei a programar? </Text>
                                <Text as="p" color="#595959" fontSize="14px"> Saiba mais sobre como eu adentrei nesse imenso mundo da tecnologia. </Text>
                                <Text as="time" fontSize="12px" opacity="0.6" position="absolute" bottom="5"> 25 de fevereiro de 2022 </Text>
                            </Flex>
                        </Box>
                    </ChakraLink>
                </Link>
            </GridItem>

            <GridItem>
                <Link href="" passHref>
                    <ChakraLink>
                        <Box position="relative" borderRadius="16px" overflow="hidden" _hover={{ transform: 'translateY(-6px)', transition: 'all .3s' }} transition="all .3s">
                            <Image
                                h="210px"
                                w="100%"
                                objectFit="cover"
                                src="https://blog.sesisenai.org.br/wp-content/uploads/2021/09/shutterstock_329205053-scaled.jpg" />
                            <ChakraLink _hover={{ bg: 'gray.100' }} fontSize="12px" bg="gray.100.transparent" display="inline" color="gray.800" p="4px 12px" borderRadius="32px" position="absolute" top="5" left="5"> Carreira </ChakraLink>
                            <Flex height="172px" position="relative" bg="gray.100" color="gray.800" p="22px" flexDirection="column" gap="8px">
                                <Text as="h1" fontWeight="600"> Porque eu comecei a programar? </Text>
                                <Text as="p" color="#595959" fontSize="14px"> Saiba mais sobre como eu adentrei nesse imenso mundo da tecnologia. </Text>
                                <Text as="time" fontSize="12px" opacity="0.6" position="absolute" bottom="5"> 25 de fevereiro de 2022 </Text>
                            </Flex>
                        </Box>
                    </ChakraLink>
                </Link>
            </GridItem>

            <GridItem>
                <Link href="" passHref>
                    <ChakraLink>
                        <Box position="relative" borderRadius="16px" overflow="hidden" _hover={{ transform: 'translateY(-6px)', transition: 'all .3s' }} transition="all .3s">
                            <Image
                                h="210px"
                                w="100%"
                                objectFit="cover"
                                src="https://blog.sesisenai.org.br/wp-content/uploads/2021/09/shutterstock_329205053-scaled.jpg" />
                            <ChakraLink _hover={{ bg: 'gray.100' }} fontSize="12px" bg="gray.100.transparent" display="inline" color="gray.800" p="4px 12px" borderRadius="32px" position="absolute" top="5" left="5"> Carreira </ChakraLink>
                            <Flex height="172px" position="relative" bg="gray.100" color="gray.800" p="22px" flexDirection="column" gap="8px">
                                <Text as="h1" fontWeight="600"> Porque eu comecei a programar? </Text>
                                <Text as="p" color="#595959" fontSize="14px"> Saiba mais sobre como eu adentrei nesse imenso mundo da tecnologia. </Text>
                                <Text as="time" fontSize="12px" opacity="0.6" position="absolute" bottom="5"> 25 de fevereiro de 2022 </Text>
                            </Flex>
                        </Box>
                    </ChakraLink>
                </Link>
            </GridItem>
        </Grid>
    );
}