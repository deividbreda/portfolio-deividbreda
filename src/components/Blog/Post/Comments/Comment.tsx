import { Avatar, Button, Flex, Stack, Text } from "@chakra-ui/react";
import { useSession } from "next-auth/react";
import { FaTrashAlt } from "react-icons/fa";

interface CommentProps {
    comment: {
        name: string,
        commentDesc: string,
        data: string,
        personImage: string,
        idcomment: string
    }
}

export function Comment({ comment }: CommentProps) {
    const { data: session } = useSession()

    async function handleDeleteComment() {
        const id = comment.idcomment

        await fetch(`/api/comments/delete`, {
            method: "POST",
            body: JSON.stringify(id),
            headers: {
                "Content-Type": "application/json",
            },
        })
    }

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
                    <Flex alignItems="center" gap="16px">
                        <Text fontSize="14px"> {comment.data} </Text>
                        {session?.user.name === comment.name &&
                            <Button
                                onClick={handleDeleteComment}
                                variant="unstyled"
                                h="18px"
                                color="#9db6d6"
                                fontSize="17px"
                                w="unset"
                                minW="unset"
                                _hover={{ color: '#f00' }}
                            >
                                <FaTrashAlt />
                            </Button>
                        }
                    </Flex>
                </Flex>
                <Text color="#5b708a" fontSize={['14px', '15px']}> {comment.commentDesc} </Text>
            </Stack>
        </Flex>
    );
}