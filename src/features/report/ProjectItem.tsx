import { ReactElement } from 'react';
import {
    AccordionButton,
    AccordionIcon,
    AccordionItem,
    AccordionPanel,
} from '@chakra-ui/accordion';
import { Box, Heading } from '@chakra-ui/layout';

import { ProjectItemProps } from './report.types';
import ProjectDetailsTable from './ProjectDetailsTable';
import GatewayDetailsTable from './GatewayDetailsTable';
import { useAppSelector } from '@store/hooks';
import { selectProjects } from '@features/project/project.slice';

import { getResponseTotalAmount } from '@utils/responseMap';
import { formatCurrency } from '@utils/formatCurrency';
import { selectGateways } from '@features/gateway/gateway.slice';

export default function ProjectItem({
    id,
    operations,
    isGateway,
}: ProjectItemProps): ReactElement {
    const projects = useAppSelector(selectProjects);
    const gateways = useAppSelector(selectGateways);

    const project = projects.find(({ projectId }) => projectId === id);
    const gateway = gateways.find(({ gatewayId }) => gatewayId === id);

    const totalAmount = getResponseTotalAmount(operations);

    return (
        <AccordionItem
            borderStyle="none"
            border="none"
            borderColor="transparent"
            mb="4"
        >
            <AccordionButton bg="white" rounded="md" p="4">
                <Box flex="1" textAlign="left">
                    <Heading color="text" size="sm">
                        {isGateway ? gateway?.name : project?.name}
                        <Box float="right">
                            {' '}
                            Total: {formatCurrency(totalAmount)}
                        </Box>
                    </Heading>
                </Box>
                <AccordionIcon />
            </AccordionButton>
            <AccordionPanel pb={4}>
                {isGateway ? (
                    <GatewayDetailsTable operations={operations} />
                ) : (
                    <ProjectDetailsTable operations={operations} />
                )}
            </AccordionPanel>
        </AccordionItem>
    );
}
