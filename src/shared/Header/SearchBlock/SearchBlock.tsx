import React, {useContext, useEffect, useState} from 'react';
import styles from './searchblock.scss';
import {UserBlock} from "./UserBlock";
import {userContext} from "../../context/userContext";
import {saveToken} from "../../../store/token/actions";
import {useDispatch} from "react-redux";


export function SearchBlock() {
    const { iconImg, name} = useContext(userContext);
    const dispatch = useDispatch();
    const token = localStorage.getItem('token');
    useEffect(() => {
        if(!token) {
            dispatch(saveToken());
        }
    }, [])
    return (
      <div className={styles.searchBlock}>
        <UserBlock avatarSrc={iconImg} username={name} />
      </div>
  );
}
