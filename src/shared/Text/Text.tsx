import React from 'react';
import styles from './text.scss';
import classNames from "classnames";

export enum EColor {
  black = 'black',
  orange = 'orange',
  green = 'green',
  white = 'white',
  grayF4 = 'grayF4',
  greyF3 = 'greyF3',
  grayD9 = 'grayD9',
  grayC4 = 'grayC4',
  gray99 = 'gray99',
  gray66 = 'gray66',
  grayEC = 'grayEC'
}

type TSizes = 28 | 20 | 16 | 14 | 12 | 10;

interface ItextProps {
  As?: 'span' | 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'div',
  children?: React.ReactNode,
  size: TSizes,
  mobileSize?: TSizes,
  tabletSize?: TSizes,
  desktopSize?: TSizes,
  color?: EColor,
}

export function Text(props: ItextProps) {
  const {
    As = 'span',
    color = EColor.black,
    children, size,
    mobileSize,
    tabletSize,
    desktopSize}
    = props
  const classes = classNames(
      styles[`s${size}`],
      { [styles[`m${mobileSize}`]] : mobileSize },
      { [styles[`t${tabletSize}`]] : tabletSize },
      { [styles[`d${desktopSize}`]] : desktopSize },
      styles[color],
  )

  return (
      <As className={classes}>
        {children}
      </As>
  );
}
