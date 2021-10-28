import { ReactElement } from 'react';
import { Box, Flex, Text } from '@chakra-ui/layout';

interface ChartIconProps {
    color: string;
    title: string;
}

export default function ChartIcon({
    color,
    title,
}: ChartIconProps): ReactElement {
    return (
        <Flex align="center">
            <Box h="1rem" w="1rem" bg={color} rounded="md" mr="2" />
            <Text fontSize="sm" fontWeight="medium" color="text">
                {title}
            </Text>
        </Flex>
    );
}
