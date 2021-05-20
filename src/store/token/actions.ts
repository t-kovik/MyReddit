import {Action, ActionCreator} from "redux";
import {ThunkAction} from "redux-thunk";
import {RootState} from "../reducer";
import axios from "axios";

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
 export const SetTokenSuccess: ActionCreator<SetTokenActionSuccess> = (token:string) => ({
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
     let code = window.__code__;
     dispatch(SetToken());
     axios.post(
         'https://www.reddit.com/api/v1/access_token',
         `grant_type=authorization_code&code=${code}&redirect_uri=http://localhost:3000/auth`,
        {
             auth: { username: process.env.CLIENT_ID || '', password: '2ILXfaV4DCcPbN7kihd-wdewhWr_zg'},
             headers: { 'Content-type': 'application/x-www-form-urlencoded'}
         }
     )
         .then(({ data }) => {
             dispatch(SetTokenSuccess(data['access_token']))
         })
         .catch((error) => {
             console.log(error);
             dispatch(SetTokenError(String(error)));
         })

 }