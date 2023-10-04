import styles from './FriendListItem.module.css'
import { clsx } from 'clsx';


export const FriendListItem = ({ avatar, name, isOnline }) => {
    return (
        <li className={styles.item} >
            <span className={clsx(
                styles.status, {
                    [styles.activ]: isOnline === true,
                    [styles.busy]: isOnline === false,
                })}
            />
            <img className={styles.avatar} src={avatar} alt="User avatar" width="48" />
            <p className={styles.name}>{name}</p>
        </li>
    )
}