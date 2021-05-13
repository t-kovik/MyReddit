import {ActionCreator, AnyAction, Reducer} from "redux";
import {
    IUserData,
    ME_REQUEST,
    ME_REQUEST_ERROR,
    ME_REQUEST_SUCCESS,
    MeRequestAction,
    MeRequestActionError,
    MeRequestActionSuccess
} from "./me/actions";
import {meReducer, MeState} from "./me/reducer";
import {
    SET_TOKEN,
    SET_TOKEN_ERROR,
    SET_TOKEN_SUCCESS, SetTokenAction,
    SetTokenActionError,
    SetTokenActionSuccess
} from "./token/actions";
import {tokenReducer, TokenState} from "./token/reducer";


export type RootState = {
    commentText: string;
    tokenData: TokenState,
    me: MeState;
}

const initialState: RootState = {
    commentText: 'Hi, Skillbox!',
    me: {
        loading: false,
        error: '',
        data: {
            iconImg: ''
        }
    },
    tokenData: {
        token: '',
         error: '',
        loadingToken: false
     }
}

// const UPDATE_COMMENT = 'UPDATE COMMENT';
// export const updateComment: ActionCreator<AnyAction> = (text) => ({
//     type: UPDATE_COMMENT,
//     text
// });

export const UPDATE_COMMENT = 'UPDATE_COMMENT';
export type UpdateCommentAction = {
    type: typeof UPDATE_COMMENT;
    text: string,
}
export const UpdateComment: ActionCreator<UpdateCommentAction> = (text: string) => ({
    type: UPDATE_COMMENT,
    text,
})


 //const SET_TOKEN = 'SET TOKEN';
 //export const setToken: ActionCreator<AnyAction> = (token) => ({
  //   type: SET_TOKEN,
  //   token
 //});

type MyAction = UpdateCommentAction| MeRequestAction | MeRequestActionSuccess | MeRequestActionError | SetTokenAction | SetTokenActionSuccess | SetTokenActionError;

export const rootReducer: Reducer<RootState, MyAction> = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_COMMENT:
            return {
                ...state,
                commentText: action.text
            }

         // case SET_TOKEN:
         //     return {
         //          ...state,
         //          token: window.__token__
         //      }
        case ME_REQUEST:
        case ME_REQUEST_SUCCESS:
        case ME_REQUEST_ERROR:
            return {
                ...state,
                me: meReducer(state.me, action)
            };
        case SET_TOKEN:
        case SET_TOKEN_SUCCESS:
        case SET_TOKEN_ERROR:
            return {
                ...state,
                tokenData: tokenReducer(state.tokenData, action)
            };
        default:
            return state;
    }

}