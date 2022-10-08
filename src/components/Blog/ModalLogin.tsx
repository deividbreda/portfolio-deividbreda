import { Box, Button, Flex, FormControl, Input, Text, Link as ChakraLink, FormLabel, Stack, FormHelperText, Checkbox } from "@chakra-ui/react";
import Modal from "react-modal";

import { MdEmail, MdPerson, MdClose } from "react-icons/md";
import { FormEvent, useState } from "react";

import { useLogin } from "../../hooks/useLogin";
import { useModalLogin } from "../../hooks/useModalLogin";

interface ModalLoginProps {
    isOpen: boolean,
    onClose: () => void,
}

export function ModalLogin({ isOpen, onClose }: ModalLoginProps) {
    const [ email, setEmail ] = useState('');
    const [ nome, setNome ] = useState('');

    const { getUser } = useLogin();
    const { handleCloseModalLogin } = useModalLogin();

    function handleEntrar(event: FormEvent){
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
            overlayClassName="reactModalOverlay"
        >
            <Text as="a" 
                pos="absolute"
                top="20px"
                right="20px"
                bg="none"
                color="#0b1f3a"
                fontSize="32px"
                _hover={{ bg: 'none' }}
                onClick={onClose}
            >
                <MdClose />
            </Text>
            <Flex gap={['12px' ,'32px']} alignItems="center" justifyContent="center" flexDirection="column">
                <Box>
                    <Text textAlign="center" fontWeight="600" fontSize={['24px', '32px']} color="gray.700"> Identifique-se </Text>     
                </Box>

                <Box as="form" onSubmit={handleEntrar}>
                    <FormControl display="flex" gap="32px" flexDirection="column" isRequired>
                        <Stack gap="12px">
                            <Box>
                                <FormLabel color="#1f57a3" fontWeight="600" fontSize={['16px', '22px']}> E-mail </FormLabel>
                                <Flex position="relative" borderRadius="6px">
                                    <Text position="absolute" left="12px" zIndex="2" top="9px" fontSize="22px" color="gray.800"> <MdEmail /> </Text>
                                    <Input fontSize={['14px', '16px']} pl="44px" color="gray.800" bg="gray.100" placeholder="E-mail..." onChange={(e) => setEmail(e.target.value)} />
                                </Flex>
                                <FormHelperText fontSize={['11', '14']}> Insira um endereço de e-mail válido. </FormHelperText>
                            </Box>

                            <Box>
                                <FormLabel color="#1f57a3" fontWeight="600" fontSize={['16px', '22px']}> Nome </FormLabel>
                                <Flex position="relative" borderRadius="6px">
                                    <Text position="absolute" left="12px" zIndex="2" top="9px" fontSize="22px" color="gray.800"> <MdPerson /> </Text>
                                    <Input fontSize={['14px', '16px']} pl="44px" color="gray.800" bg="gray.100" placeholder="Nome..." onChange={(e) => setNome(e.target.value)}/>
                                </Flex>
                            </Box>

                            <Checkbox defaultChecked color="#0b1f3a" size={['sm', 'md']}> Quer receber meus posts por e-mail? </Checkbox>
                        </Stack>
                            
                        <Flex gap="16px">
                            <Button w="100%" type="submit" bg="gray.700" _hover={{  }}> ENTRAR </Button>
                        </Flex>
                    </FormControl>
                </Box>
            </Flex>
        </Modal>
    );
}