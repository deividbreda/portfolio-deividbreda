import { Avatar, Flex, Stack, Text } from "@chakra-ui/react";

export function Comment() {
    return (
        <Stack>
            <Flex gap="28px" py="32px" borderTop="1px" borderColor="gray.300">
                <Avatar size="lg" name="Gabriel Fernandes" />
                <Stack w="100%" gap="8px">
                    <Flex flexDir={['column','row']} alignItems={['flex-start','center']} justifyContent="space-between" color="gray.800">
                        <Text fontWeight="bold"> Gabriel Fernandes </Text>
                        <Text fontSize="14px"> 12 de Junho de 2022</Text>
                    </Flex>
                    <Text color="#5b708a" fontSize={['14px','15px']}> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Text>
                </Stack>
            </Flex>
        </Stack>
    );
}