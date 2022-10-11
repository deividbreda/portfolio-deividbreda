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
                                <Text color="#555" textAlign="center" pos="relative" _after={{ content: '""', pos: 'absolute', w: '100%', h: '2px', top: 'calc(50% - 1px)', right: '0', bg: '#c2c2c2' }}> <Text as="span" zIndex="2" bg="#ffffff" pos="relative" px={['12px','18px']} fontSize={['12px','16px']}> Ou acesse sem Login </Text> </Text>
                            </Box>

                            <Box>
                                <FormLabel color="#1f57a3" fontWeight="600" fontSize={['16px', '22px']}> Nome </FormLabel>
                                <Flex position="relative" borderRadius="6px">
                                    <Text position="absolute" left="12px" zIndex="2" top="9px" fontSize="22px" color="gray.800"> <MdPerson /> </Text>
                                    <Input fontSize={['14px', '16px']} pl="44px" color="gray.800" bg="gray.100" placeholder="Nome..." onChange={(e) => setNome(e.target.value)}/>
                                </Flex>
                            </Box>

                            
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