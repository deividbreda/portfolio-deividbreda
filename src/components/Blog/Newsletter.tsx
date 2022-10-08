import { Box, Button, Flex, FormControl, Input, Text } from "@chakra-ui/react";

import { MdEmail } from "react-icons/md";

export function Newsletter() {
    return (
        <Box bg="gray.400" py="64px">
            <Box maxW="1170px" mx="auto" px="20px" w="100%">
                <Flex flexDir={['column', 'column', 'row']} gap="32px" alignItems="center" justifyContent="space-between">
                    <Flex flexDirection="column" gap="8px">
                        <Text color="gray.100" fontSize="28px" fontWeight="600"> Inscreva-se ao Newsletter </Text>
                        <Text color="gray.100" fontSize="16px" as="p"> Receba minhas postagens mais recentes diretamente no seu e-mail. </Text>
                    </Flex>

                    <Flex maxW="440px" w="100%">
                        <FormControl display="flex" flexDirection="column" gap="12px">
                            <Flex position="relative" bg="#dee7f1" borderRadius="6px">
                                <Text position="absolute" left="12px" zIndex="2" top="9px" fontSize="22px" color="gray.800"> <MdEmail /> </Text>
                                <Input pl="44px" color="gray.800" placeholder="Insira seu e-mail" />
                            </Flex>
                            <Button w="100%" bg="gray.800" _hover={{ transform: 'scale(1.02)' }}> CADASTRAR </Button>
                        </FormControl>
                    </Flex>
                </Flex>
            </Box>
        </Box>
    );
}