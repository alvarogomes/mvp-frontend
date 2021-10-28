import axios, { AxiosInstance, AxiosResponse } from 'axios';

import {
    API_GET_URLS,
    API_POST_URLS,
    ReportQuery,
    ReportResponse,
} from './http.types';

export const API_ROUTES_URL = 'http://localhost:3000/api';

declare module 'axios' {
    interface AxiosResponse<T = any> extends Promise<T> {}
}

abstract class HttpClient {
    protected readonly instance: AxiosInstance;

    public constructor(baseURL: string) {
        this.instance = axios.create({
            baseURL,
        });

        this._initializeResponseInterceptor();
    }

    private _initializeResponseInterceptor = () => {
        this.instance.interceptors.response.use(
            this._handleResponse,
            this._handleError
        );
    };

    private _handleResponse = ({ data }: AxiosResponse) => data;

    protected _handleError = (error: any) => Promise.reject(error);
}

class MainApi extends HttpClient {
    public constructor(baseUrl: string) {
        super(baseUrl);
    }

    public get = (url: API_GET_URLS) => this.instance.get(url);
    public post = <T>(url: API_POST_URLS, ...args) =>
        this.instance.post<T>(url, ...args);

    public getReports = (query: ReportQuery) =>
        this.post<any>(`/report`, query);
}

class NextApiRoutes extends HttpClient {
    public constructor(baseUrl: string) {
        super(baseUrl);
    }

    public queryReports = (query: ReportQuery) =>
        this.instance.post(`/query`, query);
}

const http = new MainApi('http://178.63.13.157:8090/mock-api/api');

export const api = new NextApiRoutes(API_ROUTES_URL);

export default http;

/* 

Mock API information
API base path: http://178.63.13.157:8090/mock-api/api

GET /users
Returns all the users in the system

GET /projects
Returns all the projects in the system

GET /gateways
Returns all the gateways in the system

POST /report
Returns all the payments after applying the given filters

*/
