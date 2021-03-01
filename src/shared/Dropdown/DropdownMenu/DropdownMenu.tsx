import React from 'react';
import styles from './dropdownmenu.scss';
import {Dropdown} from "../Dropdown";
import {CardMenu} from "../../CardsList/Card/CardMenu";
import {SaveBtn} from "../../Button/SaveBtn";
import {CommentsButton} from "../../Button/CommentsButton";
import {ShareBtn} from "../../Button/ShareBtn";
import {HideBtn} from "../../Button/HideBtn";
import {ComplainBtn} from "../../Button/ComplainBtn";
import {CloseBtn} from "../../Button/CloseBtn";

export function DropdownMenu() {
  return (
          <Dropdown button={<CardMenu />}
                    onClose={() => console.log('closed')}
                    onOpen={() => console.log('opened')}
                    isOpen={false}
          >
              <CommentsButton text={'Комментарии'} />
              <ShareBtn text={'Поделиться'} />
              <HideBtn text={'Скрыть'} />
              <SaveBtn text={'Сохранить'} />
              <ComplainBtn text={'Пожаловаться'} />
              <CloseBtn text={'Закрыть'} />
          </Dropdown>
  );
}
