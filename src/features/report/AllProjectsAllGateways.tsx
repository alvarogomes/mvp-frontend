import { ReactElement, useEffect } from 'react';
import { Accordion } from '@chakra-ui/accordion';
import { Box, Text } from '@chakra-ui/layout';

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
import { getResponseTotalAmount, mapResponseToAll } from '@utils/responseMap';
import ProjectItem from './ProjectItem';
import { formatCurrency } from '@utils/formatCurrency';
import { Alert, AlertIcon } from '@chakra-ui/alert';

interface AllProjectsAllGatewaysProps {}

export default function AllProjectsAllGateways({}: AllProjectsAllGatewaysProps): ReactElement {
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
                    setReports({ reports: mapResponseToAll(response.data) })
                );
                dispatch(
                    setReportsTotalAmount(getResponseTotalAmount(response.data))
                );
            })
            .catch(console.log);
    }, [selectedProject, selectedGateway, currentQuery.to, currentQuery.from]);

    return (
        <Box fontSize="md" fontWeight="normal">
            <Box p="4" bg="bg.light" rounded="md">
                <Text mb="8" color="text" fontWeight="medium" fontSize="sm">
                    {selectedProject?.name} | {selectedGateway?.name}
                </Text>
                <Accordion allowMultiple allowToggle>
                    {reports?.length > 0 &&
                        reports.map(report => (
                            <ProjectItem
                                key={report[0]?.projectId}
                                id={report[0]?.projectId}
                                operations={report}
                                isGateway={false}
                            />
                        ))}
                </Accordion>
            </Box>
            <Box bg="bg.light" p="4" mt="8" rounded="md">
                <Text fontSize="md" fontWeight="medium" color="text">
                    TOTAL: {formatCurrency(totalAmount)}
                </Text>
            </Box>
            {reports?.length === 0 && (
                <Alert status="warning" mt="8">
                    <AlertIcon />
                    No reports found in this period
                </Alert>
            )}
        </Box>
    );
}
