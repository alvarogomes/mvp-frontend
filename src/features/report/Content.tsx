import { ReactElement, ReactNode } from 'react';
import { Container } from '@chakra-ui/layout';
import { useAppSelector } from '@store/hooks';
import NoReports from './NoReports';

import AllProjectsAllGateways from '@features/report/AllProjectsAllGateways';
import SplitDetails from '@features/report/SplitDetails';
import { selectGatewaySelected, selectProjectSelected } from './report.slice';

interface ContentProps {
    children?: ReactNode;
}

function getSelectedDetails(selectedProject, selectedGateway) {
    if (
        selectedProject === 'All Projects' &&
        selectedGateway === 'All Gateways'
    )
        return <AllProjectsAllGateways />; //table
    if (selectedProject === 'All Projects' && selectedGateway)
        return <SplitDetails isAllProjects />; //split in table and chart
    if (selectedProject && selectedGateway === 'All Gateways')
        return <SplitDetails />; //split in table and chart
    if (selectedProject && selectedGateway) return <AllProjectsAllGateways />; //table
    return <NoReports />;
}

export default function Content({ children }: ContentProps): ReactElement {
    const selectedProject = useAppSelector(selectProjectSelected);
    const selectedGateway = useAppSelector(selectGatewaySelected);

    return (
        <Container maxW="container.xl">
            {getSelectedDetails(selectedProject?.name, selectedGateway?.name)}
            {/*  {children} */}
        </Container>
    );
}
