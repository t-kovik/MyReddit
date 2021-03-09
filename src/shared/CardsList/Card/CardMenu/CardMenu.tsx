import React from 'react';
import styles from './cardmenu.scss';
import {Dropdown} from "../../../Dropdown";
import {CardMenuItemsList} from "./CardMenuItemsList";
import {Button} from "../../../Button";

export function CardMenu() {
  return (
      <Dropdown  button={<Button className={styles.menuButton} isIcon={true} name={'menu'} sizeIcon={20}/>}
                     onClose={() => console.log('closed')}
                     onOpen={() => console.log('opened')}
                     isOpen={false}
      >
          <div className={styles.dropdown}>
              <CardMenuItemsList postId={'1'} />
              <Button className={styles.btnClose} isIcon={false} text={'Закрыть'} />
          </div>
      </Dropdown>
  )}

