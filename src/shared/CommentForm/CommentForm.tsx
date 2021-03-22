import React, {FormEvent, useEffect, useRef, useState} from 'react';
import styles from './commentform.scss';
import {Button} from "../Button";

interface IProps {
    author?: string
}

export function CommentForm({author} : IProps) {
    const [commentValue, setCommentValue] = useState('');
    const ref = useRef<HTMLTextAreaElement>(null);

    useEffect(() => {
        ref.current?.focus();
    }, []);


    function handleSubmit(ev: FormEvent) {
        ev.preventDefault();
        console.log(commentValue)
    }

    return (
        <div>
            <form className={styles.form} onSubmit={handleSubmit}>
                <textarea className={styles.input}
                          defaultValue={`${author}, `}
                          onChange={(e) => setCommentValue(e.target.value) }
                          ref={ref} />
                <Button className={styles.btnSubmit} isIcon={false} text={'Комментировать'} />
            </form>
        </div>
    )
}