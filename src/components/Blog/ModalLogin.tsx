import { Box, Button, Flex, FormControl, Input, Text, Link as ChakraLink, FormLabel, Stack } from "@chakra-ui/react";
import Modal from "react-modal";
import { FormEvent, useState } from "react";
import { signIn } from "next-auth/react";

import { useLogin } from "../../hooks/useLogin";
import { useModalLogin } from "../../hooks/useModalLogin";

import { MdPerson, MdClose } from "react-icons/md";
import { FaGithub, FaFacebook, FaGoogle, FaTwitter } from "react-icons/fa";

interface ModalLoginProps {
    isOpen: boolean,
    onClose: () => void,
}

export function ModalLogin({ isOpen, onClose }: ModalLoginProps) {
    const [nome, setNome] = useState('');

    const { getUser } = useLogin();
    const { handleCloseModalLogin } = useModalLogin();

    function handleEntrar(event: FormEvent) {
        event.preventDefault()

        getUser(nome)
        handleCloseModalLogin()
    }

    return (
        <Modal
            ariaHideApp={false}
            isOpen={isOpen}
            onRequestClose={onClose}
            className="reactModalContent"
            overlayClassName="reactModalOverlay">

            <Text as="a"
                pos="absolute"
                top="20px"
                right="20px"
                bg="none"
                color="#0b1f3a"
                fontSize="32px"
                transition="all .3s"
                _hover={{ bg: 'none', color: 'red', transition: 'all .3s' }}
                onClick={onClose}> <MdClose />
            </Text>

            <Flex gap={['12px', '32px']} alignItems="center" justifyContent="center" flexDirection="column">
                <Box>
                    <Text textAlign="center" fontWeight="600" fontSize={['24px', '32px']} color="gray.700"> Login </Text>
                </Box>

                <Box w="100%" as="form" onSubmit={handleEntrar}>
                    <FormControl isRequired>
                        <Stack gap="16px">                 
                            <Stack>
                                <Button
                                    bg="#e94235"
                                    leftIcon={<FaGoogle />}
                                    transition="all .3s"
                                    onClick={() => signIn('google')}
                                    _hover={{ filter: 'brightness(0.6)', transition: 'all .3s' }}> Google
                                </Button>

                                <Button
                                    bg="#4267b2"
                                    leftIcon={<FaTwitter />}
                                    transition="all .3s"
                                    onClick={() => signIn('twitter')}
                                    _hover={{ filter: 'brightness(0.6)', transition: 'all .3s' }}> Twitter
                                </Button>

                                <Button
                                    bg="#161b22"
                                    leftIcon={<FaGithub />}
                                    transition="all .3s"
                                    onClick={() => signIn('github')}
                                    _hover={{ filter: 'brightness(0.6)', transition: 'all .3s' }}> Github
                                </Button>
                            </Stack>

                            <Box>
                                <Text
                                    color="#7d7d7d"
                                    textAlign="center"
                                    pos="relative"
                                    _after={{ content: '""', pos: 'absolute', w: '100%', h: '2px', top: 'calc(50% - 1px)', right: '0', bg: '#c2c2c2' }}>
                                    <Text
                                        as="span"
                                        zIndex="2"
                                        bg="#ffffff"
                                        pos="relative"
                                        px={['12px', '18px']}
                                        fontSize={['12px', '15px']}> ou acesse sem login
                                    </Text>
                                </Text>
                            </Box>

                            <Stack gap="8px">
                                <Box>
                                    <FormLabel color="#1f57a3" fontWeight="600" fontSize={['16px', '20px']}> Nome </FormLabel>
                                    <Flex position="relative" borderRadius="6px">
                                        <Text position="absolute" left="12px" zIndex="2" top="9px" fontSize="22px" color="gray.800"> <MdPerson /> </Text>
                                        <Input fontSize={['14px', '16px']} pl="44px" color="gray.800" bg="gray.100" placeholder="Nome..." onChange={(e) => setNome(e.target.value)} />
                                    </Flex>
                                </Box>

                                <Flex gap="16px">
                                    <Button w="100%" type="submit" bg="gray.700" _hover={{ transform: 'scale(1.04)' }}> ENTRAR </Button>
                                </Flex>
                            </Stack>
                        </Stack>
                    </FormControl>
                </Box>
            </Flex>
        </Modal>
    );
}