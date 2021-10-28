import { ReactElement } from 'react';
import { useAppDispatch, useAppSelector } from '@store/hooks';
import { Button } from '@chakra-ui/button';
import { Flex, Heading, HStack, Text } from '@chakra-ui/layout';
import { Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/menu';
import { ChevronDownIcon } from '@chakra-ui/icons';
import { selectProjects } from '@features/project/project.slice';
import { selectGateways } from '@features/gateway/gateway.slice';
import DatePicker from '@components/DatePicker';

import {
    selectGatewaySelected,
    selectProjectSelected,
    setSelectedProject,
    setSelectedGateway,
    setReportQuery,
} from './report.slice';

interface HeadingItemsProps {}

export default function HeadingItems({}: HeadingItemsProps): ReactElement {
    const projects = useAppSelector(selectProjects);
    const gateways = useAppSelector(selectGateways);
    const selectedProject = useAppSelector(selectProjectSelected);
    const selectedGateway = useAppSelector(selectGatewaySelected);

    const dispatch = useAppDispatch();

    function handleProjectSelect(project, isAll?: boolean) {
        dispatch(
            setSelectedProject(
                isAll
                    ? {
                          name: 'All Projects',
                      }
                    : project
            )
        );
        dispatch(
            setReportQuery({
                projectId: isAll ? '' : project.projectId,
            })
        );
    }

    function handleGatewaySelect(gateway, isAll?: boolean) {
        dispatch(
            setSelectedGateway(
                isAll
                    ? {
                          name: 'All Gateways',
                      }
                    : gateway
            )
        );
        dispatch(
            setReportQuery({
                gatewayId: isAll ? '' : gateway.gatewayId,
            })
        );
    }

    return (
        <Flex justify="space-between" mx="16" my="8" fontSize="xl">
            <div>
                <Heading>Reports</Heading>
                <Text>Easily generate a report of your transactions</Text>
            </div>
            <HStack spacing="8">
                <Menu>
                    <MenuButton
                        color="white"
                        bg="secondary"
                        as={Button}
                        rightIcon={<ChevronDownIcon />}
                    >
                        {selectedProject
                            ? selectedProject?.name
                            : 'Select Project'}
                    </MenuButton>
                    <MenuList>
                        {projects?.length > 0 && (
                            <>
                                <MenuItem
                                    onClick={() =>
                                        handleProjectSelect(null, true)
                                    }
                                >
                                    All Projects
                                </MenuItem>
                                {projects.map(project => (
                                    <MenuItem
                                        key={project.projectId}
                                        onClick={() =>
                                            handleProjectSelect(project)
                                        }
                                    >
                                        {project.name}
                                    </MenuItem>
                                ))}
                            </>
                        )}
                    </MenuList>
                </Menu>

                <Menu>
                    <MenuButton
                        color="white"
                        bg="secondary"
                        as={Button}
                        rightIcon={<ChevronDownIcon />}
                    >
                        {selectedGateway
                            ? selectedGateway?.name
                            : 'Select Gateway'}
                    </MenuButton>
                    <MenuList>
                        {gateways?.length > 0 && (
                            <>
                                <MenuItem
                                    onClick={() =>
                                        handleGatewaySelect(null, true)
                                    }
                                >
                                    All Gateways
                                </MenuItem>
                                {gateways.map(gateway => (
                                    <MenuItem
                                        key={gateway.gatewayId}
                                        onClick={() =>
                                            handleGatewaySelect(gateway)
                                        }
                                    >
                                        {gateway.name}
                                    </MenuItem>
                                ))}
                            </>
                        )}
                    </MenuList>
                </Menu>
                <DatePicker title="From date" queryParam="from" />
                <DatePicker title="To date" queryParam="to" />
                <Button color="white" bg="primary">
                    Generate report
                </Button>
            </HStack>
        </Flex>
    );
}
