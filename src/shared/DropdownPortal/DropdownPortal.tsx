import React, {useRef} from 'react';
import ReactDOM from 'react-dom'
import styles from './dropdown.scss';

interface IDropdownProps {
    button: React.ReactNode;
    children: React.ReactNode;
    isOpen?: boolean;
    onOpen?: () => void;
    onClose?: () => void;
    coords?: any
}

const NOOP = () => {
};

export function DropdownPortal({button, children, isOpen, onOpen = NOOP, onClose = NOOP, coords}: IDropdownProps) {
    const [isDropdownOpen, setIsDropdownOpen] = React.useState(isOpen);
    React.useEffect(() => setIsDropdownOpen(isOpen), [isOpen]);
    React.useEffect(() => isDropdownOpen ? onOpen() : onClose(), [isDropdownOpen])
    const handleOpen = () => {
        if (isOpen === false) {
            setIsDropdownOpen(!isDropdownOpen)
        }
    }
    const node = document.querySelector('#modal_root');
    if (!node) return null;
    return(
        <div className={styles.container}>
            <div onClick={handleOpen}>
                {button}
            </div>
            {isDropdownOpen && (
                ReactDOM.createPortal((<div className={styles.listContainer}>
                    <div className={styles.list} style={{...coords}} onClick={() => setIsDropdownOpen(false)}>
                        {children}
                    </div>
                </div>), node)
            )}
        </div>
    );
}


