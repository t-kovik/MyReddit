import React, {useEffect, useRef} from 'react';
import ReactDOM from 'react-dom'
import styles from './post.scss';
import {CommentForm} from "../CommentForm";
import {CommentList} from "../CommentList";
import {UserLink} from "../CardsList/Card/CardTextContent/UserLink";

interface IPost {
    onClose?: () => void,
    author?: string,
    avatar?: string
}

export function Post(props: IPost) {
    const ref = useRef<HTMLDivElement>(null);
    useEffect(() => {
        function handleClick(ev: MouseEvent) {
            if(ev.target instanceof Node && !ref.current?.contains(ev.target)) {
                props.onClose?.()
            }
        }

        document.addEventListener('click', handleClick);
        return () => {
            document.removeEventListener('click', handleClick)
        }
    }, [])
    const node = document.querySelector('#modal_root');
    if(!node) return null;
    return ReactDOM.createPortal((
        <div className={styles.modal} ref={ref}>
            <h2 className={styles.title}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto, repellendus.</h2>
            <UserLink author={props.author} avatar={props.avatar} />
            <div className={styles.content}>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium commodi dignissimos et exercitationem ipsam itaque neque nihil ratione suscipit temporibus.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium commodi dignissimos et exercitationem ipsam itaque neque nihil ratione suscipit temporibus.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium commodi dignissimos et exercitationem ipsam itaque neque nihil ratione suscipit temporibus.</p>
            </div>
            <CommentForm author={props.author} />
            <CommentList author={'Михаил Рогов'} />
        </div>
    ), node)
}