import React, {useContext, useEffect, useRef, useState} from 'react';
import ReactDOM from 'react-dom'
import styles from './post.scss';
import {CommentList} from "../CommentList";
import {UserLink} from "../CardsList/Card/CardTextContent/UserLink";
import {CommentFormContainer} from "../CommentFormContainer";
import {useHistory, useParams} from 'react-router-dom'
import {postsContext} from "../context/postsContext";

export function Post() {
    const {postsData} = useContext(postsContext);
    const ref = useRef<HTMLDivElement>(null);
    const history = useHistory();

    const {id} = useParams<{ id: string }>();

    useEffect(() => {
        function handleClick(ev: MouseEvent) {
            if (ev.target instanceof Node && !ref.current?.contains(ev.target)) {
                history.push('/');
            }
        }

        document.addEventListener('click', handleClick);
        return () => {
            document.removeEventListener('click', handleClick)
        }
    }, [])
    const node = document.querySelector('#modal_root');
    if (!node) return null;
    return ReactDOM.createPortal((
        <div className={styles.modal} ref={ref}>
            <UserLink author={postsData[Number(id)].data.author} avatar={postsData[Number(id)].data.sr_detail.icon_img}/>
            <h2 className={styles.title} onClick={() => console.log(id)}>{postsData[Number(id)].data.title}</h2>
            <img src={postsData[Number(id)].data.url_overridden_by_dest} alt="Post image" className={styles.postPreviewImg}/>
            <div className={styles.content}>
            </div>
            <CommentFormContainer/>
            <CommentList author={'Михаил Рогов'}/>
        </div>
    ), node)
}