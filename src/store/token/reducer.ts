 import {SetTokenAction, SetTokenActionError, SetTokenActionSuccess} from "./actions";
import {Reducer} from "react";
 import Cookies from 'universal-cookie'
 const cookies = new Cookies();

 export type TokenState = {
     error: string;
     loadingToken: boolean;
     token: string
 }
 type TokenAction = SetTokenAction | SetTokenActionSuccess | SetTokenActionError;

 export const tokenReducer: Reducer<TokenState, TokenAction> = (state, action) => {
     switch (action.type) {
         case "SET_TOKEN":
             return {
                 ...state,
                 loadingToken: true
             }
         case "SET_TOKEN_ERROR":
             return {
                 ...state,
                 error: action.error,
                 loadingToken: false
             }
         case "SET_TOKEN_SUCCESS":
             return {
                 ...state,
                 token: action.token,
                 loadingToken: false,
             }
         default:
             return state
     }
 }