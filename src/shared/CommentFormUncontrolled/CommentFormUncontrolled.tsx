import React, {FormEvent, useEffect, useRef, useState} from 'react';
import styles from './commentform.scss';
import {Button} from "../Button";

interface IProps {
    author?: string
}

export function CommentFormUncontrolled({author} : IProps) {
    const ref = useRef<HTMLTextAreaElement>(null);

    useEffect(() => {
        ref.current?.focus();
    }, []);


    function handleSubmit(ev: FormEvent) {
        ev.preventDefault();
        console.log(ref.current?.value)
    }

    return (
        <div>
            <form className={styles.form} onSubmit={handleSubmit}>
                <textarea className={styles.input}
                          defaultValue={`${author}! `}
                          ref={ref} />
                <Button className={styles.btnSubmit} isIcon={false} text={'Комментировать'} />
            </form>
        </div>
    )
}