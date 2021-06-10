import React, {useEffect, useRef, useState} from 'react';
import ReactDOM from 'react-dom'
import styles from './post.scss';
import {CommentList} from "../CommentList";
import {UserLink} from "../CardsList/Card/CardTextContent/UserLink";
import {CommentFormContainer} from "../CommentFormContainer";
import {useHistory, useParams} from 'react-router-dom'
import axios from "axios";

export function Post() {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [authorAvatar, setAuthorAvatar] = useState('');
    const [img, setImg] = useState('');
    const ref = useRef<HTMLDivElement>(null);
    const history = useHistory();
    const token = localStorage.getItem('token');
    const {id} = useParams<{ id: string }>();

    axios.get(`https://oauth.reddit.com/api/info/?id=t3_${id}`,
        {
            headers: {Authorization: `bearer ${token}`}
        })
        .then((resp) => {
            const userData = resp.data;
            setTitle(resp.data.data.children[0].data.title);
            console.log(resp.data.data.children[0].data);
            setAuthor(resp.data.data.children[0].data.author)
            // setAuthorAvatar(resp.data.data.children[0].data)
            setImg(resp.data.data.children[0].data.url)
        })
        .catch((error) => {
            console.log(error);
        })

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
            <UserLink author={author} avatar={authorAvatar}/>
            <h2 className={styles.title}>{title}</h2>
            <img src={img} alt="Post image" className={styles.postPreviewImg}/>
            <div className={styles.content}>
            </div>
            <CommentFormContainer/>
            <CommentList author={'Михаил Рогов'}/>
        </div>
    ), node)
}