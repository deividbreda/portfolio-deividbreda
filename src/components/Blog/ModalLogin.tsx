import { Box, Button, Flex, FormControl, Input, Text, Link as ChakraLink } from "@chakra-ui/react";
import Link from "next/link";
import Modal from "react-modal";

interface ModalLoginProps {
    isOpen: boolean,
    onClose: () => void,
}

export function ModalLogin({ isOpen, onClose }: ModalLoginProps) {
    return (
        <Modal 
            isOpen={isOpen} 
            onRequestClose={onClose} 
            className="reactModalContent"
            overlayClassName="reactModalOverlay"
        >
            <Flex gap="32px" alignItems="center" justifyContent="center" flexDirection="column">
                <Box>
                    <Text textAlign="center" fontWeight="600" fontSize="32px" color="gray.700"> Login </Text>
                    <Text color="black" mt="8px"> Entre com e-mail e senha ou cadastre-se. </Text>
                </Box>

                <FormControl display="flex" gap="32px" flexDirection="column">
                    <Flex gap="12px" flexDirection="column">
                        <Input outline="0" color="gray.800" bg="gray.100" placeholder="E-mail" />
                        <Input color="gray.800" bg="gray.100" placeholder="Senha" />
                    </Flex>
                        
                    <Flex gap="16px">
                        <Button w="100%" type="submit" bg="gray.700" _hover={{  }}> ENTRAR </Button>
                    </Flex>
                </FormControl>

                <Text color="gray.400" fontSize="14px"> Ainda não tem uma conta? <Link href=""> Cadastre-se </Link></Text>
            
                
            </Flex>

        </Modal>
    );
}