import React from 'react';
import styles from './button.scss';
import {EColor, Text} from "../Text";
import {Icon} from "../Icon";

interface IButton {
    text?: string,
    name?: string,
    isIcon: boolean,
    className?: string,
    sizeIcon?: number
    onClick?: (ev:any) => void
}

export function Button({text, name, isIcon, className = styles.btn, sizeIcon = 14, onClick} : IButton) {
    return (
        <button className={className}
        onClick={onClick}>
            {
                isIcon &&
                <Icon name={name} size={sizeIcon} />
            }
            <Text mobileSize={12} size={14} color={EColor.gray99}>{text}</Text>
        </button>
    )
}