import { Box, Flex, Text } from "@chakra-ui/react";

export function Footer() {
    return (
        <Box bg="gray.800" py="64px">
            <Box w="540px" mx="auto" px="20px">
                <Flex alignItems="center" justifyContent="center" flexDirection="column">
                    <Box>

                    </Box>
                    <Text as="span" fontSize="12px" color="#98a4b2"> Meu Blog • Desenvolvido por eu mesmo! 😜 </Text>
                </Flex>
            </Box>
        </Box>
    );
}