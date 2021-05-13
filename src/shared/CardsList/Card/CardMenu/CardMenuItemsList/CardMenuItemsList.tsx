import React from 'react';
import styles from './cardmenuitemslist.scss';
import {Button} from "../../../../Button";

interface IMenuItemsListProps {
    postId: string
}

export function CardMenuItemsList({postId}: IMenuItemsListProps) {
    return (
            <ul className={styles.menuItemsList}>
            <li className={styles.menuNth1} onClick={() => console.log(postId)}>
                <Button isIcon={true} name={'comment'} text={'Комментарии'} />
            </li>
            <div className={styles.divider} />
            <li className={styles.menuNth2} onClick={() => console.log(postId)}>
                <Button isIcon={true} name={'share'} text={'Поделиться'} />
            </li>
            <div className={styles.divider} />
            <li onClick={() => console.log(postId)}>
                <Button isIcon={true} name={'hide'} text={'Скрыть'} />
            </li>
            <div className={styles.divider} />
            <li className={styles.menuNth4} onClick={() => console.log(postId)}>
                <Button isIcon={true} name={'save'} text={'Сохранить'} />
            </li>
            <div className={styles.divider} />
            <li onClick={() => console.log(postId)}>
                <Button isIcon={true} name={'warning'} text={'Пожаловаться'} sizeIcon={16} />
            </li>
        </ul>

    );
}
