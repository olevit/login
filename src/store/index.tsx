import {applyMiddleware, createStore} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';
import rootReducer from "../slice";

const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunkMiddleware)),
)

export default store;