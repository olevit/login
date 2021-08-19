import { combineReducers } from 'redux'

import auth, {
    changeToken,
    changeProfileType
} from './auth.slice'

import app, {
    showHidePanels,
    clearFilter,
    filterPanelToggle,
    toggleTagToFilter
} from "./app.slice";

// REDUCERS
const rootReducer = combineReducers({
    auth,
    app
})

// ACTIONS
export {
    // Auth
    changeToken,
    changeProfileType,

    // App
    showHidePanels,
    clearFilter,
    filterPanelToggle,
    toggleTagToFilter
}


export default rootReducer


