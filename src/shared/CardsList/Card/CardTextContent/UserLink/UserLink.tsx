import React from 'react';
import styles from './userlink.scss';

export function UserLink() {
  return (
      <div className={styles.userLink}>
        <img
            className={styles.avatar}
            src="https://sib.fm/storage/article/February2020/Z0tp5pg7QDhkIZ06GKhM.jpg"
            alt="avatar"
        />
        <a href="#user-url" className={styles.username}>
          Юзер Юзеров
        </a>
      </div>
  );
}
