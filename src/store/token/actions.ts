import {Action, ActionCreator} from "redux";
import {ThunkAction} from "redux-thunk";
import {RootState} from "../reducer";
import axios from "axios";
import Cookies from 'universal-cookie'

const cookies = new Cookies();

export const SET_TOKEN = 'SET_TOKEN';
export type SetTokenAction = {
    type: typeof SET_TOKEN
}
export const SetToken: ActionCreator<SetTokenAction> = () => ({
    type: SET_TOKEN
})

export const SET_TOKEN_SUCCESS = 'SET_TOKEN_SUCCESS';
export type SetTokenActionSuccess = {
    token: string;
    type: typeof SET_TOKEN_SUCCESS;
}
export const SetTokenSuccess: ActionCreator<SetTokenActionSuccess> = (token: string) => ({
    type: SET_TOKEN_SUCCESS,
    token,
})

export const SET_TOKEN_ERROR = 'SET_TOKEN_ERROR';
export type SetTokenActionError = {
    type: typeof SET_TOKEN_ERROR;
    error: string,
}
export const SetTokenError: ActionCreator<SetTokenActionError> = (error: string) => ({
    type: SET_TOKEN_ERROR,
    error,
})

export const saveToken = (): ThunkAction<void, RootState, unknown, Action<string>> => (dispatch) => {
    let token = window.__token__;
    dispatch(SetTokenSuccess(token));
    localStorage.setItem('token', token);
}