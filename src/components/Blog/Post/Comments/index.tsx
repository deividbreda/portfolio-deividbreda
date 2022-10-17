import { Avatar, Box, Button, Flex, FormControl, Stack, Text, Textarea } from "@chakra-ui/react";
import { useLogin } from "../../../../hooks/useLogin";
import { PostProps } from "../../../../pages/blog/[slug]";
import { Comment } from "./Comment";
import { useModalLogin } from "../../../../hooks/useModalLogin";
import { FormEvent, useState } from "react";
import { useSession } from "next-auth/react";

import { MdLock } from "react-icons/md";
import { AiOutlineWarning } from "react-icons/ai";

export function Comments({ comments, post }: PostProps) {
    const { user } = useLogin();
    const { handleOpenModalLogin } = useModalLogin()
    const { data: session } = useSession();

    const [commentDescription, setCommentDescription] = useState('')
    const [tempComments, setTempComments] = useState([])
    const [isSubmitting, setIsSubmitting] = useState(false)

    async function handleComment(event: FormEvent) {
        event.preventDefault();

        setIsSubmitting(true)

        const slug = post.slug
        const commentPersonImage = await getPersonImage()
        const name = await checkName()

        await fetch(`/api/comments/add`, {
            method: "POST",
            body: JSON.stringify({ commentDescription, commentPersonImage, slug, name }),
            headers: {
                "Content-Type": "application/json",
            },
        })

        setCommentDescription('')

        let idNumber = 1;

        const comment = {
            id: idNumber++,
            name,
            commentDesc: commentDescription,
            data: new Date().toLocaleDateString('pt-BR', {
                day: '2-digit',
                month: 'long',
                year: 'numeric'
            }),
            personImage: session?.user.image
        }

        setTempComments([comment, ...tempComments])

        setIsSubmitting(false)
    }

    function getPersonImage() {
        if (session) {
            return session.user.image
        } else {
            return ""
        }
    }

    function checkName() {
        if (user) {
            return user
        } else {
            return session.user.name
        }
    }

    function handleCancel() {
        setCommentDescription('')
    }

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
                        <Flex py="32px" gap={['16px', '32px']} align="flex-start">
                            {(user || session) ? (
                                (user) ?
                                    <Avatar name={user} size={['md', 'lg']} />
                                    :
                                    <Avatar src={session.user.image} size={['md', 'lg']} />
                            ) : (
                                <Avatar size={['md', 'lg']} />
                            )}
                            <Box w="100%" as="form" onSubmit={handleComment}>
                                <FormControl>
                                    <Stack w="100%">
                                        {(user || session) ? (
                                            <>
                                                <Textarea required value={commentDescription} onChange={(e) => setCommentDescription(e.target.value)} placeholder="Sua mensagem..." color="gray.800" bg="white" h="50px" w="100%" resize="none" />
                                                <Flex justifyContent="flex-end" gap={['16px',  '16px', '32px']} alignItems={['flex-end' ,'flex-end' ,'center']} flexDir={['column' ,'column', 'row']}>
                                                    {(user && commentDescription) &&
                                                        <Text color="#f00" fontSize="12px" display="flex" alignItems="center" gap="6px"> <AiOutlineWarning fontSize="32px" /> Comentários sem Login só poderão ser apagados pelo Administrador! </Text>
                                                    }
                                                    <Flex gap="8px">
                                                        <Button onClick={handleCancel} bg="transparent" color="gray.800" fontSize="14px" fontWeight="400" _hover={{ color: 'red' }}> Cancelar </Button>
                                                        <Button type="submit" bg="gray.800" _hover={{ bg: '#0ea40e' }} fontSize="14px" loadingText='Enviando...' isLoading={isSubmitting}> Comentar </Button>
                                                    </Flex>
                                                </Flex>
                                            </>
                                        ) : (
                                            <>
                                                <Textarea isDisabled placeholder="Sua mensagem..." color="gray.800" bg="white" h="50px" w="100%" resize="none" />
                                                <Flex justifyContent="flex-end" gap="8px">
                                                    <Text
                                                        display="flex" alignItems="center"
                                                        gap="6px" as="a"
                                                        background="#1d3452"
                                                        p="6px 12px"
                                                        borderRadius="32px"
                                                        fontSize={['12px', '16px']}
                                                        onClick={handleOpenModalLogin}
                                                    >
                                                        <MdLock /> Identifique-se para comentar </Text>
                                                </Flex>
                                            </>
                                        )}
                                    </Stack>
                                </FormControl>
                            </Box>
                        </Flex>
                    </Stack>

                    {(tempComments.length || comments.length) &&
                        <Stack>
                            {tempComments.length && (
                                <>
                                    {tempComments.map(tempComment => {
                                        return (
                                            <Comment
                                                key={tempComment.id}
                                                comment={tempComment}
                                            />
                                        )
                                    })}
                                </>
                            )}

                            {comments?.map(comment => {
                                return (
                                    <Comment
                                        key={comment.idcomment}
                                        comment={comment}
                                    />
                                )
                            })}
                        </Stack>
                    }
                </Stack>
            </Box>
        </Stack>
    );
}