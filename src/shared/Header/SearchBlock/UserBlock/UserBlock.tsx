import React from "react";
import {EColor, Text} from "../../../Text";
// @ts-ignore
import styles from "./userblock.scss";
import {Icon} from "../../../Icon";

interface IUserBlockProps {
    avatarSrc?: string,
    username?: string,
}

export function UserBlock({avatarSrc, username}: IUserBlockProps) {
    return (
        <a href="https://www.reddit.com/api/v1/authorize?client_id=xQCWNRd1p7KWtw&response_type=code&state=random_string&redirect_uri=https://react-my-reddit.herokuapp.com/auth&duration=permanent&scope=read submit identity"
           className={styles.userBox}>
            <div className={styles.avatarBox}>
                {
                    avatarSrc
                        ? <img src={avatarSrc} alt="user-avatar" className={styles.avatarImg}/>
                        : <Icon name={'avatar'} size={50}/>
                }
            </div>
            <div className={styles.username}>
                <Text size={20} color={username ? EColor.black : EColor.gray99}>
                    {username || 'Аноним'}
                </Text>
            </div>
        </a>
    )
}