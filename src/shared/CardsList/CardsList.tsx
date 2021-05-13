import React, {useContext} from 'react';
import styles from './cardslist.scss';
import {Card} from "./Card";
import {postsContext} from "../context/postsContext";


export function CardsList() {
    const posts = useContext(postsContext);
    return (
        <ul className={styles.cardsList}>
            {
                posts.map((post) => (
                    <Card
                        key={post.data.id}
                        title={post.data.title}
                        author={post.data.author}
                        avatar={post.data.sr_detail.icon_img}
                        preview={post.data.sr_detail.header_img}
                        date={new Date(post.data.sr_detail.created_utc * 1000).toLocaleString()}
                    />
                ))
            }
        </ul>

    );
}
