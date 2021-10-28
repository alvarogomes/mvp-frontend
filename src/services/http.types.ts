type url = string;

export type API_GET_URLS = '/users' | '/projects' | '/gateways';
export type API_POST_URLS = '/report' | `/report?${keyof ReportQuery | string}`;

export type API_ENDPOINTS = API_GET_URLS | API_POST_URLS;

export type ReportResponse = {
    data: ReportResponseData[] | object;
};

type ReportResponseData = {
    paymentId: string; //id
    amount: number;
    projectId: string;
    gatewayId: string;
    userIds: string[];
    modified: string | Date;
    created: string | Date;
};

export type ReportQuery = {
    projectId?: string;
    gatewayId?: string;
    from?: string;
    to?: string;
};
