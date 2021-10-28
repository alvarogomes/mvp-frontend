import { Table, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/table';
import { ReactElement } from 'react';
import { DetailsTableProps } from './report.types';

import { useAppSelector } from '@store/hooks';
import { selectProjects } from '@features/project/project.slice';

export default function GatewayDetailsTable({
    operations,
}: DetailsTableProps): ReactElement {
    const projects = useAppSelector(selectProjects);

    return (
        <Table variant="unstyled">
            <Thead>
                <Tr bg="white">
                    <Th>Date</Th>
                    <Th>Project</Th>
                    <Th>Transaction Id</Th>
                    <Th isNumeric>Amount</Th>
                </Tr>
            </Thead>
            <Tbody>
                {operations.map(
                    ({ created, projectId, paymentId, amount }, i) => (
                        <Tr bg={`${i % 2 != 0 && 'white'}`} key={paymentId}>
                            <Td>{created}</Td>
                            <Td>
                                {
                                    projects.find(
                                        project =>
                                            project.projectId === projectId
                                    )?.name
                                }
                            </Td>
                            <Td>{paymentId}</Td>
                            <Td isNumeric>{amount}</Td>
                        </Tr>
                    )
                )}
            </Tbody>
        </Table>
    );
}
