import { Box, Flex, Link as ChakraLink } from "@chakra-ui/react";
import Link from "next/link";

import { FaLongArrowAltLeft } from "react-icons/fa";
import { BiLogIn } from "react-icons/bi";
import { useLogin } from "../../hooks/useLogin";

export function HeaderLinks() {
    const { handleOpenModalLogin } = useLogin()

    return (
        <Box bg="gray.400">
            <Box w="1170px" mx="auto" px="20px">
                <Flex
                    py="16px"
                    justifyContent="space-between"
                    alignItems="center"
                >
                    <Link href="/" passHref>
                        <ChakraLink
                            color="white"
                            background="gray.700" p="8px 32px"
                            borderRadius="32px"
                            display="flex"
                            alignItems="center"
                            gap="12px"
                            fontSize="12px"
                            _hover={{
                                textDecoration: 'none',
                                transform: 'translateX(-8px)',
                            }}
                        >
                            <FaLongArrowAltLeft fontSize={18} /> Voltar ao portfólio
                        </ChakraLink>
                    </Link>


                    <ChakraLink onClick={handleOpenModalLogin}
                        color="gray.900"
                        background="gray.200" p="8px 32px"
                        borderRadius="32px"
                        display="flex"
                        alignItems="center"
                        gap="12px"
                        fontSize="12px"
                        _hover={{
                            textDecoration: 'none',
                            transform: 'translateX(8px)',
                        }}
                    >
                        ENTRAR <BiLogIn fontSize={18} />
                    </ChakraLink>

                </Flex>
            </Box>
        </Box>
    );
}