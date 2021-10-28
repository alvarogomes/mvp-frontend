import { Box, Grid, GridItem, Flex } from '@chakra-ui/layout';
import { ReactElement } from 'react';
import Content from '../report/Content';
import Footer from './Footer';
import HeadingItems from '../report/HeadingItems';
import Navbar from './Navbar';
import Sidebar from './Sidebar';

interface DashboardLayoutProps {}

export default function DashboardLayout({}: DashboardLayoutProps): ReactElement {
    return (
        <Grid h="full">
            <GridItem>
                <Navbar />
            </GridItem>
            <GridItem>
                <Flex>
                    <Sidebar />

                    <Box w="100%" minH="80vh">
                        <HeadingItems />
                        <Content></Content>
                    </Box>
                </Flex>
                <Footer />
            </GridItem>
        </Grid>
    );
}
