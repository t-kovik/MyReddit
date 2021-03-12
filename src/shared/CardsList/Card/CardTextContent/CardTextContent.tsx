import React, {useContext} from 'react';
import styles from './cardtextcontent.scss';
import {UserLink} from "./UserLink";

interface IProps {
    title?: string,
    author?: string,
    avatar?: string,
    date?: string
}

export function CardTextContent({title, author, avatar, date} : IProps) {
  return (
      <div className={styles.textContent}>
        <div className={styles.metaData}>
          <UserLink author={author} avatar={avatar} />
          <span className={styles.createdAt}>
                <span className={styles.publishedLabel}>опубликовано </span>
              {date}
            </span>
        </div>
        <h2 className={styles.title}>
          <a href="#post-url" className={styles.postLink}>{title}</a>
        </h2>
      </div>
  );
}
