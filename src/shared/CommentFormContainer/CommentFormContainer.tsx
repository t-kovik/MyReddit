import React, {ChangeEvent, FormEvent, useEffect, useRef} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {RootState, updateComment} from "../../store"
import {CommentForm} from "../CommentForm";

export function CommentFormContainer() {
    const value = useSelector<RootState, string>(state => state.commentText);
    const dispatch = useDispatch();

    const ref = useRef<HTMLTextAreaElement>(null);

    useEffect(() => {
        ref.current?.focus();
    }, []);


    function handleChange(ev: ChangeEvent<HTMLTextAreaElement>) {
        dispatch(updateComment(ev.target.value));
    }

    function handleSubmit(ev: FormEvent) {
        ev.preventDefault();
        console.log(value)
    }

    return (
        <CommentForm
            value={value}
            onChange={handleChange}
            onSubmit={handleSubmit}
        />
    )
}