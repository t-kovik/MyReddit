import React from 'react';
import Icons from './icons.svg'
import styles from './icon.scss';

interface IIcons {
  name?: string,
  color?: string,
  size?: number
}

export function Icon({name, color, size }: IIcons) {
  return (
      <svg className={`icon icon-${name}`} fill={color} width={size} height={size}>
        <use xlinkHref={`${Icons}#icon-${name}`} />
      </svg>
  );
}
