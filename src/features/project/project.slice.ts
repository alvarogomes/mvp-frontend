import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

import type { AppState, AppThunk } from '@store/store';

import { ProjectState } from './project.types';

const initialState: ProjectState = {
    projects: [],
    selected: null,
    status: 'idle',
    editing: null,
};

export const projectsSlice = createSlice({
    name: 'projects',
    initialState,
    reducers: {
        addProject: (state, action) => {
            state.projects.push(action.payload);
        },
        removeProject: (state, action) => {
            const newProjects = state.projects.filter(
                proj => proj.projectId !== action.payload
            );
            state.projects = newProjects;
        },
        setProjects: (_, action) => {
            return action.payload;
        },
        selectProject: (state, action) => {
            state.selected = action.payload;
        },
    },
});

export const {
    addProject,
    removeProject,
    setProjects,
    selectProject,
} = projectsSlice.actions;

export const selectProjects = (state: AppState) => state.projects.projects;
export const selectSelectedProject = (state: AppState) =>
    state.projects.selected;

export default projectsSlice.reducer;
