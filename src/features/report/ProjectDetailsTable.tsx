import { Table, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/table';
import { ReactElement } from 'react';
import { DetailsTableProps } from './report.types';

import { useAppSelector } from '@store/hooks';
import { selectGateways } from '@features/gateway/gateway.slice';

export default function DetailsTable({
    operations,
}: DetailsTableProps): ReactElement {
    const gateways = useAppSelector(selectGateways);

    return (
        <Table variant="unstyled">
            <Thead>
                <Tr bg="white">
                    <Th>Date</Th>
                    <Th>Gateway</Th>
                    <Th>Transaction Id</Th>
                    <Th isNumeric>Amount</Th>
                </Tr>
            </Thead>
            <Tbody>
                {operations.map(
                    ({ created, gatewayId, paymentId, amount }, i) => (
                        <Tr bg={`${i % 2 != 0 && 'white'}`} key={paymentId}>
                            <Td>{created}</Td>
                            <Td>
                                {
                                    gateways.find(
                                        gateway =>
                                            gateway.gatewayId === gatewayId
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
