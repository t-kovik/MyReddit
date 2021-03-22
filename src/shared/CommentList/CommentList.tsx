import React, {useRef} from 'react';
import styles from './commentlist.scss';
import {Icon} from "../Icon";
import {Button} from "../Button";
import {CommentForm} from "../CommentForm";
import {CommentFormUncontrolled} from "../CommentFormUncontrolled";
import {Comment} from "./Comment";

interface IFormProps {
    author?: string,
}

export function CommentList({author} : IFormProps) {
    return (
        <div>
            <Comment author={author} isOpen={false} isControl={true} />
            <Comment author={author} isOpen={false} isControl={false} />
        </div>


    )
}