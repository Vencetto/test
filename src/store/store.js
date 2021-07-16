import { createStore } from 'redux';
import { PUT_CHARS } from './actions';

// chars for characters
const defaultState = {
    chars: [],
};

function mainReducer(state = defaultState, action) {
    switch (action.type) {
        case PUT_CHARS:
            return { ...state, chars: action.payload };
        default:
            return state;
    }
}

export const store = createStore(
    mainReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);