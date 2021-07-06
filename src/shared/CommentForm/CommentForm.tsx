import React, {ChangeEvent, FormEvent, useEffect, useRef} from 'react';
import styles from './commentform.scss';
import {Button} from "../Button";
import {atom, RecoilRoot, useRecoilState} from "recoil";

interface IProps {
    author?: string;
    value?: string;
    onChange?: (ev: ChangeEvent<HTMLTextAreaElement>) => void;
    onSubmit?: (ev: FormEvent) => void;
}

export function CommentForm({author, value, onChange, onSubmit}: IProps) {
    const ref = useRef<HTMLTextAreaElement>(null);

    useEffect(() => {
        ref.current?.focus();
    }, []);

    const textState = atom({
        key: 'textState',
        default: '',
    });

    function TextInput() {
        const [text, setText] = useRecoilState(textState);

        return (
            <textarea className={styles.input}
                      value={text}
                      ref={ref}
                      onChange={(ev) => setText(ev.target.value)}/>
        );
    }

    return (
        <div>
            <form className={styles.form}>
                <RecoilRoot>
                    <TextInput/>
                </RecoilRoot>
                <Button className={styles.btnSubmit} isIcon={false} text={'Комментировать'}/>
            </form>
        </div>
    )
}