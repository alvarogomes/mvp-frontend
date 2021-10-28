import { ReactElement } from 'react';
import Image from 'next/image';
import { Container, Heading, Text, VStack } from '@chakra-ui/layout';

interface NoReportsProps {}

export default function NoReports({}: NoReportsProps): ReactElement {
    return (
        <Container>
            <VStack align="center" mb="20">
                <Heading color="#011F4B">No reports</Heading>
                <Text color="gray.500">
                    Currently you have no data for the reports to be generated.
                    Once you start generating traffic through the Balance
                    application the reports will be shown.
                </Text>
                <Image src="/no-reports.png" width="402.5" height="171.71" />
            </VStack>
        </Container>
    );
}
