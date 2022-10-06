import { Avatar, Box, Button, Flex, FormControl, Stack, Text, Textarea } from "@chakra-ui/react";
import { Comment } from "./Comment";

export function Comments() {
    return (
        <Stack bg="gray.200" py="48px">
            <Box maxW="740px" mx="auto" px="20px" w="100%">
                <Text
                    color="gray.800"
                    fontSize="32px"
                    fontWeight="bold"
                    position="relative"
                    _after={{
                        content: '""',
                        h: '20px',
                        w: '100%',
                        position: 'absolute',
                        bg: 'gray.300',
                        top: '25px',
                        right: '0',
                        left: '0',
                        zIndex: '1'
                    }}
                > <Text as="span" zIndex="2" position="relative"> Comentários 💬 </Text> </Text>
                <Stack gap="32px">
                    <Stack>
                        <Flex py="32px" gap={['16px','32px']} align="flex-start">
                            <Avatar size={['md','lg']} />
                            <FormControl>
                                <Stack w="100%">
                                    <Textarea placeholder="Sua mensagem..." color="gray.800" bg="white" h="50px" w="100%" resize="none" />
                                    <Flex justifyContent="flex-end" gap="8px">
                                        <Button bg="transparent" color="gray.800" fontWeight="400" _hover={{ color: 'red' }}> Cancelar </Button>
                                        <Button type="submit" bg="gray.800" _hover={{ bg: 'gray.300' }}> Enviar </Button>
                                    </Flex>
                                </Stack>
                            </FormControl>
                        </Flex>
                    </Stack>

                    <Comment />
                </Stack>
            </Box>
        </Stack>
    );
}