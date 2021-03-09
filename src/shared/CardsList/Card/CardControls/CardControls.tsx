import React from 'react';
import styles from './cardcontrols.scss';
import {Button} from "../../../Button";


export function CardControls() {
  return (
      <div className={styles.controls}>
        <div className={styles.carmaCounter}>
            <Button isIcon={true} className={styles.up} name={'up'} sizeIcon={19}/>
          <span className={styles.carmaValue}>234</span>
            <Button isIcon={true} className={styles.down} name={'up'} sizeIcon={19}/>
        </div>
          <div className={styles.commentsBtn}>
              <Button isIcon={true} name={'comment'} />
          </div>

        <div className={styles.actions}>
            <Button isIcon={true} name={'share'} />
            <Button isIcon={true} name={'save'} />
        </div>
      </div>
  );
}
