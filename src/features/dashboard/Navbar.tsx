import { ReactElement, ReactNode } from 'react';
import Image from 'next/image';

import {
    Box,
    Flex,
    Avatar,
    HStack,
    Button,
    Menu,
    MenuButton,
    Text,
} from '@chakra-ui/react';
import { useAppSelector } from '@store/hooks';
import { selectUsers } from '@features/user/user.slice';

const Logo = () => <Image src="/logo.png" height={40} width={26} />;
const ExpandIcon = () => (
    <Image src="/svg/expand-menu.svg" width={24} height={24} />
);

interface NavbarProps {
    children?: ReactNode;
}

export default function Navbar({ children }: NavbarProps): ReactElement {
    const user = useAppSelector(selectUsers);
    const userName = `${user[0]?.firstName} ${user[0]?.lastName}`;

    return (
        <>
            <Box
                px={'16'}
                position="sticky"
                zIndex="10"
                left="0"
                right="0"
                top="0"
                w="100%"
                shadow="base"
            >
                <Flex
                    h={20}
                    alignItems={'center'}
                    justifyContent={'space-between'}
                >
                    <HStack spacing={8} alignItems={'center'}>
                        <Box>
                            <Logo />
                        </Box>
                        <Box cursor="pointer">
                            <ExpandIcon />
                        </Box>
                    </HStack>
                    <Flex alignItems={'center'}>
                        <Menu>
                            <MenuButton
                                as={Button}
                                rounded={'full'}
                                variant={'link'}
                                cursor={'pointer'}
                                minW={0}
                            >
                                <Avatar
                                    size={'sm'}
                                    src={
                                        'https://avatars.dicebear.com/api/initials/jd.svg'
                                    }
                                />
                            </MenuButton>
                            <Text ml="2" color="primary" fontWeight="medium">
                                {userName}
                            </Text>
                        </Menu>
                    </Flex>
                </Flex>
            </Box>
        </>
    );
}
