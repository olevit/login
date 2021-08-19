import { createSlice } from '@reduxjs/toolkit'
import {IFilterBy, IPanels, ISetPanel} from "../components/common/filter/interface";

const initialState: IAppInitialState = {
    panels: {
        location: true,
        specialization: true,
        experience: true,
        employment: true,
        english: true,
    },
    filterTags: [],
    filterPanel: true,
}

const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        showHidePanels: (state, { payload }: { payload: ISetPanel }) => ({...state, panels: { ...state.panels, [payload]: !state.panels[payload] }}),
        toggleTagToFilter: (state, { payload }: { payload: { id: number, title: string } }) => {
            const findIndex = state.filterTags.findIndex(item => item.id === payload.id) >= 0
            return {
                ...state,
                filterTags: findIndex? state.filterTags.filter(item => item.id !== payload.id) : [...state.filterTags, payload]
            }
        },
        clearFilter: (state) => ({...state, filterTags: []}),
        filterPanelToggle: (state) => ({...state, filterPanel: !state.filterPanel}),
    },
})

interface IAppInitialState {
    panels: IPanels;
    filterTags: IFilterBy,
    filterPanel: boolean,
}

export const {
    showHidePanels,
    toggleTagToFilter,
    clearFilter,
    filterPanelToggle,
} = appSlice.actions

export default appSlice.reducer