import { Box, Flex, Stack, Text, Link as ChakraLink } from "@chakra-ui/react";
import Link from "next/link";
import { FaInstagram, FaLinkedin, FaUserTie, FaWhatsapp } from "react-icons/fa";

export function Footer() {
    return (
        <Box bg="gray.800" py="64px">
            <Box maxW="540px" mx="auto" px="20px" w="100%">
                <Stack alignItems="center" justifyContent="center" gap="12px">
                    <Flex gap="20px" fontSize="22px" color="#98a4b2">
                        <Link href="/" passHref>
                            <ChakraLink _hover={{ transform: 'translateY(-4px)', color: '#fff' }}>
                                <FaUserTie />
                            </ChakraLink>
                        </Link>

                        <Link href="https://www.instagram.com/deividbrida/" passHref>
                            <ChakraLink _hover={{ transform: 'translateY(-4px)', color: '#fff' }}>
                                <FaInstagram />
                            </ChakraLink>
                        </Link>

                        <Link href="https://wa.me/5542991062425" passHref>
                            <ChakraLink _hover={{ transform: 'translateY(-4px)', color: '#fff' }}>
                                <FaWhatsapp />
                            </ChakraLink>
                        </Link>

                        <Link href="https://www.linkedin.com/in/deivid-breda-9b2507136/" passHref>
                            <ChakraLink _hover={{ transform: 'translateY(-4px)', color: '#fff' }}>
                                <FaLinkedin />
                            </ChakraLink>
                        </Link>
                    </Flex>

                    <Flex gap="16px" flexDir={['column','row']} textAlign="center">
                        <Link href="/blog/terms-of-service" passHref>
                            <ChakraLink
                                fontSize="12px"
                                bg="#141924"
                                p="4px 12px"
                                borderRadius="32px"
                                color="#647180"
                                _hover={{ transform: 'scale(1.05)', textDecor: 'none', color: '#fff' }}
                            >
                                Termos de Serviços
                            </ChakraLink>
                        </Link>

                        <Link href="/blog/privacy-policy" passHref>
                            <ChakraLink
                                fontSize="12px"
                                bg="#141924"
                                p="4px 12px"
                                borderRadius="32px"
                                color="#647180"
                                _hover={{ transform: 'scale(1.05)', textDecor: 'none', color: '#fff' }}
                            >
                                Política de Privacidade
                            </ChakraLink>
                        </Link>
                    </Flex>
                    <Text as="span" fontSize="12px" color="#98a4b2"> Meu Blog • Desenvolvido por eu mesmo! 😜 </Text>
                </Stack>
            </Box>
        </Box>
    );
}