import { Box, Button, Flex, Input, Text } from "@chakra-ui/react";
import { FormEvent, useState } from "react";
import { useSearch } from "../../hooks/useSearch";
import { useRouter } from "next/router";
import { destroyCookie } from 'nookies'

import { FaSearch } from "react-icons/fa";

export function About() {
    const router = useRouter();

    const { searchResult } = useSearch();

    const [pesquisa, setPesquisa] = useState('')

    function handleSearch(event: FormEvent) {
        event.preventDefault()

        destroyCookie(undefined, 'search.value')

        searchResult(pesquisa)

        router.push(`/blog/pesquisa`)
    }

    return (
        <Box bgGradient="linear(to-r, gray.900, gray.700)">
            <Box maxW="1170px" mx="auto" px="20px" w="100%">
                <Flex data-aos="zoom-in" h="420px" maxW="540px" mx="auto" alignItems="center" justifyContent="center" flexDirection="column">
                    <Text display="flex" alignItems="center" gap="6px" > Olá, seja bem vindo <Text as="b" fontSize="32px"> 👋 </Text> </Text>
                    <Text
                        as="strong"
                        fontSize={['50px', '72px']}
                        fontWeight="bold"
                        pos="relative"
                        _after={{ content: '""', h: '24px', w: '100%', pos: 'absolute', zIndex: '1', bg: '#1d3452', right: '0', bottom: '16px' }}
                    >
                        <Text as="span" pos="relative" zIndex="2"> Meu Blog </Text>
                    </Text>
                    <Flex as="form" onSubmit={handleSearch} w="100%" bg="gray.100" borderRadius="32px" alignItems="center">
                        <Input
                            pl="22px" variant='unstyled' w="94%"
                            color="gray.900" borderRadius="32px"
                            placeholder="Pesquisar um post..."
                            onChange={(e) => setPesquisa(e.target.value)}
                        />
                        <Button bg="transparent" variant='unstyled' _hover={{}} type="submit" color="gray.800"> <FaSearch /> </Button>
                    </Flex>
                    <Text as="h1" color="gray.100" align="center" fontSize={['10px', '12px']} mt="32px"> Esse blog foi desenvolvido utilizando CMS HyGraph, consumindo sua API com GraphQL. </Text>
                </Flex>
            </Box>
        </Box>
    );
}