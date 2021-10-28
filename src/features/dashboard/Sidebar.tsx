import React, { ReactElement, ReactNode } from 'react';
import Image from 'next/image';

import { Box, Flex, useColorModeValue } from '@chakra-ui/react';

import { List, ListItem } from '@chakra-ui/layout';

const ChartsIcon = <Image src="/svg/charts.svg" height={24} width={24} />;
const GroupsIcon = <Image src="/svg/groups.svg" height={24} width={24} />;
const PaymentsIcon = <Image src="/svg/payments.svg" height={24} width={24} />;
const ReportsIcon = <Image src="/svg/reports.svg" height={24} width={24} />;
const PowerIcon = <Image src="/svg/power.svg" height={24} width={24} />;

const menuItems = [
    ChartsIcon,
    GroupsIcon,
    PaymentsIcon,
    ReportsIcon,
    PowerIcon,
];

interface SidebarProps {
    children?: ReactNode;
}

export default function Sidebar({ children }: SidebarProps): ReactElement {
    return <SidebarContent />;
}

const SidebarContent = ({ ...rest }: SidebarProps) => {
    return (
        <Box
            bg={useColorModeValue('white', 'gray.900')}
            w={{ base: 'full', md: 40 }}
            h="full"
        >
            <Flex mt="16" mx="8" justifyContent="center">
                <List spacing={4}>
                    {menuItems.map((menuItem, i) => {
                        return (
                            <ListItem key={i} cursor="pointer">
                                {menuItem}
                            </ListItem>
                        );
                    })}
                </List>
            </Flex>
        </Box>
    );
};
