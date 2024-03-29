import { Avatar, Box, Button, Flex, Link as ChakraLink, Text } from "@chakra-ui/react";
import Link from "next/link";

import { FaLongArrowAltLeft } from "react-icons/fa";
import { MdLogout, MdPerson } from "react-icons/md";

import { BiLogIn } from "react-icons/bi";
import { useModalLogin } from "../../hooks/useModalLogin";
import { useLogin } from "../../hooks/useLogin";
import { signOut, useSession } from "next-auth/react";

export function HeaderLinks() {
    const { handleOpenModalLogin } = useModalLogin()
    const { user, logoutUser } = useLogin();
    const { data: session } = useSession();

    function handleLogout() {
        logoutUser()
    }

    return (
        <Box bg="gray.400">
            <Box maxW="1170px" mx="auto" px="20px" w="100%">
                <Flex
                    py="16px"
                    justifyContent="space-between"
                    alignItems="center"
                    flexDir={['column', 'row']}
                    gap="16px"
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

                    {(user || session) ? (
                        (user) ?
                            <Flex alignItems="center" gap="20px">
                                <Flex display="flex" alignItems="center" gap="8px">
                                    <Avatar size="sm" name={user} />
                                    <Text as="strong"> {user} </Text>
                                </Flex>
                                <Button
                                    onClick={handleLogout}
                                    display="flex" gap="8px" p="6px 12px"
                                    h="unset" color="#091a31"
                                    fontSize="12px"
                                    borderRadius="32px"
                                    _hover={{ transform: 'translateX(8px)', color: 'red' }}
                                >
                                    Sair <MdLogout />
                                </Button>
                            </Flex>
                        :
                            <Flex alignItems="center" gap="20px">
                                <Flex display="flex" alignItems="center" gap="8px">
                                    <Avatar size="sm" src={session.user.image} />
                                    <Text as="strong"> {session.user.name} </Text>
                                </Flex>
                                <Button
                                    onClick={() => signOut()}
                                    display="flex" gap="8px" p="6px 12px"
                                    h="unset" color="#091a31"
                                    fontSize="12px"
                                    borderRadius="32px"
                                    _hover={{ transform: 'translateX(8px)', color: 'red' }}
                                >
                                    Sair <MdLogout />
                                </Button>
                            </Flex>
                    ) : (
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
                            Identifique-se <BiLogIn fontSize={18} />
                        </ChakraLink>

                    )}
                </Flex>
            </Box>
        </Box>
    );
}