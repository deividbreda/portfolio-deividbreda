import { Avatar, Flex, Stack, Text } from "@chakra-ui/react";

interface CommentProps {
    comment: {
        name: string,
        commentDesc: string,
        data: string
        personImage: string
    }
}

export function Comment({ comment }: CommentProps) {
    return (
        <Flex gap="28px" py="32px" borderTop="1px" borderColor="gray.300">
            {!comment.personImage ? 
                <Avatar size="lg" name={comment.name} />
            :
                <Avatar size="lg" src={comment.personImage} />
            }
            <Stack w="100%" gap="8px">
                <Flex flexDir={['column', 'row']} alignItems={['flex-start', 'center']} justifyContent="space-between" color="gray.800">
                    <Text fontWeight="bold"> {comment.name} </Text>
                    <Text fontSize="14px"> {comment.data} </Text>
                </Flex>
                <Text color="#5b708a" fontSize={['14px', '15px']}> {comment.commentDesc} </Text>
            </Stack>
        </Flex>
    );
}