import { Box, Button, Flex, Input, Text } from "@chakra-ui/react";

import { FaSearch } from "react-icons/fa";

export function About() {
    return(
        <Box bgGradient="linear(to-r, gray.900, gray.700)">
                <Box maxW="1170px" mx="auto" px="20px" w="100%">
                    <Flex h="420px" maxW="540px" mx="auto" alignItems="center" justifyContent="center" flexDirection="column">
                        <Text> Olá, seja bem vindo 👋 </Text>
                        <Text fontSize={['50px','72px']} fontWeight="bold"> Meu Blog </Text>
                        <Flex as="form" w="100%" bg="gray.100" borderRadius="32px" alignItems="center">
                            <Input pl="22px" variant='unstyled' w="94%" color="gray.900" borderRadius="32px" placeholder="Pesquisar um post..." />
                            <Button bg="transparent" variant='unstyled' _hover={{ }} type="submit" color="gray.800"> <FaSearch /> </Button>
                        </Flex>
                        <Text as="h1" color="gray.100" align="center" fontSize={['10px','12px']} mt="32px"> Esse blog foi desenvolvido utilizando o CMS HyGraph, consumindo os dados da API com GraphQL </Text>
                    </Flex>
                </Box>
            </Box>
    );
}