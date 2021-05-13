import {Action, ActionCreator} from "redux";
import {ThunkAction} from "redux-thunk";
import {RootState} from "../reducer";
import axios from "axios";

export const ME_REQUEST = 'ME_REQUEST';
export type MeRequestAction = {
    type: typeof ME_REQUEST
}
export const MeRequest: ActionCreator<MeRequestAction> = () => ({
    type: ME_REQUEST
})

export interface IUserData {
    name?: string;
    iconImg: string;
}

export const ME_REQUEST_SUCCESS = 'ME_REQUEST_SUCCESS';
export type MeRequestActionSuccess = {
    type: typeof ME_REQUEST_SUCCESS;
    data: IUserData
}
export const MeRequestSuccess: ActionCreator<MeRequestActionSuccess> = (data: IUserData) => ({
    type: ME_REQUEST_SUCCESS,
    data,
})

export const ME_REQUEST_ERROR = 'ME_REQUEST_ERROR';
export type MeRequestActionError = {
    type: typeof ME_REQUEST_ERROR;
    error: string,
}
export const MeRequestError: ActionCreator<MeRequestActionError> = (error: string) => ({
    type: ME_REQUEST_ERROR,
    error,
})

export const meRequestAsync = (): ThunkAction<void, RootState, unknown, Action<string>> => (dispatch, getState) => {
   dispatch(MeRequest());
    axios.get('https://oauth.reddit.com/api/v1/me',
        {
            headers: {Authorization: `bearer ${getState().tokenData.token}`}
        })
        .then((resp) => {
            const userData = resp.data;
            console.log(userData.name);
            dispatch(MeRequestSuccess({name: userData.name, iconImg: userData.icon_img}))
        })
        .catch((error) => {
            console.log(error);
            dispatch(MeRequestError(String(error)));
        })
}