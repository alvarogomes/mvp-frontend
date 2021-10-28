import { ReactElement, useMemo } from 'react';
import { PieChart } from 'react-minimal-pie-chart';

import chroma from 'chroma-js';
import { Box, HStack } from '@chakra-ui/layout';
import ChartIcon from './ChartIcon';
import { selectProjects } from '@features/project/project.slice';
import { useAppSelector } from '@store/hooks';
import { selectGateways } from '@features/gateway/gateway.slice';

interface ChartProps {
    reports: any[];
    isProjects: boolean;
}

const defaultLabelStyle = {
    fontSize: '5px',
    fontFamily: 'sans-serif',
    fill: 'white',
};

function getName(isProjects: boolean, projects, gateways, item) {
    const name = isProjects
        ? projects?.find(project => project.projectId === item[0].projectId)
              ?.name
        : gateways?.find(gateway => gateway.gatewayId === item[0].gatewayId)
              ?.name;
    return name;
}

export default function Chart({
    reports,
    isProjects,
}: ChartProps): ReactElement {
    const projects = useAppSelector(selectProjects);
    const gateways = useAppSelector(selectGateways);

    const data = reports.map(report =>
        report.map((item, i) =>
            i === 0 ? { ...item, color: chroma.random() } : item
        )
    );

    const chartData = useMemo(
        () =>
            data.map(item => ({
                title: getName(isProjects, projects, gateways, item),
                value: item[0].amount,
                color: item[0].color,
            })),

        [reports]
    );

    return (
        <>
            <Box bg="bg.light" p="4" rounded="md">
                <HStack spacing="4">
                    {data?.length > 0 &&
                        data.map(report => (
                            <ChartIcon
                                color={report[0]?.color.toString()}
                                title={getName(
                                    isProjects,
                                    projects,
                                    gateways,
                                    report
                                )}
                            />
                        ))}
                </HStack>
            </Box>
            <Box p="20" data-testid="chart">
                <PieChart
                    data={chartData}
                    lineWidth={40}
                    labelPosition={80}
                    text-anchor="bottom"
                    label={({ x, y, dx, dy, dataEntry }) => (
                        <text
                            x={x}
                            y={y}
                            dx={dx}
                            dy={dy}
                            dominant-baseline="central"
                            text-anchor="middle"
                            style={{
                                ...defaultLabelStyle,
                            }}
                        >
                            {`${Math.round(dataEntry.percentage)} %`}
                        </text>
                    )}
                />
            </Box>
        </>
    );
}
