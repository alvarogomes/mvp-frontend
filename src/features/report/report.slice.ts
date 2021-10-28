import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

import type { AppState, AppThunk } from '@store/store';

import { ReportState } from './report.types';

const initialState: ReportState = {
    reports: [],
    selected: null,
    status: 'idle',
    editing: null,
    query: {
        projectId: '',
        gatewayId: '',
        from: '',
        to: '',
    },
    operations: [],
    totalAmount: null,
};

export const reportsSlice = createSlice({
    name: 'reports',
    initialState,
    reducers: {
        addReport: (state, action) => {
            state.reports.push(action.payload);
        },
        removeReport: (state, action) => {
            const newReports = state.reports.filter(
                proj => proj.reportId !== action.payload
            );
            state.reports = newReports;
        },
        setReports: (state, action) => {
            state.reports = action.payload.reports;
        },
        selectReport: (state, action) => {
            state.selected = action.payload.id;
        },
        setReportQuery: (state, action) => {
            state.query = { ...state.query, ...action.payload };
        },
        setSelectedProject: (state, action) => {
            state.selectedProject = action.payload;
        },
        setSelectedGateway: (state, action) => {
            state.selectedGateway = action.payload;
        },
        setReportsTotalAmount: (state, action) => {
            state.totalAmount = action.payload;
        },
    },
});

export const {
    addReport,
    removeReport,
    setReports,
    selectReport,
    setReportQuery,
    setSelectedProject,
    setSelectedGateway,
    setReportsTotalAmount,
} = reportsSlice.actions;

export const selectReports = (state: AppState) => state.reports.reports;
export const selectSelectedReport = (state: AppState) => state.reports.selected;
export const selectReportQuery = (state: AppState) => state.reports.query;

export const selectProjectSelected = (state: AppState) =>
    state.reports.selectedProject;
export const selectGatewaySelected = (state: AppState) =>
    state.reports.selectedGateway;

export const selectReportsTotalAmount = (state: AppState) =>
    state.reports.totalAmount;

export default reportsSlice.reducer;
