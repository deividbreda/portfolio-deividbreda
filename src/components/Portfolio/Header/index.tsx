import { Links } from './Links';

import styles from './styles.module.scss'

import { FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { Box, Flex, Image, Link, Text } from '@chakra-ui/react';

export function Header() {
    return (
        <Box p="64px 0" background="linear-gradient(45deg, #010409, #0c203c)" zIndex="6" pos="relative" className={styles.container}>
            <div className="containerWidth">
                <Flex justifyContent={['center', 'center', 'center', 'space-between']} pos="relative" className={styles.content}>
                    <Flex flexDir="column" gap="32px" position={['unset', 'relative']} data-aos="fade-right">
                        <Image w={['280px', '380px']} src="https://avatars.githubusercontent.com/u/62572750?v=4" alt="" />
                        <Box
                            background="#f0f6fc"
                            borderRadius="22px"
                            ml={['0', '0', '0', '32px']}
                            color="#151f2c"
                            p={['16px 22px', '32px']}
                            position="absolute"
                            bottom="-128px"
                            left="0"
                            right={['0', '0', '0', '-208px']}
                        >
                            <Flex gap={['12px', '22px', '22px']} alignItems="center" justifyContent="space-between">
                                <Text as="h1" fontSize={['18px', '22px', '22px', '32px']} fontWeight="600"> Deivid Breda </Text>
                                <Flex gap={['12px', '22px', '22px']} alignItems="center" justifyContent="space-between">
                                    <Link
                                        display="inherit"
                                        fontSize={['18px', '28px']}
                                        _hover={{ transform: 'translateY(-4px)' }}
                                        href="https://www.linkedin.com/in/deivid-breda-9b2507136/"
                                    >
                                        <FaLinkedinIn />
                                    </Link>
                                    <Link
                                        display="inherit"
                                        fontSize={['18px', '28px']}
                                        _hover={{ transform: 'translateY(-4px)' }}
                                        href="https://web.whatsapp.com/send?phone=5542991062425"
                                    >
                                        <FaWhatsapp />
                                    </Link>
                                </Flex>
                            </Flex>

                            <Text mt="8px" fontSize={['14px', '16px', '18px']} fontWeight="300"> Web Developer | React | Next | TypeScript | JS | GraphQL </Text>

                        </Box>
                    </Flex>

                    <Links />
                </Flex>
            </div>
        </Box>
    );
}