import React from 'react';
import styles from './card.scss';
import {CardTextContent} from "./CardTextContent";
import {CardPreview} from "./CardPreview";
import {CardMenu} from "./CardMenu";
import {CardControls} from "./CardControls";

interface IProps {
    title?: string,
    author?: string,
    avatar?: string,
    preview?: string,
    date?: string
}

export function Card({title, author, avatar, preview, date}: IProps) {

    return (
        <li className={styles.card}>
            <CardTextContent title={title} author={author} avatar={avatar} date={date}/>
            <CardPreview preview={preview}/>
            <CardMenu/>
            <CardControls/>
        </li>
    );
}
