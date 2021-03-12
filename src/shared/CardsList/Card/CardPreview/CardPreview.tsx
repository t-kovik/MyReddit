import React from 'react';
import styles from './cardpreview.scss';

interface IProps {
    preview?: string
}

export function CardPreview({preview}: IProps) {
    return (
        <div className={styles.preview}>
            {
                preview
                    ? <img src={preview} alt="preview" className={styles.previewImg}/>
                    : <img
                        src='https://images.ctfassets.net/lzny33ho1g45/how-to-use-reddit-p-img/53846daa58db6447804f4b21d55d4a1f/file.png?w=1520&fm=jpg&q=30&fit=thumb&h=760'
                        alt="preview" className={styles.previewImg}/>
            }
        </div>
    );
}
