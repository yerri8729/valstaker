import React from 'react'
import styles from './Contacts.module.css'

const Contacts = () => {
    return (
        <div className={styles.mainContainer}>
            <div className={styles.title}>My Contacts:</div>
            <div className={styles.row}>
                <div className={styles.title}>telegram:</div>
                <a className={styles.link} href='https://t.me/mizahu'> @mizahu</a>
            </div>
            <div className={styles.row}>
                <div className={styles.title}>discord:</div>
                <div className={styles.link}> xzvdg23ed#0777</div>
            </div>
            <div className={styles.row}>
                <div className={styles.title}>e-mail:</div>
                <a className={styles.link} href='mailto:yerri8729@gmail.com'> yerri8729@gmail.com</a>
            </div>
        </div>
    )
}

export default Contacts