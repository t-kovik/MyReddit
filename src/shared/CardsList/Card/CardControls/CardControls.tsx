import React from 'react';
import styles from './cardcontrols.scss';
import {CommentsButton} from "./CommentsButton";
import {SaveBtn} from "./SaveBtn";
import {ShareBtn} from "./ShareBtn";

export function CardControls() {
  return (
      <div className={styles.controls}>
        <div className={styles.carmaCounter}>
          <button className={styles.up}>
            <svg width="19" height="10" viewBox="0 0 19 10" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9.5 0L0 10H19L9.5 0Z" fill="#D9D9D9"/>
            </svg>
          </button>
          <span className={styles.carmaValue}>234</span>
          <button className={styles.down}>
            <svg width="19" height="10" viewBox="0 0 19 10" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9.5 10L19 0L8.74228e-07 -1.66103e-06L9.5 10Z" fill="#D9D9D9"/>
            </svg>
          </button>
        </div>
        <CommentsButton />
        <div className={styles.actions}>
          <ShareBtn />
          <SaveBtn />
        </div>
      </div>
  );
}
