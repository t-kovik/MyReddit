import React, {useRef} from 'react';
import styles from './comment.scss';
import {Icon} from "../../Icon";
import {Button} from "../../Button";
import {CommentForm} from "../../CommentForm";
import {CommentFormUncontrolled} from "../../CommentFormUncontrolled";

interface IFormProps {
    isOpen?: boolean,
    author?: string,
    isControl?: boolean
}

export function Comment({isOpen, author, isControl} : IFormProps) {
    const [isFormOpen, setIsFormOpen] = React.useState(isOpen);
    React.useEffect(() => setIsFormOpen(isOpen), [isOpen]);
    const handleOpen = () => {
        if (isOpen === false) {
            setIsFormOpen(!isFormOpen);
        }
    }
    return (
        <div className={styles.container}>
            <div className={styles.comment}>
                <div className={styles.userLink}>
                    <Icon className={styles.avatar} name={'avatar'} size={20}/>
                    <a href="#user-url" className={styles.username}>
                        {author}
                    </a>
                </div>
                <p className={styles.commentText}>
                    Сторонники тоталитаризма в науке будут объективно рассмотрены соответствующими инстанциями. Лишь реплицированные с зарубежных источников, современные исследования будут описаны максимально подробно.
                </p>
                <div onClick={handleOpen}>
                    <Button className={styles.answerBtn} isIcon={true} name={'comment'} text={'Ответить'} />
                </div>
                {isFormOpen && (
                    <div>
                        { isControl ? <CommentForm author={author} />
                        : <CommentFormUncontrolled author={author} />}
                    </div>
                )}
            </div>

        </div>


    )
}