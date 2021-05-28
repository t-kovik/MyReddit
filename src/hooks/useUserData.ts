import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../store/reducer";
import {IUserData, meRequestAsync} from "../store/me/actions";



export function useUserData() {
    const token = useSelector<RootState, string>(state => state.tokenData.token);
    const data = useSelector<RootState, IUserData>(state => state.me.data);
    const loading = useSelector<RootState, boolean>(state => state.me.loading)
    const dispatch = useDispatch();

    useEffect(() => {
        if (!token) return;
        dispatch(meRequestAsync());
        localStorage.setItem('token', token);
    }, [token])
    return {
        data,
        token,
        loading
    }
}