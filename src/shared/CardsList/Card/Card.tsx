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
    date?: string,
    id: string,
}

export function Card({title, author, avatar, preview, date, id}: IProps) {
    return (
        <li className={styles.card}>
            <CardTextContent title={title} author={author} avatar={avatar} date={date} id={id}/>
            <CardPreview preview={preview}/>
            <CardMenu/>
            <CardControls/>
        </li>
    );
}
