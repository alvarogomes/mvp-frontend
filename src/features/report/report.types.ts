import { ReportQuery } from '@services/http.types';

export type ReportState = {
    reports: any[];
    selected?: string;
    status: string;
    editing?: string;
    query?: ReportQuery;
    operations?: Operation[];
    totalAmount?: number;
    selectedProject?: any;
    selectedGateway?: any;
};

type Operation = {
    created: string;
    gatewayId?: string;
    projectId?: string;
    paymentId: string;
    amount: string;
};

export interface DetailsTableProps {
    operations: Operation[];
}

export interface ProjectItemProps {
    id: string;
    operations: Operation[];
    isGateway: boolean;
}
