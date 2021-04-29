import React, {ChangeEvent, FormEvent, useEffect, useRef} from 'react';
import styles from './commentform.scss';
import {Button} from "../Button";

interface IProps {
    author?: string;
    value: string;
    onChange: (ev: ChangeEvent<HTMLTextAreaElement>) => void;
    onSubmit: (ev: FormEvent) => void;
}

export function CommentForm({author, value, onChange, onSubmit} : IProps) {
    const ref = useRef<HTMLTextAreaElement>(null);

    useEffect(() => {
        ref.current?.focus();
    }, []);

    return (
        <div>
            <form className={styles.form} onSubmit={onSubmit}>
                <textarea className={styles.input}
                          value={value}
                          //defaultValue={`${author}, `}
                          onChange={onChange}
                          ref={ref} />
                <Button className={styles.btnSubmit} isIcon={false} text={'Комментировать'} />
            </form>
        </div>
    )
}