import { Box, Flex, Image, Stack, Text } from "@chakra-ui/react";

export function Author() {
    return (
        <Stack bg="gray.100" p="48px">
            <Box w="740px" mx="auto" px="20px">
                <Flex alignItems="center" justifyContent="center">
                    <Text color="gray.800" transform="rotate(270deg)" textTransform="uppercase" fontSize="22px" fontWeight="bold"> Autor </Text>
                    <Flex alignItems="center" justifyContent="center" gap="32px">
                        <Image w="100px" borderRadius="100%" src="https://avatars.githubusercontent.com/u/62572750?v=4" />
                        <Stack color="gray.800">
                            <Text fontWeight="600"> Deivid Breda </Text>
                            <Text> Desenvolvedor Web </Text>
                        </Stack>
                    </Flex>
                </Flex>
            </Box>
        </Stack>
    );
}