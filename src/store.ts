import {ActionCreator, AnyAction, Reducer} from "redux";

export type RootState = {
    commentText: string;
    token: string
}

const initialState = {
    commentText: 'Hi, Skillbox!',
    token: ''
}

const UPDATE_COMMENT = 'UPDATE COMMENT';
export const updateComment: ActionCreator<AnyAction> = (text) => ({
    type: UPDATE_COMMENT,
    text
});

const SET_TOKEN = 'SET TOKEN';
export const setToken: ActionCreator<AnyAction> = (token) => ({
    type: SET_TOKEN,
    token
});

export const rootReducer: Reducer<RootState> = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_COMMENT:
            return {
                ...state,
                commentText: action.text
            }
        case SET_TOKEN:
            return {
                ...state,
                token: window.__token__
            }
        default:
            return state;
    }

}