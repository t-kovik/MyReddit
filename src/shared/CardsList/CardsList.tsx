import React, {useContext} from 'react';
import styles from './cardslist.scss';
import {Card} from "./Card";
import {postsContext} from "../context/postsContext";
import {Button} from "../Button";

export function CardsList() {
    const {postsData, loading, errorLoading, bottomOfList, loadPosts, handleClick} = useContext(postsContext);

    return (
        <ul className={styles.cardsList}>
            {postsData.length === 0 && !loading && !errorLoading && (
                <div role='alert' style={{textAlign: "center", padding: '20px'}}>
                    Нет ни одного поста
                </div>
            )}
            {
                postsData.map((post) => (
                    <Card
                        key={post.data.id}
                        title={post.data.title}
                        author={post.data.author}
                        avatar={post.data.sr_detail.icon_img}
                        preview={post.data.sr_detail.header_img}
                        date={new Date(post.data.sr_detail.created_utc * 1000).toLocaleString()}
                    />
                ))}
            <div ref={bottomOfList}/>
            {loading &&
            <div role='alert' style={{textAlign: "center", padding: '20px'}}>
              Загрузка...
            </div>
            }
            {loadPosts &&
            <Button className={styles.loadButton} isIcon={false} text={'Загрузить еще'} onClick={handleClick}/>
            }
            {errorLoading && (
                <div role='alert' style={{textAlign: "center", padding: '20px'}}>
                    {errorLoading}
                </div>
            )}
        </ul>
    );
}
