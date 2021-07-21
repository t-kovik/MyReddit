import React, {ChangeEvent, FormEvent, useEffect, useRef, useState} from 'react';
import styles from './commentform.scss';
import {Button} from "../Button";
import { Action } from 'easy-peasy';

interface IProps {
    author?: string;
    value?: string;
    onChange?: (ev: ChangeEvent<HTMLTextAreaElement>) => void;
    onSubmit?: (ev: FormEvent) => void;
}



interface CommentsModel {
    comments: string;
    addComment: Action<CommentsModel, string>;
}

import { createTypedHooks } from 'easy-peasy';

const typedHooks = createTypedHooks<CommentsModel>();

const useStoreActions = typedHooks.useStoreActions;
const useStoreDispatch = typedHooks.useStoreDispatch;
const useStoreState = typedHooks.useStoreState;

export function CommentForm({author, value, onChange, onSubmit}: IProps) {
    const ref = useRef<HTMLTextAreaElement>(null);

    const [comment, setComment] = useState('');

    const todos = useStoreState((state) => state.comments);
    const addComments = useStoreActions((actions) => actions.addComment);

    useEffect(() => {
        ref.current?.focus();
        setComment(todos);
    }, []);



    return (
        <div>
            <form className={styles.form}>
                     <textarea className={styles.input}
                               value={comment}
                         //defaultValue={`${author}, `}
                               onChange={e => setComment(e.target.value)}
                               ref={ref} />
                <Button className={styles.btnSubmit} isIcon={false} text={'Комментировать'} onClick={(ev) => {
                    ev.preventDefault()
                    addComments(comment)
                }}/>
            </form>
        </div>
    )
}