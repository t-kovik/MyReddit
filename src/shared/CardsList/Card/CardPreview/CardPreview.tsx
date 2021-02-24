import React from 'react';
import styles from './cardpreview.scss';

export function CardPreview() {
  return (
      <div className={styles.preview}>
        <img
            className={styles.previewImg}
            src="https://avatars.mds.yandex.net/get-kinopoisk-post-img/1101236/e1e09992d39f539b736c891a42960a39/960x540"
            alt="preview"
        />
      </div>
  );
}
