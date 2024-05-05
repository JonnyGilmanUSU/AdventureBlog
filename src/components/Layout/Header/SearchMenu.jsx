import React from 'react'
import styles from './header.module.css';
import CloseIcon from '../../../assets/icons/Close.svg'

function SearchMenu({ isOpen, onClose }) {
  return (
    <div className={isOpen ? `${styles.searchMenu} ${styles.open}` : styles.searchMenu}>
        <input className={styles.searchInput} type="text" placeholder='SEARCH ...' autoFocus/>
        <i>Press Enter To Begin Search</i> 
        <img className={styles.closeIcon} src={CloseIcon}  onClick={onClose} alt="close" />
    </div>
  )
}

export default SearchMenu;