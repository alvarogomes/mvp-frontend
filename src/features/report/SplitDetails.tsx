import { ReactElement, useEffect } from 'react';
import { Accordion } from '@chakra-ui/accordion';
import { Box, Flex, Text } from '@chakra-ui/layout';

import { useAppDispatch, useAppSelector } from '@store/hooks';
import {
    selectGatewaySelected,
    selectProjectSelected,
    selectReportQuery,
    selectReports,
    selectReportsTotalAmount,
    setReports,
    setReportsTotalAmount,
} from './report.slice';
import { api } from '@services/http.client';
import {
    getResponseTotalAmount,
    mapResponseToAll,
    mapResponseToAllByGateway,
} from '@utils/responseMap';
import ProjectItem from './ProjectItem';
import { formatCurrency } from '@utils/formatCurrency';
import { Alert, AlertIcon } from '@chakra-ui/alert';
import Chart from '@components/Chart';

interface SplitDetailsProps {
    isAllProjects?: boolean;
}

export default function SplitDetails({
    isAllProjects,
}: SplitDetailsProps): ReactElement {
    const selectedProject = useAppSelector(selectProjectSelected);
    const selectedGateway = useAppSelector(selectGatewaySelected);
    const totalAmount = useAppSelector(selectReportsTotalAmount);
    const currentQuery = useAppSelector(selectReportQuery);

    const reports = useAppSelector(selectReports);

    const dispatch = useAppDispatch();

    useEffect(() => {
        const filterReports = async () =>
            api.queryReports({
                ...currentQuery,
            });
        filterReports()
            .then(response => {
                dispatch(
                    setReports({
                        reports: isAllProjects
                            ? mapResponseToAll(response.data)
                            : mapResponseToAllByGateway(response.data),
                    })
                );
                dispatch(
                    setReportsTotalAmount(getResponseTotalAmount(response.data))
                );
            })
            .catch(console.log);
    }, [selectedProject, selectedGateway, currentQuery.to, currentQuery.from]);

    return (
        <Box fontSize="md" fontWeight="normal">
            <Flex>
                <Box
                    p="4"
                    bg="bg.light"
                    rounded="md"
                    w={{ base: '100%', lg: '50%' }}
                >
                    <Text mb="8" color="text" fontWeight="medium" fontSize="sm">
                        {selectedProject?.name} | {selectedGateway?.name}
                    </Text>
                    <Accordion allowMultiple allowToggle>
                        {reports?.length > 0 &&
                            reports.map(report => (
                                <ProjectItem
                                    isGateway={!isAllProjects}
                                    key={
                                        isAllProjects
                                            ? report[0]?.projectId
                                            : report[0]?.gatewayId
                                    }
                                    id={
                                        isAllProjects
                                            ? report[0]?.projectId
                                            : report[0]?.gatewayId
                                    }
                                    operations={report}
                                />
                            ))}
                    </Accordion>
                </Box>

                <Box p="4" pt="0" w={{ base: '100%', lg: '50%' }}>
                    <Chart reports={reports} isProjects={isAllProjects} />
                    <Box bg="bg.light" p="4" mt="8" rounded="md">
                        <Text fontSize="sm" fontWeight="medium" color="text">
                            {isAllProjects ? 'GATEWAY' : 'PROJECT'} TOTAL:{' '}
                            {formatCurrency(totalAmount)}
                        </Text>
                    </Box>
                </Box>
            </Flex>

            {reports?.length === 0 && (
                <Alert status="warning" mt="8">
                    <AlertIcon />
                    No reports found in this period
                </Alert>
            )}
        </Box>
    );
}

//

//table / chart
// All proj / gateway name                               [squarecolor - project name]
