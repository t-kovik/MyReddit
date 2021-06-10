import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../store/reducer";
import {IUserData, meRequestAsync} from "../store/me/actions";



export function useUserData() {
    const token = localStorage.getItem('token');
    const data = useSelector<RootState, IUserData>(state => state.me.data);
    const loading = useSelector<RootState, boolean>(state => state.me.loading)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(meRequestAsync());
    }, [token])
    return {
        data,
        token,
        loading
    }
}