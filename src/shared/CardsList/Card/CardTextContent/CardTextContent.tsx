import React from 'react';
import styles from './cardtextcontent.scss';
import {UserLink} from "./UserLink";
import {Link} from 'react-router-dom'

interface IProps {
    title?: string,
    author?: string,
    avatar?: string,
    date?: string,
    id: string,
}

export function CardTextContent({title, author, avatar, date, id}: IProps) {
    return (
        <div className={styles.textContent}>
            <div className="portal_root" />
            <div className={styles.metaData}>
                <UserLink author={author} avatar={avatar}/>
                <span className={styles.createdAt}>
                <span className={styles.publishedLabel}>опубликовано </span>
                    {date}
            </span>
            </div>
            <h2 className={styles.title} onClick={() => {
                console.log(id)}}>
                <Link to={{
                    pathname: `/posts/${id}`
                }} className={styles.postLink}>{title}</Link>
            </h2>
        </div>
    );
}
