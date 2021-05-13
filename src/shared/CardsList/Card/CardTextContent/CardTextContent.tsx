import React, {useContext, useState} from 'react';
import styles from './cardtextcontent.scss';
import {UserLink} from "./UserLink";
import {Post} from "../../../Post";

interface IProps {
    title?: string,
    author?: string,
    avatar?: string,
    date?: string
}

export function CardTextContent({title, author, avatar, date}: IProps) {
    const [isModalOpened, setIsModalOpened] = useState(false);
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
            <h2 className={styles.title}>
                <a href="#post-url" className={styles.postLink} onClick={() => {
                    setIsModalOpened(true)
                }}>{title}</a>
                {isModalOpened && (
                    <Post
                        onClose={() => {
                            setIsModalOpened(false)
                        }}
                    author={author}
                    avatar={avatar}/>
                )}
            </h2>
        </div>
    );
}
