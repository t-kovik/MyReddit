import React from 'react';
import styles from '../buttons.scss';



export function CloseBtn(props: {text?: string}) {
  return (
      <button className={styles.btnClose}>
        <span className={styles.btnCloseText}>{props.text}</span>
      </button>
  );
}