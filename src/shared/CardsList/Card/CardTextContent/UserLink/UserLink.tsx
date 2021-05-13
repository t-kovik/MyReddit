import React from 'react';
import styles from './userlink.scss';
import {Icon} from "../../../../Icon";

interface IProps {
    author?: string,
    avatar?: string
}


export function UserLink({author, avatar} : IProps) {
  return (
      <div className={styles.userLink}>
            {
                avatar
                    ? <img src={avatar} alt="avatar" className={styles.avatar}/>
                    : <Icon className={styles.avatar} name={'avatar'} size={20}/>
            }

        <a href="#user-url" className={styles.username}>
            {author}
        </a>
      </div>
  );
}
