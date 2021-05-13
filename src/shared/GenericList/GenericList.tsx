import React from 'react';
import styles from './genericlist.scss';
import {generateId} from "../../utils/react/generateRandomIndex";

interface IItem {
  text: string;
  id: string
  onClick: (id:string) => void;
  className?: string;
  As?: 'a' | 'li' | 'button' | 'div';
  href?: string;
}

interface IGenericListProps {
  list: IItem[];
}

// export function GenericList({list}: IMyListProps) {
//   return (
//       <ul>
//         {list.map((item) => (
//             <li onClick={() => item.onClick(item.id)} key={item.id}>{item.value}</li>
//         ))}
//       </ul>
//   );
// }

const noop = () => {};

export function GenericList({ list }: IGenericListProps) {
  return (
      <>
        {list.map(({ As= 'a', text, onClick = noop, className, id, href }) => (
            <As
            className={className}
            onClick={() => onClick(id)}
            key={id}
            href={href}
            >
              {text}
            </As>
          ))}
      </>
  )
}