import {MeRequestAction, MeRequestActionError, MeRequestActionSuccess, IUserData} from "./actions";
import {Reducer} from "react";

export type MeState = {
    loading: boolean;
    error: string;
    data: IUserData;
}
type MeAction = MeRequestAction | MeRequestActionSuccess | MeRequestActionError;

export const meReducer: Reducer<MeState, MeAction> = (state, action) => {
    switch (action.type) {
        case "ME_REQUEST":
            return {
                ...state,
                loading: true
            }
        case "ME_REQUEST_ERROR":
            return {
                ...state,
                error: action.error,
                loading: false
            }
        case "ME_REQUEST_SUCCESS":
            return {
                ...state,
                data: action.data,
                loading: false
            }
        default:
            return state
    }
}