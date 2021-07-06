import React, {ChangeEvent, FormEvent, useEffect, useRef, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {RootState, UpdateComment} from "../../store/reducer"
import {CommentForm} from "../CommentForm";
import {CommentFormNew} from "../CommentFormNew";

export function CommentFormContainer() {
    //const value = useSelector<RootState, string>(state => state.commentText);
    //const dispatch = useDispatch();

    const ref = useRef<HTMLTextAreaElement>(null);

    useEffect(() => {
        ref.current?.focus();
    }, []);


    // function handleChange(ev: ChangeEvent<HTMLInputElement>) {
    //     //    dispatch(UpdateComment(ev.target.value));
    //     setValue(ev.target.value);
    // }

    // function handleSubmit(ev: FormEvent) {
    //    ev.preventDefault();
    // }



    return (
        <div>
            <CommentForm />
                {/*<CommentFormNew />*/}
        </div>

    )
}