import { Button, Stack } from "@chakra-ui/react";
import { signIn } from "next-auth/react";

import { FaGithub, FaGoogle, FaTwitter } from "react-icons/fa";

export function ButtonsLogin() {
    return (
        <Stack>
            <Button
                bg="#e94235"
                leftIcon={<FaGoogle />}
                transition="all .3s"
                onClick={() => signIn('google')}
                _hover={{ filter: 'brightness(0.6)', transition: 'all .3s' }}> Google
            </Button>

            <Button
                bg="#161b22"
                leftIcon={<FaGithub />}
                transition="all .3s"
                onClick={() => signIn('github')}
                _hover={{ filter: 'brightness(0.6)', transition: 'all .3s' }}> Github
            </Button>
        </Stack>
    )
}