import React from 'react';
import styles from './cardmenu.scss';
//import {Dropdown} from "../../../Dropdown";
import {CardMenuItemsList} from "./CardMenuItemsList";
import {Button} from "../../../Button";
import {DropdownPortal} from "../../../DropdownPortal";


export function CardMenu() {
    const [coords, setCoords] = React.useState({});
  return (
      <DropdownPortal coords={coords} button={<Button onClick={(ev) => {
          const rect = ev.target.getBoundingClientRect();
          console.log(rect.top);
          setCoords({
              top: rect.top + 150,
              left: rect.x
          });
      }} className={styles.menuButton} isIcon={true} name={'menu'} sizeIcon={20}/>}
                     onClose={() => console.log('closed')}
                     onOpen={() => console.log('opened')}
                     isOpen={false}
      >
          <div className={styles.dropdown}>
              <CardMenuItemsList postId={'1'} />
              <Button className={styles.btnClose} isIcon={false} text={'Закрыть'} />
          </div>
      </DropdownPortal>
  )}

